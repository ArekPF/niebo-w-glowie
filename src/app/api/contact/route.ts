import { NextResponse } from "next/server";

const ZEPTOMAIL_URL = "https://api.zeptomail.eu/v1.1/email";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
	// Read token at request time so cold-start vs warm-start differences are visible in logs
	const ZEPTOMAIL_TOKEN = process.env.ZEPTOMAIL_TOKEN;

	console.log("[contact] request received");
	console.log(
		"[contact] ZEPTOMAIL_TOKEN present:", !!ZEPTOMAIL_TOKEN,
		"| length:", ZEPTOMAIL_TOKEN?.length ?? 0,
		"| has prefix:", ZEPTOMAIL_TOKEN?.startsWith("Zoho-enczapikey ") ?? false,
	);

	if (!ZEPTOMAIL_TOKEN) {
		console.error("[contact] ZEPTOMAIL_TOKEN is not set – aborting with 503");
		return NextResponse.json(
			{ error: "Usługa wysyłania e-maili jest niedostępna. Skontaktuj się z administratorem." },
			{ status: 503 },
		);
	}

	let body: unknown;
	try {
		body = await request.json();
	} catch (parseError) {
		console.error("[contact] failed to parse request JSON:", parseError);
		return NextResponse.json({ error: "Nieprawidłowe dane żądania." }, { status: 400 });
	}

	const { name, email, message } = body as {
		name?: string;
		email?: string;
		message?: string;
	};

	console.log("[contact] fields – name:", !!name, "| email:", !!email, "| message:", !!message);

	if (!name || !email || !message) {
		return NextResponse.json(
			{ error: "Wszystkie pola są wymagane." },
			{ status: 400 },
		);
	}

	if (!EMAIL_REGEX.test(email)) {
		return NextResponse.json(
			{ error: "Podaj poprawny adres e-mail." },
			{ status: 400 },
		);
	}

	const authHeader = ZEPTOMAIL_TOKEN.startsWith("Zoho-enczapikey ")
		? ZEPTOMAIL_TOKEN
		: `Zoho-enczapikey ${ZEPTOMAIL_TOKEN}`;

	const payload = {
		from: { address: "noreply@niebowglowie.pl", name: "Formularz kontaktowy" },
		to: [{ email_address: { address: "kontakt@niebowglowie.pl", name: "Niebo w Głowie" } }],
		reply_to: [{ address: email, name }],
		subject: `Nowa wiadomość od ${name}`,
		textbody: `Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`,
	};

	console.log("[contact] calling ZeptoMail URL:", ZEPTOMAIL_URL);
	console.log("[contact] auth header prefix:", authHeader.split(" ")[0]);
	console.log("[contact] payload from:", payload.from.address, "| to:", payload.to[0].email_address.address);

	try {
		const res = await fetch(ZEPTOMAIL_URL, {
			method: "POST",
			headers: {
				Accept: "application/json",
				Authorization: authHeader,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(payload),
		});

		console.log("[contact] ZeptoMail response status:", res.status, res.statusText);

		if (!res.ok) {
			const errorBody = await res.text();
			console.error(`[contact] ZeptoMail error ${res.status}:`, errorBody);
			return NextResponse.json(
				{ error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." },
				{ status: 500 },
			);
		}

		const successBody = await res.text();
		console.log("[contact] ZeptoMail success response:", successBody);
	} catch (error) {
		console.error("[contact] fetch error:", error);
		return NextResponse.json(
			{ error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." },
			{ status: 500 },
		);
	}

	console.log("[contact] email sent successfully");
	return NextResponse.json({ success: true });
}

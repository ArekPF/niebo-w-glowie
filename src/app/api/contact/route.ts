import { SendMailClient } from "zeptomail";
import { NextResponse } from "next/server";

const token = process.env.ZEPTOMAIL_TOKEN;
const client = token
	? new SendMailClient({ url: "api.zeptomail.com/", token })
	: null;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
	if (!client) {
		return NextResponse.json(
			{ error: "Usługa wysyłania e-maili jest niedostępna. Skontaktuj się z administratorem." },
			{ status: 503 },
		);
	}

	const body = await request.json();
	const { name, email, message } = body as {
		name?: string;
		email?: string;
		message?: string;
	};

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

	try {
		await client.sendMail({
			from: { address: "noreply@niebowglowie.pl", name: "Formularz kontaktowy" },
			to: [{ email_address: { address: "kontakt@niebowglowie.pl", name: "Niebo w Głowie" } }],
			reply_to: [{ address: email, name }],
			subject: `Nowa wiadomość od ${name}`,
			textbody: `Imię: ${name}\nE-mail: ${email}\n\nWiadomość:\n${message}`,
		});
	} catch {
		return NextResponse.json(
			{ error: "Nie udało się wysłać wiadomości. Spróbuj ponownie." },
			{ status: 500 },
		);
	}

	return NextResponse.json({ success: true });
}

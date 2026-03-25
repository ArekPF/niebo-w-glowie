"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, HeartHandshake } from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const DEFAULT_ERROR = "Coś poszło nie tak. Spróbuj ponownie.";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        let apiError = DEFAULT_ERROR;
        try {
          const data = await response.json();
          apiError = data.error ?? DEFAULT_ERROR;
        } catch { /* keep default error */ }
        setErrorMessage(apiError);
        setStatus("error");
      }
    } catch {
      setErrorMessage(DEFAULT_ERROR);
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl" data-design-id="kontakt-page-wrapper">
      <div className="text-center mb-16" data-design-id="kontakt-header">
        <h1 className="text-4xl font-bold mb-4 text-slate-800" data-design-id="kontakt-title">Skontaktuj się ze mną</h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto" data-design-id="kontakt-subtitle">
          Masz pytanie o książki, warsztaty, lub po prostu chcesz się podzielić swoją historią? 
          Napisz, chętnie odpowiem!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-design-id="kontakt-grid">
        
        {/* Formularz kontaktowy */}
        <Card className="border-slate-200 shadow-lg" data-design-id="kontakt-form-card">
          <CardHeader data-design-id="kontakt-form-header">
            <CardTitle className="text-2xl text-slate-800" data-design-id="kontakt-form-title">Wyślij wiadomość</CardTitle>
            <CardDescription className="text-base" data-design-id="kontakt-form-desc">
              Wypełnij poniższy formularz, a odpiszę najszybciej jak to możliwe.
            </CardDescription>
          </CardHeader>
          <CardContent data-design-id="kontakt-form-content">
            {status === "success" ? (
              <div className="bg-green-50 text-green-800 p-6 rounded-xl flex flex-col items-center justify-center space-y-4 text-center border border-green-200" data-design-id="kontakt-success-box">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2" data-design-id="kontakt-success-icon-wrapper">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-design-id="kontakt-success-icon"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-lg" data-design-id="kontakt-success-title">Dziękuję za wiadomość!</h3>
                <p data-design-id="kontakt-success-text">Odpowiem wkrótce.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4" data-design-id="kontakt-reset-btn">Wyślij kolejną wiadomość</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-design-id="kontakt-form">
                <div className="space-y-2" data-design-id="kontakt-input-name-group">
                  <Label htmlFor="name" data-design-id="kontakt-label-name">Imię</Label>
                  <Input id="name" required placeholder="Twoje imię" className="bg-slate-50" data-design-id="kontakt-input-name" />
                </div>
                
                <div className="space-y-2" data-design-id="kontakt-input-email-group">
                  <Label htmlFor="email" data-design-id="kontakt-label-email">E-mail</Label>
                  <Input id="email" type="email" required placeholder="twoj@adres.pl" className="bg-slate-50" data-design-id="kontakt-input-email" />
                </div>
                
                <div className="space-y-2" data-design-id="kontakt-input-message-group">
                  <Label htmlFor="message" data-design-id="kontakt-label-message">Wiadomość</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Wpisz treść swojej wiadomości..." 
                    className="min-h-[150px] bg-slate-50" 
                    data-design-id="kontakt-input-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-white font-bold" 
                  size="lg" 
                  disabled={status === "submitting"}
                  data-design-id="kontakt-submit-btn"
                >
                  {status === "submitting" ? "Wysyłanie..." : "Wyślij wiadomość"}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-red-600 text-center" data-design-id="kontakt-error-msg">{errorMessage}</p>
                )}
              </form>
            )}
          </CardContent>
        </Card>

        {/* Linki / Social media */}
        <div className="space-y-8" data-design-id="kontakt-info-col">
          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200" data-design-id="kontakt-direct-email">
            <h3 className="flex items-center gap-3 text-xl font-bold mb-4 text-slate-800" data-design-id="kontakt-email-heading">
              <Mail className="text-primary w-6 h-6" data-design-id="kontakt-email-icon" /> Bezpośredni e-mail
            </h3>
            <p className="text-slate-600 mb-4" data-design-id="kontakt-email-desc">Jeśli wolisz napisać maila prosto ze swojej skrzynki:</p>
            <a href="mailto:kontakt@niebowglowie.pl" className="text-lg font-bold text-primary hover:underline" data-design-id="kontakt-email-link">kontakt@niebowglowie.pl</a>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200" data-design-id="kontakt-social-box">
            <h3 className="flex items-center gap-3 text-xl font-bold mb-4 text-slate-800" data-design-id="kontakt-social-heading">
              <MessageSquare className="text-primary w-6 h-6" data-design-id="kontakt-social-icon" /> Social Media
            </h3>
            <p className="text-slate-600 mb-6" data-design-id="kontakt-social-desc">Zajrzyj na moje profile, by być na bieżąco z darmowymi materiałami, refleksjami i zapowiedziami.</p>
            <Button asChild variant="outline" className="w-full justify-start text-left bg-white font-bold" size="lg" data-design-id="kontakt-tiktok-btn">
              <a href="https://www.tiktok.com/@niebowglowie" target="_blank" rel="noopener noreferrer" data-design-id="kontakt-tiktok-link">
                Obserwuj na TikTok
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start text-left bg-white font-bold mt-4" size="lg" data-design-id="kontakt-ig-btn">
              <a href="https://www.instagram.com/niebo_w_glowie/" target="_blank" rel="noopener noreferrer" data-design-id="kontakt-ig-link">
                Obserwuj @niebo_w_glowie na Instagramie
              </a>
            </Button>
          </div>

          <div className="bg-slate-50 p-8 rounded-xl border border-slate-200" data-design-id="kontakt-support-box">
            <h3 className="flex items-center gap-3 text-xl font-bold mb-4 text-slate-800" data-design-id="kontakt-support-heading">
              <HeartHandshake className="text-primary w-6 h-6" data-design-id="kontakt-support-icon" /> Wesprzyj twórczość
            </h3>
            <p className="text-slate-600 mb-6" data-design-id="kontakt-support-desc">Dzięki Twojemu wsparciu mogę poświęcać więcej czasu na tworzenie treści i docierać do kolejnych osób.</p>
            <Button asChild className="w-full justify-start text-left font-bold" size="lg" data-design-id="kontakt-suppi-btn">
              <a href="https://suppi.pl/niebowglowie" target="_blank" rel="noopener noreferrer" className="text-white" data-design-id="kontakt-suppi-link">
                Wesprzyj na Suppi
              </a>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
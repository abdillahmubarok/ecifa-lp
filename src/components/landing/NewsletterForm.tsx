"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isLoading) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast({
          title: "Berhasil Berlangganan!",
          description: "Terima kasih! Anda akan menerima update riset terbaru dari kami.",
        });
        setEmail("");
      } else {
        throw new Error('Gagal berlangganan');
      }
    } catch (error) {
      toast({
        title: "Gagal Berlangganan",
        description: "Terjadi kesalahan. Silakan coba lagi nanti.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email Anda"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
        required
        disabled={isLoading}
      />
      <Button
        type="submit"
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
        disabled={isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sedang Memproses...
          </>
        ) : (
          "Berlangganan"
        )}
      </Button>
    </form>
  );
}

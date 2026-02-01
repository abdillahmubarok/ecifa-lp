"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function NewsletterForm() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
      title: "Berhasil Berlangganan!",
      description: "Terima kasih! Anda akan menerima update riset terbaru dari kami.",
    });
    setEmail("");
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
      />
      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
        Berlangganan
      </Button>
    </form>
  );
}

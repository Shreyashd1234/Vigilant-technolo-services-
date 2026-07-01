import { MessageCircle, PhoneCall, Phone } from "lucide-react";
import { BRAND } from "@/lib/site-data";

export function FloatingCallButton({ phone = BRAND.phone }: { phone?: string }) {
  return (
    <a
      href={`tel:${phone.replace(/\D/g, "")}`}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-foreground text-background shadow-2xl transition-transform hover:scale-110 animate-fade-in group"
      aria-label="Call Us"
    >
      <Phone className="h-7 w-7" />
      <span className="absolute -top-12 right-0 whitespace-nowrap rounded-lg bg-foreground/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-background opacity-0 transition-opacity group-hover:opacity-100 shadow-xl pointer-events-none">
        Call 24×7 Expert
      </span>
      <div className="absolute inset-0 rounded-full bg-foreground animate-ping opacity-20" />
    </a>
  );
}

export function ContextualWhatsApp({ text = "Chat With Our Team", message = "Hi, I have an inquiry.", className }: { text?: string; message?: string; className?: string }) {
  const waUrl = `https://wa.me/918087279615?text=${encodeURIComponent(message)}`;
  return (
    <a href={waUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 text-sm font-semibold transition-all btn-magnetic shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 hover:bg-[#25D366]/90 ${className}`}>
      <MessageCircle className="h-4 w-4" /> {text}
    </a>
  );
}

export function CallButton({ text = "Call Now", className }: { text?: string; className?: string }) {
  return (
    <a href={`tel:${BRAND.phone}`} className={`inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold transition-all btn-magnetic shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 hover:bg-foreground/90 ${className}`}>
      <PhoneCall className="h-4 w-4" /> {text}
    </a>
  );
}

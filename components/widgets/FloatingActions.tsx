"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MessageCircleMore, Phone, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";
import { BrandIcon } from "@/components/ui/BrandIcon";
import { useI18n } from "@/components/I18nProvider";
import { cn } from "@/lib/utils";

const ChatPanel = dynamic(() => import("./ChatPanel"), { ssr: false });

export function FloatingActions() {
  const { t } = useI18n();
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <>
      {/* Click-to-call — mobile only, bottom-left */}
      <a
        href={telUrl}
        aria-label={t.common.callNow}
        className="fixed bottom-5 left-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lift transition hover:scale-105 md:hidden"
      >
        <Phone className="h-6 w-6" aria-hidden />
      </a>

      {/* Right stack: chatbot launcher above WhatsApp */}
      <div className="fixed right-4 bottom-5 z-40 flex flex-col items-end gap-3">
        <button
          type="button"
          onClick={() => setChatOpen((v) => !v)}
          aria-expanded={chatOpen}
          aria-controls="chat-panel"
          aria-label={chatOpen ? t.chat.close : t.chat.open}
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full shadow-lift ring-1 ring-brand-100 transition hover:scale-105",
            chatOpen ? "bg-brand-800 text-white" : "bg-white text-brand-800"
          )}
        >
          {chatOpen ? <X className="h-5 w-5" aria-hidden /> : <MessageCircleMore className="h-6 w-6" aria-hidden />}
        </button>
        <a
          href={whatsappUrl(t.common.whatsappGreeting)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common.chatOnWhatsapp}
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lift transition hover:scale-105"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-25 motion-reduce:hidden" aria-hidden />
          <BrandIcon name="whatsapp" className="relative h-7 w-7" />
        </a>
      </div>

      <AnimatePresence>{chatOpen && <ChatPanel onClose={() => setChatOpen(false)} />}</AnimatePresence>
    </>
  );
}

"use client";

import { useState } from "react";
import { X } from "lucide-react";

export function PromoBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative flex min-h-[44px] items-center justify-center bg-black px-4 py-2.5 pl-12 pr-12 text-center text-xs font-medium uppercase tracking-wider text-white sm:pl-4 sm:pr-12">
      <span className="break-words">Download the app for 20% off your first order</span>
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute right-2 top-1/2 flex min-h-[44px] min-w-[44px] -translate-y-1/2 shrink-0 items-center justify-center rounded text-white/80 transition hover:bg-white/10 hover:text-white"
        aria-label="Close banner"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

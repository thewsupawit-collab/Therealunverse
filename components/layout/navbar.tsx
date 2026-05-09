"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 bg-background/80 backdrop-blur-xl border-b border-gold/15"
          : "py-6 bg-transparent",
      )}
    >
      <div className="container-luxe">
        <div className="flex items-center justify-between">
          <Link href="#top" className="flex items-baseline gap-2 group">
            <span className="font-display text-2xl tracking-tight leading-none text-foreground">
              The Real
            </span>
            <span className="font-display italic text-2xl tracking-tight leading-none gold-text">
              Universe
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-start gap-0.5"
              >
                <span className="text-sm font-medium text-foreground/85 group-hover:text-foreground transition-colors">
                  {item.labelTh}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-foreground/35 group-hover:text-gold transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild size="sm" variant="gold" className="hidden md:inline-flex">
              <Link href="#apply">เริ่มเส้นทาง</Link>
            </Button>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-foreground hover:bg-gold/10 transition"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 top-[80px] z-40 bg-background"
          >
            <div className="container-luxe pt-10 pb-16 flex flex-col gap-1">
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-gold/10"
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-5"
                  >
                    <span className="font-display text-3xl tracking-tight">
                      {item.labelTh}
                    </span>
                    <span className="text-xs uppercase tracking-widest text-gold/60">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Button asChild size="lg" variant="gold" className="mt-10">
                <Link href="#apply" onClick={() => setOpen(false)}>
                  เริ่มเส้นทาง
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

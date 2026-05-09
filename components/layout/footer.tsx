"use client";

import Link from "next/link";
import { Instagram, Youtube, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site";

const columns = [
  {
    title: "Path",
    links: [
      { label: "เส้นทาง", href: "#promise" },
      { label: "วิธีการ", href: "#method" },
      { label: "โปรแกรม", href: "#programs" },
      { label: "เรื่องของผม", href: "#coach" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: siteConfig.social.instagram },
      { label: "TikTok", href: siteConfig.social.tiktok },
      { label: "YouTube", href: siteConfig.social.youtube },
      { label: "LINE", href: siteConfig.social.line },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Contact", href: `mailto:${siteConfig.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative bg-background text-foreground border-t border-gold/20">
      <div className="absolute inset-x-0 top-0 h-px gold-line" />
      <div className="container-luxe py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-6 flex flex-col gap-8">
            <Link href="#top" className="flex items-baseline gap-2 w-fit">
              <span className="font-display text-3xl md:text-4xl leading-none">
                The Real
              </span>
              <span className="font-display italic text-3xl md:text-4xl leading-none gold-text">
                Universe
              </span>
            </Link>
            <p className="font-display text-2xl md:text-3xl leading-snug max-w-md text-pretty">
              ร่างกายคือประตู —{" "}
              <span className="italic gold-text">
                ของจักรวาลที่อยู่ในตัวคุณ
              </span>
            </p>
            <p className="text-foreground/55 max-w-md leading-relaxed text-sm">
              เป้าหมายของผมไม่ใช่การให้คุณติดเทรนเนอร์ — แต่เพื่อให้คุณกลับสู่ตัวเอง
              ด้วยความรู้และ mindset ที่จะอยู่กับคุณตลอดไป
            </p>
            <div className="mt-2 flex items-center gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 hover:border-gold/60 hover:bg-gold/10 transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 hover:border-gold/60 hover:bg-gold/10 transition"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 hover:border-gold/60 hover:bg-gold/10 transition text-xs font-bold"
              >
                Tk
              </a>
              <a
                href={siteConfig.social.line}
                target="_blank"
                rel="noreferrer"
                aria-label="LINE"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/20 hover:border-gold/60 hover:bg-gold/10 transition text-xs font-bold"
              >
                LN
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-4">
                <h4 className="text-[10px] uppercase tracking-widest text-gold/70">
                  {col.title}
                </h4>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-foreground/80 hover:text-foreground transition-colors"
                      >
                        {link.label}
                        {link.href.startsWith("http") && (
                          <ArrowUpRight className="h-3 w-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 hairline" />

        <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-foreground/45">
            © {new Date().getFullYear()} The Real Universe — coached by{" "}
            {siteConfig.coach.name}.
          </p>
          <p className="text-xs text-foreground/45">
            Bangkok, Thailand · Online & in-person
          </p>
        </div>
      </div>
    </footer>
  );
}

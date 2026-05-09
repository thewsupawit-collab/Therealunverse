"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.16, 1, 0.3, 1] as const;

const stats = [
  { k: "1:1", v: "ทุกเคส ตัวต่อตัวเท่านั้น" },
  { k: "3–6", v: "เดือนของการเดินทางที่แท้จริง" },
  { k: "∞", v: "ความรู้ที่ใช้ได้ตลอดชีวิต" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden flex flex-col"
    >
      {/* Coach photo background — faded, gilded */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/coach-thew-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%] opacity-[1.5] saturate-[0.6] contrast-110"
        />
        {/* gold halo behind subject */}
        <div className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial-gold blur-3xl animate-glow" />
        {/* heavy radial fade so text reads cleanly */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(7,6,5,0.55)_0%,rgba(7,6,5,0.92)_70%,#070605_100%)]" />
        <div className="absolute inset-0 bg-gradient-fade-bottom" />
      </div>

      <div className="relative flex-1 flex items-center pt-32 pb-20">
        <div className="container-luxe">
          <div className="flex flex-col gap-12 max-w-5xl">
            {/* Eyebrow + ornament */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="flex items-center gap-4"
            >
              <span className="font-display italic text-gold text-lg leading-none">
                ✦
              </span>
              <span className="h-px w-10 bg-gold/40" aria-hidden />
              <span className="eyebrow">
                The Real Universe — 1:1 Coaching by Thew
              </span>
            </motion.div>

            {/* Headline — "คุณไม่ต้องการ" emphasised gold */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease, delay: 0.1 }}
              className="text-display-2xl font-display font-light text-balance"
            >
              จบโปรแกรม
              <br className="hidden sm:block" />
              <span className="italic gold-text">คุณไม่ต้องการ</span>
              <br className="hidden sm:block" />
              ผมอีกเลย.
            </motion.h1>

            {/* Subhead + CTAs in clean two-column grid */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.3 }}
                className="md:col-span-7 text-lg md:text-xl text-foreground/80 leading-relaxed text-pretty max-w-2xl"
              >
                ผมไม่สร้างลูกค้าที่ติดเทรนเนอร์ตลอดชีวิต — ผมสร้างคนที่{" "}
                <span className="text-gold">เข้าใจร่างกายตัวเอง</span> มี
                mindset ที่ถูก และเอาความรู้นี้ไปใช้ได้ตลอดชีวิต
                โดยไม่ต้องมีผม
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, ease, delay: 0.45 }}
                className="md:col-span-5 flex flex-col gap-4 md:items-end md:text-right"
              >
                <div className="flex flex-wrap items-center gap-3 md:justify-end">
                  <Button asChild size="lg" variant="gold">
                    <Link href="#apply">
                      สมัครเทรน <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="#promise">อ่านแนวคิดก่อน</Link>
                  </Button>
                </div>
                <p className="text-xs text-foreground/45 max-w-xs leading-relaxed">
                  รับเคสจำนวนจำกัดต่อเดือน — เพื่อให้ทุกคนได้ความใส่ใจที่ควรได้
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — only 3 stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease, delay: 0.7 }}
        className="relative border-t border-gold/20 bg-background/50 backdrop-blur"
      >
        <div className="container-luxe">
          <div className="grid grid-cols-3 divide-x divide-gold/15">
            {stats.map((s) => (
              <div
                key={s.v}
                className="px-4 sm:px-6 md:px-10 py-7 flex flex-col gap-2 first:pl-0 last:pr-0"
              >
                <span className="font-display text-3xl md:text-5xl gold-text leading-none">
                  {s.k}
                </span>
                <span className="text-xs md:text-sm text-foreground/55 leading-snug">
                  {s.v}
                </span>
              </div>
            ))}
          </div>
        </div>
        <Link
          href="#promise"
          aria-label="Scroll to next section"
          className="absolute -top-6 right-6 md:right-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-background text-gold hover:bg-gold/10 transition"
        >
          <ArrowDown className="h-4 w-4" />
        </Link>
      </motion.div>
    </section>
  );
}

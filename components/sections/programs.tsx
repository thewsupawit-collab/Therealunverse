"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, BookOpen, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

interface Program {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  nameTh: string;
  duration: string;
  pitch: string;
  highlights: string[];
  cta: string;
  ctaHref: string;
  featured?: boolean;
  ebookIncluded?: boolean;
  ribbon?: string;
}

const programs: Program[] = [
  {
    id: "ebook",
    icon: BookOpen,
    name: "The Codex",
    nameTh: "E-book",
    duration: "Self-paced",
    pitch:
      "หนังสือเล่มเดียวที่รวมหลักทุกอย่างที่ผมสอน — สำหรับคนที่อยากเริ่มเดินทางเอง ก่อนพร้อมจ้างโค้ช",
    highlights: [
      "หลักการเทรน + โภชนาการ พื้นฐานครบ",
      "Mindset framework ที่ผมใช้กับลูกค้า",
      "เทมเพลตเขียนโปรแกรมเอง 12 สัปดาห์",
      "อัปเดตตลอดชีวิตที่ผมยังเขียน",
    ],
    cta: "ซื้อ E-book",
    ctaHref: "#apply",
  },
  {
    id: "3mo",
    icon: Sparkles,
    name: "The Awakening",
    nameTh: "3 เดือน",
    duration: "12 weeks · 1:1",
    pitch:
      "เส้นทางที่กระชับ — ผมพาคุณผ่านทั้ง 4 phase ของวิธีในเวลาที่หนาแน่น เหมาะกับคนที่พร้อมจริง ๆ และรับการเปลี่ยนแปลงเร็วได้",
    highlights: [
      "1:1 coaching ตลอด 12 สัปดาห์",
      "เทรนตัวต่อตัว 2–3 ครั้ง/สัปดาห์",
      "โปรแกรมโภชนาการเฉพาะตัว",
      "Mindset work รายสัปดาห์",
      "E-book The Codex ฟรี",
    ],
    cta: "เริ่มเส้นทาง 3 เดือน",
    ctaHref: "#apply",
    ebookIncluded: true,
  },
  {
    id: "6mo",
    icon: Crown,
    name: "The Pilgrimage",
    nameTh: "6 เดือน",
    duration: "24 weeks · 1:1",
    pitch:
      "การเดินทางที่ลึกที่สุด — เวลาที่พอจะเปลี่ยนทุกอย่างจริง ๆ ไม่ใช่แค่หุ่น แต่ทั้งวิถีชีวิต และเตรียมตัวคุณให้ยืนได้เองอย่างมั่นคง",
    highlights: [
      "ทุกอย่างใน 3 เดือน × 2 รอบ",
      "Mastery phase ที่ลึกขึ้น",
      "1:1 quarterly retreat day",
      "Personal playbook + roadmap 12 เดือน",
      "Open-door check-in ตลอด 1 ปีหลังจบ",
      "E-book The Codex ฟรี",
    ],
    cta: "สมัคร The Pilgrimage",
    ctaHref: "#apply",
    featured: true,
    ebookIncluded: true,
    ribbon: "Most chosen",
  },
];

export function Programs() {
  return (
    <section
      id="programs"
      className="relative scroll-mt-nav py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[80vh] w-[120vw] -translate-x-1/2 rounded-full bg-gradient-radial-gold blur-3xl opacity-60"
      />

      <div className="container-luxe relative">
        <SectionHeading
          index="✦  07"
          eyebrow="Programs · 3 ทาง สู่จุดเดียวกัน"
          title={
            <>
              เลือกความ
              <br />
              <span className="italic gold-text">ลึก</span> ของการเดินทาง
            </>
          }
          description={
            <>
              ทุกเส้นทางพาไปจุดเดียวกัน — คือ
              <span className="text-gold"> การที่คุณยืนได้เอง</span>.
              ต่างกันแค่ความลึกและจังหวะ
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 items-stretch">
          {programs.map((p, i) => {
            const featured = p.featured;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, ease, delay: 0.06 * i }}
                className={[
                  "relative rounded-2xl p-7 md:p-9 flex flex-col gap-6 transition-all",
                  featured
                    ? "bg-gradient-to-b from-gold/15 via-card to-card border border-gold/40 shadow-gold lg:scale-[1.03]"
                    : "bg-card border border-gold/15",
                ].join(" ")}
              >
                {p.ribbon && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge variant="sand" className="bg-gradient-gold text-obsidian-deep border-gold/50">
                      <Sparkles className="h-3 w-3" />
                      {p.ribbon}
                    </Badge>
                  </span>
                )}

                <div className="flex items-start justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-widest text-gold/75">
                      {p.duration}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight italic gold-text leading-tight">
                      {p.name}
                    </h3>
                    <p className="text-sm text-foreground/55 mt-1">
                      {p.nameTh}
                    </p>
                  </div>
                  <span
                    className={[
                      "inline-flex h-12 w-12 items-center justify-center rounded-full",
                      featured
                        ? "bg-gradient-gold text-obsidian-deep"
                        : "border border-gold/30 text-gold",
                    ].join(" ")}
                  >
                    <p.icon className="h-5 w-5" />
                  </span>
                </div>

                <div className="hairline" />

                <p className="text-foreground/75 text-sm leading-relaxed text-pretty">
                  {p.pitch}
                </p>

                <ul className="flex flex-col gap-3 mt-1">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-foreground/80"
                    >
                      <span
                        className={[
                          "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          featured ? "bg-gold/25 text-gold-light" : "bg-gold/10 text-gold",
                        ].join(" ")}
                      >
                        <Check className="h-3 w-3" />
                      </span>
                      <span className="leading-relaxed">
                        {h}
                        {h.includes("Codex ฟรี") && (
                          <span className="ml-1 text-[10px] uppercase tracking-widest text-gold/60">
                            included
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-2">
                  <Button asChild size="lg" variant={featured ? "gold" : "outline"}>
                    <Link href={p.ctaHref}>{p.cta}</Link>
                  </Button>
                  <p className="text-[11px] text-foreground/45 text-center">
                    {p.id === "ebook"
                      ? "ราคาเดี่ยว — ดาวน์โหลดได้ทันทีหลังชำระเงิน"
                      : "คุยกับผมก่อน เพื่อยืนยันความพร้อม — ไม่มีการกดดัน"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 mx-auto max-w-2xl text-center text-sm text-foreground/55 leading-relaxed">
          ราคาที่แท้จริงไม่ได้บอกบนเว็บ — เพราะการเดินทางแบบนี้
          ตัดสินใจจากตัวเลขเริ่มต้นไม่ได้ ผมคุยตรง ๆ ในรอบ discovery call
          และจะบอกตามจริงว่าเหมาะหรือไม่เหมาะกับคุณ
        </p>
      </div>
    </section>
  );
}

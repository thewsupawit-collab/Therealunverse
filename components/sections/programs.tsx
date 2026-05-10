"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, BookOpen, Sparkles, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

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
  price?: string;
  note?: string;
}

const programs: Program[] = [
  {
    id: "ebook",
    icon: BookOpen,
    name: "The Reset",
    nameTh: "E-book",
    duration: "Self-paced",
    pitch:
      "ข้อมูลทุกอย่างที่คุณต้องการเพื่อเปลี่ยนแปลงตัวเองได้จริง — ต่างกับมีโค้ชแค่ไม่มีใครคอยตอบ คอยบอก",
    highlights: [
      "รู้ว่าทำไมคุณเริ่มแล้วหยุดซ้ำๆ — และวิธีหยุดวงจรนั้น",
      "กินอาหารที่ชอบได้ ถ้าเข้าใจหลักการนี้",
      "Mindset ที่เปลี่ยนพฤติกรรมจริง ไม่ใช่แค่แรงฮึดชั่วคราว",
      "โปรแกรมเทรนพร้อมใช้เลย",
      "วัดผลถูกวิธี — รู้ว่าตัวเองกำลังไปถูกทิศ",
    ],
    cta: "ซื้อ The Reset",
    ctaHref: "#apply",
    price: "390",
    note: "ข้อมูลใน ebook เล่มนี้เพียงพอสำหรับการเปลี่ยนแปลงตัวเอง — ต่างกันตรงที่ไม่มีโค้ชมาคอยบอก คอยตอบคำถาม",
  },
  {
    id: "3mo",
    icon: Sparkles,
    name: "1:1 Coaching",
    nameTh: "3 เดือน",
    duration: "12 weeks · 1:1",
    pitch:
      "มีโค้ชอยู่ข้างๆ ตลอด 12 สัปดาห์ — คอยบอก คอยตอบ และปรับแผนให้เข้ากับชีวิตคุณ",
    highlights: [
      "1:1 Call ทุกสัปดาห์ — วิเคราะห์เป้าหมายและสร้างแผนเฉพาะตัว",
      "Customized Workout Program — โปรแกรมเทรนเฉพาะบุคคล",
      "Daily Support ตลอดโปรแกรม",
      "Mindset work รายสัปดาห์",
      "E-book The Reset ฟรี",
    ],
    cta: "เริ่มเส้นทาง 3 เดือน",
    ctaHref: "#apply",
    ebookIncluded: true,
  },
  {
    id: "6mo",
    icon: Crown,
    name: "1:1 Coaching",
    nameTh: "6 เดือน",
    duration: "24 weeks · 1:1",
    pitch:
      "เดินทางลึกกว่า ยาวกว่า — 24 สัปดาห์เพื่อเปลี่ยนทั้งหุ่นและวิถีชีวิต พร้อมยืนได้เองอย่างมั่นคง",
    highlights: [
      "1:1 Call ทุกสัปดาห์ — วิเคราะห์เป้าหมายและสร้างแผนเฉพาะตัว",
      "Customized Workout Program — โปรแกรมเทรนเฉพาะบุคคล",
      "Daily Support ตลอดโปรแกรม",
      "Mindset work รายสัปดาห์",
      "E-book The Reset ฟรี",
    ],
    cta: "เริ่มเส้นทาง 6 เดือน",
    ctaHref: "#apply",
    featured: true,
    ebookIncluded: true,
    ribbon: "Most chosen",
  },
];

const LINE_QR = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=1a1a1a&bgcolor=f9f6ee&data=https://lin.ee/Pjkes0uM";
const LINE_URL = "https://lin.ee/Pjkes0uM";

export function Programs() {
  const [ebookModalOpen, setEbookModalOpen] = useState(false);
  const [coachingModal, setCoachingModal] = useState<"3mo" | "6mo" | null>(null);

  return (
    <section
      id="programs"
      className="relative scroll-mt-nav py-14 md:py-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[80vh] w-[120vw] -translate-x-1/2 rounded-full bg-gradient-radial-gold blur-3xl opacity-60"
      />

      <div className="container-luxe relative">
        <SectionHeading
          index="✦  03"
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
                  <div className="flex flex-col items-end gap-2">
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
                    {p.price && (
                      <span className="gold-text text-2xl font-black tracking-tight leading-none">
                        {p.price}{" "}
                        <span className="text-sm font-bold">บาท</span>
                      </span>
                    )}
                  </div>
                </div>

                <div className="hairline" />

                <div className="h-[3.75rem] overflow-hidden">
                  {p.note && (
                    <p className="text-[13px] text-foreground/50 italic leading-relaxed">
                      {p.note}
                    </p>
                  )}
                  {p.id !== "ebook" && (
                    <p className="text-[13px] text-foreground/50 italic leading-relaxed text-pretty">
                      {p.pitch}
                    </p>
                  )}
                </div>

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
                  {p.id === "ebook" ? (
                    <>
                      <Button size="lg" variant="outline" onClick={() => setEbookModalOpen(true)}>
                        {p.cta}
                      </Button>
                      <p className="text-[11px] text-foreground/45 text-center">
                        จ่ายครั้งเดียว — ไม่มีค่าใช้จ่ายรายเดือน
                      </p>
                    </>
                  ) : (
                    <>
                      <Button
                        size="lg"
                        variant={featured ? "gold" : "outline"}
                        onClick={() => setCoachingModal(p.id as "3mo" | "6mo")}
                      >
                        {p.cta}
                      </Button>
                      <p className="text-[11px] text-foreground/45 text-center">
                        คุยกับผมก่อน เพื่อยืนยันความพร้อม — ไม่มีการกดดัน
                      </p>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 mx-auto max-w-xl text-center flex flex-col items-center gap-3">
          <p className="text-base text-foreground/80 leading-relaxed">
            ไม่แน่ใจว่าพร้อมหรือยัง?{" "}
            <span className="text-gold">นั่นแหละคือจุดที่ทุกคนเริ่ม</span>
          </p>
          <p className="text-sm text-foreground/50 leading-relaxed">
            คุยกับผมสักครั้ง — ไม่มีค่าใช้จ่าย ไม่มีการกดดัน
            แค่บทสนทนาตรงๆ ว่าคุณอยู่ตรงไหน และเส้นทางไหนเหมาะกับคุณจริงๆ
          </p>
        </div>
      </div>

      {/* Coaching contact modal */}
      <Dialog open={!!coachingModal} onOpenChange={(o) => !o && setCoachingModal(null)}>
        <DialogContent className="max-w-sm text-center">
          <DialogTitle className="gold-text text-2xl">
            1:1 Coaching · {coachingModal === "3mo" ? "3 เดือน" : "6 เดือน"}
          </DialogTitle>
          <DialogDescription className="text-foreground/60 text-sm leading-relaxed">
            สแกน QR Code เพื่อพูดคุยและเริ่มต้นเส้นทางผ่าน Line ได้เลย
          </DialogDescription>

          <div className="flex flex-col items-center gap-5 pt-2">
            <div className="rounded-2xl border border-gold/20 bg-white p-3 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LINE_QR}
                alt="Line QR Code สำหรับ 1:1 Coaching"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-xs text-foreground/45">หรือกดลิงก์ด้านล่าง</p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text text-sm font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                lin.ee/Pjkes0uM
              </a>
            </div>

            <div className="hairline w-full" />

            <p className="text-xs text-foreground/45 leading-relaxed">
              ไม่มีค่าใช้จ่ายในการพูดคุย — ผมจะบอกตรงๆ ว่าเหมาะหรือยัง
            </p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Ebook purchase modal */}
      <Dialog open={ebookModalOpen} onOpenChange={setEbookModalOpen}>
        <DialogContent className="max-w-sm text-center">
          <DialogTitle className="gold-text text-2xl">The Reset</DialogTitle>
          <DialogDescription className="text-foreground/60 text-sm leading-relaxed">
            สแกน QR Code เพื่อพูดคุยและสั่งซื้อผ่าน Line ได้เลย
          </DialogDescription>

          <div className="flex flex-col items-center gap-5 pt-2">
            <div className="rounded-2xl border border-gold/20 bg-white p-3 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LINE_QR}
                alt="Line QR Code สำหรับสั่งซื้อ The Reset"
                width={200}
                height={200}
                className="rounded-xl"
              />
            </div>

            <div className="flex flex-col items-center gap-1">
              <p className="text-xs text-foreground/45">หรือกดลิงก์ด้านล่าง</p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-text text-sm font-medium underline underline-offset-4 hover:opacity-75 transition-opacity"
              >
                lin.ee/Pjkes0uM
              </a>
            </div>

            <div className="hairline w-full" />

            <p className="text-xs text-foreground/45 leading-relaxed">
              ราคา <span className="gold-text font-bold">390 บาท</span> — ชำระผ่าน Line
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/section-heading";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const ease = [0.16, 1, 0.3, 1] as const;

const LINE_QR = "https://api.qrserver.com/v1/create-qr-code/?size=240x240&color=1a1a1a&bgcolor=f9f6ee&data=https://lin.ee/Pjkes0uM";
const LINE_URL = "https://lin.ee/Pjkes0uM";

const fitFor = [
  "พร้อมลงทุนกับตัวเองจริงๆ ทั้งเวลาและความสม่ำเสมอ",
  "อยากเข้าใจร่างกายตัวเอง ไม่ใช่แค่ทำตามคำสั่ง",
  "เปิดรับ feedback ตรงๆ แม้บางทีจะไม่ใช่สิ่งที่อยากได้ยิน",
  "ต้องการการเปลี่ยนแปลงที่ยั่งยืน ไม่ใช่ผลลัพธ์ชั่วคราว",
  "พร้อมเปลี่ยนวิธีคิด ไม่ใช่แค่เปลี่ยนโปรแกรม",
];

const notFor = [
  "กำลังมองหา shortcut หรือผลลัพธ์เร็วโดยไม่ต้องเปลี่ยนอะไร",
  "ต้องการแค่ตารางออกกำลังกาย โดยไม่สนใจเรื่อง mindset",
  "ยังไม่พร้อมให้ความสม่ำเสมอในระยะ 3–6 เดือน",
  "ต้องการคนมาคอยสั่งตลอดเวลา โดยไม่เรียนรู้ด้วยตัวเอง",
  "คาดหวังผลใน 30 วัน โดยไม่ยอมปรับวิถีชีวิต",
];

export function Who() {
  const [lineModalOpen, setLineModalOpen] = useState(false);

  return (
    <section id="who" className="relative scroll-mt-nav py-14 md:py-20">
      <div className="container-luxe">
        <SectionHeading
          index="✦  04"
          eyebrow="Selective · ผมไม่ได้รับทุกคน"
          title={
            <>
              ผมไม่ใช่
              <br />
              <span className="italic gold-text">สำหรับทุกคน</span>
            </>
          }
          description="ผมรับแค่คนที่สติดี รู้ว่าตัวเองต้องการอะไร และพร้อมจะลงมือจริงๆ"
        />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-px bg-gold/15 border border-gold/20 rounded-2xl overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="bg-card p-8 md:p-12 flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-gold text-obsidian-deep">
                <Check className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl tracking-tight">
                  เหมาะกับคุณ
                </span>
                <span className="text-[10px] uppercase tracking-widest text-gold/70">
                  This is for you if
                </span>
              </div>
            </div>
            <ul className="flex flex-col">
              {fitFor.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease, delay: 0.05 * i }}
                  className="flex items-start gap-4 py-4 border-b border-gold/10 last:border-b-0 text-foreground/85 text-pretty leading-relaxed"
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="bg-card p-8 md:p-12 flex flex-col gap-8"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground/40">
                <X className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="font-display text-2xl md:text-3xl tracking-tight text-foreground/55">
                  ยังไม่เหมาะ
                </span>
                <span className="text-[10px] uppercase tracking-widest text-foreground/35">
                  Not for you if
                </span>
              </div>
            </div>
            <ul className="flex flex-col">
              {notFor.map((f, i) => (
                <motion.li
                  key={f}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, ease, delay: 0.05 * i }}
                  className="flex items-start gap-4 py-4 border-b border-gold/10 last:border-b-0 text-foreground/45 text-pretty leading-relaxed"
                >
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground/5 text-foreground/40">
                    <X className="h-3 w-3" />
                  </span>
                  {f}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col gap-4 max-w-xl">
          <p className="text-sm text-foreground/55 leading-relaxed">
            ทุกคนอยากเปลี่ยน — แต่ไม่ใช่ทุกคนพร้อมจะเปลี่ยน.{" "}
            <span className="text-foreground/75">
              ผมไม่ได้มองหาคนสมบูรณ์แบบ แต่มองหาคนที่ซื่อสัตย์กับตัวเอง
              รู้ว่าตอนนี้ตัวเองอยู่ตรงไหน และไม่กลัวที่จะเดินหน้า
            </span>
          </p>
          <Button variant="outline" size="lg" className="w-fit" onClick={() => setLineModalOpen(true)}>
            LINE
          </Button>
        </div>
      </div>

      {/* LINE modal */}
      <Dialog open={lineModalOpen} onOpenChange={setLineModalOpen}>
        <DialogContent className="max-w-sm text-center">
          <DialogTitle className="gold-text text-2xl">ติดต่อผมผ่าน Line</DialogTitle>
          <DialogDescription className="text-foreground/60 text-sm leading-relaxed">
            สแกน QR Code หรือกดลิงก์ด้านล่างเพื่อพูดคุยกับผมได้เลย
          </DialogDescription>

          <div className="flex flex-col items-center gap-5 pt-2">
            <div className="rounded-2xl border border-gold/20 bg-white p-3 shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={LINE_QR}
                alt="Line QR Code"
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
    </section>
  );
}

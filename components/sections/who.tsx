"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

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
  return (
    <section id="who" className="relative scroll-mt-nav py-14 md:py-20">
      <div className="container-luxe">
        <SectionHeading
          index="✦  04"
          eyebrow="Honest filter · ใครที่ใช่ ใครที่ยังไม่ใช่"
          title={
            <>
              ที่นี่ไม่ใช่
              <br />
              <span className="italic gold-text">gym ที่รับ</span>
              <br />
              ทุกคน
            </>
          }
          description="ผมต้องการคนธรรมดา — ที่พร้อมจริงจังกับการเปลี่ยนแปลงร่างกายตัวเองอย่างแท้จริง ไม่ใช่แค่อยากลอง"
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

        <p className="mt-10 text-sm text-foreground/55 max-w-xl">
          ไม่แน่ใจว่าตัวเองอยู่ฝั่งไหน? คุยกับผมก่อนได้เลย —
          ไม่มีค่าใช้จ่าย และผมจะบอกตรงๆ ว่าเหมาะหรือยัง
        </p>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const fitFor = [
  "พร้อมรับฟังร่างกายตัวเองอย่างจริงจัง — ไม่ใช่แค่ทำตามคำสั่ง",
  "พร้อมลงทุน 3–6 เดือนในตัวเอง ทั้งเวลาและความสม่ำเสมอ",
  "อยากเข้าใจระบบที่อยู่เบื้องหลัง ไม่ใช่ทำตามตารางตาบอด",
  "เปิดใจรับ mindset ที่อาจขัดกับสิ่งที่เคยเชื่อมาก่อน",
  "ต้องการความเปลี่ยนแปลงที่อยู่กับคุณตลอดชีวิต ไม่ใช่ shortcut",
];

const notFor = [
  "อยากได้หุ่นใน 30 วันโดยไม่ต้องเปลี่ยนวิถีชีวิต",
  "หาเทรนเนอร์ที่จะคอยสั่งคุณตลอดไป",
  "ไม่พร้อมรับ feedback ที่ตรงไปตรงมา",
  "หา quick fix หรือ shortcut ที่ไม่ต้องสร้างวินัย",
  "ต้องการแค่ตารางออกกำลังกาย ไม่อยากเข้าใจตัวเองให้ลึก",
];

export function Who() {
  return (
    <section id="who" className="relative scroll-mt-nav py-20 md:py-28">
      <div className="container-luxe">
        <SectionHeading
          index="✦  06"
          eyebrow="Honest filter · ใครที่ใช่ ใครที่ยังไม่ใช่"
          title={
            <>
              ผมไม่รับ
              <br />
              ทุกเคส —
              <br />
              <span className="italic gold-text">โดยตั้งใจ</span>
            </>
          }
          description="งานนี้ใช้พลังงาน ความใส่ใจ และเวลามาก — ผมจึงรับลูกค้าจำนวนจำกัดเพียงเดือนละไม่กี่เคส เพื่อให้คนที่ใช่ ได้รับสิ่งที่ควรได้จริง ๆ"
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
          ถ้าคุณไม่แน่ใจว่าตัวเองอยู่ฝั่งไหน — สมัครเข้ามา ผมจะคุยกับคุณตรง ๆ
          ไม่มีค่าใช้จ่ายในขั้น discovery
        </p>
      </div>
    </section>
  );
}

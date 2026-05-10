"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const pillars = [
  {
    n: "I.",
    th: "ความเข้าใจ",
    en: "Understand",
    body:
      "เรียนรู้ว่าร่างกายคุณตอบสนองต่ออาหาร การพัก การเทรนยังไง — ไม่ใช่ทำตามตารางตาบอด แต่เข้าใจว่าทำไม",
  },
  {
    n: "II.",
    th: "ทักษะ",
    en: "Skill",
    body:
      "ฟอร์มที่ถูกต้อง การประเมินตัวเองได้ การปรับโปรแกรมเองตามชีวิตที่เปลี่ยน — สิ่งเหล่านี้คือทักษะ ไม่ใช่บริการ",
  },
  {
    n: "III.",
    th: "Mindset",
    en: "Mindset",
    body:
      "ความสัมพันธ์ที่ถูกต้องกับร่างกาย กับอาหาร กับวินัย — ไม่ใช่ลงโทษตัวเอง แต่เคารพตัวเองในระยะยาว",
  },
  {
    n: "IV.",
    th: "อิสรภาพ",
    en: "Freedom",
    body:
      "วันที่คุณไม่ต้องถามผมอีกเลยว่าวันนี้ควรกินอะไร ควรเทรนยังไง — คือวันที่งานของผมสำเร็จ",
  },
];

export function PromiseSection() {
  return (
    <section id="promise" className="relative scroll-mt-nav py-14 md:py-20">
      <div className="container-luxe">
        <div className="grid grid-cols-12 gap-y-14 gap-x-6">
          <div className="col-span-12 lg:col-span-5">
            <SectionHeading
              index="✦  01"
              eyebrow="The Path · เส้นทาง"
              title={
                <>
                  ผมไม่อยาก
                  <br />
                  เป็นเทรนเนอร์
                  <br />
                  <span className="italic gold-text">ตลอดชีวิต</span>
                  <br />
                  ของคุณ
                </>
              }
              description={
                <>
                  เทรนเนอร์ส่วนใหญ่กลัวให้คนเก่ง — เพราะถ้าคุณเก่ง คุณจะไม่ต้องการเขา.
                  ผมคิดตรงข้าม — งานของผมคือทำให้คุณ <em className="text-gold">ไม่ต้องการผม</em> ให้เร็วที่สุด
                </>
              }
            />
          </div>

          <div className="col-span-12 lg:col-span-7 lg:pl-12 flex flex-col">
            <div className="hairline" />
            {pillars.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease, delay: 0.05 * i }}
                className="grid grid-cols-12 gap-4 py-7 border-b border-gold/15"
              >
                <span className="col-span-2 md:col-span-1 font-display italic text-gold text-xl leading-tight">
                  {p.n}
                </span>
                <div className="col-span-10 md:col-span-4 flex flex-col gap-1">
                  <h3 className="font-display text-2xl md:text-3xl tracking-tight">
                    {p.th}
                  </h3>
                  <span className="text-[10px] uppercase tracking-widest text-gold/65">
                    {p.en}
                  </span>
                </div>
                <p className="col-span-12 md:col-span-7 text-foreground/70 leading-relaxed text-pretty self-center">
                  {p.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

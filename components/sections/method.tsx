"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";

const ease = [0.16, 1, 0.3, 1] as const;

const phases = [
  {
    n: "I",
    moon: "🌑",
    th: "Listen",
    thFull: "ฟังร่างกายก่อน",
    body:
      "ก่อนจะเขียนโปรแกรมแรก ผมต้องฟังคุณก่อน — ชีวิตจริง งาน ครอบครัว ความเครียด ความสัมพันธ์กับอาหาร ประวัติบาดเจ็บ ทุกอย่าง. เพราะการฝึกที่ขัดกับชีวิตจริง คือการฝึกที่ไม่ยั่งยืน",
    deliverables: [
      "Deep-dive interview 90 นาที",
      "Body & movement assessment",
      "วาง baseline ปัจจุบัน",
      "ตั้งเป้าหมาย 3 ระดับ",
    ],
  },
  {
    n: "II",
    moon: "🌓",
    th: "Build",
    thFull: "วางรากฐาน",
    body:
      "เริ่มเทรนตัวต่อตัวจริงจัง คุณยังไม่ต้องเข้าใจว่าทำไม — แค่ทำตามและรู้สึกถึงการเปลี่ยนแปลงของร่างกาย. โภชนาการตัดให้พอดีกับชีวิต ไม่ใช่ตารางที่ทำตามไม่ได้",
    deliverables: [
      "เทรนตัวต่อตัว 2–3 ครั้ง/สัปดาห์",
      "เมนูที่ปรับตามชีวิตจริง",
      "เช็คอินรายสัปดาห์",
      "ฝึกสังเกตตัวเองเบื้องต้น",
    ],
  },
  {
    n: "III",
    moon: "🌗",
    th: "Master",
    thFull: "เข้าใจระบบ",
    body:
      "จุดเปลี่ยน. ผมเริ่มสอนคุณว่า'ทำไม' — คุณเริ่มออกแบบ workout ได้เอง อ่านสัญญาณร่างกาย ปรับโภชนาการตามวันได้. ผมยังอยู่ แต่บทบาทผมเริ่มเปลี่ยน",
    deliverables: [
      "หลักการเขียนโปรแกรม",
      "อ่านฮอร์โมน + การพักของตัวเอง",
      "Mindset work รายสัปดาห์",
      "Semi-independent training",
    ],
  },
  {
    n: "IV",
    moon: "🌕",
    th: "Liberate",
    thFull: "ปล่อยมือ",
    body:
      "เป้าหมายของทั้งโปรแกรมจบที่นี่. คุณออกแบบเดือนข้างหน้าเอง ผมรีวิว ไม่ใช่สั่ง. สิ้นสุดโปรแกรมคุณจะมี playbook ของตัวเอง — ใช้ได้ตลอดชีวิต ไม่ต้องการผมอีก",
    deliverables: [
      "Personal playbook สรุปทุกบทเรียน",
      "เขียนโปรแกรมเดือนถัดไปเอง",
      "Final session + roadmap 12 เดือน",
      "Open-door check-in รายไตรมาส (ฟรี)",
    ],
  },
];

export function Method() {
  return (
    <section id="method" className="relative scroll-mt-nav py-14 md:py-20">
      <div className="container-luxe">
        <SectionHeading
          index="✦  07"
          eyebrow="The Method · 7 phases of return"
          title={
            <>
              4 ช่วง —
              <br />
              ของการเดินทาง
              <br />
              <span className="italic gold-text">กลับบ้าน</span>
            </>
          }
          description={
            <>
              ไม่ใช่โปรแกรมเทรนทั่วไป — เป็นกระบวนการที่ค่อย ๆ โอนความรู้
              และอำนาจการตัดสินใจ จากผมไปสู่คุณ
              จนในวันสุดท้าย — ผมเป็นเพียงที่ปรึกษา ไม่ใช่ผู้สั่ง
            </>
          }
        />

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-12">
          {phases.map((p, i) => (
            <motion.article
              key={p.n}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease, delay: 0.06 * i }}
              className="col-span-12 lg:col-span-6 group"
            >
              <div className="grid grid-cols-12 gap-4 lg:gap-6 pb-8 border-b border-gold/15 group-hover:border-gold/40 transition-colors">
                <div className="col-span-3 md:col-span-2 flex flex-col gap-2 items-start">
                  <span className="font-display text-5xl md:text-6xl gold-text leading-none italic">
                    {p.n}
                  </span>
                  <span className="text-2xl mt-1" aria-hidden>
                    {p.moon}
                  </span>
                </div>
                <div className="col-span-9 md:col-span-10 flex flex-col gap-5">
                  <div className="flex items-baseline justify-between gap-3 flex-wrap">
                    <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                      {p.thFull}{" "}
                      <span className="italic text-gold/80 text-2xl md:text-3xl">
                        {p.th}
                      </span>
                    </h3>
                  </div>
                  <p className="text-foreground/70 leading-relaxed text-pretty">
                    {p.body}
                  </p>
                  <ul className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-5 border-t border-gold/10">
                    {p.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2.5 text-sm text-foreground/75"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-gold shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const shifts = [
  {
    pillar: "Sleep",
    th: "การนอนที่คุณไม่เคยมี",
    en: "Deeper Sleep",
    body:
      "ครั้งแรกที่คุณหลับโดยไม่ต้องบอกสมองให้หยุดคิด — เพราะร่างกายที่ใช้พลังงานจริง ต้องการการพักจริง. ฮอร์โมนที่หลั่งตอนหลับลึก คือสิ่งที่ซ่อมแซมคุณในขณะที่คุณไม่รู้ตัว — สิ่งที่ไม่มีอาหารเสริมไหนเทียบได้",
  },
  {
    pillar: "Nutrition",
    th: "อาหารที่กลับมาเป็นเพื่อน",
    en: "Food, Reclaimed",
    body:
      "วันที่คุณเลิกกินเพราะเครียด เพราะเหงา เพราะเบื่อ — แล้วเริ่มกินเพราะหิวจริง คือวันที่อาหารกลับมาเป็นเพื่อนคุณอีกครั้ง. คุณจะไม่ต้องไดเอท เพราะคุณไม่ต้องสู้กับตัวเองอีกแล้ว",
  },
  {
    pillar: "Energy",
    th: "ตื่นเช้าที่เปลี่ยนทั้งวัน",
    en: "Mornings That Change Everything",
    body:
      "เช้าที่ตื่นโดยไม่ต้องสู้กับนาฬิกา ไม่ต้องรอกาแฟแก้วแรก — เพราะร่างกายพร้อมแล้วก่อนคุณจะรู้สึกตัว. และเมื่อคุณมีพลังก่อนแปดโมง ทุกการตัดสินใจของวันนั้น จะคมขึ้นเป็นเท่าตัว",
  },
  {
    pillar: "Relationship",
    th: "คนที่อยู่รอบตัวจะเริ่มเปลี่ยน",
    en: "Bonds That Deepen",
    body:
      "ไม่ใช่เพราะคุณดูดีขึ้น — แต่เพราะคุณรักษาสัญญากับตัวเองได้ทุกวัน. ความเชื่อใจที่คุณสร้างให้ตัวเอง จะกลายเป็นความเชื่อใจที่คุณกล้ามอบให้คนอื่น และเลือกคนที่คู่ควรมากขึ้น",
  },
  {
    pillar: "Inner",
    th: "ใจที่ไม่ถูกเขย่าง่ายอีกต่อไป",
    en: "An Unshakeable Mind",
    body:
      "ความเครียดที่เคยเก็บในร่างกาย ถูกระบายออกทุกครั้งที่คุณยกของหนัก ทุกครั้งที่หายใจเหนื่อย. ใจที่นิ่งคือผลข้างเคียงของร่างกายที่นิ่ง — ไม่ใช่ทักษะที่ต้องนั่งสมาธิหลายปีจึงจะได้",
  },
];

export function Shift() {
  return (
    <section
      id="shift"
      className="relative scroll-mt-nav py-20 md:py-28 overflow-hidden"
    >
      <div className="container-luxe relative">
        <div className="grid grid-cols-12 gap-y-14 gap-x-6 items-start">
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-7 lg:sticky lg:top-32">
            <div className="flex items-center gap-4">
              <span className="font-display italic text-gold text-lg leading-none">
                ✦  05
              </span>
              <span className="h-px w-8 bg-gold/40" aria-hidden />
              <span className="text-[11px] uppercase tracking-widest text-gold/75">
                The Shift · สิ่งที่ได้จริง
              </span>
            </div>
            <h2 className="text-display-lg font-display font-light text-balance">
              คุณคิดว่ามาเพื่อ
              <br />
              <span className="italic gold-text">หุ่นที่อวดได้</span>
              <br />
              แต่จะได้
              <br />
              <span className="italic gold-text">ชีวิตที่อวดไม่ได้</span>
            </h2>
            <p className="text-foreground/75 text-base md:text-lg leading-relaxed text-pretty max-w-md">
              สิ่งที่คนเปลี่ยนแปลงจริง ๆ บอกผมเหมือน ๆ กัน —
              ไม่ใช่ตัวเลขบนตาชั่ง ไม่ใช่ comment ในโซเชียล. เป็น{" "}
              <span className="text-gold">5 อย่างนี้</span> —
              ที่ไม่มีใครเคยพูดถึงในยิม
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 flex flex-col">
            <div className="hairline" />
            {shifts.map((s, i) => (
              <motion.div
                key={s.en}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease, delay: 0.05 * i }}
                className="grid grid-cols-12 gap-4 py-7 border-b border-gold/15"
              >
                <span className="col-span-2 md:col-span-1 font-display italic text-gold/80 text-base mt-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-10 md:col-span-11 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between gap-4 flex-wrap">
                    <h3 className="font-display text-2xl md:text-3xl tracking-tight text-pretty leading-tight">
                      {s.th}
                    </h3>
                    <span className="shrink-0 text-[10px] uppercase tracking-widest text-gold/60">
                      {s.pillar}
                    </span>
                  </div>
                  <p className="text-foreground/75 leading-relaxed text-pretty max-w-2xl">
                    {s.body}
                  </p>
                  <span className="text-[11px] uppercase tracking-widest text-gold/55 italic font-display mt-1">
                    — {s.en}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

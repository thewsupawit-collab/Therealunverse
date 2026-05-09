"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/section-heading";

const faqs = [
  {
    q: "ราคาเท่าไหร่ ทำไมไม่บอกบนเว็บ?",
    a: "เพราะผมไม่อยากให้คุณตัดสินใจจากตัวเลขก่อนได้คุยกัน. โปรแกรมนี้ไม่เหมาะกับทุกคน — และถ้าคุณเข้ากันได้ ราคาจะสมเหตุสมผลมากเมื่อเทียบกับสิ่งที่จะอยู่กับคุณตลอดชีวิต. ผมคุยเรื่องราคาในรอบ discovery call ฟรี",
  },
  {
    q: "ทำไม 3 เดือนถึงเป็นขั้นต่ำ?",
    a: "เพราะ 4 phase ของวิธีต้องการเวลาให้ความรู้ฝังลงในตัวคุณจริง ๆ ไม่ใช่แค่จำได้. การเปลี่ยนแปลงที่ลึกกว่าผิวเผิน ไม่เกิดได้ในไม่กี่สัปดาห์ — ขอให้คุณให้เวลาตัวเอง",
  },
  {
    q: "E-book มีอะไรบ้าง — และฟรีจริงสำหรับ 3/6 เดือน?",
    a: "E-book 'The Codex' รวมหลักทุกอย่างที่ผมสอน 1:1 — ทั้งหลักการเทรน โภชนาการ Mindset framework และเทมเพลตเขียนโปรแกรมเอง. สำหรับ 3 เดือนและ 6 เดือนคุณจะได้รับฟรีพร้อมโปรแกรม ส่วนคนที่ซื้อแยกได้แค่หนังสือ — เริ่มต้นเส้นทางเองก่อนได้เช่นกัน",
  },
  {
    q: "เทรนตัวต่อตัวที่ยิม หรือ online?",
    a: "ทั้งคู่. กรุงเทพและปริมณฑลเทรนตัวต่อตัวที่ยิมที่ผมร่วมงาน — ต่างจังหวัดและต่างประเทศใช้ระบบ online (Zoom + app) ที่ออกแบบให้ใส่ใจไม่แพ้แบบ in-person",
  },
  {
    q: "ผมไม่เคยเทรนเลย เหมาะมั้ย?",
    a: "เหมาะมาก. ผมชอบสอนคนที่ยังไม่มี habit เก่าที่ต้องแก้ — เพราะเริ่มจากศูนย์ได้เลย ไม่ต้องเสียเวลาแก้ฟอร์มผิด ๆ ที่สะสมมา",
  },
  {
    q: "ถ้าผมยังไม่พร้อมเปลี่ยนอาหารเลยล่ะ?",
    a: "ก็ไม่ต้องเปลี่ยนทันที. โปรแกรมนี้ไม่ใช่ diet plan ที่บังคับใน 7 วัน — เราจะปรับโภชนาการตามจังหวะที่ชีวิตคุณรับได้ ขอแค่เปิดใจรับการเปลี่ยนแปลงในที่สุด",
  },
  {
    q: "หลังจบโปรแกรมแล้วยังคุยกันได้มั้ย?",
    a: "ได้ และผมตั้งใจให้เป็นแบบนั้น. ลูกค้าที่จบแล้วมีระบบ check-in ฟรีรายไตรมาส — ไม่ใช่เพื่อให้กลับมาเป็นลูกค้า แต่เพื่อให้รู้ว่ายังมีคนเป็นกำลังใจอยู่",
  },
  {
    q: "คุณเพิ่งเริ่มเป็นโค้ช — ทำไมผมถึงควรไว้ใจ?",
    a: "ผมไม่ขอให้คุณไว้ใจเพราะผมมีเคสเป็นร้อย — เพราะผมไม่มี. ผมขอให้คุณไว้ใจเพราะวิธีที่ผมจะใช้กับคุณ คือวิธีเดียวกับที่ผมใช้กับตัวเองทุกวัน — และมันได้ผล. ถ้าคุณคุยกับผมแล้วยังไม่รู้สึกว่าใช่ — ก็ไม่ต้องสมัคร และนั่นคือคำตอบที่ดีของทั้งสองฝ่าย",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-nav py-20 md:py-28">
      <div className="container-luxe">
        <div className="grid grid-cols-12 gap-x-6 gap-y-12">
          <div className="col-span-12 lg:col-span-4">
            <SectionHeading
              index="✦  08"
              eyebrow="FAQ · คำถามที่ถามบ่อย"
              title={
                <>
                  คำถามที่
                  <br />
                  คุณคงกำลัง
                  <br />
                  <span className="italic gold-text">คิดอยู่</span>
                </>
              }
              description="ถ้าคำตอบยังไม่ครอบคลุม — ส่งฟอร์มสมัครเข้ามาในรอบ discovery ผมตอบทุกข้อความเอง"
            />
          </div>

          <div className="col-span-12 lg:col-span-8">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-gold/15">
                  <AccordionTrigger className="font-display text-xl md:text-2xl hover:text-gold">
                    <span className="flex items-baseline gap-4 text-left">
                      <span className="font-display italic text-gold text-sm shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pl-10 text-base leading-relaxed text-pretty text-foreground/75">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

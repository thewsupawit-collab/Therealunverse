"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ease = [0.16, 1, 0.3, 1] as const;

const programOptions = [
  { id: "ebook", label: "E-book — เริ่มเองก่อน" },
  { id: "3mo", label: "3 เดือน — The Awakening" },
  { id: "6mo", label: "6 เดือน — The Pilgrimage" },
  { id: "unsure", label: "ยังไม่แน่ใจ ขอคุยก่อน" },
];

export function Apply() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    program: "",
    goal: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof typeof form, v: string) =>
    setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.contact && form.goal) setSubmitted(true);
  };

  return (
    <section
      id="apply"
      className="relative scroll-mt-nav py-20 md:py-28 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[80vw] -translate-x-1/2 rounded-full bg-gradient-radial-gold blur-3xl opacity-60"
      />

      <div className="container-luxe relative">
        <div className="grid grid-cols-12 gap-x-6 gap-y-16 items-start">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <span className="font-display italic text-gold text-lg leading-none">
                ✦  09
              </span>
              <span className="h-px w-8 bg-gold/40" aria-hidden />
              <span className="text-[11px] uppercase tracking-widest text-gold/75">
                The Beginning · จุดเริ่มต้น
              </span>
            </div>
            <h2 className="text-display-xl font-display font-light text-balance">
              ถ้าคุณอ่านมา
              <br />
              ถึงตรงนี้ —
              <br />
              <span className="italic gold-text">คุณรู้แล้ว</span>
              <br />
              ว่าควรเริ่ม
            </h2>
            <p className="text-foreground/75 text-lg leading-relaxed text-pretty max-w-xl">
              เสียงเงียบ ๆ ในตัวคุณที่อ่านมาถึงบรรทัดนี้ —{" "}
              <span className="text-gold">นั่นคือคำตอบ</span>.
              ส่งฟอร์มเข้ามา ผมจะคุยกับคุณภายใน 48 ชั่วโมง ในรอบ discovery call
              (ฟรี ไม่มีการกดดัน) เพื่อดูว่าเราเข้ากันได้มั้ย
            </p>

            <ul className="flex flex-col gap-3 mt-2 text-foreground/75">
              {[
                "Discovery call ฟรี — ไม่ใช่ขายของ",
                "ตอบกลับภายใน 48 ชั่วโมง ทุกฟอร์ม",
                "ถ้าผมเห็นว่าไม่ใช่ ผมจะแนะนำที่อื่นให้",
              ].map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <p className="font-display italic text-2xl text-foreground/90 leading-snug max-w-md mt-4 text-pretty">
              "เป้าหมายของผมคือให้คุณ{" "}
              <span className="gold-text">ไม่ต้องการผมในที่สุด</span>"
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease }}
            className="col-span-12 lg:col-span-6 lg:pl-8"
          >
            {!submitted ? (
              <form
                onSubmit={onSubmit}
                className="rounded-2xl border border-gold/25 bg-card/70 backdrop-blur p-7 md:p-9 flex flex-col gap-6 shadow-gold"
              >
                <Field label="ชื่อ" hint="(ใช้ติดต่อกลับ)" required>
                  <Input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="คุณชื่ออะไร"
                    className="bg-background/60 border-gold/20 text-foreground placeholder:text-foreground/35 focus-visible:ring-gold"
                  />
                </Field>

                <Field
                  label="ช่องทางติดต่อ"
                  hint="LINE / IG / email — เลือกที่สะดวก"
                  required
                >
                  <Input
                    required
                    value={form.contact}
                    onChange={(e) => update("contact", e.target.value)}
                    placeholder="@line_id หรือ email"
                    className="bg-background/60 border-gold/20 text-foreground placeholder:text-foreground/35 focus-visible:ring-gold"
                  />
                </Field>

                <Field label="โปรแกรมที่สนใจ" hint="เปลี่ยนใจได้ในการคุย">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {programOptions.map((opt) => {
                      const selected = form.program === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => update("program", opt.id)}
                          className={[
                            "rounded-full px-4 py-2.5 text-xs text-left border transition-all",
                            selected
                              ? "bg-gold/20 border-gold/60 text-foreground"
                              : "bg-transparent border-gold/15 text-foreground/65 hover:border-gold/40 hover:text-foreground",
                          ].join(" ")}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </Field>

                <Field
                  label="สิ่งที่อยากเปลี่ยน"
                  hint="เล่าจากใจ — ไม่ต้องคิดเยอะ"
                  required
                >
                  <textarea
                    required
                    rows={4}
                    value={form.goal}
                    onChange={(e) => update("goal", e.target.value)}
                    placeholder="เช่น อยากเข้าใจตัวเองมากขึ้น / อยากนอนดี / อยากเปลี่ยนทั้งวิถีชีวิต"
                    className="w-full rounded-2xl bg-background/60 border border-gold/20 text-foreground placeholder:text-foreground/35 px-5 py-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold resize-none"
                  />
                </Field>

                <Button type="submit" size="lg" variant="gold" className="mt-2">
                  ส่งสมัคร <ArrowRight className="h-4 w-4" />
                </Button>

                <p className="text-xs text-foreground/45 -mt-2 leading-relaxed">
                  เมื่อส่งฟอร์ม ผมเก็บข้อมูลของคุณไว้เพื่อติดต่อกลับเท่านั้น —
                  ไม่มีการแชร์หรือใช้ส่งโฆษณาใด ๆ
                </p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease }}
                className="rounded-2xl border border-gold/40 bg-card/80 backdrop-blur p-9 md:p-12 flex flex-col gap-5 shadow-gold"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-gold text-obsidian-deep">
                  <Check className="h-5 w-5" />
                </span>
                <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                  ขอบคุณ {form.name || "ครับ"} —
                  <br />
                  <span className="italic gold-text">การเดินทางเริ่มแล้ว</span>
                </h3>
                <p className="text-foreground/75 leading-relaxed text-pretty">
                  ผมจะอ่านที่คุณส่งมาทุกบรรทัด แล้วทักกลับภายใน 48 ชั่วโมงทาง{" "}
                  <span className="text-foreground">{form.contact}</span>.
                  ระหว่างนี้ — ลองหายใจลึก ๆ. คุณกล้ามากแล้วที่กดส่งฟอร์มนี้
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", contact: "", program: "", goal: "" });
                  }}
                  className="mt-2 text-sm text-gold hover:text-gold-light transition self-start"
                >
                  ส่งฟอร์มใหม่
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="flex items-baseline justify-between gap-2">
        <span className="text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-gold"> *</span>}
        </span>
        {hint && (
          <span className="text-[11px] text-foreground/45">{hint}</span>
        )}
      </span>
      {children}
    </label>
  );
}

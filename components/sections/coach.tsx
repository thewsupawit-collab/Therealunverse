"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const milestones = [
  {
    year: "2024",
    title: "ผมเคยรู้สึกแปลก ๆ ในร่างของตัวเอง",
    body:
      "ผมไม่มั่นใจในตัวเอง รู้สึกว่าชีวิตต้องการอะไรบางอย่างที่ต่างออกไป อยากทำอะไรให้มันสำเร็จสักอย่าง อยากมีหุ่นดี — แค่อยากรู้สึกว่าตัวเองทำได้",
  },
  {
    year: "การเดินทาง",
    title: "ไม่ใช่พรสวรรค์ — เป็นวันที่ทำซ้ำจนกลายเป็นตัวตน",
    body:
      "ความเข้าใจร่างกาย โภชนาการที่พอดี และวินัยรายวัน — บางวันก็ขี้เกียจ บางวันก็ท้อ บางวันก็เจ็บ. แต่ผมยังทำต่อ. ทุกการเปลี่ยนแปลงที่คุณเห็น — ไม่มีอะไรที่คุณทำตามไม่ได้",
  },
  {
    year: "2026",
    title: "ทำไมผมถึงอยากสอน",
    body:
      "เพราะตอนผมเริ่ม ผมต้องเดินคนเดียว เสียเวลาไปเยอะ. ตอนนี้พอมีคนกำลังนั่งอ่านอยู่ตรงนี้ ในจุดเดียวกับที่ผมเคยอยู่ — ถ้าผมเดินไปกับเขาช่วงหนึ่งได้ ก็พอแล้วสำหรับผม",
  },
];

interface PhotoCard {
  src: string;
  alt: string;
  badge: string;
  badgeStyle: "muted" | "gold";
  caption: string;
  sub: string;
  objectPosition?: string;
  saturate?: number;
  delay?: number;
  highlighted?: boolean;
}

const photos: PhotoCard[] = [
  {
    src: "/coach-thew-2024.jpg",
    alt: "Thew — 2024",
    badge: "2024",
    badgeStyle: "muted",
    caption: "Before",
    sub: "Day 0",
    saturate: 0.6,
  },
  {
    src: "/coach-thew-journey.jpg",
    alt: "Thew — the journey",
    badge: "Journey",
    badgeStyle: "muted",
    caption: "In Progress",
    sub: "Two years between",
    objectPosition: "center 18%",
    saturate: 0.85,
    delay: 0.1,
  },
  {
    src: "/coach-thew-hero.jpg",
    alt: "Thew — 2026",
    badge: "2026",
    badgeStyle: "gold",
    caption: "Now",
    sub: "Two years later",
    objectPosition: "center 15%",
    delay: 0.2,
    highlighted: true,
  },
];

export function CoachStory() {
  return (
    <section
      id="coach"
      className="relative scroll-mt-nav py-14 md:py-20"
    >
      {/* subtle gold backdrop — clipped here so it doesn't bleed, but section stays overflow-visible
          so Thai tone marks (ไม้โท ฯลฯ) on display headings don't get clipped */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute right-[-15%] top-[20%] h-[55vh] w-[55vh] rounded-full bg-gradient-radial-gold blur-3xl opacity-60" />
      </div>

      <div className="container-luxe relative">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6 items-start">
          {/* Left: header column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-7">
            <div className="flex items-center gap-4">
              <span className="font-display italic text-gold text-lg leading-none">
                ✦  02
              </span>
              <span className="h-px w-8 bg-gold/40" aria-hidden />
              <span className="text-[11px] uppercase tracking-widest text-gold/75">
                My Story · เรื่องของผม
              </span>
            </div>

            <h2 className="text-display-lg font-thai font-light text-balance !leading-[1.35] pt-3 pb-1">
              ถ้าผมทำได้ —
              <br />
              <span className="gold-text">คุณก็ทำได้</span>
              <br />
              เราคนเหมือนกัน
            </h2>

            <p className="text-foreground/75 text-base md:text-lg leading-relaxed text-pretty max-w-md">
              The Real Universe ไม่ได้เริ่มจากตำรา —
              เริ่มจากเด็กผู้ชายคนหนึ่ง ที่เคย{" "}
              <span className="text-gold">
                รู้สึกว่าตัวเองยังไม่พอ
              </span>
              . และเชื่อมาตลอดว่าหุ่นที่ใฝ่ฝัน — เป็นสิ่งที่{" "}
              <span className="text-gold">ได้มายาก</span> ไม่ใช่สำหรับคนธรรมดาคนหนึ่ง
            </p>

            <p className="font-display italic text-xl md:text-2xl text-foreground/90 leading-snug max-w-md text-pretty mt-2">
              "ผมเปลี่ยนได้ ไม่ใช่เพราะผมเก่ง — แต่เพราะวันหนึ่งผมหยุด{" "}
              <span className="gold-text">เกลียดตัวเอง</span> แล้วเริ่ม{" "}
              <span className="gold-text">เคารพตัวเอง</span>"
            </p>
          </div>

          {/* Right: triptych + 3 milestones */}
          <div className="col-span-12 lg:col-span-7 flex flex-col gap-10">
            {/* Triptych — 2024 / การเดินทาง / 2026 */}
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {photos.map((p) => (
                <motion.figure
                  key={p.src}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease, delay: p.delay ?? 0 }}
                  className={[
                    "relative aspect-[3/4] overflow-hidden rounded-2xl",
                    p.highlighted
                      ? "border border-gold/35 shadow-gold ring-1 ring-gold/20"
                      : "border border-gold/15",
                  ].join(" ")}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 22vw"
                    className="object-cover"
                    style={{
                      objectPosition: p.objectPosition,
                      filter: p.saturate ? `saturate(${p.saturate})` : undefined,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                  <figcaption
                    className={[
                      "absolute top-2 left-2 md:top-3 md:left-3 inline-flex rounded-full px-2.5 py-1 md:px-3 md:py-1.5 text-[9px] md:text-[10px] uppercase tracking-widest",
                      p.badgeStyle === "gold"
                        ? "bg-gradient-gold text-obsidian-deep font-semibold"
                        : "bg-background/70 backdrop-blur text-foreground/85 border border-foreground/10",
                    ].join(" ")}
                  >
                    {p.badge}
                  </figcaption>
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 flex flex-col gap-0.5">
                    <span
                      className={[
                        "text-[9px] md:text-[10px] uppercase tracking-widest",
                        p.highlighted ? "text-gold/80" : "text-foreground/55",
                      ].join(" ")}
                    >
                      {p.sub}
                    </span>
                    <p className="font-display text-base md:text-xl tracking-tight leading-tight">
                      {p.caption}
                    </p>
                  </div>
                </motion.figure>
              ))}
            </div>

            {/* Story milestones — only 3 now */}
            <div className="flex flex-col">
              <div className="hairline" />
              {milestones.map((m, i) => (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease, delay: 0.05 * i }}
                  className="grid grid-cols-12 gap-4 py-7 border-b border-gold/15 last:border-b-0"
                >
                  <span className="col-span-3 md:col-span-2 font-display italic text-gold/85 text-sm md:text-base mt-1.5 leading-tight">
                    {m.year}
                  </span>
                  <div className="col-span-9 md:col-span-10 flex flex-col gap-2.5">
                    <h3 className="font-display text-xl md:text-2xl tracking-tight text-pretty leading-snug">
                      {m.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed text-pretty text-sm md:text-base">
                      {m.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

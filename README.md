# The Real Universe

เว็บไซต์ 1:1 coaching ของ **Tew** — โค้ชที่สอนให้ลูกค้ายืนได้ด้วยตัวเองหลังจบโปรแกรม ไม่ต้องติดเทรนเนอร์ตลอดชีวิต

> **ฝึกครั้งเดียว ใช้ได้ทั้งชีวิต**
> *Train once. Live it forever.*

---

## Tech stack

- **Next.js 16** (App Router · Turbopack · Metadata API · Sitemap & Robots)
- **TypeScript** (strict)
- **TailwindCSS** — minimalist editorial palette (ivory / ink / sand)
- **Framer Motion** — scroll & micro-interactions
- **Radix UI primitives** ห่อแบบ shadcn (Accordion · Dialog · Tabs · Progress)
- **next-themes** — dark / light mode
- **lucide-react** — icons
- ฟอนต์: **Fraunces** (display serif), **Inter** (sans), **IBM Plex Sans Thai** (Thai body) ผ่าน `next/font`

---

## ภาษาและทิศทาง

ไทยเป็นหลัก + headline อังกฤษเป็น accent (editorial layered) — ทุก nav item มีทั้งสองภาษา และ section heading จะมีบรรทัดอังกฤษเล็ก ๆ ห้อยอยู่กับเลขลำดับ section

---

## โครง 8 sections

| # | Section | What it does |
|---|---|---|
| 01 | **Hero** | คำสัญญาเดียวที่หนักแน่น *"จบโปรแกรม คุณไม่ต้องการผมอีกเลย"* + 4 ตัวเลขฐานความน่าเชื่อถือ |
| 02 | **Promise / แนวคิด** | ปรัชญา 4 เสา — Understand · Skill · Mindset · Freedom |
| 03 | **The Shift / ชีวิตที่เปลี่ยน** | 6 มิติของชีวิตที่เปลี่ยนเมื่อร่างกายเปลี่ยน (พื้นดำ ตัดอารมณ์) |
| 04 | **Method / วิธีการ** | 12 สัปดาห์ · 4 phases (Assess → Build → Master → Release) |
| 05 | **Who / ใครที่ใช่** | กรองคน — fit-for vs not-for ตรงไปตรงมา |
| 06 | **Stories / เรื่องจริง** | 3 เคส minimalist carousel เน้น pull-quote |
| 07 | **FAQ / คำถาม** | accordion ตอบเรื่องราคา / ระยะเวลา / รูปแบบเทรน |
| 08 | **Apply / สมัคร** | ฟอร์ม 4 ช่อง พื้นดำ — ส่งฟอร์มแล้วโชว์ confirmation |

พร้อม **navbar เลื่อนตาม + glass strong** และ **footer ดำ** มี social + นโยบาย

---

## Folder

```
app/
├── globals.css            # tokens · light/dark · type system
├── layout.tsx             # fonts (Fraunces · Inter · IBM Plex Thai) · metadata · skip-link
├── page.tsx               # composes 8 sections + JSON-LD
├── providers.tsx          # next-themes
├── loading.tsx            # branded loading
├── sitemap.ts / robots.ts
components/
├── layout/                # Navbar · Footer · ThemeToggle
├── shared/                # AnimatedCounter · Reveal · SectionHeading
├── sections/              # hero · promise · shift · method · who · stories · faq · apply
└── ui/                    # button · accordion · card · dialog · tabs · progress · input · badge
lib/
├── site.ts                # brand config (name, nav, social, copy)
└── utils.ts
```

---

## Design system

| Token | Light | Dark |
|---|---|---|
| `background` | `#F4EFE6` (bone) | `#0E0E0E` (ink) |
| `foreground` | `#0E0E0E` (ink) | `#F4EFE6` (bone) |
| `accent` | `#A87E5A` (sand) | `#C49E7A` (sand-light) |

- **Display:** Fraunces variable + italic — editorial, มีบุคลิก
- **Sans:** Inter
- **Thai:** IBM Plex Sans Thai (อ่านง่าย คุณภาพระดับ google fonts)
- **Radius:** `0.875rem` (มินิมอล ไม่กลมโบ๋)
- **Shadows:** ไม่มี — ใช้ hairline borders แทน

---

## Run

```bash
npm install
npm run dev   # → http://localhost:3000
npm run build && npm start
```

---

## ปรับเอง

| อยากเปลี่ยน | แก้ที่ |
|---|---|
| ชื่อแบรนด์ / nav / social / email | `lib/site.ts` |
| สี / ฟอนต์ / ขนาด | `tailwind.config.ts` + `app/globals.css` |
| copy ในแต่ละ section | `components/sections/<name>.tsx` |
| 4 phase ของวิธี | `components/sections/method.tsx` |
| FAQ | `components/sections/faq.tsx` |
| ฟอร์มสมัคร / ฟิลด์ | `components/sections/apply.tsx` |
| OG image / icons | drop ลงใน `public/` |

---

## License

Private. © The Real Universe — coached by Tew.

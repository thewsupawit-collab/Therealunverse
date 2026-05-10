export const siteConfig = {
  name: "The Real Universe",
  shortName: "TRU",
  tagline: "ร่างกายคือประตู — ของจักรวาลที่อยู่ในตัวคุณ",
  taglineEn: "The body is the door. The universe waits inside.",
  description:
    "1:1 coaching ที่ออกแบบมาให้คุณกลับสู่ตัวเอง — ฝึกครั้งเดียว ใช้ได้ทั้งชีวิต โดยไม่ต้องพึ่งเทรนเนอร์",
  url: "https://therealuniverse.coach",
  ogImage: "/og.jpg",
  email: "tew@therealuniverse.coach",
  coach: {
    name: "Thew",
    fullName: "Thew",
    role: "Founder & Coach",
  },
  social: {
    instagram: "https://instagram.com/therealuniverse",
    tiktok: "https://tiktok.com/@therealuniverse",
    youtube: "https://youtube.com/@therealuniverse",
    line: "https://line.me/ti/p/~therealuniverse",
  },
  nav: [
    { label: "Path", labelTh: "เส้นทาง", href: "#promise" },
    { label: "Programs", labelTh: "โปรแกรม", href: "#programs" },
    { label: "My Story", labelTh: "เรื่องของผม", href: "#coach" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

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
    instagram: "https://www.instagram.com/thew.spw/",
    facebook: "https://www.facebook.com/profile.php?id=61588987701227",
    youtube: "https://www.youtube.com/@thewes1or",
    line: "https://line.me/ti/p/~therealuniverse",
  },
  nav: [
    { label: "Path", labelTh: "เส้นทาง", href: "#promise" },
    { label: "My Story", labelTh: "เรื่องของผม", href: "#coach" },
    { label: "Programs", labelTh: "โปรแกรม", href: "#programs" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

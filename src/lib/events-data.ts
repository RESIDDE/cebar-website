export interface EventItem {
  id: string;
  num: string;
  title: string;
  theme: string;
  dateStr: string;
  targetDate: Date; // For countdown if applicable
  time: string;
  location: string;
  description: string;
  ticketPrice: string;
  status: "UPCOMING" | "COMPLETED";
  image: string;
  registerUrl: string;
}

export const cebarEvents: EventItem[] = [
  {
    id: "aec-2026",
    num: "01",
    title: "Abuja Educators Conference 2026",
    theme: "ENTREPRENEURSHIP IN EDUCATION",
    dateStr: "12 May 2026",
    targetDate: new Date("2026-05-12T09:00:00+01:00"),
    time: "09:00 – 15:00 GMT+1",
    location: "The Rock Event Centre, Kwaba, Abuja, Nigeria",
    description: "Are you an educator, school leader, early years teacher, or a dedicated parent? Don't miss out on the 2026 flagship edition of our Abuja Educators Conference. Gain highly actionable insights, connect with top-tier professionals, and discover game-changing trends in modern educational entrepreneurship.",
    ticketPrice: "Free Entry + Paid Masterclasses",
    status: "UPCOMING",
    image: "https://static.wixstatic.com/media/d9d09a_14d0ffbdbde84a05925850f939710eb3~mv2.jpg/v1/fill/w_526,h_526,al_c,q_80/d9d09a_14d0ffbdbde84a05925850f939710eb3~mv2.jpg",
    registerUrl: "https://www.cebargroup.co.uk/event-details/abuja-educators-conference-2026",
  },
  {
    id: "aec-2025",
    num: "02",
    title: "Abuja Educators Conference 2025",
    theme: "Empowering Educators for Lasting Impact",
    dateStr: "10 Jul 2025",
    targetDate: new Date("2025-07-10T19:00:00"),
    time: "19:00 – 23:00",
    location: "Plot 686, Jabi Airport Road Bypass, Cadastral Zone, Abuja",
    description: "Our landmark 2025 conference combined with the prestigious NCCE Programme. The focus was on pedagogical transformation, leadership empowerment, and placement systems, bringing together educators across the Federal Capital Territory.",
    ticketPrice: "Completed",
    status: "COMPLETED",
    image: "https://static.wixstatic.com/media/343e49_6c65ec77ac924e4ead95d9b2f10d2638~mv2.jpeg/v1/fill/w_1080,h_864,al_c,q_85/343e49_6c65ec77ac924e4ead95d9b2f10d2638~mv2.jpeg",
    registerUrl: "https://www.cebargroup.co.uk/event-details/abuja-educators-conference-2025",
  },
  {
    id: "aec-2024",
    num: "03",
    title: "Abuja Educators Conference 2024",
    theme: "ENVOYS OF CHANGE",
    dateStr: "18 Jul 2024",
    targetDate: new Date("2024-07-18T09:00:00"),
    time: "09:00 – 16:00",
    location: "Abuja, Nigeria",
    description: "An incredible 4-in-1 curriculum model pilot event and in-depth Masterclasses led by seasoned global practitioners. Focused heavily on building positive school culture, soft-skills training, and classroom administration excellence.",
    ticketPrice: "Completed",
    status: "COMPLETED",
    image: "https://static.wixstatic.com/media/f167bf_fe3e5bdeaa294769a4936bf5b10f268b~mv2.jpg/v1/fit/w_960,h_724,q_90/f167bf_fe3e5bdeaa294769a4936bf5b10f268b~mv2.jpg",
    registerUrl: "https://www.cebargroup.co.uk/event-details/abuja-educators-conference-2024",
  },
];

/** An event is past once its start time has gone by. */
export const isPast = (evt: EventItem, now = new Date()) => evt.targetDate.getTime() < now.getTime();

const SMALL_WORDS = new Set(["in", "of", "for", "and", "the", "a"]);

/** Themes are stored in mixed case ("ENVOYS OF CHANGE"); show them in title case. */
export const eventTheme = (evt: EventItem) =>
  evt.theme
    .toLowerCase()
    .split(" ")
    .map((w, i) => (i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");

/** The 2026 Wix flyer is only 526px wide; the local copy of the same programme is 1950px. */
const imageOverrides: Record<string, { src: string; position?: string }> = {
  "aec-2026": { src: "/ait%20interview.jpeg", position: "object-top" },
};

/** Best available image for an event: a local high-res override, else the Wix original. */
export const eventImage = (evt: EventItem) =>
  imageOverrides[evt.id] ?? { src: evt.image.replace(/\/v1\/.*$/, ""), position: "object-center" };

export const eventYear = (evt: EventItem) => evt.title.match(/\d{4}/)?.[0] ?? "";

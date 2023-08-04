import { events, fun, hackathon } from "../assets/icon";

interface services {
  id: number;
  icon: string;
  title: string;
  details: string;
}

export const services: services[] = [
  {
    id: 0,
    icon: events,
    title: "Pre-Hackathon week",
    details:
      "We host social events to bring our community members closer together in a relaxed and enjoyable setting. These events can include game nights, virtual happy hours, or casual meetups where members can unwind, socialize, and connect on a personal level.",
  },
  {
    id: 1,
    icon: hackathon,
    title: "Games and Fun",
    details:
      "We organize exhilarating hackathons where members come together to collaborate, innovate, and build exciting projects within a limited timeframe. These events provide a high-energy environment to showcase creativity, problem-solving skills, and teamwork.",
  },
  {
    id: 2,
    icon: fun,
    title: "Networking",
    details:
      "We invite industry experts and guest speakers to deliver engaging tech talks, share their experiences, and provide insights into the latest trends and advancements in the tech world. These sessions inspire, educate, and spark meaningful discussions among community members.",
  },
];

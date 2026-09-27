export type Event = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: Event[] = [
  {
    title: "Tech Innovators Summit",
    image: "/images/event1.png",
    slug: "tech-innovators-summit",
    location: "San Francisco, CA",
    date: "October 15, 2026",
    time: "9:00 AM",
  },
  {
    title: "AI & Future of Work",
    image: "/images/event2.png",
    slug: "ai-future-of-work",
    location: "New York, NY",
    date: "October 18, 2026",
    time: "11:30 AM",
  },
  {
    title: "Startup Pitch Night",
    image: "/images/event3.png",
    slug: "startup-pitch-night",
    location: "Austin, TX",
    date: "October 22, 2026",
    time: "6:30 PM",
  },
  {
    title: "Design Systems Meetup",
    image: "/images/event4.png",
    slug: "design-systems-meetup",
    location: "Chicago, IL",
    date: "October 27, 2026",
    time: "5:00 PM",
  },
];

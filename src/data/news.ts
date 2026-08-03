import newsFeatured from "../assets/news-featured.jpg";
import news1 from "../assets/news-1.jpg";
import news2 from "../assets/news-2.jpg";
import news3 from "../assets/news-3.jpg";
import event1 from "../assets/event-1.jpg";

export type Article = {
  slug: string;
  title: string;
  /* placeholder date — [Add exact date] before publishing */
  date: string;
  category: "Championships" | "Academy" | "Membership" | "Federation";
  excerpt: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  /* body paragraphs — written in IYSF's own voice, facts marked where unknown */
  body: string[];
};

export const ARTICLES: Article[] = [
  {
    slug: "world-championship-largest-field",
    title: "World Championship delivers the largest field in IYSF history",
    date: "[Add exact date]",
    category: "Championships",
    excerpt:
      "Athletes from six continents contested the compulsory and optional rounds under the federation's standardized scoring system.",
    image: newsFeatured,
    imageAlt: "Athletes competing at an IYSF world championship",
    featured: true,
    body: [
      "The most recent edition of the IYSF World Championship drew the widest international field the federation has assembled since its first championship in 2013. Delegations arrived from member federations across six continents, competing across the youth, adult and masters divisions.",
      "As at every IYSF championship, athletes performed a compulsory round of prescribed āsanas followed by an optional round of their own composition. Both rounds were assessed by certified international judges against the federation's published criteria for strength, balance, precision and form.",
      "Final placings for every division are published in the championship results archive. [Add exact entry numbers, participating nations and medal counts before publishing.]",
    ],
  },
  {
    slug: "judges-complete-recertification-cycle",
    title: "International judges complete the recertification cycle",
    date: "[Add exact date]",
    category: "Academy",
    excerpt:
      "Certified officials refreshed their credentials against the current technical regulations through the IYSF Academy.",
    image: news1,
    imageAlt: "An IYSF judging panel reviewing scores at a championship",
    body: [
      "Judges holding IYSF credentials have completed the latest recertification cycle run through the IYSF Academy. Recertification keeps every panel working from the same interpretation of the technical regulations, so a score awarded at a continental qualifier means the same thing as a score awarded at a world final.",
      "The Academy operates a tiered pathway for officials, with each tier carrying its own assessment requirements and a fixed renewal cycle. Federations nominate candidates and the Academy administers assessment centrally.",
      "[Add the number of officials certified, the tiers awarded and the countries represented before publishing.]",
    ],
  },
  {
    slug: "junior-division-continental-qualifier",
    title: "Junior division sets the tone at the continental qualifier",
    date: "[Add exact date]",
    category: "Championships",
    excerpt:
      "The youth field showed the depth now coming through national development programmes.",
    image: news2,
    imageAlt: "A junior athlete holding a balance pose on the competition stage",
    body: [
      "The youth division at the latest continental qualifier produced some of the most technically complete routines of the weekend, a reflection of the development work national federations have put into their junior pathways.",
      "Continental qualifiers serve as the route into the World Championship for member federations, and are judged under the same regulations and by the same certified panels as the world event itself.",
      "[Add host city, participating federations and qualifying places awarded before publishing.]",
    ],
  },
  {
    slug: "two-new-national-federations",
    title: "Two national bodies sign IYSF membership agreements",
    date: "[Add exact date]",
    category: "Membership",
    excerpt:
      "The federation continues to widen its national base across its member continents.",
    image: news3,
    imageAlt: "National delegation representatives at an IYSF congress",
    body: [
      "IYSF has signed membership agreements with two further national bodies, extending the federation's reach within its existing continental groups. New members ordinarily enter at Observer or Provisional level and progress to Full Membership as governance, judging and athlete-pathway requirements are met.",
      "Membership brings a national body into the international competition structure: access to continental qualifiers and the World Championship, judge and coach certification through the IYSF Academy, and a seat at Congress.",
      "[Add the names of the two federations and their membership tier before publishing.]",
    ],
  },
  {
    slug: "host-city-shortlist-announced",
    title: "Host city shortlist announced for the next World Championship",
    date: "[Add exact date]",
    category: "Federation",
    excerpt:
      "Candidate cities have been shortlisted ahead of a final decision by the federation's leadership.",
    image: event1,
    imageAlt: "Championship arena prepared for an IYSF event",
    body: [
      "Candidate host cities for the next edition of the IYSF World Championship have been shortlisted. Hosting is awarded in partnership with the national member federation, which takes responsibility for local delivery alongside the federation's technical requirements.",
      "The World Championship has been staged biennially since 2013 and remains the federation's flagship competition, with youth, adult and masters divisions contested at the same event.",
      "[Add shortlisted cities, decision date and championship dates before publishing.]",
    ],
  },
];

export function articleBySlug(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export const FEATURED = ARTICLES.find((a) => a.featured) ?? ARTICLES[0];

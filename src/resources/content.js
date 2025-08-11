import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "the",
  lastName: "Froggers",
  get name() {
    return `${this.firstName}${this.lastName}`;
  },
  role: "NFT Collection",
  avatar: "/images/Frogger_About_01.jpg",
  email: "example@gmail.com",
  location: "", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["10 000", "Froggers"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/once-ui-system/nextjs-starter",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@once_ui",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/mint/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Selene, a design engineer at <Logo icon="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.instagram.com/thefroggers.io/",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        TheFroggers is a collection of 10,000 unique NFTs on the blockchain, created by Manvredo in January 2022 to expand and develop the story of the Froggers in the 3D world of Frogtopia.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "OUR MISSION",
    experiences: [
      {
        company: "TheFroggers",
        timeframe: "2022 - Present",
        role: "NFT Collection",
        achievements: [
          <>
            At TheFroggers, our mission is to provide a platform that excites both collectors and art enthusiasts through innovative use of blockchain technology and digital art. We aim to build a thriving community centered around collaborative storytelling and creative interactions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 21,
            height: 12,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "ORIGINS",
    institutions: [
      {
        name: "TheFroggers Vision",
        description: <>The idea behind TheFroggers stemmed from the vision to create an engaging digital world where creativity, community, and technology converge. Each of the 10,000 Froggers was designed with individual character and style, forming a diverse and vibrant urban society within the metaverse.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      // Empty skills array - section is hidden anyway
    ],
  },
};

const blog = {
  path: "/community",
  label: "Community",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /community route
};

const work = {
  path: "/mint",
  label: "Mint",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /mint routes
};

const theFroggers = {
  path: "/theFroggers",
  label: "theFroggers",
  title: `theFroggers – ${person.name}`,
  description: `theFroggers projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/theFroggers/posts
  // All projects will be listed on the /theFroggers route
};

const gallery = {
  path: "/nfts",
  label: "NFTs",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, theFroggers, gallery };

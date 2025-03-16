import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Chike",
  lastName: "Ani",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Manager",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about people, technology, and share thoughts on the intersection of
      innovation and development.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/CHK-Ani",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chikeani/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Product, Strategy, Innovation.</>,
  subline: (
    <>
      I'm Chike, an aspring Product Manager and current student at Georgia State Universty.
      <br /> Welcome to my portfolio!
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
         Currently enrolled at Georgia State University majoring in Computer Information Systems. Chike is passionate about technology and finding innovative solutions to complex problems. With concentrations including Data Analytics and Digital Innovation. He strives to become that intersection of great technological advancement.  At GSU he participates in several clubs including the Student Government Association, Cybersecurity Club, and Entrepreneurship and Innovation Institute, honing his leadership and collaboration skills.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "General Electric Vernova",
        timeframe: "May 2024 - August 2024",
        role: "Software Development and Technical Product Management Intern",
        achievements: [
          <>Employed an intensive combination of on-the-job training in development, governance, and analyzing various software and data applications including grid orchestration software, DevOps, analytics, and digital user interfaces/experiences.
          </>,
          <>
            Devised customer target demographic that includes over 30 countries, using my previous research, analysis, and examination of product strategy. This made complex data and decision-making easier for senior executives. 
          </>,
          <>
            Worked directly under the Development team for the Artificial Intelligence and Machine Learning Analytic “Disruption Prepare.” Applied development skills to front-end and back-end development processes, reducing critical spark errors to 0. This included providing unit testing with code coverage of 70% for Disruption Prepare data pipelines.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Georgia State University",
        timeframe: "August 2023 - May 2024",
        role: "Student Assistant - Technical Advisor and Administrator	",
        achievements: [
          <>
            Integrated and maintained employee cloud-based systems, which in turn are used to capture student data across Georgia State University Learning Centers. Analyzed this data to curate project resources in cooperation with a team to create the best possible student experience inside learning centers for two Georgia State University semesters.
          </>,
          <>
            Led a cross-functional to query and analyze data trends to uncover hidden patterns, correlations, and anomalies that impacted over 1,200 students performance inside Georgia State University Learning Centers.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Micro Center",
        timeframe: "December 2021 - May 2022",
        role: "Work-Based Learning CSR",
        achievements: [
          <>
Directly managed customer and company databases, which oversaw key information including transaction, customer, and employee efficiency data, which were the backbone of the organization's data and sales infrastructure.           </>,
          <>
A key member of the Consulting and Sales team, achieving a 35% sale rate through direct customer engagement and solution-driven proposals boosting overall site sales and commission rate by 40%.          </>,
          <>
Collaborated and shadowed the computer engineering/repair team to explore and extract valuable insights that were used to boost sales, and customer satisfaction, and optimize store efficiency.        </>,
        ],
        images: [],
      },
    ],
  },
  



  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Georgia State University - May 2026",
        description: <>Bachelor of Business Administration, Major: Computer Information Systems</>,

      },
    ],
  },
  technical: {
    display: false, // set to "false" to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };

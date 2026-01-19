/**
 * Best-practice shape:
 * - numeric year (not string)
 * - consistent fields across items
 * - location grouped (city + country)
 * - images grouped (src + alt)
 * - keywords normalized (lowercase)
 * - optional long-form content kept in `content.markdown`
 */

const projects = [
  {
    id: "modern-home",
    title: "Modern Home",
    subtitle: "A minimal home design.",
    year: 2022,
    keywords: ["architecture"],
    location: {
      city: "Copenhagen",
      country: "Denmark",
    },
    images: {
      cover: {
        src: "/project_images/house01.jpg",
        alt: "Modern home image",
      },
    },
    content: {
      markdown: `
# Rethinking Urban Spaces: Human-Centered Design in the 21st Century

*By Angela M. | July 20, 2025*

![Urban sketch of a modern plaza](https://example.com/images/modern-plaza-sketch.jpg)

---

## Introduction

Cities are growing faster than ever, but are they growing smarter? The modern urban environment presents challenges that demand more than structural innovation — they call for **human-centered design**.

In this post, we explore how architecture can shift from ego-driven monuments to inclusive, responsive spaces.

## Case Study: The Superkilen Park, Copenhagen

Superkilen is a public park that redefines what communal space can be. Instead of a uniform design, it features objects and symbols from over 60 different nationalities — reflecting the local immigrant population.

![Colorful paths at Superkilen](https://example.com/images/superkilen-park.jpg)

**Why it works:**
- Culturally inclusive elements
- Accessible design for all ages
- Seamless integration with public transit

---

## Challenges & Opportunities

While cities race toward "smart" solutions, many still neglect:

- Walkability and public health
- Affordable housing
- Climate-responsive infrastructure

Yet, this also opens space for **architects as advocates**, collaborating across disciplines to shape not just buildings, but better futures.

---

## Conclusion

Architecture today must answer more than aesthetic questions — it must respond to **how we live, connect, and belong**. Human-centered design offers a hopeful path forward.

---

*Have thoughts or favorite examples of human-centered architecture? Share them in the comments below or tag me on [Instagram](https://instagram.com/yourhandle).*
      `,
    },
  },

  {
    id: "office-space",
    title: "Office Space",
    subtitle: "Interior redesign of workspace.",
    year: 2021,
    keywords: ["model making"],
    location: {
      city: "Rotterdam",
      country: "Netherlands",
    },
    images: {
      cover: {
        src: "/project_images/house02.jpg",
        alt: "Office space image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "urban-loft",
    title: "Urban Loft",
    subtitle: "Modern loft apartment design.",
    year: 2023,
    keywords: ["architecture"],
    location: {
      city: "Berlin",
      country: "Germany",
    },
    images: {
      cover: {
        src: "/project_images/house03.jpg",
        alt: "Urban loft image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "eco-retreat",
    title: "Eco Retreat",
    subtitle: "Sustainable vacation home in nature.",
    year: 2022,
    keywords: ["architecture"],
    location: {
      city: "Reykjavík",
      country: "Iceland",
    },
    images: {
      cover: {
        src: "/project_images/house04.jpg",
        alt: "Eco retreat image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "creative-studio",
    title: "Creative Studio",
    subtitle: "Multi-functional studio for artists.",
    year: 2020,
    keywords: ["model making"],
    location: {
      city: "Barcelona",
      country: "Spain",
    },
    images: {
      cover: {
        src: "/project_images/house05.jpg",
        alt: "Creative studio image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "glass-house",
    title: "Glass House",
    subtitle: "A fully transparent living space concept.",
    year: 2023,
    keywords: ["concept design"],
    location: {
      city: "Zürich",
      country: "Switzerland",
    },
    images: {
      cover: {
        src: "/project_images/house06.jpg",
        alt: "Glass house image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "mountain-cabin",
    title: "Mountain Cabin",
    subtitle: "Remote cabin with panoramic views.",
    year: 2021,
    keywords: ["architecture"],
    location: {
      city: "Innsbruck",
      country: "Austria",
    },
    images: {
      cover: {
        src: "/project_images/house07.jpg",
        alt: "Mountain cabin image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "library-lounge",
    title: "Library Lounge",
    subtitle: "Community reading and study area.",
    year: 2022,
    keywords: ["model making"],
    location: {
      city: "Stockholm",
      country: "Sweden",
    },
    images: {
      cover: {
        src: "/project_images/house08.jpg",
        alt: "Library lounge image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "futuristic-kitchen",
    title: "Futuristic Kitchen",
    subtitle: "Smart and minimal cooking space.",
    year: 2023,
    keywords: ["concept design"],
    location: {
      city: "Milan",
      country: "Italy",
    },
    images: {
      cover: {
        src: "/project_images/house09.jpg",
        alt: "Futuristic kitchen image",
      },
    },
    content: {
      markdown: "",
    },
  },

  {
    id: "zen-garden-room",
    title: "Zen Garden Room",
    subtitle: "Meditation space integrated with nature.",
    year: 2020,
    keywords: ["concept design"],
    location: {
      city: "Kyoto",
      country: "Japan",
    },
    images: {
      cover: {
        src: "/project_images/house10.jpg",
        alt: "Zen garden room image",
      },
    },
    content: {
      markdown: "",
    },
  },
];

export default projects;

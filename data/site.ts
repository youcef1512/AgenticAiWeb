export type FocusItem = {
  index: string;
  title: string;
  description: string;
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type SiteContent = {
  name: string;
  tagline: string;
  description: string;
  about: string;
  primaryCta: {
    label: string;
    href: string;
  };
  focusItems: FocusItem[];
  contactLinks: ContactLink[];
};

export const siteContent: SiteContent = {
  name: "Youcef Toumi",
  tagline: "Builder, problem solver, and collaborator shaping software with clarity.",
  description:
    "This starter site is designed to give Youcef a clean personal presence on the web. Replace the copy, update the links, and deploy it directly on Vercel.",
  about:
    "Use this section for a concise introduction: what Youcef works on, the kinds of problems he likes solving, and the value he brings to teams or clients. Keep it specific and short enough to read in one pass.",
  primaryCta: {
    label: "Get in touch",
    href: "#contact"
  },
  focusItems: [
    {
      index: "01",
      title: "Product-minded engineering",
      description:
        "Highlight work that combines implementation quality with practical decision-making across product and delivery."
    },
    {
      index: "02",
      title: "Technical execution",
      description:
        "Use this space for the main technologies, systems, or problem domains Youcef wants visitors to associate with his work."
    },
    {
      index: "03",
      title: "Collaboration and outcomes",
      description:
        "Describe the type of teams, projects, or measurable results that best represent the way Youcef works."
    }
  ],
  contactLinks: [
    {
      label: "GitHub",
      value: "Add GitHub profile",
      href: "https://github.com/",
      external: true
    },
    {
      label: "LinkedIn",
      value: "Add LinkedIn profile",
      href: "https://www.linkedin.com/",
      external: true
    },
    {
      label: "Email",
      value: "youcef@example.com",
      href: "mailto:youcef@example.com"
    }
  ]
};

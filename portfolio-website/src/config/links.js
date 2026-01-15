export const CONTACT_LINK = {
  id: 'email',
  label: 'Email',
  href: 'mailto:ronitr.dev@gmail.com',
  icon: 'FiMail',
  ariaLabel: 'Email'
};

export const NAV_ITEMS = [
  {
    label: "Background",
    bgColor: "#2D1B3E",
    textColor: "#fff",
    links: [
      { label: "Education", href: "#education", ariaLabel: "About Education" },
      { label: "Experience", href: "#experience", ariaLabel: "About Experience" }
    ]
  },
  {
    label: "Projects", 
    bgColor: "#3A2456",
    textColor: "#fff",
    links: [
      { label: "View Portfolio", href: "#projects", ariaLabel: "View Portfolio" }
    ]
  },
  {
    label: "Links",
    bgColor: "#4A3362", 
    textColor: "#fff",
    links: [
        CONTACT_LINK,
      { label: "LinkedIn", href: "https://www.linkedin.com/in/ronit-rout/", ariaLabel: "LinkedIn" },
      { label: "GitHub", href: "https://github.com/ronit127", ariaLabel: "GitHub" }
    ]
  }
];

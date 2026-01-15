import regexImg from './images/regexprojectimage.PNG';

const projects = [
    {
        title: "Visual Debugger",
        description: "Web-based Python debugger that steps execution and visualizes evolving data structures.",
        liveLink: "",
        repoLink: "https://github.com/ronit127/visual-debugger",
        image: regexImg,
        technologies: ["TypeScript", "React", "NextJS", "Python", "TailwindCSS", "Flask"],
        badges: ["Led 15+ Team Members"]
    },
    {
        title: "PrairieLearn Boolean Element",
        description: "Custom PrairieLearn boolean-expression question type with symbolic input and equivalence checking.",
        liveLink: "",
        repoLink: "",
        image: regexImg,
        technologies: ["JavaScript", "Python", "HTML", "CSS", "Mustache"],
    },
      {
        title: "Formal Regular Expression Parser",
        description: "Formal regex analysis tool that constructs and simulates finite automata.",
        liveLink: "https://ronit127.github.io/formal-regular-expressions/",
        repoLink: "https://ronit127.github.io/formal-regular-expressions/",
        image: regexImg,
        technologies: ["Python", "PyScript", "NetworkX", "HTML", "CSS"],
        badges: ["Featured by Algo Prof", "Used by 50+ Students"],
    },
    {
        title: "Real-Time TCP Vocoder",
        description: "Low-latency TCP audio streaming system with real-time voice effects on Raspberry Pis.",
        liveLink: "",
        repoLink: "https://github.com/aashvibusa/341-Honors-Project",
        image: regexImg,
        technologies: ["C", "Raspberry Pi", "ALSA", "TCP"],
    },
    {
        title: "Samplify: Modular Music Sampler",
        description: "Built a small domain-specific language and interpreter for block-based audio sequencing and playback.",
        liveLink: "",
        repoLink: "https://github.com/isaacangyu/musicSampler",
        image: regexImg,
        technologies: ["Python", "Flask", "HTML", "CSS", "PyDub", "Pygame"],
    },
    {
        title: "StudyBud: AI Study Plan Generator",
        description: "Study planner that converts PDFs and MP3s into structured study guides using LLMs.",
        liveLink: "",
        repoLink: "https://github.com/rishi-m100/ai-study-plan-generator-app",
        image: regexImg,
        technologies: ["JavaScript", "React", "Python", "Flask"],
        badges: ["HackIllinois Finalist"],
    }
];

export default projects;
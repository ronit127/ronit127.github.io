import regexImg from './images/regexprojectimage.PNG';

const projects = [
    {
        title: "Visual Debugger",
        description: "A visual Python code editor and debugger with real-time data structure visualizations.",
        liveLink: "",
        repoLink: "https://github.com/ronit127/visual-debugger",
        image: regexImg,
        technologies: ["TypeScript", "React", "NextJS", "Python", "TailwindCSS", "Flask"],
    },
    {
        title: "PrairieLearn Boolean Element",
        description: "A boolean expression evaluator serving as an add-on to the Prairielearn platform",
        liveLink: "",
        repoLink: "",
        image: regexImg,
        technologies: ["JavaScript", "Python", "HTML", "CSS", "Mustache"],
    },
    {
        title: "Real-Time TCP Vocoder",
        description: "Streams audio with voice effects applied across multiple Raspberry Pis over TCP.",
        liveLink: "",
        repoLink: "https://github.com/aashvibusa/341-Honors-Project",
        image: regexImg,
        technologies: ["C", "Raspberry Pi", "ALSA", "TCP"],
    },
    {
        title: "Samplify: Modular Music Sampler",
        description: "Audio-editing platform for block-based sample manipulation and sequencing.",
        liveLink: "",
        repoLink: "https://github.com/isaacangyu/musicSampler",
        image: regexImg,
        technologies: ["Python", "Flask", "HTML", "CSS", "PyDub", "Pygame"],
    },
    {
        title: "Formal Regular Expression Parser",
        description: "Tool that parses formal regular expressions and analyzes their languages. Simulates DFA/NFA algorithms.",
        liveLink: "https://ronit127.github.io/formal-regular-expressions/",
        repoLink: "https://github.com/ronit127/formal-regular-expressions",
        image: regexImg,
        technologies: ["Python", "PyScript", "NetworkX", "HTML", "CSS"],
    },
    {
        title: "StudyBud: AI Study Plan Generator",
        description: "An AI-powered study planner processing PDFs and MP3s into personalized study guides with GPT-3.5.",
        liveLink: "",
        repoLink: "https://github.com/rishi-m100/ai-study-plan-generator-app",
        image: regexImg,
        technologies: ["JavaScript", "React", "NextJS", "Python", "OpenAI API", "Flask"],
    }
];

export default projects;
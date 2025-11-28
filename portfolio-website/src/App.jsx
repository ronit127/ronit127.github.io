import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CardNav from './components/CardNav';
import LiquidEther from './components/LiquidEther';

const App = () => {
  const items = [
    {
      label: "About",
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
        { label: "View All", href: "#projects", ariaLabel: "View All Projects" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#4A3362", 
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:ronitr.dev@gmail.com", ariaLabel: "Email me" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/ronit-rout/", ariaLabel: "LinkedIn" },
        { label: "GitHub", href: "https://github.com/ronit127", ariaLabel: "GitHub" }
      ]
    }
  ];

  return (
    <div className="page-bg">
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <LiquidEther
          colors={[ '#5227FF', '#FF9FFC', '#B19EEF' ]}
          mouseForce={2}
          cursorSize={80}
          isViscous={true}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={1.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
        <CardNav
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power3.out"
        />
      </div>
      
      {/* Rest of content */}
      <div className="relative z-10">
        <Education />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default App;
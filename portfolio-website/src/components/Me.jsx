const Me = () => {
  const monoFontStack = "'Courier New', 'Courier', monospace";
  
  return (
    <div
      className="min-h-screen py-8 px-2"
      style={{ backgroundColor: 'var(--app-bg)', color: 'var(--text)', fontFamily: monoFontStack }}
    >
      <div className="max-w-[900px] mx-auto text-center pt-16">
        <h1 className="text-6xl font-bold mb-4" style={{ color: 'var(--text-strong)' }}>
          Hi I'm Ronit.
        </h1>
        <p className="text-base font-normal max-w-[700px] mx-auto">
          I am a third-year CS and Education student at the University of Illinois at Urbana-Champaign. I build tools that makes learning and creating less daunting and mentally taxing for everyone.
        </p>
      </div>
    </div>
  );
};

export default Me;

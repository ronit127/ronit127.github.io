import Footer from './Footer';

const Me = () => {
  const monoFontStack = "'Courier New', 'Courier', monospace";
  
  return (
    <div style={{ minHeight: '100vh', padding: '2rem 0.5rem', backgroundColor: 'var(--bg)', color: 'var(--text)', fontFamily: monoFontStack, lineHeight: '1.5' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', paddingTop: '4rem' }}>
        <h1 style={{ fontFamily: monoFontStack, fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'var(--text-strong)' }}>Hi I'm Ronit.</h1>
        <p style={{ fontFamily: monoFontStack, fontSize: '1rem', fontWeight: 400, color: 'var(--text)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.5' }}>
          I am a third-year CS and Education student at the University of Illinois at Urbana-Champaign. I build tools that makes learning and creating less daunting and mentally taxing for everyone.
        </p>
      </div>
    </div>
  );
};

export default Me;

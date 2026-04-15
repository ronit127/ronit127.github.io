function Education() {
  const involvement = [
    'CS361 Course Assistant',
    'Project: Code Project Lead',
    'ACM Game Builders Dev',
    'PointVR VR Team',
  ];

return (
    <section id="education" className="pt-24 pb-10">
      <div className="w-[95%] max-w-[1200px] mx-auto">
        <h2 className="section-title">Education</h2>
        <div className="px-4 sm:px-5">
          <div className="py-8">
            {/* Primary: university pops with bold weight + strong color */}
            <div className="flex items-start justify-between gap-4 mb-1">
              <h3 className="font-display font-medium text-2xl tracking-tight !mb-0" style={{ color: 'var(--text-muted)' }}>
                University of Illinois Urbana-Champaign
              </h3>
              <span
                className="font-sans text-base shrink-0 rounded-md px-2 py-[3px] border"
                style={{ color: 'var(--text-muted)', borderColor: 'rgba(150,150,150,0.3)' }}
              >
                Aug 2023 – May 2027
              </span>
            </div>

            {/* Secondary: degree readable but clearly below the university */}
            <p className="font-sans text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
              B.S. Computer Science and Learning Sciences
            </p>

            <div className="flex flex-wrap gap-2">
              {involvement.map(item => (
                <span key={item} className="px-3 py-1 text-white rounded-sm text-sm font-normal" style={{ background: '#3A2456b3', border: '1px solid #3A245650' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

// ChiSono.jsx — Studio CDL Paolo Messina

function ChiSono() {
  const tags = ['Relazioni Industriali','HR Outsourcing','Payroll & Contributi','Contrattazione Collettiva','Fondi Previdenziali','Welfare Aziendale'];
  return (
    <section id="chi-sono" style={chiSt.sec}>
      <div style={chiSt.grid}>
        <div>
          <div style={chiSt.photo}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ opacity:.25 }}>
              <circle cx="20" cy="14" r="7" stroke="#6b6b6a" strokeWidth="1.5"/>
              <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="#6b6b6a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span style={{ fontSize:12, letterSpacing:'.08em', textTransform:'uppercase', color:'#6b6b6a' }}>Foto Profilo</span>
            <div style={chiSt.photoBar}></div>
          </div>
        </div>
        <div style={{ paddingTop:8 }}>
          <SectionTag text="Chi Siamo" />
          <div style={chiSt.name}>Paolo Messina</div>
          <div style={chiSt.title}>Consulente del Lavoro · Esperto in Relazioni Industriali &amp; HR</div>
          <p style={chiSt.bio}>
            Paolo Messina è <strong style={{ color:'#1a1a18', fontWeight:500 }}>Consulente del Lavoro iscritto all'Albo</strong> con una specializzazione nelle relazioni industriali e nella gestione delle risorse umane maturata in contesti aziendali di respiro internazionale.
            <br /><br />
            Dal 2016 opera come <strong style={{ color:'#1a1a18', fontWeight:500 }}>Labours Relation Specialist presso il Gruppo GPI S.p.A.</strong>, realtà multinazionale leader nel settore.
            <br /><br />
            Dal 2021, affianca a questa esperienza l'attività autonoma con lo <strong style={{ color:'#1a1a18', fontWeight:500 }}>Studio CDL Paolo Messina</strong>, portando alle PMI la competenza operativa sviluppata in grandi strutture organizzative.
          </p>
          <div style={chiSt.tags}>
            {tags.map((t, i) => (
              <span key={i} style={chiSt.tag}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const chiSt = {
  sec: { background:'#fff', padding:'88px 5%' },
  grid: { display:'grid', gridTemplateColumns:'1fr 1.6fr', gap:72, alignItems:'start', maxWidth:1100 },
  photo: { aspectRatio:'3/4', background:'#faf9f7', border:'1px solid rgba(0,0,0,.09)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:12, position:'relative', overflow:'hidden', maxWidth:320 },
  photoBar: { position:'absolute', bottom:0, left:0, right:0, height:3, background:'linear-gradient(to right,#b89650,transparent)' },
  name: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(28px,3vw,40px)', fontWeight:500, color:'#0c1d3a', lineHeight:1.1, marginBottom:6 },
  title: { fontSize:11, letterSpacing:'.14em', textTransform:'uppercase', color:'#b89650', marginBottom:28, fontWeight:500 },
  bio: { fontSize:13.5, color:'#6b6b6a', lineHeight:1.9, marginBottom:32 },
  tags: { display:'flex', flexWrap:'wrap', gap:8 },
  tag: { fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', color:'#0c1d3a', border:'1px solid rgba(12,29,58,.2)', padding:'5px 12px' },
};

Object.assign(window, { ChiSono });

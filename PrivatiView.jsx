// PrivatiView.jsx — Studio CDL Paolo Messina
const { useState: useStatePr } = React;

const SERVICES_PR = [
  { pill:'Conciliazione', title:'Assistenza alle Conciliazioni Sindacali', desc:"Affiancamento del lavoratore nelle sedi di conciliazione con delegato sindacale, presso la Direzione Territoriale del Lavoro e in tutte le sedi stragiudiziali. Gestione dell'accordo e tutela degli interessi del lavoratore." },
  { pill:'Contenzioso', title:'CTP — Consulenza Tecnica di Parte', desc:'Supporto tecnico specializzato nelle controversie di lavoro: perizie, analisi documentale e assistenza nelle udienze per la tutela dei diritti del lavoratore in sede giudiziaria.' },
  { pill:'Retribuzione', title:'Riconteggio Differenze Retributive', desc:"Analisi e verifica della correttezza di tutti gli elementi retributivi: cedolini, scatti di anzianità, straordinari, indennità contrattuali e voci accessorie. Calcolo delle eventuali differenze dovute." },
  { pill:'Previdenza', title:'Posizione Previdenziale & Pensione', desc:'Verifica della posizione contributiva, ricostruzione di carriera lavorativa, calcolo della pensione attesa e consulenza sulla scelta del momento ottimale per il pensionamento.' },
];

function PrivatiView({ onShowView }) {
  return (
    <div>
      <section style={{ ...prSt.sec, background:'#f4f1ea' }}>
        <ViewTabs active="privati" onShowView={onShowView} />
        <SectionTag text="Consulenza per Lavoratori" />
        <h2 style={prSt.sh2}>Tutela i tuoi diritti.<br /><em style={{ color:'#b89650', fontStyle:'italic' }}>Con competenza.</em></h2>
        <p style={prSt.sdesc}>Assistenza qualificata per lavoratori dipendenti nelle controversie di lavoro, nelle sedi di conciliazione e nella verifica della correttezza del proprio trattamento economico e previdenziale.</p>
        <div style={prSt.grid}>
          {SERVICES_PR.map((s, i) => <PrivatiCard key={i} {...s} />)}
        </div>
      </section>
      <MetricsStrip
        heading={<>I tuoi diritti,<br /><em style={{ color:'#b89650', fontStyle:'italic' }}>difesi con metodo.</em></>}
        body="Ogni lavoratore merita una consulenza tecnica di livello. L'esperienza maturata nella gestione del personale di grandi aziende diventa uno strumento a tua difesa."
        metrics={[{ v:'24', sup:'h', l:'Tempo di risposta' }, { v:'10', sup:'+', l:'Anni di esperienza' }]}
      />
    </div>
  );
}

function PrivatiCard({ pill, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{ ...prSt.card, ...(hov ? prSt.cardHov : {}) }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={prSt.pill}>{pill}</div>
      <h4 style={prSt.h4}>{title}</h4>
      <p style={prSt.p}>{desc}</p>
    </div>
  );
}

const prSt = {
  sec: { padding:'88px 5%' },
  sh2: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(28px,3.5vw,46px)', fontWeight:400, lineHeight:1.1, color:'#0c1d3a', maxWidth:540, marginBottom:14 },
  sdesc: { fontSize:13.5, color:'#6b6b6a', maxWidth:480, lineHeight:1.88, marginBottom:60 },
  grid: { display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:1, background:'rgba(0,0,0,.07)', border:'1px solid rgba(0,0,0,.07)' },
  card: { background:'#f4f1ea', padding:'32px 26px', transition:'background .2s' },
  cardHov: { background:'#faf9f7' },
  pill: { display:'inline-block', fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', color:'#1e6db5', border:'1px solid rgba(30,109,181,.22)', padding:'4px 9px', marginBottom:18 },
  h4: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:20, fontWeight:500, color:'#0c1d3a', marginBottom:9, lineHeight:1.35 },
  p: { fontSize:12.5, color:'#6b6b6a', lineHeight:1.75 },
};

Object.assign(window, { PrivatiView });

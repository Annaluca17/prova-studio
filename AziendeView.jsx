// AziendeView.jsx — Studio CDL Paolo Messina
const { useState: useStateAz } = React;

const SERVICES_AZ = [
  { num:'01 — HR Outsourcing', featured:true, title:'Esternalizzazione Ufficio HR', desc:'Gestione completa e continuativa della funzione HR in outsourcing: recruitment, amministrazione del personale, gestione presenze e rapporti con enti previdenziali. Una soluzione strutturata che elimina i costi fissi di un ufficio interno.' },
  { num:'02 — Relazioni Industriali', featured:true, title:'Contrattazione di Secondo Livello', desc:'Negoziazione e redazione di contratti integrativi aziendali e territoriali. Gestione dei rapporti con le RSU/RSA, mediazione nelle trattative sindacali e ottimizzazione del costo del lavoro attraverso strumenti contrattuali avanzati.' },
  { num:'03 — Compliance HR', featured:true, title:'Regolamenti Aziendali', desc:'Elaborazione di regolamenti interni personalizzati: codici disciplinari, policy smart working, regolamenti sull\'uso degli strumenti aziendali e procedure di gestione delle risorse umane conformi alla normativa vigente.' },
  { num:'04 — Payroll', featured:false, title:'Gestione Paghe & Contributi', desc:'Elaborazione cedolini, F24, Uniemens e reportistica contributiva con aggiornamento normativo continuo e gestione di tutti gli adempimenti mensili e annuali.' },
  { num:'05 — Welfare', featured:false, title:'Welfare Aziendale', desc:'Progettazione di piani di welfare su misura: fringe benefit, flexible benefit e politiche retributive orientate alla fidelizzazione e all\'ottimizzazione fiscale.' },
  { num:'06 — Legal', featured:false, title:'Gestione Controversie', desc:'Assistenza in sede ispettiva, contenzioso amministrativo, gestione procedure disciplinari e rappresentanza nelle conciliazioni con i lavoratori.' },
];

function AziendeView({ onShowView }) {
  return (
    <div>
      <section style={{ ...azSt.sec, background:'#faf9f7' }}>
        <ViewTabs active="aziende" onShowView={onShowView} />
        <SectionTag text="Consulenza per Imprese" />
        <h2 style={azSt.sh2}>Il partner strategico<br />per il tuo <em style={{ color:'#b89650', fontStyle:'italic' }}>capitale umano.</em></h2>
        <p style={azSt.sdesc}>Dalla gestione operativa delle paghe alla pianificazione strategica delle risorse umane. Con l'esperienza di chi ha operato nelle grandi multinazionali, ora al servizio della tua impresa.</p>
        <div style={azSt.grid}>
          {SERVICES_AZ.map((s, i) => <ServiceCard key={i} {...s} />)}
        </div>
      </section>
      <MetricsStrip
        heading={<>Non solo adempimenti.<br /><em style={{ color:'#b89650', fontStyle:'italic' }}>Strategia d'impresa.</em></>}
        body="Affianchiamo le aziende nelle decisioni strategiche sul capitale umano, con un approccio proattivo maturato in contesti multinazionali e ora applicato a realtà di ogni dimensione."
        metrics={[{ v:'100', sup:'%', l:'Aggiornamento normativo' }, { v:'24', sup:'h', l:'Tempo di risposta' }, { v:'360', sup:'°', l:'Consulenza integrata' }]}
      />
    </div>
  );
}

function ServiceCard({ num, featured, title, desc }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      style={{ ...azSt.svc, ...(featured ? azSt.svcFeatured : {}), ...(hov ? azSt.svcHov : {}) }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {featured && <div style={azSt.badge}>Servizio Chiave</div>}
      <p style={azSt.num}>{num}</p>
      <div style={{ ...azSt.hr, ...(featured || hov ? azSt.hrActive : {}), width: hov ? 42 : (featured ? 36 : 28) }}></div>
      <h4 style={azSt.h4}>{title}</h4>
      <p style={azSt.p}>{desc}</p>
    </div>
  );
}

function MetricsStrip({ heading, body, metrics }) {
  return (
    <div style={azSt.strip}>
      <div style={azSt.stripLeft}>
        <div style={{ width:28, height:1, background:'#b89650', marginBottom:18 }}></div>
        <h2 style={azSt.stripH}>{heading}</h2>
        <p style={azSt.stripP}>{body}</p>
      </div>
      <div style={azSt.metricsRow}>
        {metrics.map((m, i) => (
          <div key={i}>
            <div style={azSt.metricV}>{m.v}<sup style={azSt.sup}>{m.sup}</sup></div>
            <div style={azSt.metricL}>{m.l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const azSt = {
  sec: { padding:'88px 5%' },
  sh2: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(28px,3.5vw,46px)', fontWeight:400, lineHeight:1.1, color:'#0c1d3a', maxWidth:540, marginBottom:14 },
  sdesc: { fontSize:13.5, color:'#6b6b6a', maxWidth:480, lineHeight:1.88, marginBottom:60 },
  grid: { display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:1, background:'rgba(0,0,0,.09)', border:'1px solid rgba(0,0,0,.09)' },
  svc: { background:'#faf9f7', padding:'36px 30px', transition:'background .2s', position:'relative' },
  svcFeatured: { background:'#fff', borderLeft:'3px solid #b89650' },
  svcHov: { background:'#fff' },
  badge: { display:'inline-block', fontSize:8, letterSpacing:'.12em', textTransform:'uppercase', color:'#b89650', border:'1px solid rgba(184,150,80,.22)', padding:'3px 8px', marginBottom:14 },
  num: { fontSize:10, color:'#b89650', letterSpacing:'.1em', marginBottom:20, fontFamily:"'Cormorant Garamond',serif" },
  hr: { height:1, background:'rgba(0,0,0,.09)', marginBottom:20, transition:'background .3s, width .3s' },
  hrActive: { background:'#b89650' },
  h4: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:19, fontWeight:500, color:'#0c1d3a', marginBottom:10, lineHeight:1.3 },
  p: { fontSize:12.5, color:'#6b6b6a', lineHeight:1.78 },
  strip: { background:'#0c1d3a', padding:'80px 5%', display:'flex', alignItems:'center', justifyContent:'space-between', gap:48, flexWrap:'wrap', borderTop:'1px solid rgba(184,150,80,.35)' },
  stripLeft: { maxWidth:480 },
  stripH: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(24px,3vw,40px)', fontWeight:400, color:'#fff', lineHeight:1.2, marginBottom:12 },
  stripP: { fontSize:13, color:'rgba(255,255,255,.38)', lineHeight:1.85 },
  metricsRow: { display:'flex', gap:52, flexWrap:'wrap' },
  metricV: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:56, fontWeight:400, color:'#fff', lineHeight:1 },
  sup: { fontSize:22, color:'#b89650', verticalAlign:'top', marginTop:10, display:'inline-block' },
  metricL: { fontSize:10, color:'rgba(255,255,255,.28)', marginTop:10, textTransform:'uppercase', letterSpacing:'.1em' },
};

Object.assign(window, { AziendeView, MetricsStrip });

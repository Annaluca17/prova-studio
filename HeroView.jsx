// HeroView.jsx — Studio CDL Paolo Messina
const { useState } = React;

function HeroView({ onShowView }) {
  return (
    <div style={heroSt.hero}>
      <div style={heroSt.radial}></div>
      <div style={heroSt.watermark}>PM</div>
      <Eyebrow text="Studio di Consulenza del Lavoro · Paternò" />
      <h1 style={heroSt.h1}>
        Consulenza del lavoro<br />nuova. Aggiornata.<br />
        <em style={{ color:'#b89650', fontStyle:'italic' }}>Su misura.</em>
      </h1>
      <p style={heroSt.sub}>
        Competenza maturata nelle grandi imprese, al servizio di aziende e lavoratori.
        Perché ogni situazione merita un approccio costruito su di essa.
      </p>
      <div style={heroSt.cards}>
        <HeroCard
          title="Sono un'Azienda"
          desc="HR outsourcing, contrattazione collettiva, regolamenti e compliance normativa per imprese di ogni dimensione."
          onClick={() => onShowView('aziende')}
        />
        <HeroCard
          title="Sono un Privato"
          desc="Tutela del lavoratore, conciliazioni sindacali, contenzioso previdenziale e verifica retributiva."
          onClick={() => onShowView('privati')}
        />
      </div>
    </div>
  );
}

function HeroCard({ title, desc, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{ ...heroSt.card, ...(hovered ? heroSt.cardHover : {}) }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ ...heroSt.bar, width: hovered ? 40 : 20 }}></div>
      <h3 style={heroSt.cardH}>{title}</h3>
      <p style={heroSt.cardP}>{desc}</p>
      <div style={{ ...heroSt.arr, opacity: hovered ? 1 : 0, right: hovered ? 20 : 26 }}>→</div>
    </div>
  );
}

const heroSt = {
  hero: { background:'#0c1d3a', paddingTop:62, minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'62px 5% 60px', position:'relative', overflow:'hidden' },
  radial: { position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 40%,rgba(30,109,181,.12),transparent)', pointerEvents:'none' },
  watermark: { position:'absolute', right:'-2%', bottom:'-5%', fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(180px,28vw,380px)', color:'rgba(255,255,255,.022)', fontWeight:600, lineHeight:1, pointerEvents:'none', userSelect:'none', fontStyle:'italic' },
  h1: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(42px,6.5vw,80px)', fontWeight:400, color:'#fff', lineHeight:1.08, maxWidth:720, marginBottom:22 },
  sub: { fontSize:14, color:'rgba(255,255,255,.42)', maxWidth:460, lineHeight:1.85, marginBottom:64 },
  cards: { display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, maxWidth:660, width:'100%', position:'relative', zIndex:1 },
  card: { border:'1px solid rgba(184,150,80,.22)', padding:'32px 28px', cursor:'pointer', transition:'border-color .3s, background .3s, transform .25s', position:'relative', textAlign:'left' },
  cardHover: { borderColor:'rgba(184,150,80,.55)', background:'rgba(255,255,255,.03)', transform:'translateY(-3px)' },
  bar: { height:1, background:'#b89650', marginBottom:20, transition:'width .35s' },
  cardH: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, fontWeight:500, color:'#fff', marginBottom:8 },
  cardP: { fontSize:12, color:'rgba(255,255,255,.38)', lineHeight:1.75 },
  arr: { position:'absolute', top:28, color:'#b89650', fontSize:16, transition:'opacity .25s, right .25s' },
};

Object.assign(window, { HeroView });

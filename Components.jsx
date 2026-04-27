// Studio CDL Paolo Messina — Shared Components
// Exported to window for use across all UI kit pages

const { useState, useEffect, useRef } = React;

// ── NAV ──────────────────────────────────────────────────
function Nav({ activeView, onShowHome, onShowView, onScrollTo }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav style={navStyles.nav}>
        <div style={navStyles.inner}>
          <a href="#" onClick={e => { e.preventDefault(); onShowHome(); setMenuOpen(false); }} style={navStyles.logoWrap}>
            <img src="../../assets/Logo_migliorato.png" alt="Studio CDL Paolo Messina" style={navStyles.logo} />
          </a>
          <div style={navStyles.links}>
            <a style={{...navStyles.link, ...(activeView==='aziende'?navStyles.linkActive:{})}} onClick={() => onShowView('aziende')}>Aziende</a>
            <a style={{...navStyles.link, ...(activeView==='privati'?navStyles.linkActive:{})}} onClick={() => onShowView('privati')}>Privati</a>
            <a style={navStyles.link} onClick={() => onScrollTo('chi-sono')}>Chi Siamo</a>
            <a style={{...navStyles.link, ...navStyles.cta}} onClick={() => onScrollTo('contatti')}>Contatti</a>
          </div>
          <div style={navStyles.ham} onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{...navStyles.hamLine, ...(menuOpen?{transform:'translateY(6.5px) rotate(45deg)'}:{})}}></span>
            <span style={{...navStyles.hamLine, ...(menuOpen?{opacity:0}:{})}}></span>
            <span style={{...navStyles.hamLine, ...(menuOpen?{transform:'translateY(-6.5px) rotate(-45deg)'}:{})}}></span>
          </div>
        </div>
      </nav>
      <div style={navStyles.goldRule}></div>
      {menuOpen && (
        <div style={navStyles.mobileMenu}>
          <a style={navStyles.mobileLink} onClick={() => { onShowView('aziende'); setMenuOpen(false); }}>Aziende</a>
          <a style={navStyles.mobileLink} onClick={() => { onShowView('privati'); setMenuOpen(false); }}>Privati</a>
          <a style={navStyles.mobileLink} onClick={() => { onScrollTo('chi-sono'); setMenuOpen(false); }}>Chi Siamo</a>
          <a style={{...navStyles.mobileLink, color:'#b89650'}} onClick={() => { onScrollTo('contatti'); setMenuOpen(false); }}>Contatti</a>
        </div>
      )}
    </>
  );
}

const navStyles = {
  nav: { position:'fixed', top:0, left:0, width:'100%', zIndex:200, background:'#0c1d3a' },
  inner: { display:'flex', alignItems:'center', justifyContent:'space-between', height:62, padding:'0 5%' },
  logoWrap: { display:'block' },
  logo: { height:30, display:'block', filter:'brightness(0) invert(1)' },
  links: { display:'flex', alignItems:'center', gap:28 },
  link: { fontSize:10, color:'rgba(255,255,255,.45)', textDecoration:'none', letterSpacing:'.16em', textTransform:'uppercase', fontWeight:500, cursor:'pointer', transition:'color .2s' },
  linkActive: { color:'#b89650' },
  cta: { background:'#b89650', color:'#0c1d3a', padding:'8px 18px', fontSize:9, letterSpacing:'.14em' },
  goldRule: { position:'fixed', top:62, left:0, width:'100%', height:1, background:'linear-gradient(to right,rgba(184,150,80,.7),rgba(184,150,80,.15),transparent)', zIndex:200 },
  ham: { display:'none', flexDirection:'column', gap:5, cursor:'pointer', padding:4 },
  hamLine: { display:'block', width:24, height:1.5, background:'#fff', transition:'all .3s' },
  mobileMenu: { position:'fixed', top:62, left:0, width:'100%', background:'#0c1d3a', zIndex:190, padding:'24px 5% 32px', borderTop:'1px solid rgba(184,150,80,.22)', display:'flex', flexDirection:'column', gap:20 },
  mobileLink: { fontSize:11, color:'rgba(255,255,255,.55)', textDecoration:'none', letterSpacing:'.15em', textTransform:'uppercase', fontWeight:500, cursor:'pointer' },
};

// ── FOOTER ──────────────────────────────────────────────
function Footer({ onShowView, onScrollTo }) {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.top}>
        <div>
          <img src="../../assets/Logo_migliorato.png" alt="Logo" style={footerStyles.logo} />
          <p style={footerStyles.tagline}>Studio di Consulenza del Lavoro<br/>Via Somalia n.6 · 95047 Paternò (CT)</p>
        </div>
        <div style={footerStyles.cols}>
          <div>
            <div style={footerStyles.colTitle}>Servizi</div>
            <a style={footerStyles.colLink} onClick={() => onShowView('aziende')}>Servizi Aziende</a>
            <a style={footerStyles.colLink} onClick={() => onShowView('privati')}>Servizi Privati</a>
            <a style={footerStyles.colLink} onClick={() => onScrollTo('chi-sono')}>Chi Siamo</a>
          </div>
          <div>
            <div style={footerStyles.colTitle}>Contatti</div>
            <a href="tel:+393926024447" style={footerStyles.colLink}>+39 392 60 24 447</a>
            <a href="mailto:segreteria@cdlmessina.it" style={footerStyles.colLink}>segreteria@cdlmessina.it</a>
            <a href="https://www.cdlmessina.it" style={footerStyles.colLink}>www.cdlmessina.it</a>
          </div>
        </div>
      </div>
      <div style={footerStyles.bottom}>
        <div style={footerStyles.legal}>© 2025 Studio CDL Paolo Messina — P.IVA 05799860878 — Iscritto all'Albo dei Consulenti del Lavoro n. 789</div>
        <div style={footerStyles.legal}>Consulente del Lavoro — Esperto in Relazioni Industriali &amp; HR</div>
      </div>
    </footer>
  );
}

const footerStyles = {
  footer: { background:'#0c1d3a', padding:'40px 5%', borderTop:'1px solid rgba(184,150,80,.25)' },
  top: { display:'flex', alignItems:'flex-start', justifyContent:'space-between', gap:32, flexWrap:'wrap', marginBottom:28 },
  logo: { height:28, filter:'brightness(0) invert(1)', marginBottom:12, display:'block' },
  tagline: { fontSize:11, color:'rgba(255,255,255,.3)', lineHeight:1.7, maxWidth:220 },
  cols: { display:'flex', gap:56, flexWrap:'wrap' },
  colTitle: { fontSize:9, letterSpacing:'.14em', textTransform:'uppercase', color:'rgba(255,255,255,.28)', marginBottom:12, fontWeight:500 },
  colLink: { display:'block', fontSize:11.5, color:'rgba(255,255,255,.42)', marginBottom:7, textDecoration:'none', cursor:'pointer' },
  bottom: { borderTop:'1px solid rgba(255,255,255,.07)', paddingTop:20, display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap:8 },
  legal: { fontSize:10, color:'rgba(255,255,255,.22)', letterSpacing:'.04em', lineHeight:1.7 },
};

// ── SECTION TAG ──────────────────────────────────────────
function SectionTag({ text }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:10, marginBottom:18 }}>
      <div style={{ width:20, height:1, background:'#b89650' }}></div>
      <div style={{ fontSize:10, letterSpacing:'.14em', textTransform:'uppercase', color:'#1e6db5', fontWeight:500 }}>{text}</div>
    </div>
  );
}

// ── EYEBROW ──────────────────────────────────────────────
function Eyebrow({ text }) {
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap:12, marginBottom:40 }}>
      <div style={{ width:28, height:1, background:'#b89650' }}></div>
      <div style={{ fontSize:10, letterSpacing:'.16em', textTransform:'uppercase', color:'#b89650', fontWeight:500 }}>{text}</div>
    </div>
  );
}

// ── VIEW TABS ─────────────────────────────────────────────
function ViewTabs({ active, onShowView }) {
  const tabStyle = (which) => ({
    padding:'12px 28px', fontSize:10, letterSpacing:'.14em', textTransform:'uppercase',
    color: active===which ? '#0c1d3a' : '#6b6b6a',
    cursor:'pointer', borderBottom: active===which ? '2px solid #b89650' : '2px solid transparent',
    marginBottom:-1, transition:'color .2s, border-color .2s', fontWeight:500,
  });
  return (
    <div style={{ display:'flex', gap:0, borderBottom:'1px solid rgba(0,0,0,.09)', marginBottom:52 }}>
      <div style={tabStyle('aziende')} onClick={() => onShowView('aziende')}>Servizi Aziende</div>
      <div style={tabStyle('privati')} onClick={() => onShowView('privati')}>Servizi Privati</div>
    </div>
  );
}

Object.assign(window, { Nav, Footer, SectionTag, Eyebrow, ViewTabs });

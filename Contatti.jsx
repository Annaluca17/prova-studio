// Contatti.jsx — Studio CDL Paolo Messina
const { useState: useStateCt } = React;

function Contatti() {
  const [form, setForm] = useState({ nome:'', cognome:'', email:'', telefono:'', tipo:'', messaggio:'', gdpr:false });
  const [submitted, setSubmitted] = useState(false);

  const handle = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <section id="contatti" style={ctSt.sec}>
      <div>
        <SectionTag text="Contatti" />
        <h2 style={ctSt.sh2}>Parliamo del<br />tuo progetto.</h2>
        <p style={ctSt.subdesc}>Prima consulenza senza impegno.<br />Risposta garantita entro 24 ore lavorative.</p>
        <div style={ctSt.ci}>
          {[
            { lbl:'Sede', val:'Via Somalia n.6 – 95047 Paternò (CT)' },
            { lbl:'Telefono', val:'+39 392 60 24 447' },
            { lbl:'Email', val:'segreteria@cdlmessina.it' },
            { lbl:'Sito Web', val:'www.cdlmessina.it' },
          ].map((r, i) => (
            <div key={i} style={ctSt.ciRow}>
              <div style={ctSt.ciDot}></div>
              <div>
                <div style={ctSt.ciLbl}>{r.lbl}</div>
                <div style={ctSt.ciVal}>{r.val}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {submitted ? (
          <div style={ctSt.successMsg}>✓ Messaggio inviato correttamente. Ti risponderemo entro 24 ore lavorative.</div>
        ) : (
          <div style={ctSt.formGrid}>
            <Field label="Nome *" half><input style={ctSt.input} value={form.nome} onChange={e => handle('nome', e.target.value)} placeholder="Mario" /></Field>
            <Field label="Cognome *" half><input style={ctSt.input} value={form.cognome} onChange={e => handle('cognome', e.target.value)} placeholder="Rossi" /></Field>
            <Field label="Email *"><input style={ctSt.input} value={form.email} onChange={e => handle('email', e.target.value)} placeholder="mario.rossi@email.it" /></Field>
            <Field label="Telefono"><input style={ctSt.input} value={form.telefono} onChange={e => handle('telefono', e.target.value)} placeholder="+39 320 000 0000" /></Field>
            <Field label="Sei un'azienda o un privato? *">
              <select style={ctSt.input} value={form.tipo} onChange={e => handle('tipo', e.target.value)}>
                <option value="">Seleziona...</option>
                <option>Azienda</option>
                <option>Privato / Lavoratore dipendente</option>
              </select>
            </Field>
            <Field label="Messaggio">
              <textarea style={{ ...ctSt.input, minHeight:80, resize:'vertical' }} value={form.messaggio} onChange={e => handle('messaggio', e.target.value)} placeholder="Descrivi brevemente la tua esigenza..." />
            </Field>
            <div style={ctSt.gdprRow}>
              <input type="checkbox" checked={form.gdpr} onChange={e => handle('gdpr', e.target.checked)} style={{ width:15, height:15, accentColor:'#b89650', flexShrink:0, marginTop:1, cursor:'pointer' }} />
              <label style={ctSt.gdprText}>Acconsento al trattamento dei miei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) per ricevere una risposta alla presente richiesta.</label>
            </div>
            <button style={ctSt.submitBtn} onClick={() => form.gdpr && setSubmitted(true)}>
              Invia richiesta <span style={{ color:'#b89650' }}>→</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, children, half }) {
  return (
    <div style={{ display:'flex', flexDirection:'column', gap:6, gridColumn: half ? 'span 1' : '1 / -1' }}>
      <label style={ctSt.flabel}>{label}</label>
      {children}
    </div>
  );
}

const ctSt = {
  sec: { background:'#f4f1ea', display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:72, alignItems:'start', padding:'88px 5%' },
  sh2: { fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(28px,3.5vw,46px)', fontWeight:400, lineHeight:1.1, color:'#0c1d3a', maxWidth:540, marginBottom:14 },
  subdesc: { fontSize:13, color:'#6b6b6a', lineHeight:1.88, marginBottom:32 },
  ci: { display:'flex', flexDirection:'column', gap:22 },
  ciRow: { display:'flex', alignItems:'flex-start', gap:14 },
  ciDot: { width:4, height:4, background:'#b89650', borderRadius:'50%', marginTop:6, flexShrink:0 },
  ciLbl: { fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', color:'#6b6b6a', marginBottom:4 },
  ciVal: { fontSize:13.5, color:'#1a1a18' },
  formGrid: { display:'grid', gridTemplateColumns:'1fr 1fr', gap:18 },
  flabel: { fontSize:9, letterSpacing:'.12em', textTransform:'uppercase', color:'#6b6b6a', fontWeight:500 },
  input: { fontFamily:"'DM Sans',system-ui,sans-serif", fontSize:13.5, border:'none', borderBottom:'1px solid rgba(0,0,0,.09)', borderRadius:0, padding:'9px 0', outline:'none', color:'#1a1a18', background:'transparent', width:'100%' },
  gdprRow: { gridColumn:'1 / -1', display:'flex', alignItems:'flex-start', gap:10, padding:14, background:'rgba(12,29,58,.04)', border:'1px solid rgba(12,29,58,.08)' },
  gdprText: { fontSize:11, color:'#6b6b6a', lineHeight:1.6 },
  submitBtn: { gridColumn:'1 / -1', background:'#0c1d3a', color:'#fff', border:'none', padding:'15px 28px', fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:16, cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'space-between', letterSpacing:'.04em', width:'100%' },
  successMsg: { fontSize:13, color:'#2d7a4f', padding:'20px 0' },
};

Object.assign(window, { Contatti, Field });

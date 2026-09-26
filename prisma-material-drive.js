/* PRISMA MATERIAL DRIVE + ACCESS — 2026-09-26 */
(function(){
"use strict";
const DB="prisma_materials_v1", STORE="materials";
const PUBLIC=[
 {title:"Aprendizagens Essenciais — Filosofia 10.º",type:"Documento oficial",subject:"Filosofia 10.º",url:"https://www.dge.mec.pt/sites/default/files/es_10_filosofia.pdf",source:"DGE",desc:"Documento curricular oficial."},
 {title:"Aprendizagens Essenciais — Filosofia 11.º",type:"Documento oficial",subject:"Filosofia 11.º",url:"https://www.dge.mec.pt/sites/default/files/es_11_filosofia.pdf",source:"DGE",desc:"Documento curricular oficial."},
 {title:"Filosofia no Ensino Secundário",type:"PPT · fichas · testes · planificações",subject:"Filosofia",url:"https://apoioescolas.dge.mec.pt/recursos/filosofia-no-ensino-secundario",source:"DGE · Apoio às Escolas",desc:"Repositório público com testes, planificações, apresentações e exercícios."},
 {title:"Exercícios de Filosofia para o Ensino Secundário",type:"Exercícios",subject:"Filosofia",url:"https://apoioescolas.dge.mec.pt/recursos/exercicios-filosofia-para-o-ensino-secundario",source:"DGE · Domingos Faria",desc:"Exercícios online de acesso livre."},
 {title:"Modelo de planificação — Filosofia 10.º",type:"Planificação",subject:"Filosofia 10.º",url:"https://apoioescolas.dge.mec.pt/recursos/modelo-de-planificacao-de-atividade-de-filosofia-10o-ano",source:"DGE",desc:"Modelo público de planificação de atividade."},
 {title:"Modelo de planificação — Filosofia 11.º",type:"Planificação",subject:"Filosofia 11.º",url:"https://apoioescolas.dge.mec.pt/recursos/modelo-de-planificacao-de-atividades-de-filosofia-11o-ano",source:"DGE",desc:"Modelo público de planificação de atividade."},
 {title:"The Wealth of Networks — livro completo",type:"Livro · PDF aberto",subject:"Filosofia / sociedade em rede",url:"https://cyber.harvard.edu/wealth_of_networks/Download_PDFs_of_the_book",source:"Yochai Benkler · Harvard",desc:"Livro completo disponibilizado pelo autor sob licença Creative Commons BY-NC-SA."},
 {title:"The Wealth of Networks — repositório PDF",type:"Livro · PDF",subject:"Filosofia / sociedade em rede",url:"https://dlc.dlib.indiana.edu/dlc/items/db255ef3-81e5-494a-a60a-1def1cc29261/full",source:"Indiana University",desc:"Cópia integral em acesso aberto."},
 {title:"The Problems of Philosophy — Bertrand Russell",type:"Livro · domínio público",subject:"Filosofia 11.º",url:"https://www.gutenberg.org/ebooks/5827",source:"Project Gutenberg",desc:"Livro disponível gratuitamente; domínio público nos EUA."},
 {title:"Books in Philosophy — Project Gutenberg",type:"Biblioteca de livros",subject:"Filosofia",url:"https://www.gutenberg.org/ebooks/bookshelf/57",source:"Project Gutenberg",desc:"Coleção pública de obras filosóficas em formatos digitais."},
 {title:"Currículo Nacional — Filosofia",type:"Currículo",subject:"Filosofia",url:"https://curriculonacional.dge.mec.pt/organizacao-curricular/filosofia-0",source:"Currículo Nacional · DGE",desc:"Referencial curricular público."},
 {title:"Blog de Filosofia — Nonius dixit",type:"Blog · recursos",subject:"Filosofia 10.º / 11.º",url:"https://apoioescolas.dge.mec.pt/nivelciclo/filosofia-0",source:"DGE · Apoio às Escolas",desc:"Recurso referenciado pela DGE para apoio aos alunos de Filosofia."},
 {title:"Blog de Filosofia — Pensa!",type:"Blog · recursos",subject:"Filosofia 10.º / 11.º",url:"https://apoioescolas.dge.mec.pt/nivelciclo/filosofia-0",source:"DGE · Apoio às Escolas",desc:"Textos e pequenos vídeos de apoio ao ensino da Filosofia."},
 {title:"O Jardim da Filosofia",type:"Vídeos · entrevistas",subject:"Filosofia",url:"https://apoioescolas.dge.mec.pt/recursos/filosofia",source:"DGE · Apoio às Escolas",desc:"Conjunto de entrevistas introdutórias sobre tópicos de Filosofia, com acesso livre."},
 {title:"Europeana",type:"Biblioteca digital",subject:"Filosofia / Humanidades",url:"https://www.europeana.eu/",source:"Europeana",desc:"Biblioteca digital europeia com património cultural e recursos educativos."}
];
function openDB(){
 return new Promise((res,rej)=>{
  if(!window.indexedDB)return rej(new Error("IndexedDB indisponível"));
  const r=indexedDB.open(DB,1);
  r.onupgradeneeded=()=>{const db=r.result;if(!db.objectStoreNames.contains(STORE)){const s=db.createObjectStore(STORE,{keyPath:"id"});s.createIndex("role","role");s.createIndex("created","created");}};
  r.onsuccess=()=>res(r.result); r.onerror=()=>rej(r.error);
 });
}
async function allLocal(){
 try{const db=await openDB();return await new Promise((res,rej)=>{const q=db.transaction(STORE,"readonly").objectStore(STORE).getAll();q.onsuccess=()=>res(q.result||[]);q.onerror=()=>rej(q.error);});}
 catch(e){return [];}
}
async function putLocal(x){
 const db=await openDB(); return new Promise((res,rej)=>{const q=db.transaction(STORE,"readwrite").objectStore(STORE).put(x);q.onsuccess=()=>res(x);q.onerror=()=>rej(q.error);});
}
async function delLocal(id){const db=await openDB();return new Promise((res,rej)=>{const q=db.transaction(STORE,"readwrite").objectStore(STORE).delete(id);q.onsuccess=()=>res();q.onerror=()=>rej(q.error);});}
function uid(){return "mat_"+Date.now()+"_"+Math.random().toString(36).slice(2,9)}
function esc(s){return String(s??"").replace(/[&<>"]/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[x]));}
function roleName(){return window.role==="aluno"?"Aluno":"Professor";}
function ownerKey(){const r=window.role||"professor";const e=(localStorage.getItem("prisma_user_email")||"").trim().toLowerCase();const n=(localStorage.getItem("prisma_user_name")||"").trim().toLowerCase();return r+"::"+(e||n||"local");}
function ownerLabel(){return localStorage.getItem("prisma_user_name")||localStorage.getItem("prisma_user_email")||roleName();}
function plan(){return localStorage.getItem("prisma_access")||"base";}
function setPlan(p){localStorage.setItem("prisma_access",p);renderDrive();}
function typeFromName(n){
 const x=(n||"").toLowerCase();
 if(/\\.pptx?$/.test(x))return "PP / Apresentação";
 if(/\\.pdf$/.test(x))return "PDF / Ensaio / Livro";
 if(/\\.docx?$/.test(x))return "Documento / Ensaio";
 if(/\\.(png|jpe?g|webp|gif)$/.test(x))return "Imagem";
 if(/\\.(txt|md)$/.test(x))return "Texto";
 return "Outro material";
}
async function saveFiles(files){
 const max=plan()==="premium"?999:20, current=(await allLocal()).filter(x=>x.role===window.role&&!x.public).length;
 if(current+files.length>max){alert("O acesso Base permite até 20 materiais neste dispositivo. Ativa o Premium de demonstração para testar a biblioteca sem esse limite.");return;}
 for(const f of files){
  const x={id:uid(),role:window.role,owner:ownerKey(),ownerLabel:ownerLabel(),title:f.name,type:typeFromName(f.name),subject:document.getElementById("mdSubject")?.value||"Geral",created:Date.now(),size:f.size,mime:f.type||"application/octet-stream",blob:f,public:false,source:"Meu Drive PRISMA"};
  await putLocal(x);
 }
 renderDrive();
}
async function addURL(){
 const title=document.getElementById("mdTitle").value.trim(),url=document.getElementById("mdURL").value.trim();
 if(!title||!url){alert("Indica o nome e o endereço do material.");return;}
 await putLocal({id:uid(),role:window.role,owner:ownerKey(),ownerLabel:ownerLabel(),title,type:document.getElementById("mdType").value,subject:document.getElementById("mdSubject").value,created:Date.now(),url,public:false,source:"Ligação guardada"});
 document.getElementById("mdTitle").value="";document.getElementById("mdURL").value="";renderDrive();
}
function downloadItem(x){if(x.blob){const u=URL.createObjectURL(x.blob);const a=document.createElement("a");a.href=u;a.download=x.title;a.click();setTimeout(()=>URL.revokeObjectURL(u),10000);return;}if(x.url){window.open(x.url,"_blank","noopener");}}
function openItem(x){
 if(x.url){window.open(x.url,"_blank","noopener");return;}
 if(x.blob){const u=URL.createObjectURL(x.blob);const a=document.createElement("a");a.href=u;a.download=x.title;a.target="_blank";a.click();setTimeout(()=>URL.revokeObjectURL(u),10000);}
}
function useInPlan(x){
 const old=JSON.parse(localStorage.getItem("prisma_pending_materials")||"[]");
 if(!old.includes(x.title))old.push(x.title);
 localStorage.setItem("prisma_pending_materials",JSON.stringify(old));
 if(window.runTool)window.runTool("plano");
}
async function renderDrive(){
 const m=document.getElementById("prismaMain");if(!m)return;
 const all=await allLocal();
 for(const x of all){if(x.role===window.role&&!x.owner){x.owner=ownerKey();x.ownerLabel=ownerLabel();await putLocal(x);}}
 const locals=all.filter(x=>x.role===window.role&&x.owner===ownerKey());
 const search=(document.getElementById("mdSearch")?.value||"").toLowerCase();
 const list=locals.filter(x=>(x.title+" "+x.subject+" "+x.type).toLowerCase().includes(search));
 const publicList=PUBLIC.filter(x=>(x.title+" "+x.subject+" "+x.type).toLowerCase().includes(search));
 m.innerHTML='<div class="prisma-head"><div><div class="prisma-kicker">PRISMA DRIVE · '+roleName().toUpperCase()+'</div><h1>Os teus materiais</h1><p>Guarda ensaios, livros, PP, PDFs, fichas e outros materiais para os reutilizares no planeamento.</p></div><div class="prisma-select"><label>ACESSO</label><select id="mdPlan"><option value="base" '+(plan()==="base"?"selected":"")+'>Base — gratuito</option><option value="premium" '+(plan()==="premium"?"selected":"")+'>Premium — demonstração</option></select></div></div>'+
 '<div class="prisma-actions"><button class="prisma-action" id="mdPick"><strong>＋ Importar ficheiros</strong><small>PDF, DOC/DOCX, PPT/PPTX, imagens, texto e outros.</small></button><button class="prisma-action" id="mdURLBtn"><strong>🔗 Guardar ligação</strong><small>Adiciona um livro, ensaio, PP ou recurso público.</small></button><button class="prisma-action" id="mdPremium"><strong>✦ Acesso Premium</strong><small>Biblioteca ampliada e ferramentas avançadas.</small></button></div>'+
 '<input id="mdFiles" type="file" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.odt,.odp,.png,.jpg,.jpeg,.webp" style="display:none">'+
 '<div class="prisma-panel" id="mdURLForm" style="display:none;margin-top:14px"><h3>Guardar material por ligação</h3><div class="tool-form"><input id="mdTitle" placeholder="Nome do material"><select id="mdType"><option>Ensaio</option><option>Livro</option><option>PP / Apresentação</option><option>Artigo</option><option>Documento</option><option>Recurso</option><option>Outro</option></select><select id="mdSubject"><option>Filosofia</option><option>Filosofia 10.º</option><option>Filosofia 11.º</option><option>Área de Integração</option><option>Outro</option></select><input id="mdURL" placeholder="https://..."><button id="mdSaveURL">Guardar no Drive</button></div></div>'+
 '<div class="prisma-section-title"><div><h2>📁 Meu Drive</h2><p>'+list.length+' material(is) guardado(s) neste dispositivo.</p></div></div>'+
 '<div class="prisma-grid2">'+(list.length?list.map(x=>'<article class="prisma-panel"><span class="badge">'+esc(x.type)+'</span><h3>'+esc(x.title)+'</h3><p class="muted">'+esc(x.subject||"Geral")+' · '+esc(x.source||"Privado")+'</p><div class="prisma-actions"><button class="prisma-action" data-md-open="'+x.id+'"><strong>Abrir</strong><small>Consultar o material.</small></button><button class="prisma-action" data-md-use="'+x.id+'"><strong>Usar no plano</strong><small>Levar para a planificação.</small></button><button class="prisma-action" data-md-del="'+x.id+'"><strong>Eliminar</strong><small>Remover do Drive.</small></button></div></article>').join(""):'<div class="prisma-panel"><h3>O Drive está vazio</h3><p>Importa o primeiro ensaio, livro, PP ou PDF. Os ficheiros ficam guardados no navegador deste dispositivo.</p></div>')+'</div>'+
 '<div class="prisma-section-title"><div><h2>🌐 Biblioteca pública PRISMA</h2><p>Materiais e fontes com acesso público. O PRISMA guarda a referência, não copia conteúdos protegidos.</p></div></div>'+
 '<div class="v3grid">'+publicList.map((x,i)=>'<article class="v3card"><span class="v3tag">'+esc(x.type)+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.desc)+'</p><p class="muted">'+esc(x.source)+' · '+esc(x.subject)+'</p><div class="prisma-actions"><button class="prisma-action" data-md-public="'+i+'"><strong>Abrir fonte</strong><small>Consultar o material público.</small></button><button class="prisma-action" data-md-public-plan="'+i+'"><strong>Usar no plano</strong><small>Associar ao próximo plano.</small></button></div></article>').join("")+'</div>';
 document.getElementById("mdPlan").onchange=e=>{setPlan(e.target.value)};
 document.getElementById("mdPick").onclick=()=>document.getElementById("mdFiles").click();
 document.getElementById("mdFiles").onchange=e=>{saveFiles([...e.target.files]);e.target.value=""};
 document.getElementById("mdURLBtn").onclick=()=>{document.getElementById("mdURLForm").style.display="block"};
 document.getElementById("mdSaveURL").onclick=addURL;
 document.querySelectorAll("[data-md-open]").forEach(b=>b.onclick=async()=>{const x=(await allLocal()).find(y=>y.id===b.dataset.mdOpen);if(x)openItem(x)});
 document.querySelectorAll("[data-md-download]").forEach(b=>b.onclick=async()=>{const x=(await allLocal()).find(y=>y.id===b.dataset.mdDownload);if(x)downloadItem(x)});
 document.querySelectorAll("[data-md-use]").forEach(b=>b.onclick=async()=>{const x=(await allLocal()).find(y=>y.id===b.dataset.mdUse);if(x)useInPlan(x)});
 document.querySelectorAll("[data-md-del]").forEach(b=>b.onclick=async()=>{if(confirm("Eliminar este material do teu Drive?")){await delLocal(b.dataset.mdDel);renderDrive()}});
 document.querySelectorAll("[data-md-public]").forEach(b=>b.onclick=()=>window.open(PUBLIC[Number(b.dataset.mdPublic)].url,"_blank","noopener"));
 document.querySelectorAll("[data-md-public-plan]").forEach(b=>b.onclick=()=>useInPlan(PUBLIC[Number(b.dataset.mdPublic)]));
 document.getElementById("mdPremium").onclick=()=>{if(confirm("Ativar o Premium de demonstração neste dispositivo? Não é uma subscrição nem um pagamento.")){setPlan("premium")}};
}
function renderAccess(){
 const m=document.getElementById("prismaMain");if(!m)return;
 m.innerHTML='<div class="prisma-head"><div><div class="prisma-kicker">CONTA PRISMA</div><h1>Base ou Premium</h1><p>Escolhe o nível de acesso que queres testar. Nesta versão, o Premium é apenas uma demonstração local.</p></div></div>'+
 '<div class="prisma-grid2"><article class="prisma-panel"><span class="badge">BASE · GRATUITO</span><h2>Essencial</h2><p>Currículo, percurso de aprendizagem, ferramentas de base e até 20 materiais pessoais no Drive deste dispositivo.</p><button class="v3btn" id="useBase">Usar Base</button></article><article class="prisma-panel"><span class="badge">PREMIUM · DEMO</span><h2>PRISMA completo</h2><p>Biblioteca ampliada, materiais sem o limite da Base e acesso às ferramentas avançadas do PRISMA. Sem cobrança nesta versão.</p><button class="v3btn" id="usePrem">Ativar demonstração Premium</button></article></div>'+
 '<div class="prisma-panel" style="margin-top:14px"><h3>Nota importante</h3><p>O PRISMA atual é uma aplicação estática. O Drive guarda ficheiros localmente neste navegador; sincronização entre dispositivos, contas reais e pagamentos exigem uma camada de backend.</p></div>';
 document.getElementById("useBase").onclick=()=>{setPlan("base");prismaRenderShell("inicio")};
 document.getElementById("usePrem").onclick=()=>{setPlan("premium");prismaRenderShell("inicio")};
}
function patchDashboard(){
 if(typeof window.prismaRenderDashboard!=="function")return;
 const original=window.prismaRenderDashboard;
 window.prismaRenderDashboard=async function(){
  original();
  const m=document.getElementById("prismaMain");if(!m)return;
  const old=m.innerHTML;
  m.innerHTML=old+'<div class="prisma-section-title"><div><h2>📂 '+(roleName()==="Professor"?"Materiais para preparar a aula":"Os meus materiais")+'</h2><p>O teu Drive fica aqui, ligado ao percurso curricular.</p></div></div><div class="prisma-actions"><button class="prisma-action" id="dashDrive"><strong>📁 Abrir Meu Drive</strong><small>Ensaios, livros, PP, PDFs e outros materiais.</small></button><button class="prisma-action" id="dashAccess"><strong>✦ Acesso Base / Premium</strong><small>Ver o nível de acesso do PRISMA.</small></button></div>';
  document.getElementById("dashDrive").onclick=()=>renderDrive();
  document.getElementById("dashAccess").onclick=()=>renderAccess();
 }
}
function install(){
 if(!window.prismaRenderShell)return;
 const oldShell=window.prismaRenderShell;
 window.prismaRenderShell=function(tab){
  if(tab==="drive"||tab==="materiais")return renderDrive();
  if(tab==="acesso")return renderAccess();
  const out=oldShell(tab);
  const nav=document.querySelector(".prisma-nav");
  if(nav&&!nav.querySelector("[data-tab=\"drive\"]")){
    nav.insertAdjacentHTML("beforeend",'<button data-tab="drive" onclick="prismaSwitch(\'drive\')">📁 &nbsp;Meu Drive</button><button data-tab="acesso" onclick="prismaSwitch(\'acesso\')">✦ &nbsp;Acesso</button>');
  }
  return out;
 };
 const oldSwitch=window.prismaSwitch;
 window.prismaSwitch=function(tab){
  if(tab==="drive"||tab==="materiais")return renderDrive();
  if(tab==="acesso")return renderAccess();
  return oldSwitch(tab);
 };
 const oldDashboard=window.prismaRenderDashboard;
 window.prismaRenderDashboard=async function(){
  oldDashboard();
  const m=document.getElementById("prismaMain");if(!m)return;
  m.insertAdjacentHTML("beforeend",'<div class="prisma-section-title"><div><h2>📂 '+(roleName()==="Professor"?"Materiais para preparar a aula":"Os meus materiais")+'</h2><p>O teu Drive fica aqui, ligado ao percurso curricular.</p></div></div><div class="prisma-actions"><button class="prisma-action" id="dashDrive"><strong>📁 Abrir Meu Drive</strong><small>Ensaios, livros, PP, PDFs e outros materiais.</small></button><button class="prisma-action" id="dashAccess"><strong>✦ Acesso Base / Premium</strong><small>Ver o nível de acesso do PRISMA.</small></button></div>');
  document.getElementById("dashDrive").onclick=()=>renderDrive();
  document.getElementById("dashAccess").onclick=()=>renderAccess();
 };
 document.addEventListener("click",async e=>{
  const b=e.target.closest&&e.target.closest("[data-md-open],[data-md-use],[data-md-del],[data-md-public],[data-md-public-plan]");
  if(!b)return;
  e.preventDefault();e.stopImmediatePropagation();
  const all=await allLocal();
  if(b.dataset.mdOpen){const x=all.find(z=>z.id===b.dataset.mdOpen);if(x)openItem(x);}
  else if(b.dataset.mdUse){const x=all.find(z=>z.id===b.dataset.mdUse);if(x)useInPlan(x);}
  else if(b.dataset.mdDel){if(confirm("Eliminar este material do Drive?")){await delLocal(b.dataset.mdDel);renderDrive();}}
  else if(b.dataset.mdPublic){openItem(PUBLIC[Number(b.dataset.mdPublic)])}
  else if(b.dataset.mdPublicPlan){useInPlan(PUBLIC[Number(b.dataset.mdPublicPlan)])}
 },true);
}
const oldRun=window.runTool;
window.runTool=function(type){
 if(type==="plano"){
  const r=JSON.parse(localStorage.getItem("prisma_pending_materials")||"[]");
  oldRun(type);
  setTimeout(()=>{
   const m=document.getElementById("prismaMain");if(!m)return;
   const box=m.querySelector(".prisma-detail")||m;
   if(r.length){box.insertAdjacentHTML("afterbegin",'<div class="prisma-panel"><h3>📚 Materiais associados a esta planificação</h3><ul>'+r.map(esc).map(x=>"<li>"+x+"</li>").join("")+'</ul><p class="muted">Estes materiais vieram do Meu Drive / Biblioteca pública.</p></div>');localStorage.removeItem("prisma_pending_materials");}
  },30);
 }
};
const oldShell2=window.prismaRenderShell;
window.setTimeout(install,0);
})();
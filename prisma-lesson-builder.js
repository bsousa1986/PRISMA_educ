/* PRISMA LESSON BUILDER — curriculum → problem → resources → lesson */
(function(){
"use strict";
function esc(s){return String(s??"").replace(/[&<>"]/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[x]));}
function units(){try{return typeof window.units==="function"?window.units():(typeof window.curriculumUnits==="object"?Object.values(window.curriculumUnits).flat():[])}catch(e){return []}}
function plans(){return window.prismaTeacherPlans&&Array.isArray(window.prismaTeacherPlans.list)?window.prismaTeacherPlans.list:[]}
function db(){return window.PRISMA_PHILOSOPHY_DB||{modules:{}}}
function resourcesFor(id){return db().listByModule?db().listByModule(id):[]}
function typeLabel(t){return ({problema:"Problema",autor:"Autor",argumento:"Argumento",distinção:"Distinção",experiencia:"Experiência mental",dilema:"Dilema",oficina:"Oficina",caso:"Caso"})[t]||t}
function open(){
 const m=document.getElementById("prismaMain");if(!m)return;
 const us=units(),ps=plans();
 m.innerHTML='<div class="prisma-head"><div><div class="prisma-kicker">PRISMA · PREPARAR AULA</div><h1>Constrói a tua aula</h1><p>Parte do currículo e constrói um percurso filosófico coerente. Cada recurso apresentado pertence ao módulo escolhido.</p></div></div>'+
 '<div class="prisma-panel"><h2>1 · Partir do currículo</h2><div class="tool-form"><label>Módulo curricular<select id="lbUnit"><option value="">Escolher módulo…</option>'+us.map(u=>'<option value="'+esc(u.id)+'">'+esc(u.name||u.title||u.id)+'</option>').join("")+'</select></label><label>Tema / foco<input id="lbTopic" placeholder="Ex.: liberdade, justiça, conhecimento…"></label><label>Duração<select id="lbDuration"><option>50 minutos</option><option>90 minutos</option><option>100 minutos</option></select></label></div></div>'+
 '<div id="lbPhilosophy"></div>'+
 '<div class="prisma-panel"><h2>3 · Materiais pessoais</h2><p class="muted">Podes acrescentar materiais do teu Drive ao percurso. Estes não substituem os recursos filosóficos do módulo.</p><div id="lbMaterials"><div class="notice">A carregar materiais…</div></div></div>'+
 '<div class="prisma-panel"><h2>4 · Ponto de partida</h2><div class="tool-form"><label>Modelo opcional<select id="lbTemplate"><option value="">Criar de raiz</option>'+ps.map(p=>'<option value="'+esc(p.id||"")+'">'+esc(p.title||p.name||"Plano existente")+'</option>').join("")+'</select></label></div><button class="v3btn" id="lbGenerate">✨ Construir percurso filosófico</button></div>'+
 '<div id="lbOutput"></div>';
 function renderPhilosophy(){
   const id=document.getElementById("lbUnit").value, box=document.getElementById("lbPhilosophy");
   if(!id){box.innerHTML='<div class="notice">Escolhe primeiro o módulo. O PRISMA mostrará apenas a base filosófica correspondente.</div>';return}
   const list=resourcesFor(id);
   box.innerHTML='<div class="prisma-panel"><h2>2 · Construir o percurso filosófico</h2><p class="muted">Seleciona os elementos que queres mobilizar. A base pode crescer indefinidamente sem misturar conteúdos de módulos diferentes.</p><div class="v3grid">'+list.map((x,i)=>'<label class="prisma-panel" style="display:block;cursor:pointer"><input type="checkbox" class="lbPhil" value="'+esc(x.id)+'" '+(i<3?'checked':'')+'> <span class="v3tag">'+esc(typeLabel(x.type))+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.prompt||x.text||x.activity||"")+'</p></label>').join("")+'</div></div>';
 }
 document.getElementById("lbUnit").onchange=renderPhilosophy;renderPhilosophy;
 async function loadMaterials(){
   const box=document.getElementById("lbMaterials");
   if(typeof window.allLocal!=="function"){box.innerHTML='<div class="notice">Continua sem materiais pessoais ou abre o Drive para os adicionar.</div>';return}
   try{
    const a=await allLocal(),role=window.role||"professor",owner=(localStorage.getItem("prisma_user_email")||localStorage.getItem("prisma_user_name")||"local").toLowerCase();
    const mine=a.filter(x=>x.role===role&&(!x.owner||x.owner===role+"::"+owner));
    box.innerHTML=mine.length?'<div class="v3grid">'+mine.map(x=>'<label class="prisma-panel" style="display:block"><input type="checkbox" class="lbMat" value="'+esc(x.id)+'"> <strong>'+esc(x.title)+'</strong><div class="muted">'+esc(x.type||"Material")+' · '+esc(x.subject||"Geral")+'</div></label>').join("")+'</div>':'<div class="notice">Ainda não tens materiais pessoais. Podes construir a aula apenas com a base filosófica do PRISMA.</div>';
   }catch(e){box.innerHTML='<div class="notice">Não foi possível carregar os materiais pessoais neste momento.</div>'}
 }
 loadMaterials();
 document.getElementById("lbGenerate").onclick=async function(){
   const unitId=document.getElementById("lbUnit").value;
   if(!unitId){alert("Escolhe um módulo curricular.");return}
   const u=us.find(x=>x.id===unitId)||{}, topic=document.getElementById("lbTopic").value.trim(), duration=document.getElementById("lbDuration").value;
   const moduleData=db().modules[unitId]||{label:u.name||unitId,strands:[]};
   const selected=[...document.querySelectorAll(".lbPhil:checked")].map(b=>db().get(unitId,b.value)).filter(Boolean);
   const problem=selected.find(x=>x.type==="problema")||selected[0]||{};
   const authors=selected.filter(x=>x.type==="autor");
   const texts=authors.filter(x=>x.text);
   const objections=authors.filter(x=>x.objection);
   const activities=selected.filter(x=>x.type==="oficina"||x.type==="experiencia"||x.type==="dilema"||x.type==="caso");
   const argResources=selected.filter(x=>x.type==="argumento");
   const distinctions=selected.filter(x=>x.type==="distinção");
   const chosen=[...document.querySelectorAll(".lbMat:checked")].map(x=>x.value);
   const materials=typeof allLocal==="function"?(await allLocal()).filter(x=>chosen.includes(x.id)):[];
   const plan={
    title:topic||moduleData.label,
    duration,module:moduleData.label,moduleId:unitId,
    problem:problem.prompt||"Qual é o problema filosófico central desta aula?",
    resources:selected.map(x=>x.id),
    materials:materials.map(x=>x.title),
    ae:u.ae||"Consultar Aprendizagens Essenciais",
    author:authors.map(x=>x.author).join(", "),
    evidence:activities[0]&&activities[0].evidence||"O aluno formula uma posição, apresenta razões e responde a uma objeção.",
    createdAt:new Date().toISOString()
   };
   let html='<div class="prisma-panel"><div class="prisma-kicker">PROPOSTA PRISMA · PERCURSO FILOSÓFICO</div><h2>'+esc(plan.title)+'</h2><p><strong>Módulo:</strong> '+esc(plan.module)+' · <strong>Duração:</strong> '+esc(plan.duration)+'</p>'+
   '<div class="prisma-hero"><strong>1 · Problema filosófico</strong><p>'+esc(plan.problem)+'</p></div>';
   if(distinctions.length)html+='<h3>2 · Distinções conceptuais</h3>'+distinctions.map(x=>'<div class="prisma-panel"><strong>'+esc(x.title)+'</strong><p>'+esc(x.prompt)+'</p><p><strong>Distinção:</strong> '+esc(x.contrast)+'</p></div>').join("");
   if(authors.length)html+='<h3>3 · Posições filosóficas</h3><div class="v3grid">'+authors.map(x=>'<div class="prisma-panel"><h4>'+esc(x.author)+' · '+esc(x.title)+'</h4><p>'+esc(x.text||x.prompt)+'</p><p><strong>Pergunta crítica:</strong> '+esc(x.objection||"Que objeção pode ser dirigida a esta posição?")+'</p><p><strong>Resposta possível:</strong> '+esc(x.reply||"Testar a objeção e verificar se a posição precisa de ser reformulada.")+'</p></div>').join("")+'</div>';
   if(argResources.length)html+='<h3>4 · Argumentação</h3>'+argResources.map(x=>'<div class="prisma-panel"><h4>'+esc(x.title)+'</h4><ol>'+x.argument.map(s=>'<li>'+esc(s)+'</li>').join("")+'</ol><p><strong>Objeção:</strong> '+esc(x.objection||"")+'</p><p><strong>Resposta:</strong> '+esc(x.reply||"")+'</p></div>').join("");
   if(activities.length)html+='<h3>5 · Problematização e atividade</h3>'+activities.map(x=>'<div class="lesson-card"><h4>'+esc(x.title)+'</h4><p>'+esc(x.prompt||x.activity)+'</p><p><strong>Procedimento:</strong> '+esc(x.activity||"Analisar o caso, formular uma posição e justificá-la.")+'</p><p><strong>Evidência:</strong> '+esc(x.evidence||plan.evidence)+'</p></div>').join("");
   html+='<h3>6 · Sequência didática</h3><ol><li><strong>Problematização:</strong> apresentar o caso ou pergunta e registar respostas iniciais.</li><li><strong>Conceptualização:</strong> clarificar as distinções necessárias para compreender o problema.</li><li><strong>Reconstrução:</strong> analisar uma posição filosófica e explicitar as suas razões.</li><li><strong>Objeção:</strong> testar a posição através de um contraexemplo ou argumento contrário.</li><li><strong>Discussão:</strong> confrontar razões e permitir revisão da posição inicial.</li><li><strong>Síntese:</strong> responder novamente ao problema, agora com razões.</li><li><strong>Evidência final:</strong> '+esc(plan.evidence)+'</li></ol>';
   if(materials.length)html+='<h3>7 · Materiais pessoais associados</h3><p>'+esc(materials.map(x=>x.title).join(" · "))+'</p>';
   html+='<h3>8 · Critério de qualidade filosófica</h3><div class="prisma-panel"><p>A resposta do aluno não é avaliada por coincidir com uma posição do professor, mas pela capacidade de <strong>formular uma tese, apresentar razões, considerar uma objeção e rever ou defender a posição de forma justificada</strong>.</p></div>'+
   '<div class="prisma-actions"><button class="prisma-action" onclick="window.print()"><strong>🖨 Imprimir / guardar PDF</strong><small>Levar o percurso para a aula.</small></button><button class="prisma-action" id="lbSave"><strong>💾 Guardar proposta</strong><small>Reutilizar este percurso neste dispositivo.</small></button></div></div>';
   document.getElementById("lbOutput").innerHTML=html;
   document.getElementById("lbSave").onclick=function(){localStorage.setItem("prisma_last_lesson",JSON.stringify(plan));alert("Percurso filosófico guardado neste dispositivo.")};
 };
}
window.prismaLessonBuilder={open};
})();
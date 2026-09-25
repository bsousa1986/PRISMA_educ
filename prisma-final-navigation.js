/* PRISMA FINAL NAVIGATION AUTHORITY — 2026-09-25 */
(function(){
function W(){return document.getElementById("workspaceContent")}
function M(){return W()&&W.querySelector(".prisma-main")}
function role(){return (window.role||localStorage.getItem("prisma_role")||"professor")}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(x){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[x]})}
function units(){try{return Object.values(window.curriculumUnits||{}).flat()}catch(e){return[]}}
function renderModules(){
 const m=M(); if(!m)return;
 const u=units();
 m.innerHTML='<div class="prisma-head"><div><div class="prisma-kicker">PRISMA</div><h1>Módulos curriculares</h1><p>Entra diretamente nos dossiers de aprendizagem de cada módulo.</p></div></div><div class="prisma-units">'+u.map(function(x,i){return '<button type="button" class="prisma-unit" data-final-unit="'+esc(x.id)+'"><span class="unit-no">'+(i+1)+' · '+esc(x.id)+'</span><h3>'+esc(x.name)+'</h3><p>'+esc(x.ae||"")+'</p><div class="unit-meta">Abrir módulo →</div></button>'}).join("")+'</div>';
}
function renderResources(){
 const m=M(); if(!m)return;
 const base=window.PRISMA_READY_RESOURCES||[];
 m.innerHTML='<div class="prisma-head"><div><div class="prisma-kicker">PRISMA</div><h1>Recursos</h1><p>Materiais pedagógicos prontos a consultar, adaptar e imprimir.</p></div></div><div class="v3grid">'+base.map(function(x){return '<article class="v3card"><span class="v3tag">'+esc(x.type||"Recurso")+'</span><h3>'+esc(x.title)+'</h3><p>'+esc(x.desc||"")+'</p><button type="button" class="v3btn" data-final-resource="'+esc(x.id)+'">Abrir recurso</button></article>'}).join("")+'</div>';
}
function openUnit(id){
 if(typeof window.renderCore==="function") return window.renderCore(id);
 if(typeof window.openUnit==="function") return window.openUnit(id);
}
function openResource(id){
 if(typeof window.renderResource==="function") return window.renderResource(id);
 if(typeof window.prismaRenderResource==="function") return window.prismaRenderResource(id);
 const r=baseFind(id); if(!r)return;
 const m=M();m.innerHTML='<button class="back" data-final-tab="recursos">← Recursos</button><div class="prisma-card">'+r.html+'</div>';
}
function baseFind(id){return (window.PRISMA_READY_RESOURCES||[]).find(function(x){return x.id===id})}
function tab(t){
 if(t==="curriculo")return renderModules();
 if(t==="recursos")return renderResources();
 if(t==="materiais"&&typeof window.v3Professor==="function")return window.v3Professor("materiais");
 if(t==="documentos"&&typeof window.v3Professor==="function")return window.v3Professor("documentos");
 if(t==="planos"&&typeof window.prismaTeacherPlans==="function")return window.prismaTeacherPlans();
 if(t==="exercicios"&&typeof window.prismaTeacherExercises==="function")return window.prismaTeacherExercises();
 if(t==="avaliacao"&&typeof window.prismaTeacherAssessment==="function")return window.prismaTeacherAssessment();
 if(t==="inicio"&&typeof window.openApp==="function")return window.openApp(role());
 if(t==="blog"&&typeof window.prismaBlog==="function")return window.prismaBlog();
 if(t==="mensagem"&&typeof window.prismaMessage==="function")return window.prismaMessage();
 if(t==="investigacao"&&typeof window.prismaResearch==="function")return window.prismaResearch();
}
window.addEventListener("click",function(e){
 let b=e.target.closest("[data-final-tab]"); if(b){e.preventDefault();e.stopImmediatePropagation();tab(b.dataset.finalTab);return}
 b=e.target.closest("[data-clean-tab]"); if(b){e.preventDefault();e.stopImmediatePropagation();tab(b.dataset.cleanTab);return}
 b=e.target.closest("[data-hot-tab]"); if(b){e.preventDefault();e.stopImmediatePropagation();tab(b.dataset.hotTab);return}
 b=e.target.closest("[data-t]"); if(b){e.preventDefault();e.stopImmediatePropagation();tab(b.dataset.t);return}
 b=e.target.closest("[data-final-unit]"); if(b){e.preventDefault();e.stopImmediatePropagation();openUnit(b.dataset.finalUnit);return}
 b=e.target.closest("[data-final-resource]"); if(b){e.preventDefault();e.stopImmediatePropagation();openResource(b.dataset.finalResource);return}
},true);
window.PRISMA_FINAL_NAV={renderModules,renderResources,openUnit,openResource};
})();
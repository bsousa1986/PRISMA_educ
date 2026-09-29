/* PRISMA CLOUD DRIVE — private Drive + voluntary community sharing */
(function(){
"use strict";
var CONFIG=window.PRISMA_SUPABASE_CONFIG||{};
var client=null;
function configured(){return !!(window.supabase&&CONFIG.url&&CONFIG.publishableKey&&!/YOUR_|COLOQUE_/i.test(CONFIG.url+" "+CONFIG.publishableKey));}
var authReady=Promise.resolve(null);
if(configured()){client=window.supabase.createClient(CONFIG.url,CONFIG.publishableKey,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});authReady=new Promise(function(resolve){var done=false;var finish=function(){if(done)return;done=true;resolve(true);};client.auth.onAuthStateChange(function(){finish();});setTimeout(finish,3000);});}
function esc(s){return String(s==null?"":s).replace(/[&<>"]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]});}
function uid(){return "cm_"+Date.now()+"_"+Math.random().toString(36).slice(2,8);}
function role(){return window.role||localStorage.getItem("prisma_session_role")||"professor";}
function pane(){return document.getElementById("prismaMain");}
function modules(){return Object.entries((window.PRISMA_PHILOSOPHY_DB||{}).modules||{}).map(function(a){return {id:a[0],label:a[1].label};});}
function currentUser(){return client?client.auth.getUser():Promise.resolve({data:{user:null}});}
async function authUser(){if(!client)return null;try{var s=await client.auth.getSession();if(s.data&&s.data.session&&s.data.session.user)return s.data.session.user;var r=await client.auth.getUser();if(r.data&&r.data.user)return r.data.user;}catch(e){}return null;}
function localMaterials(){try{return JSON.parse(localStorage.getItem("prisma_cloud_demo_materials")||"[]")}catch(e){return[]}}
function saveLocal(a){localStorage.setItem("prisma_cloud_demo_materials",JSON.stringify(a));}
function materialType(name){var n=(name||"").toLowerCase();if(/\.pdf$/.test(n))return"PDF / Livro / Ensaio";if(/\.pptx?$/.test(n))return"PP / Apresentação";if(/\.docx?$/.test(n))return"Documento";if(/\.(png|jpe?g|webp|gif)$/.test(n))return"Imagem";return"Outro material";}
function shellHeader(){
return '<div class="prisma-cloud-hero"><div><span class="prisma-kicker">PRISMA DRIVE</span><h1>Os teus materiais, no teu espaço.</h1><p>Guarda primeiro. Partilha apenas aquilo que quiseres tornar útil para outros professores e alunos.</p></div><div class="prisma-cloud-status">'+(client?'☁️ Drive sincronizada':'💾 Modo demonstração')+'</div></div>';
}
function render(){
var m=pane();if(!m)return;
m.innerHTML=shellHeader()+
'<div class="prisma-cloud-tabs"><button class="active" data-cd-tab="drive">📁 Meu Drive</button><button data-cd-tab="community">🌍 Biblioteca PRISMA</button><button data-cd-tab="upload">＋ Adicionar material</button></div>'+
'<div id="cdBody"></div>';
document.querySelectorAll("[data-cd-tab]").forEach(function(b){b.onclick=function(){document.querySelectorAll("[data-cd-tab]").forEach(function(x){x.classList.remove("active")});b.classList.add("active");show(b.dataset.cdTab);};});
show("drive");
}
async function show(tab){
var b=document.getElementById("cdBody");if(!b)return;
if(tab==="upload")return uploadForm();
if(tab==="community")return community();
var data=await own();
b.innerHTML='<div class="prisma-cloud-section"><div><h2>🔒 Meu Drive</h2><p>Privado por defeito. Só tu tens acesso.</p></div><button class="v3btn" id="cdAdd">＋ Adicionar material</button></div>'+
'<div class="prisma-cloud-note">Os materiais que não partilhares permanecem privados. A opção de partilha é sempre tua.</div>'+
'<div class="prisma-cloud-grid">'+(data.length?data.map(card).join(""):'<div class="prisma-panel prisma-empty"><div class="prisma-empty-icon">📂</div><h3>O teu Drive está vazio</h3><p>Carrega um PDF, Word, PowerPoint, ficha, ensaio ou livro. Depois decides se fica só contigo ou se queres partilhá-lo.</p><button class="v3btn" id="cdEmptyAdd">＋ Carregar o primeiro material</button></div>')+'</div>';
var add=document.getElementById("cdAdd")||document.getElementById("cdEmptyAdd");if(add)add.onclick=uploadForm;
wireCards();
}
async function own(){
if(client){var u=await authUser();if(!u)return[];var r=await client.from("prisma_materials").select("*").eq("owner_id",u.id).order("created_at",{ascending:false});if(!r.error)return r.data||[];}
return localMaterials().filter(function(x){return x.owner===ownerKey()}).sort(function(a,b){return b.created-a.created;});
}
function ownerKey(){return role()+"::"+(localStorage.getItem("prisma_user_email")||"local");}
function card(x){
var shared=x.is_shared===true||x.shared===true;
return '<article class="prisma-cloud-card"><div class="prisma-cloud-card-top"><span class="badge">'+esc(x.material_type||x.type||"Material")+'</span><span class="prisma-share '+(shared?"on":"off")+'">'+(shared?"🌍 Partilhado":"🔒 Privado")+'</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description||x.subject||"Sem descrição.")+'</p><div class="prisma-cloud-meta">'+esc(x.module_id||x.moduleId||"Sem módulo")+(x.year_level?" · "+esc(x.year_level):"")+'</div><div class="prisma-cloud-actions"><button data-cd-open="'+esc(x.id)+'">Abrir</button><button data-cd-share="'+esc(x.id)+'">'+(shared?"Tornar privado":"Partilhar")+'</button><button data-cd-plan="'+esc(x.id)+'">Usar na aula</button><button class="danger" data-cd-del="'+esc(x.id)+'">Eliminar</button></div></article>';
}
function uploadForm(){
var b=document.getElementById("cdBody");if(!b)return;
var opts=modules().map(function(x){return'<option value="'+esc(x.id)+'">'+esc(x.id+" · "+x.label)+'</option>'}).join("");
b.innerHTML='<div class="prisma-cloud-form"><div class="prisma-cloud-form-head"><button id="cdBack">← Meu Drive</button><span class="badge">NOVO MATERIAL</span></div><h2>Adicionar material</h2><p class="muted">O material fica privado até decidires partilhá-lo.</p>'+
'<div class="prisma-cloud-upload"><label class="prisma-drop"><input id="cdFile" type="file" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.md,.odt,.odp,.png,.jpg,.jpeg,.webp"><strong>📎 Escolher ficheiro</strong><small>PDF · Word · PowerPoint · imagens · texto</small></label><div class="prisma-or">ou</div><input id="cdUrl" placeholder="https://... ligação para um recurso"></div>'+
'<div class="prisma-cloud-fields"><label>Título<input id="cdTitle" placeholder="Ex.: Ficha — Livre-arbítrio e responsabilidade"></label><label>Módulo<select id="cdModule"><option value="">Selecionar módulo</option>'+opts+'</select></label><label>Tema<input id="cdTopic" placeholder="Tema ou conceito"></label><label>Ano<select id="cdYear"><option value="">Todos</option><option>10.º</option><option>11.º</option></select></label><label>Tipo<select id="cdType"><option>Ensaio</option><option>Livro</option><option>Ficha</option><option>PP / Apresentação</option><option>Artigo</option><option>Recurso</option><option>Outro</option></select></label><label>Descrição<textarea id="cdDesc" placeholder="Em duas ou três linhas, explica o que contém e para que pode ser usado."></textarea></label><label>Tags<input id="cdTags" placeholder="ex.: ética, Kant, debate, 10.º"></label></div>'+
'<div class="prisma-share-box"><div><strong>🌍 Partilhar com a comunidade PRISMA?</strong><p>Se ativares esta opção, o material poderá aparecer na Biblioteca PRISMA para outros utilizadores. Podes torná-lo privado novamente.</p></div><label class="switch"><input id="cdShared" type="checkbox"><span></span></label></div>'+
'<div class="prisma-rights"><label>Direitos de utilização<select id="cdLicense"><option value="">Selecionar</option><option>Material próprio</option><option>Domínio público</option><option>Creative Commons</option><option>Tenho autorização para partilhar</option></select></label><small>Partilha apenas materiais que podes legalmente disponibilizar.</small></div>'+
'<button class="prisma-cloud-submit" id="cdSave">Guardar material</button><div id="cdMsg"></div></div>';
document.getElementById("cdBack").onclick=render;document.getElementById("cdSave").onclick=save;
}
async function save(){
var file=document.getElementById("cdFile").files[0],url=document.getElementById("cdUrl").value.trim(),title=document.getElementById("cdTitle").value.trim()||(file&&file.name)||"";
var msg=document.getElementById("cdMsg");if(!title||(file&&url)){msg.innerHTML='<div class="notice">Escolhe um ficheiro ou uma ligação e dá-lhe um título.</div>';return;}
var x={title:title,description:document.getElementById("cdDesc").value.trim(),module_id:document.getElementById("cdModule").value,topic:document.getElementById("cdTopic").value.trim(),year_level:document.getElementById("cdYear").value,material_type:document.getElementById("cdType").value,tags:document.getElementById("cdTags").value.split(",").map(function(s){return s.trim()}).filter(Boolean),is_shared:document.getElementById("cdShared").checked,license:document.getElementById("cdLicense").value,status:"published",source_url:url||null};
if(x.is_shared&&!x.license){msg.innerHTML='<div class="notice">Para partilhar com a comunidade, indica a licença/direito que permite a partilha.</div>';return;}
msg.innerHTML='<div class="feedback">A guardar…</div>';
if(client){
var u=await authUser();if(!u){msg.innerHTML='<div class="notice">A Drive sincronizada precisa de uma sessão ativa. <button type="button" class="v3btn" id="cdLoginNow" style="margin-top:9px">🔐 Iniciar sessão</button></div>';var lb=document.getElementById("cdLoginNow");if(lb)lb.onclick=function(){if(window.prismaLogin)window.prismaLogin(window.role||"professor");};return;}
if(file){x.file_name=file.name;x.mime_type=file.type||"application/octet-stream";x.file_size=file.size;x.file_path=u.id+"/"+Date.now()+"_"+file.name.replace(/[^a-zA-Z0-9._-]/g,"_");var up=await client.storage.from("prisma-materials").upload(x.file_path,file,{upsert:false});if(up.error){msg.innerHTML='<div class="notice">'+esc(up.error.message)+'</div>';return;}}
x.owner_id=u.id;x.owner_name=u.user_metadata&&u.user_metadata.full_name||localStorage.getItem("prisma_user_name")||"Utilizador PRISMA";
var ins=await client.from("prisma_materials").insert(x);if(ins.error){if(x.file_path)await client.storage.from("prisma-materials").remove([x.file_path]);msg.innerHTML='<div class="notice">'+esc(ins.error.message)+'</div>';return;}
return show("drive");
}
x.id=uid();x.owner=ownerKey();x.created=Date.now();x.shared=x.is_shared;x.type=x.material_type;x.subject=x.topic||"Filosofia";x.url=x.source_url;x.source="Meu Drive PRISMA";if(file){msg.innerHTML='<div class="feedback">Neste momento a demonstração local não sincroniza ficheiros entre dispositivos. Configura o Supabase para ativar a Drive real.</div>';return;}var a=localMaterials();a.push(x);saveLocal(a);show("drive");
}
async function community(){
var b=document.getElementById("cdBody");if(!b)return;var data=[];
if(client){var r=await client.from("prisma_materials").select("*").eq("is_shared",true).eq("status","published").order("created_at",{ascending:false});if(!r.error)data=r.data||[];}
else data=localMaterials().filter(function(x){return x.shared});
b.innerHTML='<div class="prisma-cloud-section"><div><h2>🌍 Biblioteca PRISMA</h2><p>Materiais que outros utilizadores decidiram partilhar.</p></div><div class="prisma-cloud-search"><input id="cdSearch" placeholder="Pesquisar por título, tema ou módulo"></div></div><div id="cdCommunityGrid" class="prisma-cloud-grid"></div>';
function paint(){var q=(document.getElementById("cdSearch").value||"").toLowerCase();var aa=data.filter(function(x){return (x.title+" "+(x.topic||"")+" "+(x.module_id||"")+" "+(x.description||"")).toLowerCase().includes(q)});document.getElementById("cdCommunityGrid").innerHTML=aa.length?aa.map(cardCommunity).join(""):'<div class="prisma-panel prisma-empty"><div class="prisma-empty-icon">🌱</div><h3>A biblioteca ainda está a crescer</h3><p>Quando alguém decidir partilhar um material, aparecerá aqui.</p></div>';wireCommunity();}
document.getElementById("cdSearch").oninput=paint;paint();
}
function cardCommunity(x){return '<article class="prisma-cloud-card"><div class="prisma-cloud-card-top"><span class="badge">'+esc(x.material_type||x.type||"Material")+'</span><span class="prisma-share on">🌍 Comunidade</span></div><h3>'+esc(x.title)+'</h3><p>'+esc(x.description||"Material partilhado por "+(x.owner_name||"utilizador PRISMA")+".")+'</p><div class="prisma-cloud-meta">'+esc(x.module_id||"Transversal")+' · '+esc(x.year_level||"")+'</div><div class="prisma-cloud-actions"><button data-cd-copy="'+esc(x.id)+'">＋ Guardar no meu Drive</button><button data-cd-open-community="'+esc(x.id)+'">Abrir</button><button data-cd-plan-community="'+esc(x.id)+'">Usar na aula</button></div></article>';}
async function communityData(){if(client){var r=await client.from("prisma_materials").select("*").eq("is_shared",true).eq("status","published");return r.data||[]}return localMaterials().filter(function(x){return x.shared});}
function wireCommunity(){document.querySelectorAll("[data-cd-copy]").forEach(function(b){b.onclick=async function(){var x=(await communityData()).find(z=>z.id===b.dataset.cdCopy);if(!x)return;var a=localMaterials();var copy=Object.assign({},x,{id:uid(),owner:ownerKey(),shared:false,is_shared:false,source:"Biblioteca PRISMA"});delete copy.owner_id;delete copy.file_path;a.push(copy);saveLocal(a);alert("Guardado no teu Drive.");};});document.querySelectorAll("[data-cd-open-community]").forEach(function(b){b.onclick=async function(){var x=(await communityData()).find(z=>z.id===b.dataset.cdOpenCommunity);if(x&&x.source_url)window.open(x.source_url,"_blank","noopener");else if(x&&x.file_path&&client){var u=await client.storage.from("prisma-materials").createSignedUrl(x.file_path,300);if(u.data&&u.data.signedUrl)window.open(u.data.signedUrl,"_blank","noopener");}}});document.querySelectorAll("[data-cd-plan-community]").forEach(function(b){b.onclick=async function(){var x=(await communityData()).find(z=>z.id===b.dataset.cdPlanCommunity);if(x)use(x);};});}
function wireCards(){document.querySelectorAll("[data-cd-share]").forEach(function(b){b.onclick=async function(){var data=await own(),x=data.find(z=>z.id===b.dataset.cdShare);if(!x)return;if(client){var r=await client.from("prisma_materials").update({is_shared:!x.is_shared,updated_at:new Date().toISOString()}).eq("id",x.id);if(r.error)alert(r.error.message);else show("drive");}else{var a=localMaterials(),y=a.find(z=>z.id===x.id);if(y){y.shared=!y.shared;y.is_shared=y.shared;saveLocal(a);show("drive");}}};});document.querySelectorAll("[data-cd-open]").forEach(function(b){b.onclick=async function(){var x=(await own()).find(z=>z.id===b.dataset.cdOpen);if(!x)return;if(x.source_url)window.open(x.source_url,"_blank","noopener");else if(x.file_path&&client){var r=await client.storage.from("prisma-materials").createSignedUrl(x.file_path,300);if(r.data&&r.data.signedUrl)window.open(r.data.signedUrl,"_blank","noopener");}else alert("Este ficheiro só existe na demonstração local deste dispositivo.");};});document.querySelectorAll("[data-cd-del]").forEach(function(b){b.onclick=async function(){if(!confirm("Eliminar este material?"))return;var x=(await own()).find(z=>z.id===b.dataset.cdDel);if(client){if(x&&x.file_path)await client.storage.from("prisma-materials").remove([x.file_path]);await client.from("prisma_materials").delete().eq("id",b.dataset.cdDel);}else saveLocal(localMaterials().filter(function(z){return z.id!==b.dataset.cdDel}));show("drive");};});document.querySelectorAll("[data-cd-plan]").forEach(function(b){b.onclick=async function(){var x=(await own()).find(z=>z.id===b.dataset.cdPlan);if(x)use(x);};});}
async function signIn(email,name,roleName){if(!client)return {ok:false,error:{message:"Supabase não está configurado no navegador."}};try{var s=await client.auth.getSession();if(s.data&&s.data.session&&s.data.session.user)return {ok:true,user:s.data.session.user,existing:true};var redirect=window.location.origin+window.location.pathname;var r=await client.auth.signInWithOtp({email:email,options:{emailRedirectTo:redirect,shouldCreateUser:true,data:{full_name:name,prisma_role:roleName}}});return {ok:!r.error,error:r.error,sent:!r.error};}catch(e){return {ok:false,error:{message:e&&e.message||"Erro de autenticação"}};}}
function signOut(){if(client)return client.auth.signOut();}
window.prismaCloudSignIn=signIn;
window.prismaCloudSignOut=signOut;
function use(x){var a=JSON.parse(localStorage.getItem("prisma_pending_materials")||"[]");if(!a.includes(x.title))a.push(x.title);localStorage.setItem("prisma_pending_materials",JSON.stringify(a));if(window.runTool)window.runTool("plano");}
window.prismaCloudDrive={open:render,configured:configured,client:function(){return client},authUser:authUser,signIn:signIn,signOut:signOut};
})();
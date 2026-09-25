(function(){
var M={
"F10-I":{f:"Ficha do aluno — Do espanto ao problema",t:"Texto-base: Filosofar começa quando uma afirmação deixa de parecer evidente.",q:["Transforma a afirmação num problema filosófico.","Indica dois conceitos envolvidos.","Formula uma objeção."],g:["A pergunta deve ser conceptual e discutível por razões.","Não basta pedir informação factual."]},
"F10-II-L":{f:"Ficha do aluno — Somos realmente livres?",t:"Caso: uma pessoa escolhe depois de uma cadeia causal que explica o seu comportamento.",q:["O agente poderia ter escolhido de outro modo?","O determinismo elimina responsabilidade?","Formula uma objeção à tua resposta."],g:["Distingue determinismo de fatalismo.","Uma posição filosófica precisa de razões."]},
"F10-II-E":{f:"Ficha do aluno — Verdade moral",t:"Duas sociedades discordam sobre uma prática moral.",q:["A discordância prova relativismo?","Distingue relativismo e objetivismo.","Apresenta um contraexemplo."],g:["Não confundas desacordo com inexistência de verdade."]},
"F10-II-M":{f:"Ficha do aluno — Dever ou consequência?",t:"Uma pessoa mente para proteger alguém de um agressor.",q:["O resultado basta para justificar a ação?","Como avaliaria uma ética do dever?","Como avaliaria uma ética consequencialista?"],g:["Explicita o critério usado por cada posição."]},
"F10-II-P":{f:"Ficha do aluno — Justiça",t:"Imagina que vais entrar numa sociedade sem saber se nascerás rico ou pobre.",q:["Que regras escolherias?","Porquê?","Que objeção pode ser feita à tua regra?"],g:["Distingue igualdade, mérito, necessidade e liberdade."]},
"F10-III":{f:"Ficha do aluno — Problema contemporâneo",t:"Escolhe um problema contemporâneo e transforma-o numa questão filosófica.",q:["Formula o problema.","Define os conceitos essenciais.","Apresenta duas posições.","Constrói uma objeção."],g:["Evita transformar o trabalho num simples relatório factual."]},
"F11-IV-K":{f:"Ficha do aluno — Podemos conhecer?",t:"Uma experiência pode enganar-nos mesmo quando parece absolutamente evidente.",q:["O que conta como justificação?","Que desafio coloca o ceticismo?","Compara duas respostas filosóficas."],g:["Distingue crença verdadeira de conhecimento justificado."]},
"F11-IV-C":{f:"Ficha do aluno — Ciência",t:"Uma hipótese explica todos os resultados porque é reformulada sempre que aparece um problema.",q:["É testável?","O que poderia refutá-la?","Distingue confirmação de refutação."],g:["Uma teoria científica deve excluir possibilidades."]},
"F11-IV-T":{f:"Ficha do aluno — Algoritmo e responsabilidade",t:"Uma empresa usa um algoritmo para selecionar candidatos.",q:["Quem é responsável pela decisão?","Eficiência garante justiça?","Deve existir contestação?"],g:["Distingue erro técnico, desigualdade e injustiça."]}
};
window.PRISMA_STUDENT_SHEETS=M;
function esc(s){return String(s).replace(/[&<>"]/g,x=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[x]))}
function inject(id){
 var p=M[id],m=document.querySelector("#workspaceContent .prisma-main");if(!p||!m)return;
 var h='<section class="prisma-plan-operacional"><h3>Ficha de trabalho do aluno</h3><div class="prisma-panel"><h4>'+esc(p.f)+'</h4><p>'+esc(p.t)+'</p></div><h4>Questões</h4>'+p.q.map((x,i)=>'<div class="choice"><b>'+(i+1)+'.</b> '+esc(x)+'<div style="height:55px;border-bottom:1px solid #ccc"></div></div>').join("")+'<div class="prisma-panel"><h4>Critérios de orientação</h4><ul>'+p.g.map(x=>"<li>"+esc(x)+"</li>").join("")+'</ul></div><button class="prisma-action" onclick="window.print()">🖨 Imprimir / guardar PDF</button></section>';
 m.insertAdjacentHTML("beforeend",h);
}
window.PRISMA_INJECT_SHEETS=inject;
var old=window.renderCore;
if(typeof old==="function")window.renderCore=function(id){old(id);inject(id)};
})();
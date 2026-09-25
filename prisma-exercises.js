/* PRISMA — Exercícios, testes e correção | 2026-09-25 */
(function(){
const E={
"F10-I":{title:"Filosofia e filosofar",items:[
["Conceitos","Explica, por palavras tuas, a diferença entre uma pergunta factual e uma pergunta filosófica. Dá um exemplo de cada."],
["Reconstrução","Lê: “A liberdade é importante porque permite escolher. Se não pudéssemos escolher, não seríamos responsáveis. Logo, a responsabilidade pressupõe liberdade.” Identifica tese, razões e conclusão."],
["Problematização","Transforma a afirmação “toda a gente tem direito a ser livre” numa questão filosófica que permita posições fundamentadas."],
["Objeção","Formula uma objeção à ideia de que uma boa resposta filosófica é simplesmente a opinião mais comum."]
],essay:"Será que filosofar consiste mais em procurar boas razões do que em encontrar respostas definitivas?"}, 
"F10-II-L":{title:"Livre-arbítrio",items:[
["Distinção","Distingue determinismo, livre-arbítrio e responsabilidade moral."],
["Caso","Uma pessoa escolhe não copiar num exame porque teme ser apanhada. Outra não copia porque considera injusto fazê-lo. A diferença é filosoficamente relevante? Justifica."],
["Argumento","Reconstrói o argumento segundo o qual, se todas as ações têm causas anteriores suficientes, ninguém poderia ter agido de outro modo."],
["Objeção","Apresenta uma objeção compatibilista ao argumento anterior."]
],essay:"Se uma ação for causalmente determinada, ainda podemos responsabilizar moralmente quem a pratica?"}, 
"F10-II-E":{title:"Juízos morais",items:[
["Distinção","Distingue relativismo moral e objetivismo moral."],
["Aplicação","Uma escola proíbe telemóveis durante testes. Um aluno diz que é errado porque “cada pessoa tem a sua opinião”. Explica por que razão esta resposta não resolve, por si só, a questão moral."],
["Contraexemplo","Dá um contraexemplo à ideia de que “se uma sociedade aprova uma prática, então essa prática é moralmente correta”."],
["Justificação","Formula uma razão que poderia apoiar um juízo moral e explica por que razão uma razão não é o mesmo que uma preferência."]
],essay:"Existem verdades morais independentes das opiniões das pessoas?"}, 
"F10-II-M":{title:"Fundamentação da moral",items:[
["Kant","Explica o que significa agir por dever e distingue essa ação de agir apenas de acordo com o dever."],
["Mill","Explica o princípio da maior felicidade e identifica o critério usado para avaliar uma ação."],
["Comparação","Mostra como Kant e Mill poderiam justificar de forma diferente a mesma ação moralmente correta."],
["Objeção","Apresenta uma dificuldade para uma ética que avalie as ações exclusivamente pelas suas consequências."]
],essay:"Uma ação é moralmente correta por respeitar um princípio ou pelas consequências que produz?"}, 
"F10-II-P":{title:"Justiça e sociedade",items:[
["Conceito","Distingue igualdade formal e igualdade material."],
["Experiência","Imagina que tens de escolher as regras de uma sociedade sem saber se nascerás rico, pobre, saudável ou com uma deficiência. Que informação considerarias relevante para estabelecer regras justas?"],
["Argumento","Explica por que razão a posição inicial pode ser usada como experiência mental para pensar a justiça."],
["Objeção","Formula uma objeção à ideia de que uma sociedade justa deve procurar reduzir desigualdades."]
],essay:"A justiça exige apenas igualdade perante a lei ou exige também atenção às desigualdades sociais?"}, 
"F10-III":{title:"Problemas do mundo contemporâneo",items:[
["Problematização","Escolhe um problema contemporâneo e formula uma pergunta que seja genuinamente filosófica."],
["Tese","Distingue descrever um problema social de defender uma tese filosófica sobre esse problema."],
["Aplicação","Um algoritmo recomenda conteúdos cada vez mais semelhantes aos que uma pessoa já vê. Identifica uma questão relacionada com autonomia."],
["Objeção","Formula uma objeção a uma tese que atribua toda a responsabilidade pelas escolhas digitais ao indivíduo."]
],essay:"A tecnologia amplia a nossa autonomia ou pode também limitar a capacidade de escolher por nós próprios?"}, 
"F11-IV-K":{title:"Conhecimento",items:[
["Distinção","Distingue opinião, crença e conhecimento."],
["Ceticismo","Explica como um argumento cético pode usar a possibilidade de erro para pôr em causa uma crença."],
["Hume","Explica por que razão a passagem de “A aconteceu antes de B” para “A causa B” exige mais do que simples observação da sucessão."],
["Objeção","Apresenta uma resposta possível ao ceticismo radical."]
],essay:"Podemos ter conhecimento mesmo que não seja logicamente impossível estarmos enganados?"}, 
"F11-IV-C":{title:"Ciência",items:[
["Indução","Explica o problema da indução e por que razão observar muitos casos não garante logicamente uma generalização universal."],
["Demarcação","Explica o que significa uma hipótese ser testável ou falsificável."],
["Caso","“Esta terapia funciona porque, quando não funciona, isso significa que o corpo está a resistir.” Explica por que razão esta formulação é problemática do ponto de vista da testabilidade."],
["Comparação","Distingue explicação científica de uma simples correlação."]
],essay:"O que torna uma hipótese cientificamente interessante: ser confirmada muitas vezes ou poder ser seriamente posta à prova?"}, 
"F11-IV-T":{title:"Ciência, tecnologia e sociedade",items:[
["Conceito","Distingue tecnologia como instrumento e tecnologia como elemento que transforma práticas sociais."],
["Caso","Uma plataforma decide automaticamente que conteúdos um aluno verá. Identifica pelo menos duas questões éticas envolvidas."],
["Responsabilidade","Se uma decisão foi tomada por um sistema automático, quem pode ser responsabilizado? Apresenta duas posições."],
["Objeção","Formula uma objeção à afirmação “um algoritmo é neutro porque apenas executa regras”."]
],essay:"A introdução de sistemas inteligentes altera apenas aquilo que fazemos ou também aquilo que consideramos responsável fazer?"}
};
function get(id){return E[id]||null}
function exerciseCard(id){
 const d=get(id); if(!d)return "";
 return '<section class="prisma-card"><h3>Exercícios — '+d.title+'</h3><p class="muted">Sequência curta: compreensão → reconstrução → aplicação → objeção.</p>'+
 d.items.map((x,i)=>'<div class="prisma-card" style="margin-top:12px"><b>'+ (i+1)+'. '+x[0]+'</b><p>'+x[1]+'</p><div class="answer-line"></div><div class="answer-line"></div></div>').join("")+
 '<div class="prisma-card" style="margin-top:12px"><b>Mini-ensaio</b><p>'+d.essay+'</p><div class="answer-line"></div><div class="answer-line"></div><div class="answer-line"></div></div>'+
 '<p><button class="primary" data-prisma-print>Imprimir / guardar em PDF</button></p></section>';
}
function assessment(id){
 const d=get(id); if(!d)return "";
 return '<section class="prisma-card"><h3>Teste de avaliação — '+d.title+'</h3>'+
 '<p><b>Parte A — Conceitos (4 valores)</b></p><p>1. Define dois conceitos centrais do módulo e distingue-os de conceitos próximos.</p>'+
 '<p><b>Parte B — Argumentação (6 valores)</b></p><p>2. Reconstrói um argumento estudado: explicita premissas, conclusão e uma objeção possível.</p>'+
 '<p><b>Parte C — Aplicação (4 valores)</b></p><p>3. Aplica uma posição filosófica a um caso novo e justifica a aplicação.</p>'+
 '<p><b>Parte D — Ensaio (6 valores)</b></p><p>4. '+d.essay+' Desenvolve uma resposta argumentada, apresentando pelo menos uma objeção.</p>'+
 '<hr><h4>Guião de correção do professor</h4><ul><li>Conceitos rigorosos e distinções pertinentes: 4 valores.</li><li>Reconstrução fiel do argumento e objeção relevante: 6 valores.</li><li>Aplicação fundamentada ao caso: 4 valores.</li><li>Ensaio: tese clara, razões, articulação conceptual, objeção/resposta e conclusão: 6 valores.</li></ul>'+
 '<p class="muted">A correção deve valorizar a qualidade filosófica da justificação, não apenas a reprodução de definições.</p>'+
 '<button class="primary" data-prisma-print>Imprimir / guardar em PDF</button></section>';
}
window.PRISMA_EXERCISES=E;
window.prismaRenderExercises=function(id){const m=document.querySelector('#workspaceContent .prisma-main');if(!m)return;m.innerHTML='<button class="back" data-hot-back>← Voltar</button>'+exerciseCard(id);};
window.prismaRenderAssessment=function(id){const m=document.querySelector('#workspaceContent .prisma-main');if(!m)return;m.innerHTML='<button class="back" data-hot-back>← Voltar</button>'+assessment(id);};
window.prismaTeacherExercises=function(){
 const m=document.querySelector('#workspaceContent .prisma-main'); if(!m)return;
 m.innerHTML='<h2>Exercícios</h2><p class="muted">Conjuntos por módulo, com progressão e mini-ensaio.</p>'+Object.keys(E).map(id=>'<button class="module-card" data-prisma-ex="'+id+'"><b>'+E[id].title+'</b><span>4 exercícios + mini-ensaio</span></button>').join("");
};
window.prismaTeacherAssessment=function(){
 const m=document.querySelector('#workspaceContent .prisma-main'); if(!m)return;
 m.innerHTML='<h2>Avaliação</h2><p class="muted">Testes modulares com guião de correção e critérios de qualidade filosófica.</p>'+Object.keys(E).map(id=>'<button class="module-card" data-prisma-assess="'+id+'"><b>'+E[id].title+'</b><span>20 valores · versão professor</span></button>').join("");
};
document.addEventListener('click',function(ev){
 const ex=ev.target.closest('[data-prisma-ex]'); if(ex){ev.preventDefault();ev.stopImmediatePropagation();window.prismaRenderExercises(ex.dataset.prismaEx);return;}
 const as=ev.target.closest('[data-prisma-assess]'); if(as){ev.preventDefault();ev.stopImmediatePropagation();window.prismaRenderAssessment(as.dataset.prismaAssess);return;}
 const p=ev.target.closest('[data-prisma-print]'); if(p){ev.preventDefault();window.print();}
},true);
})();

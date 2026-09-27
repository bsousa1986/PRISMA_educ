/* PRISMA PHILOSOPHY DATABASE — modular, extensible, module-scoped */
(function(){
"use strict";
window.PRISMA_PHILOSOPHY_DB = {
  version:"1.0",
  modules:{
    "F10-I":{
      label:"Filosofia e filosofar",
      strands:[
        {id:"problem",title:"O que é filosofar?",type:"problema",prompt:"O que distingue uma pergunta filosófica de uma pergunta meramente factual, prática ou informativa?",moves:["identificar pressupostos","pedir razões","testar definições","procurar contraexemplos"]},
        {id:"socrates",title:"Sócrates e o exame da vida",type:"autor",author:"Sócrates",prompt:"Uma vida não examinada pode ser uma vida boa?",text:"A investigação filosófica não começa necessariamente por possuir respostas, mas por reconhecer que aquilo que julgávamos saber pode precisar de justificação.",question:"O que ganhamos quando suspendemos uma resposta demasiado rápida?",objection:"Se nunca tivermos certezas, a filosofia não se torna paralisante?",reply:"Examinar não significa recusar toda a conclusão; significa exigir razões e permanecer disponível à revisão."},
        {id:"definitions",title:"Definições e contraexemplos",type:"oficina",prompt:"Uma definição que funciona num caso funciona em todos?",activity:"Construir uma definição de justiça, coragem ou liberdade e submetê-la a três casos-limite.",evidence:"O aluno identifica uma insuficiência da definição e reformula-a com justificação."}
      ]
    },
    "F10-II-L":{
      label:"Livre-arbítrio, determinismo e responsabilidade",
      strands:[
        {id:"causal",title:"Determinismo não é fatalismo",type:"distinção",prompt:"Se uma ação tem causas anteriores, isso significa que o agente não é livre?",contrast:"Determinismo afirma dependência causal; fatalismo afirma inevitabilidade independentemente do que façamos.",example:"Estudar para um teste continua a fazer parte da cadeia causal, mesmo num universo determinista."},
        {id:"hume",title:"Hume e o compatibilismo",type:"autor",author:"David Hume",prompt:"Ser livre pode significar agir segundo a própria vontade sem coerção?",text:"A questão não é apenas se a vontade tem causas, mas se a ação resulta da vontade do agente ou de uma imposição externa.",objection:"Se a própria vontade é causalmente determinada, por que chamá-la livre?",reply:"O compatibilista pode responder que responsabilidade exige controlo e ausência de coerção, não uma vontade sem causas."},
        {id:"sartre",title:"Sartre e a responsabilidade",type:"autor",author:"Jean-Paul Sartre",prompt:"Até que ponto somos responsáveis pelas escolhas que fazemos dentro de circunstâncias que não escolhemos?",text:"As circunstâncias condicionam o campo de ação, mas não eliminam automaticamente a necessidade de escolher uma resposta.",objection:"Circunstâncias extremas não podem reduzir drasticamente a responsabilidade?",reply:"Sim; a discussão exige distinguir condicionamento, coerção e responsabilidade."},
        {id:"hypnosis",title:"O agente hipnotizado",type:"experiencia",prompt:"Uma pessoa hipnotizada realiza uma ação que normalmente não faria. É responsável?",activity:"Comparar três casos: coerção, hipnose e escolha voluntária.",evidence:"O aluno explicita pelo menos um critério de responsabilidade e testa-o nos três casos."}
      ]
    },
    "F10-II-E":{
      label:"Juízos morais: relativismo e objetivismo",
      strands:[
        {id:"disagreement",title:"O argumento do desacordo",type:"argumento",prompt:"Se culturas discordam moralmente, segue-se que não existem verdades morais objetivas?",argument:["Culturas discordam sobre muitos juízos morais.","Se não há verdade moral objetiva, o desacordo é esperado.","Logo, o desacordo parece favorecer o relativismo."],objection:"Discordância também ocorre quando existe uma resposta factual correta.",reply:"É preciso mostrar por que o desacordo moral teria uma estrutura diferente do desacordo factual."},
        {id:"rachels",title:"Rachels e o desacordo cultural",type:"autor",author:"James Rachels",prompt:"O desacordo cultural prova o relativismo?",text:"Diferenças entre culturas podem resultar de diferenças nas circunstâncias e crenças factuais, não necessariamente da inexistência de padrões morais.",objection:"Não estaremos a impor os nossos próprios valores?",reply:"A crítica filosófica precisa distinguir crítica moral e simples imposição cultural."},
        {id:"extreme",title:"A sociedade que aprova a crueldade",type:"experiencia",prompt:"Se uma sociedade aprovasse torturar crianças por diversão, essa prática seria correta só porque é socialmente aceite?",activity:"Defender primeiro o relativismo e depois construir a melhor objeção.",evidence:"O aluno distingue aceitação social de justificação moral."},
        {id:"relativism_lab",title:"Laboratório do relativismo",type:"oficina",prompt:"Que tipo de desacordo seria realmente relevante para o relativismo?",activity:"Separar desacordo sobre valores, factos, conceitos e circunstâncias.",evidence:"Classificação fundamentada de quatro tipos de desacordo."}
      ]
    },
    "F10-II-M":{
      label:"Fundamentação da moral",
      strands:[
        {id:"kant",title:"Kant e a universalização",type:"autor",author:"Immanuel Kant",prompt:"Podemos querer que a máxima da nossa ação seja adotada universalmente?",text:"O teste moral pergunta se a razão que guia a ação pode ser assumida como princípio universal sem destruir a própria prática que pressupõe.",objection:"Todos os casos moralmente relevantes podem ser resolvidos por universalização?",reply:"O teste é poderoso, mas a sua aplicação exige formular corretamente a máxima e discutir possíveis conflitos de deveres."},
        {id:"mill",title:"Mill e as consequências",type:"autor",author:"John Stuart Mill",prompt:"Uma ação é correta quando produz as melhores consequências disponíveis?",text:"A avaliação moral pode centrar-se na felicidade e no sofrimento produzidos pelas ações.",objection:"Uma maioria feliz pode justificar sacrificar injustamente uma minoria?",reply:"O consequencialismo precisa explicar como incorpora direitos, regras e efeitos de longo prazo."},
        {id:"lie",title:"A mentira que salva",type:"dilema",prompt:"É moralmente permitido mentir para impedir um homicídio?",activity:"Resolver o caso por Kant e depois por Mill; identificar onde os critérios divergem.",evidence:"Comparação explícita entre duas teorias, sem reduzir nenhuma a uma caricatura."},
        {id:"two_criteria",title:"Dois critérios, uma decisão",type:"oficina",prompt:"Quando dever e consequência apontam em direções diferentes, que razão deve prevalecer?",activity:"Reconstruir duas justificações completas e responder a uma objeção de cada lado.",evidence:"Tese, argumento, objeção e resposta."}
      ]
    },
    "F10-II-P":{
      label:"Justiça e sociedade",
      strands:[
        {id:"distribution",title:"O que deve ser distribuído?",type:"problema",prompt:"Igualdade de resultados, igualdade de oportunidades ou outra coisa: o que exige a justiça?",example:"Três alunos recebem exatamente o mesmo apoio, mas começam com recursos familiares muito diferentes."},
        {id:"rawls",title:"Rawls e a posição original",type:"autor",author:"John Rawls",prompt:"Que princípios escolheríamos sem saber qual será a nossa posição social?",text:"O véu de ignorância procura retirar vantagens arbitrárias da posição de escolha dos princípios.",objection:"As pessoas aceitariam realmente princípios que não maximizassem a sua própria vantagem?",reply:"A experiência serve para testar a força moral da imparcialidade, não para descrever literalmente uma assembleia histórica."},
        {id:"nozick",title:"Nozick e a justiça das transferências",type:"autor",author:"Robert Nozick",prompt:"Uma distribuição desigual pode ser justa se resultar de aquisições e transferências legítimas?",text:"A crítica libertária desloca a atenção do padrão final da distribuição para a história de como os bens foram adquiridos e transferidos.",objection:"Uma história de transferências formalmente livres pode produzir desigualdades moralmente problemáticas?",reply:"Essa é uma das tensões centrais entre liberdade de transferência e padrões de justiça distributiva."},
        {id:"society",title:"Constituir uma sociedade",type:"oficina",prompt:"Que regras escolherias se não soubesses quem serias nela?",activity:"Em grupos, definir cinco princípios para uma sociedade e depois testar quem fica vulnerável.",evidence:"Justificação de cada princípio e revisão após o teste de imparcialidade."}
      ]
    },
    "F10-III":{
      label:"Filosofia perante problemas contemporâneos",
      strands:[
        {id:"information",title:"Mais informação é mais conhecimento?",type:"problema",prompt:"O acesso quase ilimitado a informação aumenta necessariamente a nossa autonomia?",example:"Um aluno recebe milhares de resultados de pesquisa, mas não sabe avaliar fontes, argumentos ou interesses envolvidos."},
        {id:"benkler",title:"Benkler e a produção entre pares",type:"autor",author:"Yochai Benkler",prompt:"Pode uma rede distribuída produzir conhecimento e bens comuns sem depender exclusivamente de mercados ou hierarquias?",text:"A produção entre pares permite que indivíduos contribuam voluntariamente para projetos coordenados em rede.",objection:"Produção distribuída significa automaticamente informação fiável?",reply:"Não: a arquitetura da participação pode ampliar produção e diversidade, mas continua a exigir mecanismos de verificação, reputação e crítica."},
        {id:"arendt",title:"Espaço público e mundo comum",type:"autor",author:"Hannah Arendt",prompt:"O que perdemos quando o espaço de aparição pública se fragmenta?",text:"A pluralidade humana precisa de um mundo partilhado no qual diferentes perspetivas possam aparecer e ser confrontadas.",objection:"As redes ampliam precisamente a possibilidade de participação pública.",reply:"A questão passa a ser que tipo de espaço público as redes produzem e que condições permitem o confronto entre perspetivas."},
        {id:"wikipedia",title:"Wikipedia: conhecimento ou opinião coletiva?",type:"caso",prompt:"Uma obra construída por milhares de colaboradores pode ser uma forma de conhecimento?",activity:"Escolher um artigo controverso, identificar fontes, versões, justificações e mecanismos de revisão.",evidence:"Avaliação fundamentada da fiabilidade e das condições de produção do conhecimento."}
      ]
    },
    "F11-IV-K":{
      label:"Conhecimento e ceticismo",
      strands:[
        {id:"belief",title:"Crença verdadeira justificada",type:"problema",prompt:"O que falta a uma crença verdadeira para ser conhecimento?",example:"Adivinhas corretamente que vai chover, mas apenas por acaso. Sabes que vai chover?"},
        {id:"descartes",title:"Descartes e a dúvida metódica",type:"autor",author:"René Descartes",prompt:"Que crenças resistem a uma dúvida suficientemente radical?",text:"A dúvida metódica não é simples indecisão: funciona como instrumento para procurar um ponto de partida resistente à dúvida.",objection:"Uma dúvida radical é praticável na vida quotidiana?",reply:"O objetivo metodológico é epistemológico, não viver permanentemente em suspensão de crença."},
        {id:"hume",title:"Hume e o problema da indução",type:"autor",author:"David Hume",prompt:"Por que esperamos que o futuro se pareça com o passado?",text:"A passagem de casos observados para uma regularidade futura não parece ser demonstrável apenas pela experiência passada.",objection:"Sem indução não conseguimos fazer ciência ou agir.",reply:"A dificuldade não é mostrar que usamos indução, mas justificar racionalmente por que ela deve funcionar."},
        {id:"brain",title:"Cérebro numa cuba",type:"experiencia",prompt:"Se todas as nossas experiências fossem produzidas artificialmente, poderíamos saber que o mundo externo existe?",activity:"Construir o argumento cético e procurar uma premissa que possa ser contestada.",evidence:"Reconstrução rigorosa do argumento cético."}
      ]
    },
    "F11-IV-C":{
      label:"Ciência, indução e falsificação",
      strands:[
        {id:"induction",title:"Indução e confirmação",type:"problema",prompt:"Mil observações favoráveis podem provar uma lei universal?",example:"Observar apenas cisnes brancos nunca garante logicamente que todos os cisnes sejam brancos."},
        {id:"popper",title:"Popper e a falsificabilidade",type:"autor",author:"Karl Popper",prompt:"O que distingue uma teoria científica de uma teoria que explica tudo?",text:"Uma teoria científica deve expor-se a testes que poderiam mostrar que ela está errada.",objection:"Uma teoria nunca é abandonada apenas por causa de uma anomalia.",reply:"A falsificabilidade caracteriza a estrutura lógica dos testes, enquanto a prática científica envolve decisões metodológicas mais complexas."},
        {id:"kuhn",title:"Kuhn e os paradigmas",type:"autor",author:"Thomas Kuhn",prompt:"A ciência muda apenas acumulando refutações?",text:"A ciência normal trabalha dentro de paradigmas; crises podem conduzir a mudanças profundas nos problemas e critérios relevantes.",objection:"Se paradigmas mudam, a ciência torna-se apenas relativa?",reply:"Mudança de paradigma não implica necessariamente que qualquer teoria seja tão boa como qualquer outra."},
        {id:"experiment",title:"Desenha um teste severo",type:"oficina",prompt:"Como poderias tentar mostrar que uma hipótese está errada?",activity:"Criar uma hipótese e desenhar um teste cujo resultado seria incompatível com ela.",evidence:"Hipótese, previsão, condição de falsificação e interpretação do resultado."}
      ]
    },
    "F11-IV-T":{
      label:"Ciência, tecnologia e sociedade",
      strands:[
        {id:"efficiency",title:"Eficiência basta?",type:"problema",prompt:"Se uma tecnologia funciona de forma eficiente, isso significa que devemos utilizá-la?",example:"Um algoritmo reduz custos, mas produz sistematicamente resultados piores para determinado grupo."},
        {id:"winner",title:"Winner e a política dos artefactos",type:"autor",author:"Langdon Winner",prompt:"As tecnologias incorporam formas de poder e organização social?",text:"Artefactos e sistemas técnicos podem favorecer determinadas formas de participação, controlo ou exclusão.",objection:"Não são as tecnologias simplesmente ferramentas neutras usadas por pessoas?",reply:"Mesmo quando não há intenção política explícita, desenho, infraestrutura e condições de acesso podem distribuir possibilidades de ação de forma desigual."},
        {id:"floridi",title:"Floridi e a ética da informação",type:"autor",author:"Luciano Floridi",prompt:"Devemos avaliar moralmente não apenas ações humanas, mas também os efeitos que sistemas informacionais produzem?",text:"Uma ética da informação amplia a análise para agentes, processos, dados e ambientes informacionais.",objection:"Atribuir estatuto moral à informação não dilui a responsabilidade humana?",reply:"A questão exige distinguir estatuto moral, valor informacional e responsabilidade pelos sistemas."},
        {id:"algorithm",title:"O algoritmo decide por ti",type:"caso",prompt:"Se um sistema decide quem recebe crédito, emprego ou atenção pública, quem responde pelos seus critérios?",activity:"Conselho de ética: identificar benefício, dano, transparência, responsabilidade e possibilidade de contestação.",evidence:"Decisão fundamentada com pelo menos três critérios éticos."}
      ]
    }
  }
};
window.PRISMA_PHILOSOPHY_DB.listByModule=function(id){var m=this.modules[id];return m?m.strands:[]};
window.PRISMA_PHILOSOPHY_DB.get=function(id,sid){var a=this.listByModule(id);return a.find(function(x){return x.id===sid})||null};
})();
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

/* ENRIQUECIMENTO DIDÁTICO v2 — conteúdos adicionais estritamente associados a cada módulo */
(function(){
"use strict";
var E={
"F10-I":[
{id:"argument_structure",title:"Tese, argumento, validade e solidez",type:"conceito",prompt:"Como distinguir uma afirmação de um argumento e um argumento válido de um argumento sólido?",activity:"Classificar exemplos reais em tese, premissas e conclusão; testar validade e depois verdade das premissas.",evidence:"O aluno identifica a estrutura argumentativa e justifica a diferença entre validade e solidez."},
{id:"opposition",title:"Quadrado da oposição",type:"logica",prompt:"O que acontece a uma tese quando negamos a sua quantificação e qualidade?",activity:"Construir quatro proposições categóricas e determinar relações de oposição.",evidence:"Aplicação correta das relações relevantes e justificação da negação."},
{id:"connectives",title:"Conectivas proposicionais",type:"logica",prompt:"Como muda o valor de verdade de uma proposição quando a ligamos por conjunção, disjunção ou condicional?",activity:"Reescrever argumentos quotidianos usando conectivas e testar casos-limite.",evidence:"Formalização e leitura correta das relações lógicas."},
{id:"concept_test",title:"Definir sem circularidade",type:"oficina",prompt:"Uma boa definição pode usar o próprio conceito que pretende explicar?",activity:"Testar definições de liberdade, justiça e conhecimento quanto a circularidade, vagueza e contraexemplos.",evidence:"Reformulação de uma definição com critérios explícitos."},
{id:"opinion_reason",title:"Opinião, razão e conhecimento",type:"problema",prompt:"Quando é que uma opinião passa a ser uma posição filosoficamente fundamentada?",activity:"Escolher uma opinião pessoal e reconstruí-la como tese acompanhada de duas razões e uma objeção.",evidence:"Tese clara, razões pertinentes e resposta a objeção."},
{id:"socratic_dialogue",title:"Diálogo socrático",type:"oficina",prompt:"Perguntar melhor pode ser mais filosófico do que responder depressa?",activity:"Um aluno formula uma definição; os restantes procuram perguntas que revelem pressupostos ou contraexemplos.",evidence:"Capacidade de clarificação conceptual e revisão da posição."}
],
"F10-II-L":[
{id:"alternative",title:"Possibilidades alternativas",type:"argumento",prompt:"Ser moralmente responsável exige que pudéssemos ter feito outra coisa?",argument:["Responsabilidade parece exigir controlo.","Se não havia alternativa possível, parece faltar liberdade.","Logo, ausência de alternativas pode ameaçar a responsabilidade."],objection:"Casos à maneira de Frankfurt sugerem que podemos ser responsáveis mesmo quando uma alternativa é bloqueada.",reply:"A discussão desloca-se para o controlo efetivo e para a origem da ação."},
{id:"frankfurt",title:"Casos de Frankfurt",type:"experiencia",prompt:"Podemos ser responsáveis mesmo sem possibilidades alternativas?",activity:"Comparar uma escolha normal com um caso em que uma intervenção externa impediria qualquer alternativa, mas não interfere de facto.",evidence:"O aluno identifica o papel das alternativas e do controlo."},
{id:"coercion",title:"Coerção, constrangimento e escolha",type:"distinção",prompt:"Toda a influência externa elimina liberdade?",example:"Uma ameaça, uma norma social e um conselho influenciam a decisão de modos diferentes.",evidence:"Distinção fundamentada entre influência, coerção e decisão voluntária."},
{id:"desire",title:"Desejos que não escolhemos",type:"problema",prompt:"Se não escolhemos os nossos desejos, podemos ser livres ao agir segundo eles?",activity:"Comparar desejo espontâneo, desejo compulsivo e desejo refletido.",evidence:"Critério explícito de liberdade e aplicação a três casos."},
{id:"responsibility",title:"Responsabilidade moral e causalidade",type:"argumento",prompt:"Se toda ação tem uma causa, deixa de fazer sentido responsabilizar alguém?",activity:"Reconstruir argumento determinista e resposta compatibilista.",evidence:"Reconstrução fiel de duas posições e objeção a uma delas."},
{id:"luck",title:"Sorte moral",type:"problema",prompt:"Devemos julgar igualmente duas pessoas quando os resultados dependem de fatores fora do seu controlo?",activity:"Comparar duas ações idênticas com consequências diferentes por acaso.",evidence:"Distinção entre intenção, controlo e resultado."}
],
"F10-II-E":[
{id:"fact_value",title:"Desacordo moral: factos ou valores?",type:"distinção",prompt:"Quando duas pessoas discordam moralmente, discordam necessariamente sobre valores?",activity:"Separar num caso polémico as discordâncias factuais, conceptuais e normativas.",evidence:"Classificação justificada dos tipos de desacordo."},
{id:"tolerance",title:"Relativismo e tolerância",type:"argumento",prompt:"O relativismo moral implica que devemos tolerar todas as práticas?",argument:["Se certo depende da cultura, não há padrão externo.","Logo, a crítica externa parece ilegítima.","Mas isso pode tornar a crítica da intolerância internamente problemática."],objection:"Uma cultura pode rejeitar a tolerância.",reply:"É preciso distinguir relativismo descritivo, metaético e normativo."},
{id:"universal",title:"Princípios universais",type:"problema",prompt:"É possível defender valores universais sem ignorar diferenças culturais?",activity:"Construir um princípio moral universal e testar a sua aplicação em três contextos culturais.",evidence:"Universalização acompanhada de reconhecimento das diferenças contextuais."},
{id:"moral_progress",title:"Existe progresso moral?",type:"problema",prompt:"Se os valores dependem de culturas, podemos falar de progresso moral?",example:"Uma sociedade abandona uma prática antes aceite e passa a considerá-la injusta.",evidence:"Argumento sobre o sentido de 'progresso' e resposta a uma objeção relativista."},
{id:"rachels_test",title:"Teste de Rachels",type:"autor",author:"James Rachels",prompt:"Que factos adicionais podem explicar um desacordo moral entre culturas?",activity:"Explicar uma divergência moral através de diferenças de circunstâncias e crenças factuais.",evidence:"Demonstração de que desacordo não implica automaticamente relativismo."},
{id:"moral_case",title:"Caso moral controverso",type:"oficina",prompt:"Como discutir uma prática moralmente controversa sem começar pela conclusão?",activity:"Clarificar conceitos, separar factos de juízos e construir duas posições argumentadas.",evidence:"Discussão equilibrada com razões, objeção e resposta."}
],
"F10-II-M":[
{id:"categorical",title:"Imperativo categórico e hipotético",type:"distinção",prompt:"Fazer algo porque queremos um fim é moralmente diferente de fazê-lo por dever?",activity:"Classificar máximas de ação como hipotéticas ou candidatas a imperativas categóricas.",evidence:"Distinção conceptual aplicada a casos concretos."},
{id:"maxim",title:"Formular a máxima",type:"oficina",prompt:"Uma ação moral pode ser avaliada sem saber qual a máxima que a orienta?",activity:"Transformar três ações quotidianas em máximas precisas e testá-las.",evidence:"Máxima formulada sem esconder o elemento moral relevante."},
{id:"utility",title:"Princípio da utilidade",type:"autor",author:"John Stuart Mill",prompt:"Como comparar consequências sem reduzir felicidade a uma simples soma?",activity:"Comparar duas decisões considerando intensidade, duração, número de afetados e qualidade das experiências.",evidence:"Justificação consequencialista explícita."},
{id:"rights",title:"Direitos e consequências",type:"argumento",prompt:"Pode uma ação moralmente errada ser justificada por produzir um grande benefício?",activity:"Testar um dilema de sacrifício de uma minoria em benefício da maioria.",evidence:"Objeção clara ao consequencialismo e possível resposta."},
{id:"lying",title:"Mentir, prometer e universalizar",type:"caso",prompt:"O que acontece se a máxima 'posso mentir quando me convém' se tornar universal?",activity:"Testar a possibilidade da máxima e distinguir contradição na conceção de contradição na vontade.",evidence:"Aplicação estruturada do teste kantiano."},
{id:"moral_pluralism",title:"Uma teoria chega para tudo?",type:"problema",prompt:"Os dilemas morais exigem um único critério?",activity:"Resolver o mesmo caso por dever, consequências e direitos; comparar resultados.",evidence:"Comparação sem caricaturar as teorias."}
],
"F10-II-P":[
{id:"equality",title:"Igualdade: de quê?",type:"problema",prompt:"Quando dizemos que todos devem ser tratados igualmente, o que deve ser igual?",activity:"Comparar igualdade de recursos, oportunidades, capacidades e resultados.",evidence:"Critério de igualdade explicitado e aplicado."},
{id:"veil",title:"O véu de ignorância",type:"experiencia",prompt:"Que princípios escolherias se não soubesses se nascerias rico, pobre, saudável ou doente?",activity:"Construir princípios sociais sob informação limitada sobre a própria posição.",evidence:"Justificação dos princípios e teste de imparcialidade."},
{id:"difference",title:"Princípio da diferença",type:"autor",author:"John Rawls",prompt:"Uma desigualdade pode ser justa se beneficiar os menos favorecidos?",activity:"Avaliar uma distribuição desigual e identificar quem ganha e quem perde.",evidence:"Aplicação do princípio a um caso concreto."},
{id:"entitlement",title:"Teoria da titularidade",type:"autor",author:"Robert Nozick",prompt:"A justiça depende do padrão final da distribuição ou da história das aquisições e transferências?",activity:"Seguir a história de três transferências e verificar se parecem legítimas.",evidence:"Distinção entre padrão distributivo e justiça histórica."},
{id:"merit",title:"Mérito e oportunidade",type:"problema",prompt:"Se duas pessoas têm o mesmo desempenho, mas oportunidades muito diferentes, merecem a mesma recompensa?",activity:"Comparar mérito, esforço, talento e circunstâncias sociais.",evidence:"Distinção entre fatores moralmente relevantes."},
{id:"public_goods",title:"Bens públicos e justiça",type:"caso",prompt:"Quem deve pagar por bens de que todos beneficiam?",activity:"Simular decisões sobre saúde, educação ou transportes.",evidence:"Princípio distributivo explicitado e defendido."}
],
"F10-III":[
{id:"attention",title:"Informação e atenção",type:"problema",prompt:"Se podemos aceder a mais informação do que nunca, porque continuamos vulneráveis à manipulação?",activity:"Analisar um feed hipotético e separar informação, relevância, seleção e atenção.",evidence:"Distinção entre disponibilidade de informação e autonomia cognitiva."},
{id:"algorithmic",title:"Algoritmos e autonomia",type:"caso",prompt:"Uma recomendação personalizada ajuda-nos a escolher ou escolhe por nós?",activity:"Mapear as etapas entre preferência, recomendação e decisão.",evidence:"Identificação de pelo menos dois pontos de influência."},
{id:"commons",title:"Commons-based peer production",type:"conceito",author:"Yochai Benkler",prompt:"Como pode uma comunidade produzir um bem comum sem uma hierarquia tradicional?",activity:"Analisar Wikipedia, software livre ou outro projeto colaborativo.",evidence:"Identificação de coordenação, contribuição distribuída e mecanismos de qualidade."},
{id:"network_power",title:"Poder numa sociedade em rede",type:"problema",prompt:"Distribuir a capacidade de publicar também distribui o poder?",activity:"Comparar publicação tradicional, rede social e plataforma moderada.",evidence:"Análise das condições materiais e técnicas da participação."},
{id:"arendt_world",title:"Mundo comum e pluralidade",type:"autor",author:"Hannah Arendt",prompt:"Que condições permitem que pessoas diferentes partilhem um mundo político comum?",activity:"Identificar elementos de um espaço público: aparição, pluralidade, discurso e conflito.",evidence:"Relação fundamentada entre pluralidade e mundo comum."},
{id:"misinformation",title:"Verdade, erro e desinformação",type:"oficina",prompt:"Como distinguir uma afirmação falsa, uma opinião, um erro honesto e uma manipulação deliberada?",activity:"Classificar exemplos e justificar os critérios usados.",evidence:"Critérios explícitos e aplicação consistente."}
],
"F11-IV-K":[
{id:"justification",title:"O que justifica uma crença?",type:"problema",prompt:"Que diferença existe entre ter uma razão para acreditar e ter uma boa razão?",activity:"Avaliar crenças com razões dedutivas, testemunhais e empíricas.",evidence:"Hierarquização fundamentada da força justificativa."},
{id:"gettier",title:"Problemas para a definição tripartida",type:"caso",prompt:"Uma crença verdadeira e justificada pode ainda assim não ser conhecimento?",activity:"Construir um caso de sorte epistémica inspirado nos problemas de Gettier.",evidence:"Explicação de onde entra a sorte."},
{id:"evil_demon",title:"Génio maligno",type:"experiencia",prompt:"Se uma inteligência poderosa produzisse sistematicamente as nossas experiências, o que poderíamos saber?",activity:"Reconstruir o cenário cartesiano e identificar o alvo da dúvida.",evidence:"Reconstrução fiel do argumento cético."},
{id:"cogito",title:"O cogito como ponto de partida",type:"autor",author:"René Descartes",prompt:"Pode a própria dúvida fornecer uma certeza?",activity:"Seguir o raciocínio da dúvida até ao ato de pensar.",evidence:"Explicação da relação entre dúvida e cogito."},
{id:"custom_hume",title:"Hábito e causalidade",type:"autor",author:"David Hume",prompt:"Observamos a necessidade causal ou apenas a sucessão regular de acontecimentos?",activity:"Distinguir impressão, hábito e expectativa causal.",evidence:"Explicação do problema da conexão necessária."},
{id:"testimony",title:"Conhecimento por testemunho",type:"problema",prompt:"Quando é racional acreditar no que outra pessoa nos diz?",activity:"Comparar testemunho de especialista, amigo, desconhecido e fonte institucional.",evidence:"Critérios de credibilidade e justificação."}
],
"F11-IV-C":[
{id:"universal",title:"O problema da indução",type:"argumento",prompt:"Como passamos legitimamente de casos observados para uma lei universal?",argument:["Foram observados muitos casos favoráveis.","A teoria afirma algo sobre todos os casos.","A generalização ultrapassa logicamente aquilo que foi observado."],objection:"A prática científica depende de generalizações.",reply:"A questão é a justificação lógica da passagem, não a sua utilidade prática."},
{id:"falsification",title:"O que falsificaria esta teoria?",type:"oficina",prompt:"Uma teoria que não pode ser contrariada por nenhuma observação é cientificamente informativa?",activity:"Transformar uma afirmação vaga numa hipótese com condições de teste.",evidence:"Previsão clara e possível resultado incompatível."},
{id:"auxiliary",title:"Teoria, hipótese e condições auxiliares",type:"problema",prompt:"Quando um teste falha, foi falsificada a teoria ou uma condição auxiliar?",activity:"Analisar um teste científico simplificado com várias premissas auxiliares.",evidence:"Identificação da estrutura do teste."},
{id:"paradigm",title:"Ciência normal",type:"autor",author:"Thomas Kuhn",prompt:"Porque trabalham os cientistas dentro de paradigmas em vez de testar tudo de novo?",activity:"Simular uma comunidade científica que resolve puzzles dentro de um paradigma.",evidence:"Distinção entre ciência normal, anomalia e crise."},
{id:"revolution",title:"Mudança de paradigma",type:"problema",prompt:"Uma revolução científica é apenas uma acumulação de novos factos?",activity:"Comparar duas formas de descrever o mesmo fenómeno antes e depois de uma mudança conceptual.",evidence:"Identificação de mudanças nos problemas e critérios relevantes."},
{id:"science_pseudoscience",title:"Ciência e pseudociência",type:"distinção",prompt:"O que diferencia uma teoria difícil de testar de uma teoria científica?",activity:"Aplicar critérios de testabilidade a três afirmações.",evidence:"Critério explicitado e aplicado sem depender apenas de exemplos."}
],
"F11-IV-T":[
{id:"tech_determinism",title:"Tecnologia determina a sociedade?",type:"problema",prompt:"As tecnologias moldam inevitavelmente a sociedade ou dependem das escolhas humanas?",activity:"Analisar uma tecnologia e separar propriedades técnicas, decisões políticas e usos sociais.",evidence:"Explicação não determinista das relações entre técnica e sociedade."},
{id:"winner_bridge",title:"Artefactos com política",type:"autor",author:"Langdon Winner",prompt:"O desenho de uma tecnologia pode favorecer certos modos de organização social?",activity:"Analisar uma infraestrutura e perguntar quem pode aceder, controlar ou beneficiar dela.",evidence:"Relação fundamentada entre desenho técnico e distribuição de poder."},
{id:"ai_bias",title:"IA, enviesamento e responsabilidade",type:"caso",prompt:"Se um sistema aprende com dados enviesados, quem responde pelos resultados?",activity:"Mapear dados, modelo, decisão, utilizador e possibilidade de recurso.",evidence:"Responsabilidade distribuída identificada com critérios."},
{id:"floridi_info",title:"Ambiente informacional",type:"autor",author:"Luciano Floridi",prompt:"O que muda quando pensamos moralmente em agentes, dados, processos e ambientes informacionais?",activity:"Analisar um caso de privacidade ou manipulação de dados.",evidence:"Distinção entre dano, informação, agente e ambiente."},
{id:"privacy",title:"Privacidade e vigilância",type:"problema",prompt:"A segurança pode justificar a recolha massiva de dados pessoais?",activity:"Construir argumentos a favor e contra uma política de vigilância.",evidence:"Conflito entre valores explicitado e justificado."},
{id:"work",title:"Tecnologia e futuro do trabalho",type:"problema",prompt:"Se uma tecnologia substitui tarefas humanas, que critérios devem orientar a decisão?",activity:"Avaliar eficiência, emprego, dignidade, redistribuição e autonomia.",evidence:"Critérios éticos e políticos articulados."}
]
};
Object.keys(E).forEach(function(id){
  if(window.PRISMA_PHILOSOPHY_DB.modules[id]){
    window.PRISMA_PHILOSOPHY_DB.modules[id].strands.push.apply(window.PRISMA_PHILOSOPHY_DB.modules[id].strands,E[id]);
  }
});
window.PRISMA_PHILOSOPHY_DB.version="2.0";
})();

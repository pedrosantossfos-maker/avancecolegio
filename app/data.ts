// Fonte dos dados: código original do projeto (endereços, WhatsApps) e Catálogo Rematrículas 2027.
// Troque NEXT_PUBLIC_SITE_URL no build quando o domínio definitivo estiver no ar.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://avance-colegio-e-cursos.pedrosantos-sfos.chatgpt.site";

const wa = (n: string, msg: string) => `https://wa.me/${n}?text=${encodeURIComponent(msg)}`;

export const units = [
  {
    slug: "junior",
    name: "Avance Júnior",
    serves: "Educação Infantil (G1 ao G5) e Ensino Fundamental I (1º ao 5º ano)",
    street: "Rua 28 B, 368 S, Jardim Cidade Alta",
    cityLine: "Jardim Cidade Alta · Tangará da Serra, MT",
    number: "5565999531762",
    phone: "(65) 99953-1762",
    phoneIntl: "+55 65 99953-1762",
    wa: wa("5565999531762", "Olá! Gostaria de conhecer o Avance Júnior e agendar uma visita."),
    waRematricula: wa("5565999531762", "Olá! Gostaria de informações sobre as Rematrículas 2027 do Avance Júnior."),
    maps: "https://www.google.com/maps/search/?api=1&query=Avance+Colegio+e+Cursos+Rua+28+B+368+S+Tangara+da+Serra",
    instagram: "https://www.instagram.com/avancecolegiojunior/",
  },
  {
    slug: "colegio",
    name: "Avance Colégio e Cursos",
    serves: "Ensino Fundamental II (6º ao 9º ano), Ensino Médio e Cursos",
    street: "Av. Brasil, 2514, Jardim Monte Líbano",
    cityLine: "Jardim Monte Líbano · Tangará da Serra, MT",
    number: "5565984588286",
    phone: "(65) 98458-8286",
    phoneIntl: "+55 65 98458-8286",
    wa: wa("5565984588286", "Olá! Gostaria de conhecer o Avance Colégio e Cursos e agendar uma visita."),
    waRematricula: wa("5565984588286", "Olá! Gostaria de informações sobre as Rematrículas 2027 do Avance Colégio e Cursos."),
    maps: "https://www.google.com/maps/search/?api=1&query=Avance+Colegio+e+Cursos+Av+Brasil+2514+Tangara+da+Serra",
    instagram: "https://www.instagram.com/avancecolegioecursos/",
  },
] as const;

export const J = units[0];
export const C = units[1];

export const pillars = [
  { t: "Protagonismo", d: "O estudante participa ativamente da própria formação." },
  { t: "Rigor científico e acadêmico", d: "Aprofundamento dos conhecimentos com a solução educacional COC." },
  { t: "Inteligências múltiplas", d: "Diferentes potencialidades são reconhecidas e desenvolvidas." },
  { t: "Resultados relevantes", d: "Avaliações nacionais do Sistema COC e participação em olimpíadas." },
  { t: "Formação integral", d: "Excelência acadêmica, formação humana e socioemocional." },
  { t: "Aprendizagens significativas", d: "Experiências que despertam curiosidade, criatividade e autonomia." },
] as const;

export type Stage = {
  id: string;
  tag: string;
  title: string;
  tagline: string;
  text: string[];
  closing: string;
  hours: string[];
  extras: string[];
  unit: (typeof units)[number];
  note?: string;
};

export const stages: Stage[] = [
  {
    id: "g1",
    tag: "Educação Infantil · G1",
    title: "Berçário",
    tagline: "Cuidar, acolher e desenvolver desde os primeiros passos.",
    text: [
      "No G1, cada descoberta importa. Nossa proposta valoriza o acolhimento, o cuidado e o respeito ao ritmo de desenvolvimento de cada criança, favorecendo a autonomia e o desenvolvimento físico, cognitivo, social e emocional.",
      "Por meio de brincadeiras, interações, estímulos sensoriais e uma rotina organizada, os pequenos exploram o mundo e constroem vínculos em um ambiente seguro, afetuoso e estimulante.",
    ],
    closing: "Cada pequeno passo é uma grande conquista.",
    hours: ["13h15 às 17h15", "Recepção a partir das 12h45, com horário estendido até as 18h"],
    extras: ["Culinária", "Musicalização", "Lanche da tarde", "Jantar"],
    unit: J,
    note: "Faixa etária e critérios de ingresso conforme as regras de matrícula vigentes.",
  },
  {
    id: "infantil",
    tag: "Educação Infantil · G2 ao G5",
    title: "Aprender brincando. Descobrir experimentando.",
    tagline: "A criança é protagonista de suas descobertas.",
    text: [
      "Com a solução educacional COC, nossa proposta promove aprendizagens que respeitam as características da infância e favorecem o desenvolvimento integral: cognitivo, motor, social, emocional e linguístico.",
      "Em consonância com os direitos de aprendizagem e desenvolvimento da BNCC, as crianças exploram, participam, expressam-se, convivem, brincam e se conhecem.",
    ],
    closing: "Cada vivência é uma oportunidade de aprender, crescer e descobrir.",
    hours: ["13h15 às 17h15", "Recepção a partir das 12h45, com horário estendido até as 18h"],
    extras: [
      "Educação Bilíngue (Simple Education) — 5x por semana",
      "Educação Física — 1x por semana",
      "Educação Socioemocional — 1x por semana",
      "Robótica (Via Education) — 1x por semana, G3, G4 e G5",
      "Musicalização — 1x por semana",
      "Culinária — atividades regulares",
      "Oficinas de balé, futsal e natação, conforme organização semanal",
    ],
    unit: J,
  },
  {
    id: "fund1",
    tag: "Ensino Fundamental · 1º ao 5º ano",
    title: "Conhecimento que fortalece. Aprendizagem que transforma.",
    tagline: "Consolidamos as bases e incentivamos autonomia, confiança e curiosidade.",
    text: [
      "Com a solução educacional COC, valorizamos o rigor científico e acadêmico, o protagonismo estudantil e as competências e habilidades da BNCC.",
      "O trabalho estimula leitura, escrita, raciocínio lógico, investigação, criatividade e resolução de problemas, relacionando o conhecimento ao cotidiano.",
    ],
    closing: "Formamos estudantes curiosos, autônomos e preparados para aprender continuamente.",
    hours: ["13h15 às 18h", "Recepção a partir das 12h45, com horário estendido até as 18h30"],
    extras: [
      "Educação Bilíngue (Simple Education) — 5x por semana",
      "Educação Física — 2x por semana",
      "Robótica (Via Education) — 2x por semana",
      "Educação Socioemocional — 1x por semana",
      "Oficinas de balé, natação e futsal, conforme organização semanal",
      "Avaliações nacionais do Sistema COC",
    ],
    unit: J,
  },
  {
    id: "fund2",
    tag: "Ensino Fundamental · 6º ao 9º ano",
    title: "Protagonismo, conhecimento e preparação para o futuro.",
    tagline: "Mais autonomia, aprofundamento e participação ativa na própria formação.",
    text: [
      "Com a solução educacional COC, valorizamos o aprofundamento dos conhecimentos, o rigor acadêmico, o pensamento crítico, a investigação e a capacidade de argumentar e propor soluções.",
      "Incentivamos a participação em olimpíadas do conhecimento e em projetos que despertam a curiosidade científica e ampliam os horizontes dos estudantes.",
    ],
    closing: "Avançar é transformar conhecimento em possibilidades para o futuro.",
    hours: ["7h15 às 12h10"],
    extras: [
      "Educação Bilíngue (Simple Education) — 5x por semana",
      "Laboratório de Inteligência Artificial — 1x por semana",
      "Robótica (Via Education) — 1x por semana",
      "Educação Física — 2x por semana",
      "Educação Socioemocional — 1x por semana",
      "Programa Caça-Asteroide (NASA/IASC)",
      "Incentivo às olimpíadas do conhecimento",
      "Oficinas de balé e futsal, conforme organização semanal",
      "Avaliações nacionais do Sistema COC",
    ],
    unit: C,
  },
  {
    id: "medio",
    tag: "Ensino Médio · 1ª a 3ª série",
    title: "Conhecimento que transforma, futuro que inspira.",
    tagline: "Excelência acadêmica, formação humana e protagonismo juvenil.",
    text: [
      "Currículo organizado em quatro áreas — Linguagens, Matemática, Ciências da Natureza e Ciências Humanas e Sociais Aplicadas — com a Coleção Infinito, do Sistema de Ensino COC, alinhada à BNCC.",
      "Preparação para os processos seletivos, o ENEM e o ingresso no Ensino Superior, com Projeto de Vida, convivência ética e desenvolvimento de habilidades socioemocionais.",
    ],
    closing: "Educar é abrir caminhos e oferecer ferramentas para que cada jovem construa seu projeto de vida.",
    hours: ["Matutino: 7h15 às 12h10", "Vespertino: 13h15 às 18h10"],
    extras: [
      "Simulados preparatórios para o ENEM e vestibulares, com o Sistema COC",
      "Programa Caça-Asteroide (NASA/IASC)",
      "Incentivo às olimpíadas do conhecimento",
      "Educação Física e Educação Socioemocional",
      "Avaliações nacionais do Sistema COC",
    ],
    unit: C,
  },
];

export const faq = [
  {
    q: "Quais etapas de ensino o Avance oferece em Tangará da Serra?",
    a: "O Avance atende da Educação Infantil (G1 ao G5) ao Ensino Médio. O Avance Júnior recebe a Educação Infantil e o Ensino Fundamental I (1º ao 5º ano); o Avance Colégio e Cursos recebe o Ensino Fundamental II (6º ao 9º ano), o Ensino Médio e os Cursos.",
  },
  {
    q: "Qual é o sistema de ensino utilizado?",
    a: "O Avance utiliza a solução educacional do Sistema COC, alinhada à BNCC. No Ensino Médio, os conteúdos são desenvolvidos com a Coleção Infinito, e os estudantes realizam as avaliações nacionais do Sistema COC.",
  },
  {
    q: "O Avance tem ensino bilíngue e robótica?",
    a: "Sim. A Educação Bilíngue (Simple Education) acontece 5 vezes por semana da Educação Infantil (G2 ao G5) ao 9º ano. A Robótica (Via Education) faz parte da rotina a partir do G3 até o 9º ano, com frequência semanal conforme a etapa.",
  },
  {
    q: "Quais são os horários de cada etapa?",
    a: "G1 e G2 ao G5: 13h15 às 17h15 (recepção a partir das 12h45, com horário estendido até as 18h). Fundamental I: 13h15 às 18h (horário estendido até as 18h30). Fundamental II: 7h15 às 12h10. Ensino Médio: matutino das 7h15 às 12h10 ou vespertino das 13h15 às 18h10.",
  },
  {
    q: "A escola prepara para o ENEM e os vestibulares?",
    a: "Sim. O Ensino Médio inclui simulados preparatórios para o ENEM e vestibulares com o Sistema COC, além de Projeto de Vida e desenvolvimento de competências para o ingresso no Ensino Superior.",
  },
  {
    q: "Os alunos participam de olimpíadas do conhecimento?",
    a: "Sim. O Avance incentiva a participação em olimpíadas e integra o Programa Caça-Asteroide (NASA/IASC). Na cerimônia de Alunos Medalhistas 2026 foram reconhecidos estudantes de olimpíadas como OBAFOG, OBA e Canguru de Matemática.",
  },
  {
    q: "Como agendar uma visita ou saber sobre as Rematrículas 2027?",
    a: "Chame a unidade da etapa de interesse pelo WhatsApp: Avance Júnior (65) 99953-1762 ou Avance Colégio e Cursos (65) 98458-8286. A equipe informa os critérios de matrícula vigentes e agenda a visita.",
  },
  {
    q: "Onde ficam as unidades do Avance?",
    a: "O Avance Júnior fica na Rua 28 B, 368 S, Jardim Cidade Alta, e o Avance Colégio e Cursos na Av. Brasil, 2514, Jardim Monte Líbano, ambos em Tangará da Serra, MT.",
  },
];

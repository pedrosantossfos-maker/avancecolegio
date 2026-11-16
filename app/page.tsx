import Image from "next/image";
import { units, J, C, pillars, stages, faq } from "./data";
import Enhance from "./enhance";
import LeadForm from "./lead-form";
import Rich from "./rich";

const Arrow = () => (
  <svg className="arr" viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
    <path d="M4 10h11m0 0-4.5-4.5M15 10l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const WaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.8 14.2c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1a14 14 0 0 1-5.6-3.7 6.5 6.5 0 0 1-1.6-3.5c0-1.2.6-1.8.9-2.1.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6a7.3 7.3 0 0 0 3.4 2.9c.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.2.1.7-.1 1.3Z" />
  </svg>
);

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5.2" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4.1" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M12 7v5l3 2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="9.5" r="2.5" fill="currentColor" />
  </svg>
);

export default function Home() {
  return (
    <>
      <a className="skip" href="#conteudo">Pular para o conteúdo</a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Avance Colégio e Cursos — início">
            <Image src="/logo-colegio-cor.webp" alt="Avance Colégio e Cursos" width={420} height={169} priority />
          </a>
          <nav className="nav" aria-label="Principal">
            <a href="#etapas">Etapas de ensino</a>
            <a href="#pedagogico">Proposta pedagógica</a>
            <a href="#conquistas">Conquistas</a>
            <a href="#cursos">Cursos</a>
            <a href="#unidades">Unidades</a>
            <a href="#faq">Dúvidas</a>
          </nav>
          <a className="btn btn-primary header-cta" href="#visita">Agende uma visita</a>
          <details className="menu">
            <summary aria-label="Abrir menu"><span /><span /><span /></summary>
            <nav aria-label="Menu móvel">
              <a href="#etapas">Etapas de ensino</a>
              <a href="#pedagogico">Proposta pedagógica</a>
              <a href="#conquistas">Conquistas</a>
              <a href="#cursos">Cursos</a>
              <a href="#unidades">Unidades</a>
              <a href="#faq">Dúvidas</a>
              <a className="btn btn-primary" href="#visita">Agende uma visita</a>
            </nav>
          </details>
        </div>
      </header>

      <main id="conteudo">
        {/* HERO */}
        <section className="hero" id="inicio" aria-labelledby="h1">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="pill"><span className="dot" /> Rematrículas 2027 · Tangará da Serra, MT</p>
              <h1 id="h1">
                <span className="h1-kw">Colégio em Tangará da Serra</span>
                Aqui, seu filho é <em>feliz.</em>
              </h1>
              <p className="lead">
                Uma educação que acolhe, ensina, inspira e prepara para o futuro — da Educação Infantil ao Ensino Médio.
              </p>
              <p className="lead-seo">
                <strong>Educação Infantil, Ensino Fundamental e Ensino Médio</strong> em <strong>Tangará da Serra (MT)</strong>, com <strong>Sistema COC</strong>, <strong>ensino bilíngue</strong> e <strong>robótica</strong>.
              </p>
              <ul className="values" aria-label="Valores">
                <li>Acolhimento</li><li>Conhecimento</li><li>Protagonismo</li>
              </ul>
              <div className="actions">
                <a className="btn btn-lime btn-pulse" href="#visita">Agende uma visita <Arrow /></a>
                <a className="btn btn-ghost" href="#etapas">Conheça as etapas</a>
              </div>
            </div>
            <figure className="hero-photo">
              <Image src="/img/hero-junior-medalhas.webp" alt="Alunos da Educação Infantil do Avance Júnior com medalhas, ao lado da equipe, no palco da cerimônia de reconhecimento" width={1200} height={600} priority sizes="(min-width: 960px) 52vw, 100vw" />
              <figcaption><span className="badge-15">15<small>anos</small></span> Juntos, avançamos mais!</figcaption>
            </figure>
          </div>
          <nav className="finder container" aria-labelledby="finder-title">
            <h2 id="finder-title">Qual etapa você procura?</h2>
            <ul>
              {[
                ["g1", "Berçário", "G1", "junior"],
                ["infantil", "Educação Infantil", "G2 ao G5", "junior"],
                ["fund1", "Fundamental I", "1º ao 5º ano", "junior"],
                ["fund2", "Fundamental II", "6º ao 9º ano", "colegio"],
                ["medio", "Ensino Médio", "1ª a 3ª série", "colegio"],
              ].map(([id, t, s, u]) => (
                <li key={id}>
                  <a href={`#${id}`}>
                    <strong>{t}</strong>
                    <span>{s}</span>
                    <em>{u === "junior" ? "Avance Júnior" : "Avance Colégio e Cursos"}</em>
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="facts container" aria-label="Diferenciais">
            <li><strong>Sistema COC</strong><span>Solução educacional alinhada à BNCC</span></li>
            <li><strong>Ensino bilíngue</strong><span>Simple Education, 5x por semana</span></li>
            <li><strong>Robótica</strong><span>Via Education, a partir do G3</span></li>
            <li><strong>Caça-Asteroide</strong><span>Programa NASA/IASC</span></li>
          </ul>
        </section>

        {/* ESSÊNCIA */}
        <section className="section essence" id="essencia" aria-labelledby="h-essencia">
          <div className="container split">
            <div>
              <p className="eyebrow">Nossa essência</p>
              <h2 id="h-essencia">Somos um time. <span>Juntos, avançamos mais!</span></h2>
              <p className="seo-intro">
                O Avance é um <strong>colégio em Tangará da Serra</strong>, em Mato Grosso, com duas unidades: o <strong>Avance Júnior</strong> (Educação Infantil e Ensino Fundamental I) e o <strong>Avance Colégio e Cursos</strong> (Ensino Fundamental II, Ensino Médio e Cursos).
              </p>
              <p>
                Uma escola se constrói com pessoas, parceria e propósito. Acreditamos que a relação entre escola, estudantes e famílias fortalece a trajetória de aprendizagem e contribui para uma comunidade escolar acolhedora, participativa e comprometida com o desenvolvimento de cada aluno.
              </p>
            </div>
            <div className="mission">
              <h3>Nossa missão</h3>
              <p>
                Não medir esforços para contribuir com a realização dos sonhos de nossos alunos, oferecendo uma educação de qualidade que valorize o conhecimento, estimule a criatividade, desenvolva a autonomia e fortaleça o protagonismo estudantil.
              </p>
              <p>
                Nosso compromisso é promover aprendizagens significativas e uma formação integral, preparando cada estudante para construir seu projeto de vida com responsabilidade, pensamento crítico, confiança e respeito ao próximo.
              </p>
            </div>
          </div>
        </section>

        {/* ETAPAS */}
        <section className="section stages" id="etapas" aria-labelledby="h-etapas">
          <div className="container">
            <p className="eyebrow">Etapas de ensino</p>
            <h2 id="h-etapas">Educação Infantil ao Ensino Médio em <span>Tangará da Serra.</span></h2>
            <p className="sec-lead">No Avance, cada etapa é uma oportunidade de descobrir, aprender e ir além.</p>
            <nav className="chips" aria-label="Ir para a etapa">
              {stages.map((s) => (<a key={s.id} href={`#${s.id}`}>{s.tag.split("·")[1]?.trim() ?? s.tag}</a>))}
            </nav>
            <div className="stage-list">
              {stages.map((s, i) => (
                <article className="stage" id={s.id} key={s.id} aria-labelledby={`t-${s.id}`}>
                  <div className="stage-head">
                    <span className="stage-n">{String(i + 1).padStart(2, "0")}</span>
                    <p className="stage-tag">{s.tag}</p>
                    <h3 id={`t-${s.id}`}>{s.title}</h3>
                    <p className="stage-tagline">{s.tagline}</p>
                    <ul className="stage-meta" aria-label="Resumo">
                      <li><ClockIcon /> {s.hours[0]}</li>
                      <li><PinIcon /> {s.unit.name}</li>
                    </ul>
                  </div>
                  <div className="stage-body">
                    {s.text.map((t) => (<p key={t}><Rich text={t} /></p>))}
                    <p className="stage-closing">{s.closing}</p>
                    {s.note && <p className="stage-note">{s.note}</p>}
                  </div>
                  <div className="stage-info">
                    <h4>Horário</h4>
                    <ul>{s.hours.map((h) => (<li key={h}>{h}</li>))}</ul>
                    <h4>Atividades e diferenciais</h4>
                    <ul className="ticks">{s.extras.map((e) => (<li key={e}>{e}</li>))}</ul>
                    <a className="btn btn-primary" href={s.unit.wa} target="_blank" rel="noopener noreferrer">
                      <WaIcon /> Falar com o {s.unit.name}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* PEDAGÓGICO */}
        <section className="section pedagogic" id="pedagogico" aria-labelledby="h-ped">
          <div className="container">
            <div className="ped-head">
              <div>
                <p className="eyebrow light">Projeto pedagógico 2027</p>
                <h2 id="h-ped">Educar para transformar. <span>Aprender para avançar.</span></h2>
              </div>
              <p>
                Em 2027, o Avance reafirma seu compromisso com uma educação que une excelência acadêmica, formação humana e desenvolvimento integral. Nossa proposta, aliada à solução educacional COC, valoriza o protagonismo dos estudantes, o rigor científico e acadêmico e a construção de aprendizagens significativas — com ética, responsabilidade e respeito.
              </p>
            </div>
            <ul className="pillars">
              {pillars.map((p, i) => (
                <li key={p.t}>
                  <span className="pn">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
            <p className="ped-foot">Mais do que transmitir conhecimentos, queremos despertar talentos, ampliar possibilidades e preparar nossos alunos para avançar em sua trajetória pessoal, acadêmica e profissional.</p>
          </div>
        </section>

        {/* CONQUISTAS */}
        <section className="section wins" id="conquistas" aria-labelledby="h-wins">
          <div className="container">
            <p className="eyebrow">Alunos medalhistas 2026</p>
            <h2 id="h-wins">Conhecimento que <span>vira conquista.</span></h2>
            <p className="wins-lead">
              Na cerimônia de reconhecimento de 2026, o Avance celebrou estudantes medalhistas em olimpíadas e programas do conhecimento.
            </p>
            <ul className="orgs" aria-label="Olimpíadas e programas">
              <li>Caça-Asteroides · MCTI</li>
              <li>OBAFOG · Olimpíada Brasileira de Foguetes</li>
              <li>OBA · Olimpíada Brasileira de Astronomia e Astronáutica</li>
              <li>Canguru de Matemática Brasil</li>
            </ul>
            <div className="wins-grid">
              <figure className="w1"><Image src="/img/medalhistas-ensino-medio.webp" alt="Alunos medalhistas do Ensino Médio com certificados e professores no palco" width={1400} height={784} sizes="(min-width: 960px) 60vw, 100vw" loading="lazy" /></figure>
              <figure className="w2"><Image src="/img/medalhistas-olimpiadas.webp" alt="Estudantes medalhistas em olimpíadas diante do telão Alunos Medalhistas 2026" width={1200} height={880} sizes="(min-width: 960px) 36vw, 100vw" loading="lazy" /></figure>
              <figure className="w3"><Image src="/img/medalhistas-grupo.webp" alt="Grupo de alunos medalhistas com certificados no palco" width={1400} height={1050} sizes="(min-width: 960px) 36vw, 100vw" loading="lazy" /></figure>
              <div className="w4">
                <strong>1º lugar nacional em Matemática</strong>
                <p>Reconhecimento de um aluno da 1ª/2ª série do Ensino Médio na Avaliação Nacional do COC do 3º bimestre, celebrado na cerimônia.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CURSOS */}
        <section className="section courses" id="cursos" aria-labelledby="h-cursos">
          <div className="container">
            <p className="eyebrow">Avance Colégio e Cursos</p>
            <h2 id="h-cursos">Além da sala de aula: <span>cursos e projetos.</span></h2>
            <div className="course-grid">
              <article>
                <Image src="/img/curso-redacao.webp" alt="Curso de Redação Avance" width={600} height={380} loading="lazy" />
                <h3>Curso de Redação</h3>
                <p>Fale com a equipe para conhecer turmas e horários.</p>
                <a className="link" href={C.wa} target="_blank" rel="noopener noreferrer">Saber mais <Arrow /></a>
              </article>
              <article>
                <Image src="/img/avance-vest.webp" alt="Avance Vest" width={600} height={380} loading="lazy" />
                <h3>Avance Vest</h3>
                <p>Fale com a equipe para conhecer turmas e horários.</p>
                <a className="link" href={C.wa} target="_blank" rel="noopener noreferrer">Saber mais <Arrow /></a>
              </article>
              <article>
                <Image src="/img/mostra-ciencia.webp" alt="Mostra de Ciência e Tecnologia 2025" width={600} height={600} loading="lazy" />
                <h3>Mostra de Ciência e Tecnologia</h3>
                <p>Edição 2025. Fale com a equipe para saber das próximas.</p>
                <a className="link" href={C.wa} target="_blank" rel="noopener noreferrer">Saber mais <Arrow /></a>
              </article>
            </div>
          </div>
        </section>

        {/* REMATRÍCULAS / VISITA */}
        <section className="section visit" id="visita" aria-labelledby="h-visita">
          <div className="container visit-grid">
            <div>
              <p className="eyebrow light">Rematrículas 2027</p>
              <h2 id="h-visita">Avance com a gente!</h2>
              <p>
                Cada etapa da vida escolar é feita de descobertas, conquistas e novas possibilidades. No Avance, caminhamos ao lado das famílias para oferecer uma educação que une conhecimento, acolhimento e formação integral.
              </p>
              <p className="visit-note">Escolha a unidade da etapa de interesse e fale direto com a equipe pelo WhatsApp.</p>
            </div>
            <div className="visit-side">
              <LeadForm />
              <p className="visit-or">Ou fale direto com a unidade:</p>
            <div className="visit-cards">
              {units.map((u) => (
                <a key={u.slug} className="visit-card" href={u.wa} target="_blank" rel="noopener noreferrer">
                  <WaIcon />
                  <span><strong>{u.name}</strong><small>{u.serves}</small><em>{u.phone}</em></span>
                  <Arrow />
                </a>
              ))}
            </div>
            </div>
          </div>
        </section>

        {/* REDES */}
        <section className="section social" id="redes" aria-labelledby="h-redes">
          <div className="container social-grid">
            <div>
              <p className="eyebrow">Acompanhe nosso dia a dia</p>
              <h2 id="h-redes">Nas redes, você vê a <span>rotina do Avance.</span></h2>
              <p>Em nossas redes sociais, você encontra nossa estrutura, rotina escolar, experiências de aprendizagem, projetos e eventos que fazem parte da nossa história.</p>
            </div>
            <div className="social-cards">
              {units.map((u) => (
                <a key={u.slug} className="social-card" href={u.instagram} target="_blank" rel="noopener noreferrer">
                  <span className="ig-badge"><IgIcon /></span>
                  <span><strong>{u.instagram.replace("https://www.instagram.com/", "@").replace("/", "")}</strong><small>{u.name}</small></span>
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* UNIDADES */}
        <section className="section units" id="unidades" aria-labelledby="h-unid">
          <div className="container">
            <p className="eyebrow">Onde estamos</p>
            <h2 id="h-unid">Duas unidades, <span>uma jornada.</span></h2>
            <div className="unit-grid">
              {units.map((u) => (
                <article className="unit" key={u.slug}>
                  <Image src={u.slug === "junior" ? "/selo-junior.webp" : "/selo-colegio.webp"} alt="" width={120} height={120} loading="lazy" />
                  <h3>{u.name}</h3>
                  <p className="unit-serves">{u.serves}</p>
                  <address>
                    {u.street}<br />{u.cityLine}
                  </address>
                  <p className="unit-phone">WhatsApp {u.phone}</p>
                  <a className="unit-ig" href={u.instagram} target="_blank" rel="noopener noreferrer"><IgIcon /> {u.instagram.replace("https://www.instagram.com/", "@").replace("/", "")}</a>
                  <div className="unit-actions">
                    <a className="btn btn-primary" href={u.wa} target="_blank" rel="noopener noreferrer"><WaIcon /> Conversar</a>
                    <a className="btn btn-outline" href={u.maps} target="_blank" rel="noopener noreferrer"><PinIcon /> Ver no mapa</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section faq" id="faq" aria-labelledby="h-faq">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2 id="h-faq">Tire suas dúvidas sobre o <span>Avance.</span></h2>
              <p>Não achou o que procurava? Chame a equipe no WhatsApp.</p>
            </div>
            <div className="faq-list">
              {faq.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Image src="/logo-colegio-branca.webp" alt="Avance Colégio e Cursos" width={420} height={152} loading="lazy" className="footer-logo" />
            <p>Educar para transformar. Aprender para avançar.</p>
          </div>
          <div>
            <h3>Explore</h3>
            <a href="#etapas">Etapas de ensino</a>
            <a href="#pedagogico">Proposta pedagógica</a>
            <a href="#conquistas">Conquistas</a>
            <a href="#faq">Dúvidas</a>
          </div>
          <div>
            <h3>{J.name}</h3>
            <p>{J.street}<br />Tangará da Serra, MT</p>
            <a href={J.wa} target="_blank" rel="noopener noreferrer"><WaIcon /> {J.phone}</a>
            <a href={J.instagram} target="_blank" rel="noopener noreferrer"><IgIcon /> @avancecolegiojunior</a>
          </div>
          <div>
            <h3>{C.name}</h3>
            <p>{C.street}<br />Tangará da Serra, MT</p>
            <a href={C.wa} target="_blank" rel="noopener noreferrer"><WaIcon /> {C.phone}</a>
            <a href={C.instagram} target="_blank" rel="noopener noreferrer"><IgIcon /> @avancecolegioecursos</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Avance Colégio e Cursos · Tangará da Serra, MT</span>
          <span>Informações sujeitas às regras de matrícula vigentes.</span>
        </div>
      </footer>

      <div className="mbar">
        <a className="btn btn-primary mbar-cta" href="#visita">Agendar visita</a>
        <details className="fab">
          <summary aria-label="Falar pelo WhatsApp"><WaIcon /><span>WhatsApp</span></summary>
          <div>
            {units.map((u) => (
              <a key={u.slug} href={u.wa} target="_blank" rel="noopener noreferrer">{u.name}<small>{u.phone}</small></a>
            ))}
          </div>
        </details>
      </div>
      <Enhance />
    </>
  );
}

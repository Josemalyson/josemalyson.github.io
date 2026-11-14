import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  areas,
  formatDate,
  headline,
  heroLead,
  methodNote,
  methodSteps,
  projects,
  text,
  trails,
  tutorials,
} from '@site/src/data/site';
import styles from './index.module.css';

function External({href, children}: {href: string; children: ReactNode}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function Home(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const en = locale === 'en';

  return (
    <Layout
      title={en ? 'Tutorials, trails, and open source' : 'Tutoriais, trilhas e open source'}
      description={text(headline, locale)}>
      <main>
        <section className={styles.hero} aria-labelledby="hero-title">
          <p className={styles.eyebrow}>{en ? 'Entry point' : 'Entrada'}</p>
          <h1 id="hero-title">Josemalyson Oliveira</h1>
          <p className={styles.lead}>{text(headline, locale)}</p>
          <p className={styles.support}>{text(heroLead, locale)}</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#tutoriais">
              {en ? 'See tutorials' : 'Ver tutoriais'}
            </a>
            <External href="https://br.linkedin.com/in/josemalysonoliveira">
              <span className={styles.secondary}>
                {en ? 'Get in touch' : 'Fale comigo'}
              </span>
            </External>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="areas-title" id="resolvo">
          <h2 id="areas-title">{en ? 'What I take on' : 'O que eu resolvo'}</h2>
          <div className={styles.grid3}>
            {areas.map((area) => (
              <article key={text(area.title, 'pt-BR')} className={styles.card}>
                <h3>{text(area.title, locale)}</h3>
                <p>{text(area.body, locale)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="tutorials-title" id="tutoriais">
          <h2 id="tutorials-title">
            {en ? 'Tutorials and playbooks' : 'Tutoriais e playbooks'}
          </h2>
          <div className={styles.stack}>
            {tutorials.map((item) => {
              const internal = item.href.startsWith('/');
              const title = text(item.title, locale);
              return (
                <article key={item.id} className={styles.card}>
                  <div className={styles.meta}>
                    {item.version ? (
                      <span>
                        {en ? 'Version' : 'Versão'} {item.version}
                      </span>
                    ) : (
                      <span>{en ? 'Article' : 'Artigo'}</span>
                    )}
                    <time dateTime={item.date}>{formatDate(item.date, locale)}</time>
                  </div>
                  <h3>
                    {internal ? (
                      <Link to={item.href}>{title}</Link>
                    ) : (
                      <External href={item.href}>{title}</External>
                    )}
                  </h3>
                  <p>{text(item.summary, locale)}</p>
                  <p className={styles.links}>
                    {internal ? (
                      <Link to={item.href}>{en ? 'Read' : 'Ler'}</Link>
                    ) : (
                      <External href={item.href}>{en ? 'Open site' : 'Abrir site'}</External>
                    )}
                    {item.repo ? (
                      <External href={item.repo}>{en ? 'Repository' : 'Repositório'}</External>
                    ) : null}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="trails-title">
          <div className={styles.sectionHead}>
            <h2 id="trails-title">{en ? 'Learning trails' : 'Trilhas'}</h2>
            <Link to="/trilhas">{en ? 'All trails' : 'Todas as trilhas'}</Link>
          </div>
          <div className={styles.stack}>
            {trails.map((trail) => (
              <article key={trail.slug} className={styles.card}>
                <div className={styles.meta}>
                  <span>
                    {en ? 'Version' : 'Versão'} {trail.version}
                  </span>
                  <time dateTime={trail.date}>{formatDate(trail.date, locale)}</time>
                  <span>{text(trail.level, locale)}</span>
                  <span>{text(trail.duration, locale)}</span>
                </div>
                <h3>
                  <a href={trail.href}>{text(trail.title, locale)}</a>
                </h3>
                <p>{text(trail.summary, locale)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="oss-title" id="opensource">
          <h2 id="oss-title">Open source</h2>
          <div className={styles.grid3}>
            {projects.map((project) => (
              <article key={project.name} className={styles.card}>
                <div className={styles.meta}>
                  <span>GitHub</span>
                  {project.version ? <span>{project.version}</span> : null}
                </div>
                <h3>
                  <External href={project.href}>{project.name}</External>
                </h3>
                <p>{text(project.why, locale)}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} aria-labelledby="method-title" id="metodo">
          <h2 id="method-title">{en ? 'How I work' : 'Como trabalho'}</h2>
          <ol className={styles.steps}>
            {methodSteps.map((step, index) => (
              <li key={text(step.title, 'pt-BR')}>
                <span className={styles.stepIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3>{text(step.title, locale)}</h3>
                  <p>{text(step.body, locale)}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className={clsx(styles.card, styles.note)}>{text(methodNote, locale)}</p>
        </section>

        <section className={styles.section} aria-labelledby="contact-title" id="contato">
          <h2 id="contact-title">{en ? 'Contact' : 'Contato'}</h2>
          <div className={styles.card}>
            <p>
              {en
                ? 'LinkedIn is the channel for project and consulting work.'
                : 'LinkedIn é o canal para projeto e consultoria.'}
            </p>
            <p className={styles.links}>
              <External href="https://br.linkedin.com/in/josemalysonoliveira">
                LinkedIn
              </External>
              <External href="https://github.com/Josemalyson">GitHub</External>
              <External href="https://x.com/josemalyson">X</External>
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

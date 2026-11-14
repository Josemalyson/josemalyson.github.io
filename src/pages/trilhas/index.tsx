import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {formatDate, text, trails} from '@site/src/data/site';
import styles from '../index.module.css';

export default function TrailsPage(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const en = locale === 'en';

  return (
    <Layout
      title={en ? 'Learning trails' : 'Trilhas'}
      description={
        en
          ? 'Runnable learning trails by Josemalyson Oliveira, with version and date.'
          : 'Trilhas executáveis de Josemalyson Oliveira, com versão e data.'
      }>
      <main>
        <header className={styles.pageHead}>
          <p className={styles.eyebrow}>{en ? 'Learning trails' : 'Trilhas'}</p>
          <h1>{en ? 'Learning trails' : 'Trilhas'}</h1>
          <p className={styles.support}>
            {en
              ? 'Each card is a self-contained lab: version, date, level, and duration. Progress stays in this browser.'
              : 'Cada card é um lab autocontido: versão, data, nível e duração. O progresso fica neste navegador.'}
          </p>
        </header>
        <section className={styles.section} aria-label={en ? 'Trail list' : 'Lista de trilhas'}>
          {trails.length === 0 ? (
            <p>{en ? 'No trails published yet.' : 'Nenhuma trilha publicada ainda.'}</p>
          ) : (
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
                  <h2>
                    <a href={trail.href}>{text(trail.title, locale)}</a>
                  </h2>
                  <p>{text(trail.summary, locale)}</p>
                  <p className={styles.links}>
                    <a href={trail.href}>{en ? 'Open lab' : 'Abrir lab'}</a>
                    <Link to="/">{en ? 'Back home' : 'Voltar ao início'}</Link>
                  </p>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>
    </Layout>
  );
}

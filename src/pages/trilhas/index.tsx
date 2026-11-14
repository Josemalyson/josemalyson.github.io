import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {formatDate, text} from '@site/src/data/site';
import {trailCount, trailThemes, type Trail} from '@site/src/data/trails';
import styles from '../index.module.css';

function TrailCard({trail, locale, en}: {trail: Trail; locale: string; en: boolean}): ReactNode {
  return (
    <article className={styles.card}>
      <div className={styles.meta}>
        {trail.version ? (
          <span>
            {en ? 'Version' : 'Versão'} {trail.version}
          </span>
        ) : null}
        {trail.date ? <time dateTime={trail.date}>{formatDate(trail.date, locale)}</time> : null}
        {trail.level ? <span>{text(trail.level, locale)}</span> : null}
        {trail.duration ? <span>{text(trail.duration, locale)}</span> : null}
      </div>
      <h3>
        <a href={trail.href}>{text(trail.title, locale)}</a>
      </h3>
      <p>{text(trail.summary, locale)}</p>
      <p className={styles.links}>
        <a href={trail.href}>{en ? 'Open lab' : 'Abrir lab'}</a>
      </p>
    </article>
  );
}

export default function TrailsPage(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const en = locale === 'en';

  return (
    <Layout
      title={en ? 'Learning trails' : 'Trilhas'}
      description={
        en
          ? `${trailCount} runnable learning trails by Josemalyson Oliveira, grouped by theme.`
          : `${trailCount} trilhas executáveis de Josemalyson Oliveira, agrupadas por tema.`
      }>
      <main>
        <header className={styles.pageHead}>
          <p className={styles.eyebrow}>{en ? 'Learning trails' : 'Trilhas'}</p>
          <h1>{en ? 'Learning trails' : 'Trilhas'}</h1>
          <p className={styles.support}>
            {en
              ? `${trailCount} self-contained labs, in the study order of the ten themes. Progress stays in this browser. The lab files are in Portuguese.`
              : `${trailCount} labs autocontidos, na ordem de estudo dos dez temas. O progresso fica neste navegador.`}
          </p>
        </header>
        {trailThemes.map((theme) => (
          <section
            key={theme.id}
            id={theme.id}
            className={styles.section}
            aria-labelledby={`theme-${theme.id}`}>
            <h2 id={`theme-${theme.id}`}>{text(theme.title, locale)}</h2>
            <p className={styles.sectionLead}>{text(theme.summary, locale)}</p>
            <div className={styles.stack}>
              {theme.trails.map((trail) => (
                <TrailCard key={trail.slug} trail={trail} locale={locale} en={en} />
              ))}
            </div>
          </section>
        ))}
        <p className={styles.section}>
          <Link to="/">{en ? 'Back home' : 'Voltar ao início'}</Link>
        </p>
      </main>
    </Layout>
  );
}

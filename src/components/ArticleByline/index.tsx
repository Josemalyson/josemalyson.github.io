import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {formatDate, headline, text} from '@site/src/data/site';
import styles from './styles.module.css';

function toIsoDate(value: unknown): string {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }
  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }
  return '';
}

export default function ArticleByline(): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const {i18n} = useDocusaurusContext();
  const locale = i18n.currentLocale;
  const en = locale === 'en';
  const published = toIsoDate(frontMatter.published);
  const minutes = Number(frontMatter.reading_minutes ?? 0);

  return (
    <header className={styles.byline}>
      <h1>{metadata.title}</h1>
      <div className={styles.author}>
        <img
          className={styles.avatar}
          src="/img/avatar.png"
          alt=""
          width={48}
          height={48}
        />
        <div>
          <Link className={styles.name} to="/">
            Josemalyson Oliveira
          </Link>
          <p className={styles.role}>{text(headline, locale)}</p>
          <p className={styles.meta}>
            {published ? (
              <time dateTime={published}>{formatDate(published, locale)}</time>
            ) : null}
            {minutes > 0 ? (
              <span>
                {en ? `${minutes} min read` : `${minutes} min de leitura`}
              </span>
            ) : null}
          </p>
        </div>
      </div>
    </header>
  );
}

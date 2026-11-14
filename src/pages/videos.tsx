import React, {useMemo, useState, type ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {formatDate} from '@site/src/data/site';
import videos from '@site/src/data/videos.json';
import home from './index.module.css';
import styles from './videos.module.css';

type Video = {
  id: string;
  url: string;
  title: string;
  channel: string;
  category: string;
  summary_pt: string;
  collected_at: string;
  source: string;
};

const catalog = videos as Video[];

const categoryLabels: Record<string, string> = {
  'Agentes e loops': 'Agents and loops',
  'Code agents e harnesses': 'Code agents and harnesses',
  'Contexto/memória/skills': 'Context, memory, and skills',
  'Evals e qualidade': 'Evals and quality',
  'Infra e escala': 'Infrastructure and scale',
  Segurança: 'Security',
  'Modelos e execução': 'Models and execution',
  'Carreira/organização AI-First': 'AI-First career and organization',
};

function categorySlug(category: string): string {
  return category
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function categoryOrder(): string[] {
  const seen: string[] = [];
  for (const video of catalog) {
    if (!seen.includes(video.category)) {
      seen.push(video.category);
    }
  }
  return seen;
}

const categories = categoryOrder();
const channels = Array.from(new Set(catalog.map((video) => video.channel))).sort((a, b) =>
  a.localeCompare(b, 'en'),
);

export default function VideosPage(): ReactNode {
  const {i18n} = useDocusaurusContext();
  const en = i18n.currentLocale === 'en';
  const [query, setQuery] = useState('');
  const [channel, setChannel] = useState('');

  const filtered = useMemo(() => {
    const needle = query.trim().toLocaleLowerCase();
    return catalog.filter((video) => {
      if (channel && video.channel !== channel) {
        return false;
      }
      if (!needle) {
        return true;
      }
      const haystack = `${video.title} ${video.channel} ${video.summary_pt}`.toLocaleLowerCase();
      return haystack.includes(needle);
    });
  }, [query, channel]);

  const grouped = categories
    .map((category) => ({
      category,
      items: filtered.filter((video) => video.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <Layout
      title={en ? 'Videos' : 'Vídeos'}
      description={
        en
          ? 'Talks and videos used as a study reference, grouped by theme.'
          : 'Talks e vídeos usados como referência de estudo, organizados por tema.'
      }>
      <main>
        <header className={home.pageHead}>
          <p className={home.eyebrow}>{en ? 'Reference library' : 'Biblioteca de referência'}</p>
          <h1>{en ? 'Videos' : 'Vídeos'}</h1>
          <p className={home.support}>
            {en
              ? 'Talks and videos I use as a study reference, grouped by theme. The content belongs to the channels and the speakers. Summaries stay in Portuguese.'
              : 'Talks e vídeos que uso como referência de estudo, organizados por tema. O conteúdo é dos canais e de quem fala.'}
          </p>
        </header>

        <div className={styles.library}>
          <div className={styles.toolbar}>
            <div className={styles.controls}>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>{en ? 'Search' : 'Busca'}</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={en ? 'Title, channel, or summary' : 'Título, canal ou resumo'}
                />
              </label>
              <label className={styles.field}>
                <span className={styles.fieldLabel}>{en ? 'Channel' : 'Canal'}</span>
                <select value={channel} onChange={(event) => setChannel(event.target.value)}>
                  <option value="">{en ? 'All channels' : 'Todos os canais'}</option>
                  {channels.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </label>
              <p className={styles.count}>
                {filtered.length === catalog.length
                  ? en
                    ? `${catalog.length} videos`
                    : `${catalog.length} vídeos`
                  : en
                    ? `${filtered.length} of ${catalog.length}`
                    : `${filtered.length} de ${catalog.length}`}
              </p>
            </div>
            <nav className={styles.index} aria-label={en ? 'Categories' : 'Categorias'}>
              {grouped.map((group) => (
                <a key={group.category} href={`#${categorySlug(group.category)}`}>
                  {en ? categoryLabels[group.category] ?? group.category : group.category}
                  <span>{group.items.length}</span>
                </a>
              ))}
            </nav>
          </div>

          {grouped.length === 0 ? (
            <p className={styles.empty}>
              {en ? 'No videos match this filter.' : 'Nenhum vídeo corresponde a este filtro.'}
            </p>
          ) : (
            grouped.map((group) => (
              <section
                key={group.category}
                id={categorySlug(group.category)}
                className={styles.group}
                aria-labelledby={`cat-${categorySlug(group.category)}`}>
                <div className={styles.groupHead}>
                  <h2 id={`cat-${categorySlug(group.category)}`}>
                    {en ? categoryLabels[group.category] ?? group.category : group.category}
                  </h2>
                  <span>
                    {group.items.length} {en ? 'videos' : 'vídeos'}
                  </span>
                </div>
                <ol className={styles.list}>
                  {group.items.map((video) => (
                    <li key={video.id} className={styles.item}>
                      <a
                        className={styles.thumbLink}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <img
                          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                          alt=""
                          width={168}
                          height={94}
                          loading="lazy"
                        />
                      </a>
                      <div>
                        <h3>
                          <a href={video.url} target="_blank" rel="noopener noreferrer">
                            {video.title}
                          </a>
                        </h3>
                        <p className={styles.meta}>
                          <span>{video.channel}</span>
                          {video.collected_at ? (
                            <time dateTime={video.collected_at}>
                              {formatDate(video.collected_at, en ? 'en' : 'pt-BR')}
                            </time>
                          ) : null}
                        </p>
                        <p className={styles.summary}>{video.summary_pt}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            ))
          )}
        </div>
      </main>
    </Layout>
  );
}

import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock, Facebook, Instagram, Twitter, User, Youtube } from 'lucide-react';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import NewsCard from '../components/NewsCard';
import ParallaxImage from '../components/ParallaxImage';
import Magnetic from '../components/Magnetic';
import { XMark } from '../components/Logo';
import { formatDate, news } from '../lib/data';

const socialIcons = { facebook: Facebook, instagram: Instagram, youtube: Youtube, twitter: Twitter };

export default function NewsArticle() {
  const { slug } = useParams<{ slug: string }>();
  const article = news.find((a) => a.slug === slug);

  if (!article) {
    return (
      <PageShell>
        <section className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
          <p className="font-display text-6xl text-crimson">404</p>
          <h1 className="mt-4 font-display text-3xl uppercase text-bone">Dispatch not found</h1>
          <Link to="/news" className="mt-8 border border-crimson px-8 py-4 font-display text-xs uppercase tracking-[0.3em] text-crimson transition-colors hover:bg-crimson hover:text-white">
            Back to the War Room
          </Link>
        </section>
      </PageShell>
    );
  }

  const related = news.filter((a) => a.slug !== article.slug);
  related.sort((a, b) => {
    const aScore = a.category === article.category ? 0 : 1;
    const bScore = b.category === article.category ? 0 : 1;
    return aScore - bScore;
  });

  return (
    <PageShell>
      {/* ---------- hero ---------- */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="relative mx-auto max-w-[1100px] px-5 pb-16 pt-36 lg:px-10 lg:pt-44">
          <Reveal y={20}>
            <Link
              to="/news"
              className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-ash transition-colors hover:text-crimson"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              All News
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="border border-crimson/60 bg-crimson/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-crimson">
                {article.category}
              </span>
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-smoke">
                <Clock className="h-3.5 w-3.5" /> {formatDate(article.date)} · {article.readTime}
              </span>
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-smoke">
                <User className="h-3.5 w-3.5" /> {article.author}
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <h1 className="mt-6 font-display text-3xl uppercase leading-[1.02] text-bone sm:text-5xl lg:text-6xl">
              {article.title}
            </h1>
          </Reveal>
        </div>
        <Reveal delay={0.2} y={40}>
          <div className="mx-auto max-w-[1400px] px-5 lg:px-10">
            <ParallaxImage src={article.image} alt={article.title} speed={0.08} className="clip-card red-edge aspect-[16/8]" />
          </div>
        </Reveal>
      </section>

      {/* ---------- body ---------- */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 lg:px-10">
          {article.body.map((para, i) => (
            <Reveal key={i} delay={Math.min(i, 3) * 0.05} y={26}>
              <p
                className={`mt-6 leading-[1.9] text-ash ${
                  i === 0
                    ? 'first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-crimson first-line:uppercase first-line:tracking-wide first-line:text-bone'
                    : ''
                }`}
              >
                {para}
              </p>
            </Reveal>
          ))}

          {/* share */}
          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-6 border-y border-white/10 py-8">
              <p className="flex items-center gap-3 font-display text-sm uppercase tracking-[0.3em] text-bone">
                <XMark className="h-3.5 w-3.5 text-crimson" /> Amplify the roar
              </p>
              <div className="flex items-center gap-3">
                {Object.entries(socialIcons).map(([key, Icon]) => (
                  <a
                    key={key}
                    href={news.length ? `https://${key === 'twitter' ? 'x' : key}.com` : '#'}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Share on ${key}`}
                    className="grid h-11 w-11 place-items-center border border-white/15 text-bone/70 transition-all duration-300 hover:-translate-y-1 hover:border-crimson hover:text-crimson"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- related ---------- */}
      <section className="border-t border-white/10 bg-carbon py-20 lg:py-28">
        <div className="mx-auto max-w-[1600px] px-5 lg:px-10">
          <Reveal y={24}>
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.4em] text-gold">
              <XMark className="h-3 w-3 text-crimson" /> Keep Reading
            </p>
            <h2 className="mt-4 font-display text-4xl uppercase text-bone sm:text-5xl">
              More from the <span className="text-crimson">arena</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.slice(0, 3).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.1} y={40}>
                <NewsCard article={a} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Magnetic>
                <Link
                  to="/news"
                  className="group inline-flex items-center gap-3 border border-white/15 px-9 py-4 font-display text-xs uppercase tracking-[0.3em] text-bone transition-all duration-300 hover:border-crimson hover:text-crimson"
                >
                  All Dispatches
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}

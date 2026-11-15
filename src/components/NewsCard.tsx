import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { formatDate, type NewsArticle } from '../lib/data';

export default function NewsCard({ article, large = false }: { article: NewsArticle; large?: boolean }) {
  return (
    <Link
      to={`/news/${article.slug}`}
      className={`group relative flex flex-col overflow-hidden border border-white/10 bg-graphite transition-all duration-500 hover:-translate-y-1.5 hover:border-crimson/60 hover:shadow-[0_0_40px_rgba(225,6,0,0.2)] clip-card-sm ${
        large ? 'md:flex-row' : ''
      }`}
    >
      <div className={`relative overflow-hidden ${large ? 'md:w-1/2' : ''} ${large ? 'aspect-[16/10] md:aspect-auto' : 'aspect-video'}`}>
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent md:bg-gradient-to-r md:from-graphite/40 md:to-transparent" />
        <span className="absolute left-4 top-4 border border-crimson/60 bg-void/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-crimson backdrop-blur-sm">
          {article.category}
        </span>
      </div>

      <div className={`flex flex-1 flex-col p-6 ${large ? 'md:p-10' : ''}`}>
        <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.25em] text-smoke">
          <span>{formatDate(article.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {article.readTime}
          </span>
        </div>
        <h3
          className={`mt-3 font-display uppercase leading-tight text-bone transition-colors duration-300 group-hover:text-crimson ${
            large ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
          }`}
        >
          {article.title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed text-ash ${large ? '' : 'line-clamp-2'}`}>{article.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
          Read story
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

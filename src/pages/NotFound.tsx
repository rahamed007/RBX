import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import Particles from '../components/Particles';
import Magnetic from '../components/Magnetic';
import { Emblem } from '../components/Logo';

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 text-center">
        <Particles className="absolute inset-0 h-full w-full" density={30} />
        <Emblem className="h-24 w-24 opacity-80" />
        <p className="mt-8 font-display text-[22vw] leading-none text-crimson text-glow-red lg:text-[12rem]">404</p>
        <h1 className="mt-2 font-display text-2xl uppercase tracking-wide text-bone sm:text-4xl">This arena is empty</h1>
        <p className="mt-4 max-w-md text-sm text-ash">
          The page you’re looking for burst out of the stadium. Head back to the squad and keep spinning.
        </p>
        <Magnetic className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 border border-crimson bg-crimson px-9 py-4 font-display text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-crimson-deep"
          >
            Back to Base
          </Link>
        </Magnetic>
      </section>
    </PageShell>
  );
}

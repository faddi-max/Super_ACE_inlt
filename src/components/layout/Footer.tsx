import { Link } from "react-router-dom";
import { footerContent as c } from "@/content/footer";
import logo from "@/assets/brand/logo.png";

/**
 * Figma: 1440 × 504.25 · pt 67 · pb 25 · bg #080C14
 * Desktop (lg+) values are exact; below lg the layout stacks.
 * Needs: Orbitron 700 loaded (see index.html snippet), `electric` colour token.
 */
const colTitle =
  "mb-[18px] font-body text-[9px] font-semibold uppercase leading-[9px] tracking-[0.18em] text-white/50";
const colLink =
  "font-body text-[11px] leading-[11px] text-white/70 transition-colors hover:text-white";
const hairline = "border-[#FFFFFF1A]"; // #FFFFFF1A

export function Footer() {
  return (
    <footer className="bg-[#080C14] pb-[25px] pt-[67px] text-white lg:min-h-[504.25px]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-28">
        {/* ── Top: brand + 4 link columns (x = 112 / 503 / 717 / 931 / 1147) ── */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[391px_214px_214px_216px_1fr] lg:gap-0">
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Same logo asset as Header, scaled so the visible mark is ~36px wide (Figma) */}
            <Link to="/" aria-label="SUPER ACE home" className="ml-1 block size-[43px]">
              <img src={logo} alt="SUPER ACE" className="size-[43px] max-w-none object-contain" />
            </Link>

            <h2
              className="mt-5 max-w-[300px] text-[29px] font-bold not-italic uppercase leading-[28.8px] tracking-[0.8px] text-white"
              style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
            >
              { "Super Ace International"}
            </h2>

            <p className="mt-2 max-w-[290px] font-body text-[11px] leading-[17px] text-white/70">
              {c.tagline}
            </p>

            <Link
              to={c.cta.to}
              className="mt-[9px] inline-flex h-[38px] w-[155px] items-center justify-center gap-3 rounded-[2px] border border-white/25 font-body text-[10px] font-medium uppercase tracking-[0.1em] text-white transition-colors hover:border-electric"
            >
              {c.cta.label}
              <span aria-hidden className="text-electric">→</span>
            </Link>
          </div>

          {c.columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className={colTitle}>{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label} className="leading-[11px]">
                    <Link to={l.to} className={colLink}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* ── Info row: 1180 × 82 · 3 cols · gap 30 · 0.67px #FFFFFF1A ── */}
        <dl
          className={`mx-auto mt-[45px] grid w-full max-w-[1180px] gap-[30px] border-y-[0.67px] ${hairline} py-6 lg:h-[82px] lg:grid-cols-[475px_318px_1fr] lg:py-0 lg:pt-[30px]`}
        >
          {c.info.map((i) => (
            <div key={i.label}>
              <dt className="mb-[7px] font-body text-[8px] font-semibold uppercase leading-[8px] tracking-[0.18em] text-white/50">
                {i.label}
              </dt>
              <dd className="font-body text-[11px] leading-[13px] text-white/80">
                {i.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* ── Legal row ── */}
        <div className="mt-[27px] flex flex-wrap items-center justify-between gap-4 lg:pr-[18px]">
          <p className="font-body text-[9px] uppercase tracking-[0.12em] text-white/30">
            {c.legal}
          </p>
          <ul className="flex gap-3">
            {c.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  className={`flex size-[26px] items-center justify-center rounded-full border ${hairline} font-body text-[8px] font-semibold text-white/70 transition-colors hover:border-electric hover:text-white`}
                >
                  {s.short}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

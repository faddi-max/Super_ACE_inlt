import { useEffect, useState, type CSSProperties } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { BookPage, CatalogueBook } from "@/content/catalogueBooks";
import { cn } from "@/lib/cn";

const FLIP_MS = 900;

/**
 * Page: 541.1082 x 738 (ratio 1.36385). Everything inside a page is sized in
 * cqw (1cqw = 1% of page width = 5.41px at full size) and placed absolutely,
 * so the layout scales as one piece.
 */
const PAGE_W = 541.1082;
const PAGE_RATIO = 738 / PAGE_W;

// Spine shading from the design, mirrored for left-hand pages
const spineRight =
  "linear-gradient(90deg, rgba(11, 15, 26, 0.3) 0%, rgba(11, 15, 26, 0.07) 5%, rgba(11, 15, 26, 0) 13%)";
const spineLeft =
  "linear-gradient(270deg, rgba(11, 15, 26, 0.3) 0%, rgba(11, 15, 26, 0.07) 5%, rgba(11, 15, 26, 0) 13%)";

const pad = (n: number) => String(n).padStart(2, "0");
const stop = (e: { stopPropagation: () => void }) => e.stopPropagation();

const kicker =
  "font-sans text-[2.3cqw] font-semibold uppercase leading-none tracking-[0.2em]";

function Folio({ number, light }: { number: number; light?: boolean }) {
  return (
    <span
      className={cn(
        "absolute bottom-[4.2cqw] font-sans text-[2.3cqw] font-medium leading-none tabular-nums",
        number % 2 === 0 ? "left-[9.5cqw]" : "right-[8.5cqw]",
        light ? "text-white/50" : "text-navy/40",
      )}
    >
      {pad(number)}
    </span>
  );
}

function PageContent({ page, number }: { page?: BookPage; number: number }) {
  if (!page) return <div className="size-full bg-white" />;

  /* ───────── Cover ───────── */
  if (page.type === "cover") {
    return (
      <div className="relative size-full overflow-hidden bg-white text-navy">
        {/* Header */}
        <div className="absolute inset-x-[8cqw] top-[6.5cqw] flex items-center justify-between">
          <span className="flex items-center gap-[1.6cqw]">
            <svg
              aria-hidden="true"
              className="size-[7cqw] shrink-0 text-electric"
              viewBox="0 0 52 52"
            >
              <path
                d="M8 5h36L26 20h16L8 47l9-18H5L24 5H8Z"
                fill="currentColor"
              />
            </svg>
            <span className="block">
              <span className="block font-display text-[5.4cqw] font-extrabold uppercase leading-[5cqw]">
                Super <span className="text-electric">Ace</span>
              </span>
              <span className="block font-sans text-[1.3cqw] font-semibold uppercase leading-none tracking-[0.3em] text-navy/60">
                International
              </span>
            </span>
          </span>
          <span className={cn(kicker, "text-navy/60")}>{page.season}</span>
        </div>

        <img
          alt=""
          className="absolute inset-x-[10cqw] top-[15cqw] h-[42cqw] w-[80cqw] object-contain"
          src={page.image}
        />

        <h3 className="absolute left-[8cqw] top-[62cqw] font-display text-[11.5cqw] font-extrabold uppercase leading-[11cqw]">
          {page.titleLines[0]}
          <span className="block text-electric">{page.titleLines[1]}</span>
        </h3>

        {/* Navy band: starts at 66% of the page, with diagonal stripes */}
        <div className="absolute inset-x-0 bottom-0 top-[90cqw] overflow-hidden bg-navy">
          <div className="absolute inset-0 [transform:skewX(-19.5deg)]">
            <span className="absolute inset-y-0 left-[73cqw] w-[2.2cqw] bg-white/90" />
            <span className="absolute inset-y-0 left-[77cqw] w-[12cqw] bg-electric" />
            <span
              className="absolute inset-y-0 left-[90cqw] w-[6cqw]"
              style={{
                background:
                  "color-mix(in srgb, var(--color-electric) 45%, var(--color-navy))",
              }}
            />
            <span className="absolute inset-y-0 left-[97cqw] w-[2cqw] bg-electric/80" />
          </div>
          <p className="absolute bottom-[12.5cqw] left-[8cqw] font-display text-[7.5cqw] font-bold uppercase leading-none text-white">
            {page.footer}
          </p>
          <p className="absolute bottom-[7.5cqw] left-[8cqw] font-sans text-[2cqw] font-medium uppercase leading-none tracking-[0.3em] text-white/70">
            {page.tags.join(" · ")}
          </p>
        </div>
      </div>
    );
  }

  /* ───────── Intro ───────── */
  if (page.type === "intro") {
    return (
      <div className="relative size-full overflow-hidden bg-white text-navy">
        <div className="absolute inset-x-[9.5cqw] top-[8.4cqw] flex justify-between">
          <span className={cn(kicker, "text-navy/60")}>{page.eyebrow}</span>
          <span className={cn(kicker, "text-navy/60")}>
            Super Ace International
          </span>
        </div>

        <h3 className="absolute left-[9.5cqw] top-[19.5cqw] font-display text-[12.5cqw] font-bold uppercase leading-[13.2cqw]">
          {page.headline[0]}
          <span className="block">{page.headline[1]}</span>
        </h3>
        <span className="absolute left-[9.5cqw] top-[47.3cqw] block h-[0.8cqw] w-[10cqw] bg-electric" />

        <p className="absolute left-[9.5cqw] top-[52cqw] w-[78cqw] font-sans text-[2.7cqw] leading-[4cqw] text-navy/60">
          {page.body}
        </p>

        <p
          className={cn(
            kicker,
            "absolute left-[9.5cqw] top-[79.5cqw] text-electric",
          )}
        >
          {page.contentsLabel}
        </p>
        <ul className="absolute inset-x-[9.5cqw] top-[83.5cqw]">
          {page.contents.map((row) => (
            <li
              className="flex h-[10.5cqw] items-center border-b-[0.25cqw] border-navy/10"
              key={row.number}
            >
              <span className="w-[8.5cqw] font-sans text-[2.6cqw] font-bold text-electric">
                {row.number}
              </span>
              <span className="flex-1 font-display text-[5cqw] font-bold uppercase leading-none">
                {row.title}
              </span>
              <span className="font-sans text-[2.3cqw] font-semibold tracking-[0.1em] text-navy/50">
                {row.page}
              </span>
            </li>
          ))}
        </ul>
        <Folio number={number} />
      </div>
    );
  }

  /* ───────── Section divider ───────── */
  if (page.type === "section") {
    return (
      <div className="relative size-full overflow-hidden bg-navy text-white">
        <div className="absolute inset-x-[8cqw] top-[8.4cqw] flex justify-between">
          <span className={cn(kicker, "text-white/70")}>
            Section {page.number}
          </span>
          <span className={cn(kicker, "text-white/70")}>
            Super Ace International
          </span>
        </div>

        {/* Photo box with outlined number */}
        <div className="absolute inset-x-[8cqw] top-[15cqw] h-[66cqw] overflow-hidden bg-navy">
          <img
            alt=""
            className="size-full object-cover opacity-60"
            src={page.image}
          />
          <span className="absolute inset-0 bg-linear-to-t from-navy/70 via-transparent to-navy/30" />
          <span className="absolute -bottom-[4cqw] right-[3.4cqw] font-display text-[40cqw] font-bold leading-none text-transparent [-webkit-text-stroke:0.45cqw_var(--color-electric)]">
            {page.number}
          </span>
        </div>

        <span className="absolute left-[8cqw] top-[99cqw] block h-[0.8cqw] w-[10cqw] bg-electric" />
        <h3 className="absolute left-[8cqw] top-[104cqw] font-display text-[16cqw] font-bold uppercase leading-[14cqw]">
          {page.title}
        </h3>
        <p className="absolute left-[8cqw] top-[120.5cqw] w-[80cqw] font-sans text-[2.6cqw] leading-[3.8cqw] text-silver">
          {page.subtitle}
        </p>
        <Folio light number={number} />
      </div>
    );
  }

  /* ───────── Product ───────── */
  const p = page.product;
  const rows = [
    ["Fabric", p.fabric],
    ["Sizes", p.sizes],
    ["Colourways", p.colourways],
  ];
  return (
    <div className="relative size-full overflow-hidden bg-white text-navy">
      <div className="absolute inset-x-[9.5cqw] top-[6.8cqw] flex justify-between">
        <span className={cn(kicker, "text-navy/60")}>{page.section}</span>
        <span className={cn(kicker, "text-navy/60")}>
          Super Ace International
        </span>
      </div>

      <img
        alt={p.name}
        className="absolute inset-x-[9.5cqw] top-[28cqw] h-[35cqw] w-[81cqw] object-contain"
        src={p.image}
      />

      {/* Left-hand pages use the accent colour, right-hand pages navy */}
      <h3
        className={cn(
          "absolute left-[9.5cqw] top-[69.5cqw] font-display text-[9.5cqw] font-bold uppercase leading-[10cqw]",
          number % 2 === 0 ? "text-electric" : "text-navy",
        )}
      >
        {p.name}
      </h3>
      <p className="absolute left-[9.5cqw] top-[81cqw] w-[82cqw] font-sans text-[2.6cqw] leading-[3.8cqw] text-navy/60">
        {p.description}
      </p>

      <dl className="absolute inset-x-[9.5cqw] top-[88cqw] border-t-[0.25cqw] border-navy/10">
        {rows.map(([label, value]) => (
          <div
            className="flex h-[6.4cqw] items-center justify-between border-b-[0.25cqw] border-navy/10 font-sans text-[2.3cqw] font-semibold uppercase tracking-[0.08em]"
            key={label}
          >
            <dt className="text-navy">{label}</dt>
            <dd className="text-navy/60">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="absolute inset-x-[9.5cqw] top-[118cqw] flex items-center justify-between">
        <span className="font-display text-[8cqw] font-bold uppercase leading-none">
          {p.price}
        </span>
        <Link
          className="font-sans text-[2.3cqw] font-extrabold uppercase tracking-[0.14em] text-electric transition-colors duration-300 hover:text-navy"
          onClick={stop}
          to={p.to}
        >
          View product +
        </Link>
      </div>
      <Folio number={number} />
    </div>
  );
}

type CatalogueViewerProps = { book: CatalogueBook };

export function CatalogueViewer({ book }: CatalogueViewerProps) {
  const total = book.pages.length;
  const leafCount = Math.ceil(total / 2);
  const [flipped, setFlipped] = useState(0);
  const [reduce] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const duration = reduce ? 0 : FLIP_MS;

  useEffect(() => {
    setFlipped(0);
  }, [book]);

  // Arrow keys turn pages from anywhere on the page
  useEffect(() => {
    const onKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "ArrowRight")
        setFlipped((f) => Math.min(f + 1, leafCount));
      else if (event.key === "ArrowLeft") setFlipped((f) => Math.max(f - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [leafCount]);

  const go = (next: number) =>
    setFlipped(Math.min(Math.max(next, 0), leafCount));

  const visible =
    flipped === 0
      ? [1]
      : [2 * flipped, 2 * flipped + 1].filter((n) => n <= total);
  const label = visible.map(pad).join("–");

  // Cover and last page sit alone, so slide the book to keep them centred
  const shift = flipped === 0 ? -25 : flipped === leafCount ? 25 : 0;

  const arrow =
    "grid size-9 place-items-center rounded-full text-white/70 transition-[background-color,color,opacity] duration-300 hover:bg-electric hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric disabled:pointer-events-none disabled:opacity-30";

  const stageVars = {
    "--pw": `clamp(140px, 38vw, ${PAGE_W}px)`,
    perspective: "2600px",
  } as CSSProperties;

  return (
    <>
      {/* Intro band */}
      <section
        aria-labelledby="catalogue-viewer-title"
        className="bg-white px-5 py-10 text-center text-navy sm:py-12"
      >
        <Eyebrow className="text-[9px] leading-[4px] tracking-[0.05em] sm:text-[10px]">
          {book.eyebrow}
        </Eyebrow>
        <h2
          className="mt-5 font-display text-[32px] font-bold uppercase leading-[34px] tracking-[0.3px] sm:text-[38px] xl:text-[44px] xl:leading-[43px] xl:tracking-[0.44px]"
          id="catalogue-viewer-title"
        >
          {book.titleLead}{" "}
          <span className="text-electric">{book.titleAccent}</span>
        </h2>
        <p className="mx-auto mt-3 max-w-[460px] font-sans text-[11px] leading-5 text-navy/50">
          {book.description}
        </p>
      </section>

      {/* Book stage: #0B0F1A with the faint grid and blue glows */}
      <section
        aria-label={`${book.titleLead} ${book.titleAccent} flipbook`}
        className="relative isolate overflow-hidden bg-navy bg-journey-grid py-12 text-white [background-size:48px_48px,48px_48px,100%_100%] sm:py-16"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-32 -z-10 size-[420px] rounded-full bg-electric/25 blur-[110px]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 -z-10 size-[360px] rounded-full bg-electric/20 blur-[110px]"
        />

        <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8 xl:px-0">
          <div className="flex items-center justify-between gap-4">
            <Link
              className="font-sans text-[9px] font-extrabold uppercase tracking-[0.15em] text-white/70 transition-colors duration-300 hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric"
              to="/resources/catalogue"
            >
              ← All catalogues
            </Link>
            <a
              className="inline-flex h-8 items-center gap-2 rounded-[2px] bg-electric px-4 font-sans text-[8px] font-extrabold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:bg-white hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              download
              href={book.file}
            >
              Get download
              <ArrowRight aria-hidden="true" size={10} strokeWidth={2.5} />
            </a>
          </div>

          <div className="mt-10 flex justify-center sm:mt-12" style={stageVars}>
            <div
              className="relative"
              style={{
                width: "calc(var(--pw) * 2)",
                height: `calc(var(--pw) * ${PAGE_RATIO})`,
                transformStyle: "preserve-3d",
                transform: `translateX(${shift}%)`,
                transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              {Array.from({ length: leafCount }, (_, i) => {
                const isFlipped = i < flipped;
                return (
                  <div
                    className="absolute left-1/2 top-0 h-full w-1/2 origin-left"
                    key={i}
                    style={{
                      transformStyle: "preserve-3d",
                      transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
                      zIndex: isFlipped ? i : leafCount - i,
                      transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), z-index 0s ${duration / 2}ms`,
                    }}
                  >
                    {/* Front: right-hand page. Click to turn forward */}
                    <div
                      className="@container absolute inset-0 cursor-pointer overflow-hidden bg-white shadow-[0_24px_50px_-12px] shadow-black/50 [backface-visibility:hidden]"
                      onClick={() => go(i + 1)}
                    >
                      <PageContent
                        number={2 * i + 1}
                        page={book.pages[2 * i]}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{ background: spineRight }}
                      />
                    </div>

                    {/* Back: left-hand page once turned. Click to turn back */}
                    <div
                      className="@container absolute inset-0 cursor-pointer overflow-hidden bg-white shadow-[0_24px_50px_-12px] shadow-black/50 [backface-visibility:hidden] [transform:rotateY(180deg)]"
                      onClick={() => go(i)}
                    >
                      <PageContent
                        number={2 * i + 2}
                        page={book.pages[2 * i + 1]}
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0"
                        style={{ background: spineLeft }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pager */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <button
              aria-label="Previous pages"
              className={arrow}
              disabled={flipped === 0}
              onClick={() => go(flipped - 1)}
              type="button"
            >
              <ChevronLeft size={14} strokeWidth={2.5} />
            </button>
            <p
              aria-live="polite"
              className="min-w-[120px] text-center font-sans text-[8px] font-semibold uppercase tracking-[0.2em] text-white/70"
            >
              Page <span className="text-electric">{label}</span> / {total}
            </p>
            <button
              aria-label="Next pages"
              className={arrow}
              disabled={flipped === leafCount}
              onClick={() => go(flipped + 1)}
              type="button"
            >
              <ChevronRight size={14} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
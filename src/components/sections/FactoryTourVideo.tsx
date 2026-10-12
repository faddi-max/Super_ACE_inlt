import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Play, X } from "lucide-react";
import { Reveal } from "@/components/animation";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { factoryTourVideoContent as c } from "@/content/factoryTourVideo";

function VideoModal({ onClose }: { onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  // Portal: Reveal's transform would otherwise trap a fixed overlay inside the section
  return createPortal(
    <div
      aria-label={c.videoTitle}
      aria-modal="true"
      className="fixed inset-0 z-[100] grid place-items-center bg-navy/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
    >
      <div
        className="relative aspect-video w-full max-w-[1100px] overflow-hidden border-[0.67px] border-white/15 bg-black shadow-[0_30px_80px_0] shadow-black/60"
        onClick={(event) => event.stopPropagation()}
      >
        {c.videoSrc ? (
          <video
            autoPlay
            className="size-full"
            controls
            playsInline
            src={c.videoSrc}
            title={c.videoTitle}
          />
        ) : (
          <p className="grid size-full place-items-center px-6 text-center font-sans text-[12px] text-mist">
            {c.emptyNote}
          </p>
        )}
      </div>
      <button
        aria-label={c.closeLabel}
        className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6 sm:top-6"
        onClick={onClose}
        ref={closeRef}
        type="button"
      >
        <X aria-hidden="true" size={18} strokeWidth={2.5} />
      </button>
    </div>,
    document.body,
  );
}

export function FactoryTourVideo() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      aria-labelledby="factory-video-title"
      // 1440 x 641 · padding 80 / 80 · navy + electric gradient
      className="relative isolate overflow-hidden bg-navy py-16 text-white md:py-20 lg:flex lg:min-h-[641px] lg:items-center"
      // 1224 - 2 x 32 padding = 1160 card
      containerClassName="min-w-0 max-w-[1224px]"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-factory-video-band"
      />
      <Reveal delay={100}>
        {/* Card: 1160 x 440 min · 0.67px border · white @ 12% */}
        <div className="group/card relative isolate flex min-h-[440px] items-center overflow-hidden border-[0.67px] border-white/12 px-6 py-10 sm:px-10 lg:px-12">
          <img
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-20 size-full scale-100 object-cover transition-transform duration-[1600ms] ease-smooth group-hover/card:scale-[1.03] motion-reduce:transition-none"
            loading="lazy"
            src={c.background}
          />
          {/* 90deg navy 96% to 38% */}
          <span
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-factory-video-overlay"
          />

          <div className="relative min-w-0">
            <Eyebrow className="leading-none">{c.eyebrow}</Eyebrow>

            {/* Barlow Condensed 800 / 78px / 63.96px */}
            <Heading
              as="h2"
              className="mt-3 text-[48px] font-extrabold leading-[42px] text-white sm:text-[64px] sm:leading-[54px] lg:text-[78px] lg:leading-[63.96px]"
              id="factory-video-title"
            >
              <span className="block">{c.titleLead}</span>
              <span className="block text-electric">{c.titleAccent}</span>
            </Heading>

            <p className="mt-5 max-w-[420px] font-sans text-[10px] leading-4 text-mist sm:text-[11px]">
              {c.description}
            </p>

            <button
              className="group/cta mt-6 inline-flex h-9 items-center justify-center gap-2.5 rounded-[2px] border border-white/40 px-5 font-sans text-[9px] font-semibold uppercase leading-none tracking-[0.1em] text-white transition-colors duration-300 ease-smooth hover:border-electric hover:text-electric focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric motion-reduce:transition-none"
              onClick={() => setOpen(true)}
              type="button"
            >
              {c.cta}
              <ArrowRight
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/cta:translate-x-1 motion-reduce:transition-none"
                size={11}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Centre play button */}
          <button
            aria-label={c.playLabel}
            className="group/play absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-electric shadow-[0_8px_30px_0] shadow-black/40 transition-transform duration-300 ease-smooth hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none max-sm:left-auto max-sm:right-5 max-sm:top-5 max-sm:size-11 max-sm:translate-x-0 max-sm:translate-y-0 sm:size-16"
            onClick={() => setOpen(true)}
            type="button"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 animate-ping rounded-full bg-white/40 [animation-duration:2.4s] motion-reduce:hidden"
            />
            <Play
              aria-hidden="true"
              className="relative ml-0.5 fill-current"
              size={20}
              strokeWidth={0}
            />
          </button>
        </div>
      </Reveal>

      {open && <VideoModal onClose={() => setOpen(false)} />}
    </Section>
  );
}
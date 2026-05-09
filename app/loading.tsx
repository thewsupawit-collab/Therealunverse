export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] grid place-items-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blush-300 to-rose-deep text-white shadow-glow animate-pulse">
          <span className="font-display text-2xl leading-none">L</span>
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Blooming…
        </span>
      </div>
    </div>
  );
}

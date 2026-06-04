type VideoPanelProps = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

export function VideoPanel({ src, poster, label, className = "" }: VideoPanelProps) {
  return (
    <div className={`overflow-hidden rounded-lg border border-line bg-panel ${className}`}>
      <video
        aria-label={label}
        autoPlay
        className="h-full min-h-72 w-full object-cover opacity-80"
        loop
        muted
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

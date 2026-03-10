export default function VenueBanner({
  imageSrc = "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&h=600&fit=crop",
  imageAlt = "Venue banner background",
  headline = "Venues",
  subtext = "Most Trusted and premium decor service in the world",
}) {
  return (
    <section className="relative w-full h-[20vw] min-h-[220px] sm:min-h-[280px] overflow-hidden">
      {/* Background Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient Overlay — black on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-16 max-w-xl">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2">
          {headline}
        </h1>
        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
          {subtext}
        </p>
      </div>

      {/* Subtle bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}

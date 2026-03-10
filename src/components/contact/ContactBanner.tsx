export default function ContactBanner() {
  return (
    <section className="relative w-full h-[20vw] min-h-[220px] sm:min-h-[280px] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&h=600&fit=crop"
        alt="Contact us"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-10 lg:px-16 max-w-xl">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-2">
          Contact US
        </h1>
        <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">
          Most Trusted and premium Decor Service in the World.
        </p>
      </div>
    </section>
  );
}

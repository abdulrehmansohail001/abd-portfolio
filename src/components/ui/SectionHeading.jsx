function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export default SectionHeading;
export function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Intent Studios transformed our haphazard digital presence into a cohesive, conversion-driven platform. The clarity they brought to the process was exactly what we needed.",
      name: "Arthur Hayes",
      role: "Founder, Apex Fin"
    },
    {
      quote: "Finally, an agency that understands business logic. Ansh didn’t just design our app; he interrogated our user flows and delivered a deeply functional product.",
      name: "Sarah Jenkins",
      role: "VP Product, ShiftTech"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 md:px-12 lg:px-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-tight mb-16">
          Client Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col justify-between p-8 md:p-12 border border-white/10 rounded-2xl bg-white/[0.02]">
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-12">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

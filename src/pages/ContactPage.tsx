import { FadeIn } from '../components/FadeIn';

export function ContactPage() {
  return (
    <div className="pt-32 pb-48 px-6 md:px-12 lg:px-16 min-h-screen flex items-center justify-center">
      <div className="max-w-xl w-full">
        {/* Hero */}
        <div className="mb-16 text-center flex flex-col items-center">
           <FadeIn delayMs={100} durationMs={800}>
             <h1 className="text-5xl md:text-6xl font-heading italic tracking-tight mb-6">
               Contact
             </h1>
           </FadeIn>
           <FadeIn delayMs={300} durationMs={800}>
             <p className="text-lg font-light leading-relaxed text-gray-400">
               Tell me about your project and I will get back to you.
             </p>
           </FadeIn>
        </div>

        {/* Form */}
        <FadeIn delayMs={500} durationMs={800}>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
                placeholder="john@company.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="details" className="text-sm font-medium text-gray-300 ml-1">Project Details</label>
              <textarea 
                id="details" 
                name="details"
                rows={5}
                className="w-full px-6 py-4 bg-[#111111] border border-white/10 rounded-lg text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Tell me about what you are building..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full mt-4 px-8 py-4 bg-white text-black rounded-lg font-medium text-base hover:bg-gray-200 transition-colors flex items-center justify-center"
            >
              Send Message
            </button>
            
          </form>
        </FadeIn>
      </div>
    </div>
  );
}

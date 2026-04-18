import Logo from './Logo';

function Footer() {
  return (
    <footer className="relative py-32 bg-gray-50 overflow-hidden flex flex-col items-center justify-center text-center px-6 border-t border-gray-200">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#c4161c 1.5px, transparent 1.5px)',
          backgroundSize: '30px 30px',
        }}
      />

      {/* Logo + CTA */}
      <div className="relative z-10 mb-20">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Logo className="h-10 md:h-12 w-auto" textColor="#111827" />
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-gray-900 mb-6">
          Let's Create Together
        </h2>
        <a
          href="mailto:info@midmaradv.com"
          className="text-2xl md:text-4xl font-light text-gray-400 hover:text-primary transition-colors"
        >
          info@midmaradv.com
        </a>
      </div>

      {/* Map */}
      <div className="relative z-10 w-full max-w-3xl mx-auto mb-16">
        <div className="w-full h-[200px] rounded-4xl overflow-hidden border border-gray-200 shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.349241297823!2d55.437500299999996!3d25.2924678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f007b57c70b%3A0x47f0476467d53a6e!2sAL%20MIDMAR%20ADV.%20DESIGN!5e0!3m2!1sen!2sae!4v1776168846150!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Al Midmar Location"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-full max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium border-t border-gray-200 pt-8">
        <span>© 2026 Al Midmar Adv Design. All rights reserved.</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary transition-colors">Instagram</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-primary transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
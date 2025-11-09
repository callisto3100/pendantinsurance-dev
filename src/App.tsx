function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center backdrop-blur-md bg-primary/95 shadow-elegant transition-all">
        <div className="text-2xl font-serif font-semibold text-accent">Pendant Insurance</div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#iul" className="text-sm font-light tracking-wide text-primary-foreground hover:text-accent transition-all uppercase">
            Indexed Univeral Life
          </a>
          <a href="#annuities" className="text-sm font-light tracking-wide text-primary-foreground hover:text-accent transition-all uppercase">
            Annuities
          </a>
          <a href="#whole-life" className="text-sm font-light tracking-wide text-primary-foreground hover:text-accent transition-all uppercase">
            Whole Life
          </a>
          <a href="#term-life" className="text-sm font-light tracking-wide text-primary-foreground hover:text-accent transition-all uppercase">
            Term Life
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'var(--gradient-overlay), url(/Gemini_Generated_Image_nfjerknfjerknfje.png)',
          }}
        />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-7xl font-serif font-semibold mb-6">Protection that Endures</h1>
          <p className="text-xl mb-10 font-light leading-relaxed">
            Build lasting wealth while safeguarding what matters most. Discover how life<br />
            insurance becomes both shield and investment.
          </p>
          <a href="#iul" className="px-10 py-4 border border-accent text-accent rounded-sm hover:bg-accent hover:text-accent-foreground transition-all inline-flex items-center gap-3 text-sm tracking-wider uppercase font-light">
            Explore Solutions
          </a>
        </div>
      </section>

      {/* IUL Section */}
      <section id="iul" className="py-10 px-6 bg-secondary scroll-mt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-lg overflow-hidden h-[500px] bg-cover bg-center shadow-luxury"
            style={{
              backgroundImage: 'url(/bucket-list-1.jpg)',
            }}
          />
          <div>
            <div className="text-accent text-xs font-light tracking-widest mb-4 uppercase">Indexed Universal Life</div>
            <h2 className="text-5xl font-serif mb-8 leading-tight text-primary">
              Market-Linked Growth,{' '}
              <span className="text-gradient-gold">Downside Protection</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-loose">
              Indexed Universal Life insurance connects your cash value growth to market indexes while protecting you from losses. Experience the upside potential of equity markets with a floor that ensures your principal remains secure— giving you growth opportunities without the downside risk.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Cash value linked to S&P 500 or other market indices</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Floor protection ensures you never lose to market downturns</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Flexible premiums and death benefit options as life evolves</span>
              </li>
            </ul>
            <button className="px-8 py-3 text-sm tracking-wider uppercase font-light rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-all">
              Discover the Advantage
            </button>
          </div>
        </div>
      </section>

      {/* Annuities Section */}
      <section id="annuities" className="py-10 px-6 bg-card scroll-mt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-accent text-xs font-light tracking-widest mb-4 uppercase">Annuities</div>
            <h2 className="text-5xl font-serif mb-8 leading-tight text-primary">
              Build Retirement Freedom Around{' '}
              <span className="text-gradient-gold">Income You Can Count On</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-loose">
              Annuities transform your savings into a reliable income stream that lasts as long as you do. Whether you seek immediate payments or prefer to let your investment grow tax-deferred, annuities provide the financial certainty to live retirement on your terms—traveling, exploring, and enjoying life without worry.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Guaranteed income for life or a specified period</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Tax-deferred growth until withdrawal</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Options for spousal continuation and beneficiary protection</span>
              </li>
            </ul>
            <button className="px-8 py-3 text-sm tracking-wider uppercase font-light rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-all">
              Plan Your Future
            </button>
          </div>
          <div
            className="rounded-lg overflow-hidden h-[500px] bg-cover bg-center shadow-luxury"
            style={{
              backgroundImage: 'url(/istockphoto-2150324729-612x612.jpg)',
            }}
          />
        </div>
      </section>

      {/* Whole Life Section */}
      <section id="whole-life" className="py-10 px-6 bg-secondary scroll-mt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div
            className="rounded-lg overflow-hidden h-[500px] bg-cover bg-center shadow-luxury"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            }}
          />
          <div>
            <div className="text-accent text-xs font-light tracking-widest mb-4 uppercase">Whole Life Insurance</div>
            <h2 className="text-5xl font-serif mb-8 leading-tight text-primary">
              Permanent Protection,{' '}
              <span className="text-gradient-gold">Guaranteed Growth</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-loose">
              Whole life insurance offers more than protection—it's a financial cornerstone. Your premiums build guaranteed cash value that grows tax-deferred, creating a living benefit you can access during your lifetime while ensuring your legacy can endure.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Lifelong coverage with fixed premiums that never increase</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Tax-advantaged cash value growth you can borrow against</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Dividends that enhance policy value and flexibility</span>
              </li>
            </ul>
            <button className="px-8 py-3 text-sm tracking-wider uppercase font-light rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Term Life Section */}
      <section id="term-life" className="py-10 px-6 bg-card scroll-mt-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-accent text-xs font-light tracking-widest mb-4 uppercase">Term Life Insurance</div>
            <h2 className="text-5xl font-serif mb-8 leading-tight text-primary">
              Affordable Protection,{' '}
              <span className="text-gradient-gold">Maximum Coverage</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-loose">
              Term life insurance delivers substantial protection at accessible rates, making it ideal for covering specific financial obligations like mortgages, education costs, or income replacement during your peak earning years. Straightforward and effective—pure protection when you need it most.
            </p>
            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">High coverage amounts at the lowest cost per dollar</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Flexible term lengths from 10 to 30 years</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-accent mt-1 text-xl">•</span>
                <span className="text-foreground font-light">Convertible options to permanent coverage without medical exams</span>
              </li>
            </ul>
            <button className="px-8 py-3 text-sm tracking-wider uppercase font-light rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-all">
              Get a Custom Quote
            </button>
          </div>
          <div
            className="rounded-lg overflow-hidden h-[500px] bg-cover bg-center shadow-luxury"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            }}
          />
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-40 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'var(--gradient-overlay), url(https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto">
          <h2 className="text-6xl font-serif mb-8">Your Legacy Awaits</h2>
          <p className="text-xl mb-12 font-light leading-relaxed">
            Let's discuss how the right protection can secure your family's future while<br />
            building wealth that lasts for generations.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="px-10 py-4 border border-accent text-accent rounded-sm hover:bg-accent hover:text-accent-foreground transition-all text-sm tracking-wider uppercase font-light">
              Schedule a Consultation
            </button>
            <button className="px-10 py-4 border border-white text-white rounded-sm hover:bg-white hover:text-primary transition-all text-sm tracking-wider uppercase font-light">
              Call Us Today
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-muted-foreground text-center py-12 px-6">
        <p className="text-xs font-light tracking-wide">
          © 2025 Pendant Insurance. Licensed insurance professional. Products may vary by state.
        </p>
      </footer>
    </div>
  );
}

export default App;

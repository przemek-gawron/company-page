import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-200 dark:bg-zinc-950/90 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">J</span>
              </div>
              <span className="text-xl font-bold text-zinc-900 dark:text-white">J-Tech</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">About</a>
              <a href="#products" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Products</a>
              <a href="#gallery" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Gallery</a>
              <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors">Contact</a>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-zinc-50 to-blue-50 dark:from-zinc-950 dark:to-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white leading-tight">
                Premium Rubber Seals for Every Application
              </h1>
              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-xl">
                J-Tech delivers high-quality rubber sealing solutions trusted by industries worldwide.
                From automotive to aerospace, our precision-engineered seals ensure reliability and performance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#products"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                >
                  Explore Products
                </a>
                <a
                  href="#contact"
                  className="border border-zinc-300 text-zinc-700 px-8 py-4 rounded-lg hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800 transition-colors font-medium text-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 mx-auto mb-6 border-8 border-white/30 rounded-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full"></div>
                  </div>
                  <p className="text-2xl font-semibold">Precision Engineering</p>
                  <p className="text-blue-200 mt-2">Since 1995</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-white">30+</p>
              <p className="text-blue-200 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-blue-200 mt-1">Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">1000+</p>
              <p className="text-blue-200 mt-1">Clients Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="text-blue-200 mt-1">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">About J-Tech</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Leading manufacturer of industrial rubber seals and sealing solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Founded in 1995, J-Tech has grown to become a trusted name in the rubber sealing industry.
                Our state-of-the-art manufacturing facility combines traditional craftsmanship with modern technology
                to produce seals that meet the most demanding specifications.
              </p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We serve a diverse range of industries including automotive, aerospace, marine,
                oil & gas, and industrial machinery. Our commitment to quality has earned us
                ISO 9001:2015 certification and recognition from major industry leaders.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">ISO Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">Custom Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">Global Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-700 dark:text-zinc-300">24/7 Support</span>
                </div>
              </div>
            </div>
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-8 aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-zinc-500 dark:text-zinc-400">Manufacturing Facility</p>
                <p className="text-sm text-zinc-400 dark:text-zinc-500 mt-1">50,000 sq ft production area</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Our Products</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Comprehensive range of rubber seals designed for performance and durability
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-10 h-10 border-4 border-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">O-Rings</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Precision-molded O-rings available in various elastomers including NBR, EPDM, FKM, and silicone. Custom sizes available.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Temperature range: -60°C to +300°C</li>
                <li>- Pressure: Up to 700 bar</li>
                <li>- Metric and imperial sizes</li>
              </ul>
            </div>
            {/* Product Card 2 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-12 h-4 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Gaskets</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Flat gaskets, spiral wound gaskets, and custom-cut gaskets for flanges, pipes, and industrial equipment.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Multiple material options</li>
                <li>- CNC precision cutting</li>
                <li>- Custom profiles available</li>
              </ul>
            </div>
            {/* Product Card 3 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-10 h-10 border-4 border-blue-600 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Oil Seals</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Radial shaft seals, rotary seals, and hydraulic seals designed for demanding rotating equipment applications.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Single and double lip designs</li>
                <li>- Spring-loaded options</li>
                <li>- PTFE and rubber variants</li>
              </ul>
            </div>
            {/* Product Card 4 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-sm transform rotate-45"></div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">V-Rings</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                All-rubber rotary shaft seals for protection against contamination and retention of lubricants.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Easy installation</li>
                <li>- Maintenance-free operation</li>
                <li>- Wide size range</li>
              </ul>
            </div>
            {/* Product Card 5 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <div className="flex gap-1">
                  <div className="w-3 h-8 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-8 bg-blue-400 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Hydraulic Seals</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Piston seals, rod seals, wiper seals, and complete seal kits for hydraulic cylinders and systems.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- High-pressure rated</li>
                <li>- Low friction designs</li>
                <li>- Extended service life</li>
              </ul>
            </div>
            {/* Product Card 6 */}
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Custom Solutions</h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Engineered sealing solutions designed to your exact specifications. From prototype to production.
              </p>
              <ul className="text-sm text-zinc-500 dark:text-zinc-500 space-y-2">
                <li>- Engineering support</li>
                <li>- Rapid prototyping</li>
                <li>- Material selection guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Product Gallery</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              A glimpse of our manufacturing excellence and product range
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Gallery Item 1 */}
            <div className="aspect-square bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto border-8 border-zinc-400 dark:border-zinc-500 rounded-full"></div>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">O-Ring Collection</p>
              </div>
            </div>
            {/* Gallery Item 2 */}
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="w-20 h-6 mx-auto bg-blue-400 dark:bg-blue-600 rounded-full"></div>
                <p className="mt-3 text-sm text-blue-700 dark:text-blue-300">Flat Gaskets</p>
              </div>
            </div>
            {/* Gallery Item 3 */}
            <div className="aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto border-4 border-zinc-600 rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-zinc-600 rounded-full"></div>
                </div>
                <p className="mt-3 text-sm text-zinc-400">Oil Seals</p>
              </div>
            </div>
            {/* Gallery Item 4 */}
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="flex justify-center gap-2">
                  <div className="w-8 h-8 border-4 border-amber-500 rounded-full"></div>
                  <div className="w-8 h-8 border-4 border-amber-600 rounded-full"></div>
                  <div className="w-8 h-8 border-4 border-amber-700 rounded-full"></div>
                </div>
                <p className="mt-3 text-sm text-amber-700 dark:text-amber-300">Various Sizes</p>
              </div>
            </div>
            {/* Gallery Item 5 */}
            <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="w-16 h-16 mx-auto bg-emerald-400 dark:bg-emerald-600 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-white dark:bg-emerald-900 rounded-full"></div>
                </div>
                <p className="mt-3 text-sm text-emerald-700 dark:text-emerald-300">Silicone Seals</p>
              </div>
            </div>
            {/* Gallery Item 6 */}
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="w-20 h-12 mx-auto border-4 border-purple-400 dark:border-purple-500 rounded-lg"></div>
                <p className="mt-3 text-sm text-purple-700 dark:text-purple-300">Custom Profiles</p>
              </div>
            </div>
            {/* Gallery Item 7 */}
            <div className="aspect-square bg-gradient-to-br from-rose-100 to-rose-200 dark:from-rose-900 dark:to-rose-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <div className="flex justify-center">
                  <div className="w-6 h-12 bg-rose-400 dark:bg-rose-600 rounded-full"></div>
                  <div className="w-6 h-12 bg-rose-500 dark:bg-rose-500 rounded-full -ml-2"></div>
                </div>
                <p className="mt-3 text-sm text-rose-700 dark:text-rose-300">Hydraulic Seals</p>
              </div>
            </div>
            {/* Gallery Item 8 */}
            <div className="aspect-square bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800 rounded-xl overflow-hidden flex items-center justify-center group hover:scale-[1.02] transition-transform">
              <div className="text-center p-4">
                <svg className="w-16 h-16 mx-auto text-cyan-500 dark:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <p className="mt-3 text-sm text-cyan-700 dark:text-cyan-300">Lab Testing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Industries We Serve</h2>
            <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
              Trusted by leading companies across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Automotive</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Aerospace</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Oil & Gas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Chemical</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Energy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-zinc-800 rounded-xl flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-zinc-300 text-sm">Industrial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Get in Touch</h2>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              Ready to discuss your sealing requirements? Contact our team today.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company Ltd."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-700 text-zinc-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your sealing requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="bg-white dark:bg-zinc-800 rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">Address</p>
                      <p className="text-zinc-600 dark:text-zinc-400">123 Industrial Park Drive<br />Manufacturing District, MD 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">Phone</p>
                      <p className="text-zinc-600 dark:text-zinc-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-zinc-900 dark:text-white">Email</p>
                      <p className="text-zinc-600 dark:text-zinc-400">info@jtech-seals.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-blue-100">
                  <p className="flex justify-between"><span>Monday - Friday</span><span>8:00 AM - 6:00 PM</span></p>
                  <p className="flex justify-between"><span>Saturday</span><span>9:00 AM - 2:00 PM</span></p>
                  <p className="flex justify-between"><span>Sunday</span><span>Closed</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 dark:bg-black py-12 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">J</span>
                </div>
                <span className="text-xl font-bold text-white">J-Tech</span>
              </div>
              <p className="text-zinc-400 max-w-md">
                Premium rubber sealing solutions for industries worldwide. Quality, reliability, and innovation since 1995.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#products" className="hover:text-white transition-colors">O-Rings</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Gaskets</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Oil Seals</a></li>
                <li><a href="#products" className="hover:text-white transition-colors">Custom Solutions</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              &copy; 2025 J-Tech Rubber Seals. All rights reserved.
            </p>
            <div className="flex gap-6 text-zinc-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

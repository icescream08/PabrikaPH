'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle, Shield, Users, Zap, Search, TrendingUp, Sparkles } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/manufacturers?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleCategoryClick = (category: string) => {
    router.push(`/manufacturers?category=${encodeURIComponent(category)}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Premium Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95">
        <div className="container-max h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-pabrika-navy font-poppins hover:opacity-80 transition-opacity">
            PabrikaPH
          </Link>
          
          <div className="hidden lg:flex gap-12 items-center">
            <Link href="/manufacturers" className="text-gray-600 hover:text-pabrika-navy font-medium transition-colors duration-200">
              Browse Suppliers
            </Link>
            <a href="#how" className="text-gray-600 hover:text-pabrika-navy font-medium transition-colors duration-200 cursor-pointer">
              How it Works
            </a>
            <Link href="#" className="text-gray-600 hover:text-pabrika-navy font-medium transition-colors duration-200">
              About
            </Link>
          </div>

          <div className="flex gap-3 items-center">
            <Link href="#" className="text-gray-600 hover:text-pabrika-navy font-medium transition-colors duration-200">
              Login
            </Link>
            <Link href="#" className="bg-gradient-to-r from-pabrika-orange to-orange-600 hover:shadow-lg hover:shadow-orange-200 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Manufacturing Hero Section with Workers */}
      <section className="relative bg-gradient-to-br from-pabrika-navy via-blue-900 to-blue-800 text-white py-24 md:py-32 overflow-hidden">
        {/* Workers Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1200 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            {/* Factory 1 */}
            <rect x="50" y="250" width="180" height="300" fill="#6B7280"/>
            <polygon points="50,250 140,120 230,250" fill="#9CA3AF"/>
            <rect x="75" y="280" width="25" height="30" fill="#60A5FA"/>
            <rect x="120" y="280" width="25" height="30" fill="#60A5FA"/>
            <rect x="165" y="280" width="25" height="30" fill="#60A5FA"/>
            
            {/* Worker 1 - Left */}
            <circle cx="180" cy="380" r="20" fill="#E8B5A0"/>
            <path d="M 160 380 Q 180 360 200 380" fill="#3D2817"/>
            <rect x="170" y="405" width="20" height="45" fill="#FF6B35"/>
            <rect x="175" y="450" width="8" height="35" fill="#2C3E50"/>
            <rect x="187" y="450" width="8" height="35" fill="#2C3E50"/>
            <ellipse cx="179" cy="490" rx="6" ry="5" fill="#1A1A1A"/>
            <ellipse cx="191" cy="490" rx="6" ry="5" fill="#1A1A1A"/>
            
            {/* Machine */}
            <rect x="240" y="380" width="80" height="90" fill="#5A6B7F" rx="5"/>
            <circle cx="250" cy="415" r="15" fill="#D4AF37"/>
            
            {/* Worker 2 - Center */}
            <circle cx="520" cy="400" r="22" fill="#F4C4A8"/>
            <path d="M 498 400 Q 520 375 542 400" fill="#2C1810"/>
            <ellipse cx="520" cy="375" rx="25" ry="8" fill="#FFA500"/>
            <circle cx="510" cy="397" r="4" fill="#4A90E2"/>
            <circle cx="530" cy="397" r="4" fill="#4A90E2"/>
            <rect x="508" y="428" width="24" height="50" fill="#4169E1"/>
            <rect x="513" y="478" width="9" height="40" fill="#2C3E50"/>
            <rect x="527" y="478" width="9" height="40" fill="#2C3E50"/>
            <ellipse cx="517.5" cy="523" rx="7" ry="5" fill="#1A1A1A"/>
            <ellipse cx="531.5" cy="523" rx="7" ry="5" fill="#1A1A1A"/>
            
            {/* Clipboard */}
            <rect x="555" y="420" width="28" height="35" fill="#8B7355"/>
            <rect x="557" y="423" width="24" height="10" fill="#FFFACD"/>
            
            {/* Worker 3 - Right */}
            <circle cx="880" cy="390" r="21" fill="#C9956B"/>
            <path d="M 859 390 Q 880 368 901 390" fill="#1A0F0A"/>
            <polygon points="859,418 901,418 905,465 855,465" fill="#FFD700"/>
            <rect x="864" y="420" width="32" height="45" fill="#FFFFFF"/>
            <rect x="873" y="465" width="9" height="38" fill="#2C3E50"/>
            <rect x="888" y="465" width="9" height="38" fill="#2C3E50"/>
            <ellipse cx="877.5" cy="508" rx="7" ry="5" fill="#1A1A1A"/>
            <ellipse cx="892.5" cy="508" rx="7" ry="5" fill="#1A1A1A"/>
            
            {/* Workbench */}
            <rect x="800" y="500" width="140" height="20" fill="#8B7355"/>
            <rect x="820" y="485" width="100" height="15" fill="#D2B48C"/>
            
            {/* Factory 2 */}
            <rect x="950" y="200" width="220" height="350" fill="#4A5568"/>
            <polygon points="950,200 1060,50 1170,200" fill="#6B7280"/>
            <rect x="970" y="240" width="20" height="25" fill="#60A5FA"/>
            <rect x="1010" y="240" width="20" height="25" fill="#60A5FA"/>
            <rect x="1050" y="240" width="20" height="25" fill="#60A5FA"/>
            <rect x="1090" y="240" width="20" height="25" fill="#60A5FA"/>
          </svg>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-pabrika-navy/85 via-blue-900/70 to-blue-800/85"></div>

        {/* Animated Elements */}
        <div className="absolute top-20 right-5 w-40 h-40 bg-pabrika-orange rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 left-1/4 w-60 h-60 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="container-max relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-block mb-6">
              <span className="bg-white bg-opacity-10 backdrop-blur text-blue-100 px-4 py-2 rounded-full text-sm font-semibold border border-white border-opacity-20 hover:bg-opacity-15 transition-all">
                ✨ Connecting Businesses with Real Filipino Manufacturers
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-8 font-poppins leading-tight">
              Hanapin ang Supplier Na Kailangan Mo
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl">
              Connect with 500+ verified Philippine manufacturers, wholesalers, and suppliers. Search, compare, and send inquiries—all in one trusted platform.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mb-12">
            <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-300 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg -z-10"></div>
                <div className="relative flex items-center bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <Search className="absolute left-4 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search: cosmetics, packaging, apparel, food, supplements..."
                    className="w-full pl-12 pr-6 py-4 text-gray-900 font-medium placeholder-gray-400 focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-pabrika-orange to-orange-600 hover:shadow-2xl hover:shadow-orange-300 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 group transform hover:scale-105"
              >
                Search
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
              <span className="text-blue-100 text-sm font-semibold">Popular categories:</span>
              {['Beauty & Cosmetics', 'Food & Beverage', 'Packaging', 'Apparel'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryClick(cat)}
                  className="bg-white bg-opacity-15 hover:bg-opacity-25 backdrop-blur text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border border-white border-opacity-30 hover:border-opacity-50 transform hover:scale-105 cursor-pointer"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pabrika-navy font-poppins mb-4">
              Why 2,000+ Filipino Businesses Trust PabrikaPH
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We are committed to connecting you with the most reliable suppliers in the Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: '500+ Verified Manufacturers',
                desc: 'All suppliers are manually verified and approved',
              },
              {
                icon: Users,
                title: '100% Philippines-Based',
                desc: 'Locally-owned businesses supporting the economy',
              },
              {
                icon: CheckCircle,
                title: 'Document Verified',
                desc: 'Business permits and credentials checked',
              },
              {
                icon: Zap,
                title: 'Quick Sourcing',
                desc: 'Find quality suppliers in minutes',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="group cursor-pointer">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pabrika-orange h-full">
                    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-50 transition-colors">
                      <Icon className="w-7 h-7 text-pabrika-orange" />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-gray-900 group-hover:text-pabrika-navy transition-colors">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="bg-white py-20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-pabrika-navy font-poppins mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Simple, straightforward process to find your perfect supplier
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'Search & Browse',
                desc: 'Find manufacturers by category, location, and business type',
                icon: Search,
              },
              {
                num: '2',
                title: 'View Profiles',
                desc: 'Check details, MOQ, capacity, and certifications',
                icon: TrendingUp,
              },
              {
                num: '3',
                title: 'Send Inquiry',
                desc: 'Direct message or quotation request to suppliers',
                icon: Sparkles,
              },
            ].map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative cursor-pointer">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-pabrika-orange hover:shadow-lg transition-all duration-300 h-full">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-pabrika-orange text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md">
                      {step.num}
                    </div>
                    <div className="pt-6">
                      <div className="mb-4">
                        <Icon className="w-8 h-8 text-pabrika-orange" />
                      </div>
                      <h3 className="font-bold text-lg mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pabrika-navy to-blue-900 text-white py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Ready to Find Your Supplier?</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Join thousands of Filipino business owners who have simplified their sourcing process with PabrikaPH.
              </p>
              <Link
                href="/manufacturers"
                className="inline-flex items-center gap-3 bg-pabrika-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:shadow-orange-300 cursor-pointer"
              >
                Start Sourcing Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">Are You a Manufacturer?</h3>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Get verified and connect with hundreds of potential clients looking for your products.
              </p>
              <button 
                onClick={() => alert('Manufacturer signup coming soon!')}
                className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-pabrika-navy px-8 py-4 rounded-xl font-bold transition-all duration-200 cursor-pointer"
              >
                List Your Company
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Verified Suppliers' },
              { num: '2,000+', label: 'Active Businesses' },
              { num: '50+', label: 'Product Categories' },
              { num: '48hrs', label: 'Average Response Time' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-pabrika-orange font-poppins mb-2">
                  {stat.num}
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-white font-bold text-lg mb-6 font-poppins">PabrikaPH</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                Trusted Philippine manufacturers directory for businesses
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Browse</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/manufacturers" className="hover:text-pabrika-orange transition-colors cursor-pointer">All Suppliers</Link></li>
                <li><button onClick={() => handleCategoryClick('Beauty & Cosmetics')} className="hover:text-pabrika-orange transition-colors cursor-pointer">By Category</button></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors cursor-pointer">By Location</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors cursor-pointer">About Us</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors cursor-pointer">Blog</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors cursor-pointer">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors cursor-pointer">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors cursor-pointer">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2024 PabrikaPH. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for Philippine businesses</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

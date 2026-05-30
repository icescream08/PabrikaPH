import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Users, Zap, Search, TrendingUp, Sparkles } from 'lucide-react';

export default function HomePage() {
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
            <a href="#how" className="text-gray-600 hover:text-pabrika-navy font-medium transition-colors duration-200">
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

      {/* Premium Hero Section */}
      <section className="bg-gradient-to-br from-pabrika-navy via-blue-900 to-blue-800 text-white py-24 md:py-32 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        
        <div className="container-max relative z-10">
          <div className="max-w-3xl mb-12">
            <div className="inline-block mb-6">
              <span className="bg-white bg-opacity-10 backdrop-blur text-blue-100 px-4 py-2 rounded-full text-sm font-semibold border border-white border-opacity-20">
                ✨ Trusted by 2,000+ Filipino Businesses
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-poppins leading-tight">
              Hanapin ang Supplier Na Kailangan Mo
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-12 leading-relaxed max-w-2xl">
              Connect with 500+ verified Philippine manufacturers, wholesalers, and suppliers. Search, compare, and send inquiries—all in one trusted platform.
            </p>
          </div>

          {/* Premium Search Bar */}
          <div className="max-w-3xl mb-12">
            <form className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
                <div className="relative flex items-center bg-white rounded-xl overflow-hidden">
                  <Search className="absolute left-4 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search: cosmetics, packaging, apparel, food, supplements..."
                    className="w-full pl-12 pr-6 py-4 text-gray-900 font-medium placeholder-gray-500 focus:outline-none bg-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-pabrika-orange to-orange-600 hover:shadow-2xl hover:shadow-orange-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 whitespace-nowrap flex items-center justify-center gap-2 group transform hover:scale-105"
              >
                Search
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Quick Categories - Premium */}
            <div className="flex flex-wrap gap-3">
              <span className="text-blue-200 text-sm font-semibold">Popular categories:</span>
              {['Beauty & Cosmetics', 'Food & Beverage', 'Packaging', 'Apparel'].map((cat) => (
                <button
                  key={cat}
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border border-white border-opacity-20 hover:border-opacity-40 transform hover:scale-105"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section - Premium */}
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
                <div key={i} className="group">
                  <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 transform hover:scale-105 h-full">
                    <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors">
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

      {/* How It Works - Premium */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
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
                <div key={i} className="relative">
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-pabrika-orange hover:shadow-xl transition-all duration-300 h-full">
                    <div className="absolute -top-6 left-8 w-12 h-12 bg-pabrika-orange text-white rounded-xl flex items-center justify-center font-bold text-lg">
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

      {/* CTA Section - Premium */}
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
                className="inline-flex items-center gap-3 bg-pabrika-orange hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:shadow-lg hover:shadow-orange-300 transform hover:scale-105"
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
              <button className="inline-flex items-center gap-3 bg-white hover:bg-blue-50 text-pabrika-navy px-8 py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105">
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

      {/* Premium Footer */}
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
                <li><Link href="/manufacturers" className="hover:text-pabrika-orange transition-colors">All Suppliers</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">By Category</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">By Location</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">Blog</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-pabrika-orange transition-colors">Privacy Policy</Link></li>
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

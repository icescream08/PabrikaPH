import Link from 'next/link';
import { ArrowRight, CheckCircle, Shield, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container-max h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-pabrika-navy">PabrikaPH</div>
          <div className="flex gap-6 items-center">
            <Link href="/manufacturers" className="text-gray-700 hover:text-pabrika-navy transition-colors">
              Browse Suppliers
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pabrika-navy transition-colors">
              How it Works
            </Link>
            <Link href="#" className="text-gray-700 hover:text-pabrika-navy transition-colors">
              Login
            </Link>
            <Link href="#" className="bg-pabrika-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pabrika-navy to-blue-800 text-white py-20">
        <div className="container-max">
          <div className="max-w-2xl mb-8">
            <h1 className="text-5xl font-bold mb-6">
              Hanapin ang Supplier Na Kailangan Mo
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect with verified Philippine manufacturers, wholesalers, and suppliers. 
              Search, compare, and send inquiries—all in one trusted platform.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Search: cosmetics, packaging, apparel, food, supplements..."
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none text-gray-900"
              />
              <button
                type="submit"
                className="bg-pabrika-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium transition-colors"
              >
                Search
              </button>
            </form>

            {/* Quick Categories */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="text-blue-200 text-sm">Popular:</span>
              {['Beauty & Cosmetics', 'Food & Beverage', 'Packaging', 'Apparel'].map((cat) => (
                <button
                  key={cat}
                  className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg text-sm transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why 2,000+ Filipino Businesses Trust PabrikaPH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: '500+ Verified Manufacturers',
                desc: 'All suppliers are manually verified',
              },
              {
                icon: Users,
                title: '100% Philippines-Based',
                desc: 'Local suppliers only',
              },
              {
                icon: CheckCircle,
                title: 'Document Verified',
                desc: 'Business permits checked',
              },
              {
                icon: Zap,
                title: 'Quick Sourcing',
                desc: 'Find suppliers in minutes',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white p-8 rounded-lg shadow-sm text-center">
                  <div className="bg-orange-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-pabrika-orange" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            PabrikaPH makes supplier discovery simple. Here's how it works:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '1',
                title: 'Search & Browse',
                desc: 'Find manufacturers by category, location, and business type',
              },
              {
                num: '2',
                title: 'View Profiles',
                desc: 'Check company details, MOQ, production capacity, and certifications',
              },
              {
                num: '3',
                title: 'Send Inquiry',
                desc: 'Send a direct message or request quotation to suppliers',
              },
            ].map((step, i) => (
              <div key={i} className="p-8 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-pabrika-orange mb-4">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pabrika-navy text-white py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Are you a Business Owner?</h3>
              <p className="text-blue-100 mb-6">
                Find the right manufacturer for your business without endless networking.
              </p>
              <Link
                href="/manufacturers"
                className="inline-flex items-center gap-2 bg-pabrika-orange hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Start Sourcing <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Are you a Manufacturer?</h3>
              <p className="text-blue-100 mb-6">
                Get verified and connect with hundreds of potential clients online.
              </p>
              <button className="inline-flex items-center gap-2 bg-pabrika-orange hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors">
                List Your Company <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold mb-4">PabrikaPH</h3>
              <p className="text-sm">
                Trusted Philippine manufacturers, one platform.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Browse</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/manufacturers" className="hover:text-white transition-colors">
                    All Suppliers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    By Category
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    By Location
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 PabrikaPH. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ for Philippine businesses</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

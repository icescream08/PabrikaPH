'use client';

import Link from 'next/link';
import { MapPin, CheckCircle } from 'lucide-react';

export default function ManufacturersPage() {
  // Sample data - will be replaced with API calls
  const manufacturers = [
    {
      id: '1',
      slug: 'sample-cosmetics-ph',
      company_name: 'Sample Cosmetics PH',
      city: 'Pasig',
      province: 'Metro Manila',
      primary_category: 'Beauty & Cosmetics',
      short_description: 'Premium cosmetics manufacturer with ISO certifications',
      verification_status: 'verified',
      moq_description: 'Minimum 1,000 units',
    },
    {
      id: '2',
      slug: 'sample-packaging-co',
      company_name: 'Sample Packaging Co',
      city: 'Laguna',
      province: 'CALABARZON',
      primary_category: 'Packaging Supplies',
      short_description: 'Full range of packaging solutions for businesses',
      verification_status: 'verified',
      moq_description: 'Flexible MOQ available',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container-max py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Suppliers</h1>
          <p className="text-gray-600">
            Browse verified Philippine manufacturers and suppliers
          </p>
        </div>
      </div>

      <div className="container-max py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="bg-white p-6 rounded-lg h-fit">
            <h3 className="font-bold text-lg mb-6">Filters</h3>

            <div className="mb-6 pb-6 border-b">
              <h4 className="font-semibold text-gray-900 mb-4">Category</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="category" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">All Categories</span>
                </label>
                {['Beauty & Cosmetics', 'Packaging', 'Food & Beverage', 'Apparel'].map((cat) => (
                  <label key={cat} className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="category" className="w-4 h-4" />
                    <span className="text-sm text-gray-700">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Location</h4>
              <div className="space-y-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="radio" name="location" className="w-4 h-4" />
                  <span className="text-sm text-gray-700">All Locations</span>
                </label>
                {['Metro Manila', 'CALABARZON', 'Cebu', 'Davao'].map((loc) => (
                  <label key={loc} className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="location" className="w-4 h-4" />
                    <span className="text-sm text-gray-700">{loc}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-700">Verified Only</span>
              </label>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search Bar */}
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search manufacturers..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pabrika-orange"
              />
            </div>

            {/* Manufacturers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {manufacturers.map((mfr) => (
                <Link
                  key={mfr.id}
                  href={`/manufacturers/${mfr.slug}`}
                  className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden cursor-pointer"
                >
                  {/* Placeholder Logo */}
                  <div className="h-40 bg-gray-200 flex items-center justify-center">
                    <div className="text-gray-400">Company Logo</div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-start gap-2 mb-2">
                      <h3 className="font-bold text-gray-900 flex-1 line-clamp-2">
                        {mfr.company_name}
                      </h3>
                      {mfr.verification_status === 'verified' && (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      )}
                    </div>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {mfr.short_description}
                    </p>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        {mfr.city}, {mfr.province}
                      </div>

                      <div className="text-sm text-gray-600">
                        <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                          {mfr.primary_category}
                        </span>
                      </div>

                      <div className="text-xs text-gray-500">
                        MOQ: {mfr.moq_description}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State Help */}
            <div className="mt-12 p-8 bg-white rounded-lg text-center">
              <p className="text-gray-600 mb-4">
                More manufacturers coming soon! Be one of the first to list your company.
              </p>
              <button className="bg-pabrika-orange text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
                List Your Company
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

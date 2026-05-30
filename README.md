# PabrikaPH - Philippine B2B Manufacturer Directory

A trusted online platform connecting Filipino business owners with verified manufacturers, suppliers, and wholesalers.

**Live Demo**: Coming soon  
**Documentation**: See `/docs` folder

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17+ or 20+
- npm 9+ or pnpm 8+
- Supabase project (free at https://supabase.com)
- SendGrid account (free tier available)

### 1. Clone Repository
```bash
git clone https://github.com/icescream08/PabrikaPH.git
cd PabrikaPH
```

### 2. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` with your:
- Supabase URL and keys
- SendGrid API key
- Other configurations

### 4. Setup Supabase Database

Go to your Supabase project dashboard:

1. Go to **SQL Editor**
2. Create a new query
3. Copy and paste the SQL schema from `/docs/database-schema.sql`
4. Run the query
5. Enable **RLS** (Row Level Security) on all tables

### 5. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
PabrikaPH/
├── app/
│   ├── api/              # API routes
│   ├── (auth)/           # Authentication pages
│   ├── admin/            # Admin dashboard
│   ├── buyer/            # Buyer pages
│   ├── manufacturer/     # Manufacturer pages
│   ├── manufacturers/    # Public directory
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/           # Reusable React components
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and helpers
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
├── docs/                # Documentation
├── public/              # Static assets
├── package.json
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Features

### Phase 1 (MVP)
- ✅ Homepage with search bar
- ✅ Manufacturer directory with filters
- ✅ Manufacturer profiles
- ✅ Buyer inquiry system
- ✅ Manufacturer registration
- ✅ Admin approval workflow
- ✅ Verification badges
- ✅ Email notifications
- ✅ User authentication

### Phase 2 (Coming Soon)
- [ ] Messaging system
- [ ] RFQ (Request for Quotation)
- [ ] Reviews and ratings
- [ ] Analytics dashboard
- [ ] Advanced search

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **File Storage**: Supabase Storage
- **Email**: SendGrid
- **Deployment**: Vercel

## 📊 Database Schema

The project includes 12 core tables:

1. **users** - Buyers, manufacturers, admins
2. **manufacturers** - Company profiles
3. **products** - Items offered
4. **inquiries** - Buyer requests
5. **rfqs** - Request for quotations
6. **rfq_responses** - Quotes
7. **verification_documents** - Business permits
8. **manufacturer_certifications** - Certifications
9. **saved_suppliers** - Bookmarks
10. **conversations** - Chat threads
11. **messages** - Chat messages
12. **categories** - Product categories

See `/docs/database-schema.sql` for full schema.

## 🔐 Authentication

The app uses Supabase Auth for user management:

1. Email/Password signup and login
2. Email verification required
3. Password reset functionality
4. Role-based access control (buyer, manufacturer, admin)

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Deploy to production
vercel --prod
```

See `/docs/deployment.md` for detailed instructions.

## 📖 Documentation

- [Setup Guide](./docs/setup.md)
- [API Routes](./docs/api-routes.md)
- [Database Schema](./docs/database-schema.sql)
- [Deployment Guide](./docs/deployment.md)
- [Component Guide](./docs/components.md)

## 🤝 Contributing

Contributions are welcome! Please:

1. Create a feature branch
2. Commit your changes
3. Push to GitHub
4. Open a pull request

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For issues and questions:
- Open a GitHub issue
- Check existing documentation
- Email: support@pabrika.ph (coming soon)

## 🎯 Roadmap

- [x] MVP platform setup
- [ ] User onboarding flow
- [ ] Email verification system
- [ ] Admin approval workflow
- [ ] Messaging system
- [ ] Analytics dashboard
- [ ] Mobile app
- [ ] Payment integration
- [ ] Regional expansion

## 👨‍💻 Development

### Available Scripts

```bash
# Development
npm run dev

# Build
npm run build

# Production
npm run start

# Type checking
npm run type-check

# Linting
npm run lint

# Code formatting
npm run format
```

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Supabase](https://supabase.com/docs)
- [TypeScript](https://www.typescriptlang.org/docs)

---

**Made with ❤️ for Philippine businesses**

Started: May 2026  
Status: 🚀 Active Development

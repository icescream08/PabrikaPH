# Setup Guide - PabrikaPH

## Prerequisites

- Node.js 18.17+ or 20+
- npm 9+ or pnpm 8+
- Supabase account (free at https://supabase.com)
- SendGrid account (optional, for email)

## Step 1: Clone the Repository

```bash
git clone https://github.com/icescream08/PabrikaPH.git
cd PabrikaPH
```

## Step 2: Install Dependencies

```bash
npm install
# or if using pnpm
pnpm install
```

## Step 3: Setup Supabase

### Create a Supabase Project

1. Go to https://supabase.com
2. Click "New Project"
3. Fill in project details
4. Wait for database to be created

### Get Your Keys

1. Go to **Settings** → **API**
2. Copy your project URL and anon key
3. Save these for the next step

### Setup Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire content from `/docs/database-schema.sql`
4. Paste into the SQL editor
5. Click "Run"

### Enable Row Level Security (RLS)

For each table, you need to enable RLS:

1. Go to **Authentication** → **Policies**
2. For each table, enable RLS
3. Create basic policies (see documentation for details)

### Create Storage Buckets

1. Go to **Storage**
2. Create a new bucket called `documents`
3. Create a new bucket called `logos`
4. Create a new bucket called `products`
5. Make sure buckets are public (for downloads)

## Step 4: Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```bash
# Supabase (from Step 3)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# SendGrid (optional)
SENDGRID_API_KEY=your_sendgrid_key

# Local development
NEXT_PUBLIC_API_URL=http://localhost:3000
NODE_ENV=development
```

## Step 5: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You should see the PabrikaPH homepage!

## Step 6: Test the Application

### Homepage
- Visit the homepage
- Verify all sections render correctly
- Test search bar

### Manufacturers Directory
- Click "Browse Suppliers"
- Verify manufacturer grid displays
- Test filters

### API Health Check
- Visit http://localhost:3000/api/health
- Should return JSON with status: "ok"

## Troubleshooting

### Port 3000 Already in Use

```bash
# Use a different port
npm run dev -- -p 3001
```

### Supabase Connection Issues

1. Double-check your API keys in `.env.local`
2. Verify your Supabase project is running
3. Check internet connection

### Module Not Found Errors

```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
```

### CSS Not Loading

- Tailwind CSS is configured in `tailwind.config.ts`
- Make sure you have `globals.css` imported in `app/layout.tsx`
- Restart dev server

## Next Steps

1. **Read the Full Documentation**
   - Check the main `/docs` folder for detailed guides

2. **Set Up Authentication**
   - See `/docs/auth-setup.md`

3. **Build Database Queries**
   - See `/docs/database-queries.md`

4. **Create API Routes**
   - See `/docs/api-routes.md`

5. **Deploy to Vercel**
   - See `/docs/deployment.md`

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Type check
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

## Getting Help

- Check existing GitHub issues
- Read documentation in `/docs`
- Review code comments
- Ask questions in GitHub discussions

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [React Documentation](https://react.dev)

Good luck! 🚀

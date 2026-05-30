# Deployment Guide - PabrikaPH

## Push to GitHub

### Prerequisites

- GitHub account (https://github.com)
- Git installed on your machine
- Access to your existing repository: https://github.com/icescream08/PabrikaPH

### Step 1: Create GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name: "PabrikaPH"
4. Select scopes:
   - ☑ repo (full control of private repositories)
   - ☑ workflow (update GitHub Action workflows)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)

### Step 2: Add Remote and Push

```bash
cd /path/to/PabrikaPH

# Add remote (replace with your token)
git remote add origin https://YOUR_TOKEN@github.com/icescream08/PabrikaPH.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Alternative using SSH:**

If you have SSH keys set up:

```bash
git remote add origin git@github.com:icescream08/PabrikaPH.git
git branch -M main
git push -u origin main
```

### Step 3: Verify on GitHub

1. Go to https://github.com/icescream08/PabrikaPH
2. You should see all files uploaded
3. Check that README.md displays correctly

## Deploy to Vercel

### Step 1: Create Vercel Account

1. Go to https://vercel.com
2. Sign up with GitHub account
3. Authorize Vercel to access your repositories

### Step 2: Import Project to Vercel

1. Go to https://vercel.com/dashboard
2. Click "Add New..." → "Project"
3. Search for "PabrikaPH"
4. Click "Import"

### Step 3: Configure Environment Variables

In the Vercel import dialog:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
NEXT_PUBLIC_API_URL=https://pabrika-ph.vercel.app
SENDGRID_API_KEY=your_sendgrid_key (optional)
```

### Step 4: Deploy

1. Click "Deploy"
2. Vercel will build and deploy automatically
3. You'll get a live URL: https://pabrika-ph.vercel.app

### Step 5: Set Custom Domain

1. In Vercel project settings → Domains
2. Add custom domain: pabrika.ph
3. Follow DNS configuration instructions
4. Update DNS records at your domain registrar

## Continuous Deployment

Once set up, every push to the `main` branch will automatically:
1. Trigger a GitHub Actions workflow (if configured)
2. Deploy to Vercel automatically
3. Run tests and checks

## Update from Local

After you make changes locally:

```bash
# Commit changes
git add .
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Vercel will automatically deploy!
```

## Troubleshooting

### Build Fails on Vercel

Check the deployment logs:
1. Go to Vercel dashboard
2. Click on the failed deployment
3. Click "View Build Logs"
4. Look for error messages

Common issues:
- Missing environment variables
- TypeScript errors
- Missing dependencies

### Connection to Supabase Fails

- Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
- Verify `NEXT_PUBLIC_SUPABASE_ANON_KEY` is correct
- Check that your Supabase project is running
- Check firewall/CORS settings

### Domain Not Working

- Check DNS settings propagated
- Wait 24-48 hours for DNS to propagate
- Verify CNAME records are correct

## Monitoring

### Vercel Analytics

1. Go to Vercel project → Analytics
2. Track page views, response times, etc.

### Supabase Monitoring

1. Go to your Supabase dashboard
2. Check database performance
3. Monitor API usage

## Backup Strategy

### Database Backups

Supabase automatically backs up your database, but you can:

1. Go to Supabase → Backups
2. Download backups regularly
3. Store in secure location

### Code Backups

GitHub is your backup:
- All commits are automatically stored
- You can restore any previous version
- Create releases for major versions

## Security Checklist

- ☑ Environment variables not in code
- ☑ Sensitive keys only in Vercel secrets
- ☑ Database Row Level Security (RLS) enabled
- ☑ Supabase API keys limited to necessary scopes
- ☑ HTTPS enabled on custom domain
- ☑ Regular backups

## Next Steps

1. **Test the deployment**
   - Visit your Vercel URL
   - Test all features
   - Check console for errors

2. **Monitor performance**
   - Use Vercel Analytics
   - Set up error tracking (Sentry)
   - Monitor database queries

3. **Plan updates**
   - Set up development branch
   - Create pull requests for features
   - Review before merging to main

4. **Scale up**
   - Upgrade Vercel plan if needed
   - Upgrade Supabase if needed
   - Optimize images and assets

## Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/app/building-your-application/deploying)
- [Supabase Hosting](https://supabase.com/docs/guides/cli/managing-postgres)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains/add-a-domain)

## Support

For deployment issues:
- Check Vercel deployment logs
- Check GitHub Actions logs
- Review Supabase status page
- Check application console errors

Good luck! 🚀

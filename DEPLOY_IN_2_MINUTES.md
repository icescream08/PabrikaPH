# ⚡ ONE-COMMAND DEPLOYMENT

Your PabrikaPH is built. Here's how to deploy in 2 minutes:

## 🔑 YOU NEED:
1. GitHub account (free at github.com)
2. Vercel account (free at vercel.com)
3. A GitHub Personal Access Token

## 🚀 DEPLOY NOW

### **Get GitHub Token (2 minutes)**

1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Name it: "PabrikaPH"
4. Select scopes:
   - ☑ repo (full control)
   - ☑ workflow (GitHub Actions)
5. Click "Generate token"
6. **COPY THE TOKEN** (won't see it again!)

### **Run Deployment Script**

Replace `YOUR_GITHUB_TOKEN` with your actual token:

```bash
#!/bin/bash
# Copy project
cp -r /tmp/pabrika-ph ~/PabrikaPH
cd ~/PabrikaPH

# Push to GitHub
git remote add origin https://YOUR_GITHUB_TOKEN@github.com/icescream08/PabrikaPH.git
git branch -M main
git push -u origin main

echo "✅ Pushed to GitHub!"
echo "Now visit: https://vercel.com/new/clone?repository-url=https://github.com/icescream08/PabrikaPH"
```

### **Deploy to Vercel (1 minute)**

1. Click this link: https://vercel.com/new/clone?repository-url=https://github.com/icescream08/PabrikaPH
2. Click "Continue"
3. Click "Deploy"
4. Wait 2-3 minutes
5. **You'll get a live URL!**

---

## 📋 COPY-PASTE VERSION

**Replace `YOUR_GITHUB_TOKEN` with your actual token from GitHub:**

```bash
cp -r /tmp/pabrika-ph ~/PabrikaPH && \
cd ~/PabrikaPH && \
git remote add origin https://YOUR_GITHUB_TOKEN@github.com/icescream08/PabrikaPH.git && \
git branch -M main && \
git push -u origin main && \
echo "✅ Done! Visit: https://vercel.com/new/clone?repository-url=https://github.com/icescream08/PabrikaPH"
```

---

## 📊 WHAT HAPPENS

| Step | Time | What |
|------|------|------|
| 1. Copy project | 10 sec | Copies to ~/PabrikaPH |
| 2. Push to GitHub | 30 sec | Uploads code |
| 3. Click Vercel link | 10 sec | Opens deployment page |
| 4. Deploy button | 2 min | Builds & deploys |
| **Total** | **3 min** | **Live site!** |

---

## ✅ YOUR LIVE SITE

Once deployment completes, you'll see:

```
Deployment successful!

Your site: https://pabrika-ph.vercel.app
```

Open that URL and your PabrikaPH is LIVE! 🎉

---

## 🆘 NEED HELP?

**Token not working?**
- Make sure you have the full token (it's long)
- Make sure there are no extra spaces
- Create a new one if needed

**GitHub push fails?**
- Check your token is correct
- Make sure you're in the ~/PabrikaPH directory
- Try: `git config --list` to see current settings

**Vercel deployment fails?**
- Check you're signed in with GitHub
- Check the build logs in Vercel dashboard
- Try deploying again

---

## 🎯 THAT'S IT!

Three steps:
1. Get token (2 min)
2. Run command (1 min)
3. Click deploy (1 min)

**You'll have a live website in 4 minutes!**

---

**Ready? Get your GitHub token and run the command above! 🚀**

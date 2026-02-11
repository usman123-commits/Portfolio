What must be configured in Vercel dashboard
Environment variable:
NEXT_PUBLIC_SITE_URL — Set to your production domain (e.g., https://yourdomain.com)
Optional (for better SEO):
Add Google Search Console verification code in app/layout.tsx (line 62)
Add Yandex verification code if needed (line 63)
Create and add Open Graph image at /public/og-image.jpg (1200x630px recommended)
Environment variables to set
Required:
NEXT_PUBLIC_SITE_URL — Your production site URL (e.g., https://yourportfolio.com)
Optional (for enhanced SEO):
Add verification codes in app/layout.tsx metadata.verification section
Next steps
Update metadata in app/layout.tsx:
Replace "Portfolio Owner" with your name
Update description with your actual portfolio description
Add your social media URLs to the Person JSON-LD schema if desired
Create Open Graph image:
Add /public/og-image.jpg (1200x630px) for social sharing
Create projects page (optional):
The sitemap references /projects — create app/projects/page.tsx if you want this route
Deploy to Vercel:
Push to your repository
Connect to Vercel
Set NEXT_PUBLIC_SITE_URL environment variable
Deploy
The project is production-ready and optimized for SEO and Vercel deployment.
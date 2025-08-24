# The Verse Web Platform (Refactored)

Refactored and modernized version of the company’s web platform.  
Built with **Next.js**, **NeonDB (PostgreSQL)**, **Prisma**, **Shadcn/UI**, and **Framer Motion**, featuring improved performance, maintainability, and a cleaner architecture.  
Deployed on **DreamHost VPS**.

---

##  Tech Stack

- [Next.js](https://nextjs.org/) – React framework for frontend and server-side rendering
- [NeonDB (PostgreSQL)](https://neon.tech/) – Cloud-hosted Postgres database
- [Prisma](https://www.prisma.io/) – ORM and schema management
- [Resend](https://resend.com/) – Email service (subscriptions & contact forms)
- [Shadcn/UI](https://ui.shadcn.com/) – Component library for UI (buttons, forms, etc.)
- [Framer Motion](https://www.framer.com/motion/) – Animations and transitions
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS
- [DreamHost VPS](https://www.dreamhost.com/) – Deployment platform



---

## Getting Started 

1. Clone the Repository
2. Navigate into the Project < cd to the project >
3. Install Dependencies < npm install >
4. Configure Environment Variables < Create a .env.local which contains > 
DATABASE_URL=postgresql://<user>:<password>@<host>:5432/<database>?sslmode=require&channel_binding=require
RESEND_API_KEY=your-resend-api-key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
EMAIL_FROM=noreply@company.com
EMAIL_TO=team@company.com

5. npm run dev

## Open http://localhost:3000 in your browser to see the app.
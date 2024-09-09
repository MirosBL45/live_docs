import './globals.css';
import { Inter as FontSans } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Provider from './Provider';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'LiveDocs by Jović',
  description: 'Your go-to collaborative editor with Next.js and TypeScript',
  keywords: 'HTML, CSS, SCSS, Sass, JavaScript, programming, ReactJS, NextJS, Next.js, React, Vue.js, MongoDB, Mongoose, SWR, Miroslav Jovic, Miroslav Jović, Frontend Developer, Web Development, Portfolio, Blog, Dashboard, Frontend Design, User Interface (UI), User Experience (UX), Responsive Design, Web Applications, Single Page Applications (SPA), Component-Based Development, Version Control (Git), API Integration, Progressive Web Apps (PWA), Performance Optimization, Frontend Frameworks, Frontend Libraries, Frontend Tools, Web Development Tools, Cross-Browser Compatibility, Mobile-First Development, Accessibility (A11y), SEO Optimization, Performance Monitoring, Debugging Techniques, Code Refactoring, Agile Development, Scrum Methodology, Git, GitHub, TailwindCSS, ViteJS, ThreeJS, Framer Motion, React Icons, ReactStrap, MaterialUI, Styled-components, Bootstrap, TypeScript, Firebase, Hygraph (GraphQL), Bcryptjs, Postman, Strapi, NextAuth, Figma, Photoshop, Premiere pro, Modern JavaScript Frameworks, UI/UX Design Principles, CSS Frameworks, CSS Preprocessors, Frontend Build Tools, Frontend Testing, Browser Developer Tools, Responsive Web Design, Animation Effects, Code Optimization Techniques, Web Performance Metrics, Continuous Integration (CI), Deployment Strategies, Frontend Architecture, State Management,  Functional Programming in JavaScript, Asynchronous JavaScript (Promises, Async/Await), Frontend Security Best Practices, Web Accessibility Standards, Browser Compatibility Testing, Frontend Performance Optimization Techniques, Code Versioning, WebSockets, Server-Side Rendering (SSR), Static Site Generation (SSG), Progressive Enhancement, Internationalization (i18n) and Localization',
  creator: 'Miroslav Jović',
  category: 'technology',
  publisher: 'Miroslav Jović',
  applicationName: 'Miroslav Jović',
  authors: [{ name: 'Miroslav Jović' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: '#3371FF', fontSize: '16px' },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        {/* <head /> */}
        <body
          className={cn(
            'min-h-screen font-sans antialiased',
            fontSans.variable
          )}
        >
          <Provider>
            {children}
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}

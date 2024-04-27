import React, { useEffect } from "react";

// src/pages/index.tsx
import Dashboard from "@/components/sections/Dashboard/Dashboard";
import Head from "next/head";
import Header from "@/components/layout/Header";
import RecentPlays from "@/components/sections/RecentPlays/RecentPlays";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Gamba v2 Casino Platform - Next.js</title>
        <meta name="title" content="Gamba v2 Casino Platform - Next.js" />
        <meta
          name="description"
          content="A fair, simple, and decentralized casino on Solana."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gamba-v2-nextjs.vercel.app/" />
        <meta
          property="og:title"
          content="Gamba v2 Casino Platform - Next.js"
        />
        <meta
          property="og:description"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="og:image"
          content="https://gamba-v2-nextjs.vercel.app/logo.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://gamba-v2-nextjs.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Gamba v2 Casino Platform - Next.js"
        />
        <meta
          property="twitter:description"
          content="A fair, simple, and decentralized casino on Solana."
        />
        <meta
          property="twitter:image"
          content="https://gamba-v2-nextjs.vercel.app/logo.svg"
        />
      </Head>
      <Header />
      <div className="relative mx-auto flex flex-col gap-5 mt-20 pb-10 px-2.5 transition-all duration-250 ease-in-out sm:px-5 sm:pt-5 md:max-w-6xl">
        <Dashboard />
        <h2 className="text-2xl font-bold text-center">Recent Plays</h2>
        <RecentPlays />
      </div>
    </>
  );
}

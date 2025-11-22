'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Header } from './components/header';
import { Hero } from './components/hero';
import { Recommendation } from './components/recommendation';
import { VSL } from './components/vsl';
import { Benefits } from './components/benefits';
import { WhatYouGet } from './components/what-you-get';
import { Testimonials } from './components/testimonials';
import { Bonuses } from './components/bonuses';
import { FAQ } from './components/faq';
import { CTA } from './components/cta';
import { SocialProofToast } from './components/social-proof-toast';

function SalesPageContent() {
  const searchParams = useSearchParams();
  const recommendation = searchParams.get('recommendation');

  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="container max-w-5xl mx-auto px-4 py-8 space-y-12 md:space-y-20">
        <Hero />
        {recommendation && <Recommendation recommendation={recommendation} />}
        <VSL />
        <Benefits />
        <WhatYouGet />
        <Testimonials />
        <Bonuses />
        <FAQ />
        <CTA />
      </main>
      <SocialProofToast />
    </div>
  );
}

export default function SalesPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SalesPageContent />
    </Suspense>
  );
}

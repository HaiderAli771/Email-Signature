"use client"
import Head from 'next/head';
import Header from './Header/page'
import Hero from './Hero/page'
import Feature from './Feature/page'
import TemplateSection from './Template-Section/page'
import TestimonialSection from './Testimonial-Section/page'
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Signatures</title>
      </Head>

      <Header />

      <Hero />

      <Feature />

      <TemplateSection />

      <TestimonialSection />
    </div>
  );
}

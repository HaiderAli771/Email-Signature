"use client"
import Head from 'next/head';
import { FaSignature, FaLock, FaUsers, FaFileAlt } from 'react-icons/fa';
import Header from './Header/page'
import Link from 'next/link';
import Editor from './Editor/page'
import Hero from './Hero/page'
import Feature from './Feature/page'
import TemplateSection from './Template-Section/page'
import TestimonialSection from './Testimonial-Section/page'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Signature Clone</title>
        <meta name="description" content="Signature-like front page" />
      </Head>

      <Header />

      <Hero />

      <Feature />

      <TemplateSection />

      <TestimonialSection />
    </div>
  );
}

import Head from "next/head";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const inter = Inter({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className={`${inter.className} min-h-screen bg-slate-950 text-white`}>
      <Head>
        <title>Dang Van Mich | Backend Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio website for Dang Van Mich, a backend developer focused on NestJS, scalable APIs, and modern backend systems."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main className="mx-auto max-w-7xl">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

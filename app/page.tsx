import React, { Suspense } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AzureShowcase } from "@/components/AzureShowcase";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { CertificationsAndBlog } from "@/components/CertificationsAndBlog";
import { Footer } from "@/components/Footer";
import { ClientLoadingWrapper } from "@/components/ClientLoadingWrapper";

// Server-side skeleton component
const SectionSkeleton: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center space-y-4">
      <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
      <p className="text-gray-500 dark:text-gray-400">Loading section...</p>
    </div>
  </div>
);

// Server Component - This runs on the server
export default async function HomePage() {
  // You can add server-side data fetching here if needed
  // const data = await fetchSomeData();

  return (
    <ThemeProvider>
      <ClientLoadingWrapper>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation />

          <main className="relative">
            <Hero />

            <Suspense fallback={<SectionSkeleton />}>
              <section id="azure">
                <AzureShowcase />
              </section>
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <section id="skills">
                <Skills />
              </section>
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <section id="projects">
                <Projects />
              </section>
            </Suspense>

            <Suspense fallback={<SectionSkeleton />}>
              <section id="experience">
                <Experience />
              </section>
            </Suspense>

            {/* <Suspense fallback={<SectionSkeleton />}>
              <section id="certifications">
                <CertificationsAndBlog />
              </section>
            </Suspense> */}

            <Suspense fallback={<SectionSkeleton />}>
              <footer id="contact">
                <Footer />
              </footer>
            </Suspense>
          </main>
        </div>
      </ClientLoadingWrapper>
    </ThemeProvider>
  );
}

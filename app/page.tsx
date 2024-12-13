import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import AboutSection from "@/components/about-section"
import ContentCard from "@/components/content-card"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />
      <StatsSection />
      <AboutSection />
      
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8">Músicas Autorais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ContentCard
            title="MEMESTREL | SULJAYPROD"
            imageUrl="/placeholder.svg?height=400&width=400"
            type="video"
          />
          <ContentCard
            title="PALAMANSA REMIX"
            imageUrl="/placeholder.svg?height=400&width=400"
            type="video"
          />
          <ContentCard
            title="MC MAWII E ZÉ"
            imageUrl="/placeholder.svg?height=400&width=400"
            type="video"
          />
          <ContentCard
            title="SIMPLE GUY - SULJAY PROD"
            imageUrl="/placeholder.svg?height=400&width=400"
            type="video"
          />
        </div>
      </section>

      <Footer />
    </main>
  )
}


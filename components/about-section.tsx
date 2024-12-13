import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">Sobre mim</h2>
          <p className="text-gray-300 mb-6">
            Hugo Drop é um artista versátil e inovador, misturando gêneros e criando experiências musicais únicas. Com uma paixão pela música eletrônica e uma habilidade natural para cativar o público, Hugo tem se destacado na cena musical.
          </p>
          <Button className="bg-[#ADFF2F] text-black hover:bg-[#9AE025] font-bold">
            Saiba mais
          </Button>
        </div>
        <div className="relative">
          <div className="w-full h-80 relative">
            <Image
              src="/placeholder.svg?height=400&width=300"
              alt="Hugo Drop"
              layout="fill"
              objectFit="cover"
              className="rounded-lg neon-border"
            />
          </div>
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#ADFF2F] rounded-full animate-spin-slow" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-[#ADFF2F] rounded-full animate-spin-slow" style={{ animationDuration: '15s' }} />
        </div>
      </div>
    </section>
  )
}


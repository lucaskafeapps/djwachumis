import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white">
          É <span className="text-[#ADFF2F]">HUGO DROP</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300">Senhoras e senhores!</p>
        <Button className="bg-[#ADFF2F] text-black hover:bg-[#9AE025] font-bold">
          Explore Now
        </Button>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#ADFF2F] rounded-full filter blur-3xl opacity-20 animate-float" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#ADFF2F] rounded-full filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
    </div>
  )
}


import { Play } from 'lucide-react'
import Image from "next/image"

interface ContentCardProps {
  title: string
  imageUrl: string
  type: 'video' | 'photo'
}

export default function ContentCard({ title, imageUrl, type }: ContentCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition-all z-10" />
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={400}
        className="object-cover aspect-square"
      />
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        {type === 'video' && (
          <Play className="w-12 h-12 text-[#ADFF2F]" />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
        <h3 className="text-white font-bold text-lg">{title}</h3>
      </div>
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-50" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#ADFF2F"
            strokeWidth="0.5"
            className="animate-[spin_10s_linear_infinite]"
          />
        </svg>
      </div>
    </div>
  )
}


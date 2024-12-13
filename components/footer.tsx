import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-[#ADFF2F]">HUGO DROP</h2>
          <p className="text-gray-400">© 2023 All rights reserved</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-[#ADFF2F]">
            <Facebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ADFF2F]">
            <Twitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#ADFF2F]">
            <Instagram />
          </a>
        </div>
      </div>
    </footer>
  )
}


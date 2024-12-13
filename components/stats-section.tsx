export default function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-16 px-4">
      <div className="text-center">
        <p className="text-4xl font-bold text-[#ADFF2F]">1,965+</p>
        <p className="text-gray-400 mt-2">Shows Realizados</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-[#ADFF2F]">29,172+</p>
        <p className="text-gray-400 mt-2">Seguidores</p>
      </div>
      <div className="text-center">
        <p className="text-4xl font-bold text-[#ADFF2F]">150,852+</p>
        <p className="text-gray-400 mt-2">Visualizações</p>
      </div>
    </div>
  )
}


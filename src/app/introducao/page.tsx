export default function Introducao() {
  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      <div className="w-full max-w-4xl">
        <h2 className="font-bold text-5xl text-white mb-8 text-center">
          Sobre a Madan
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            A Madan é uma empresa especializada em móveis de alta qualidade para
            sala de jantar, com mais de duas décadas de experiência no mercado.
          </p>

          <p>
            Nossos produtos combinam design moderno com durabilidade e conforto,
            atendendo às necessidades de famílias brasileiras que buscam
            qualidade.
          </p>

          <p>
            Oferecemos uma ampla variedade de conjuntos, desde linhas clássicas
            até contemporâneas, com preços acessíveis e parcelamento facilitado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-[#1E1E26] p-6 rounded-lg border border-[#BF925A]/20">
              <h3 className="text-[#BF925A] font-bold text-xl mb-2">
                Qualidade
              </h3>
              <p className="text-sm">
                Móveis com acabamento premium e materiais resistentes
              </p>
            </div>

            <div className="bg-[#1E1E26] p-6 rounded-lg border border-[#BF925A]/20">
              <h3 className="text-[#BF925A] font-bold text-xl mb-2">Design</h3>
              <p className="text-sm">
                Peças com design moderno que combinam com qualquer ambiente
              </p>
            </div>

            <div className="bg-[#1E1E26] p-6 rounded-lg border border-[#BF925A]/20">
              <h3 className="text-[#BF925A] font-bold text-xl mb-2">Preço</h3>
              <p className="text-sm">
                Valores competitivos com parcelamento em até 12x
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

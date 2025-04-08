import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
        
        
         {/* Added Image Above Main Offer Section */}
         <div className="relative w-full h-40 md:h-100 flex items-center justify-center flex-col">  
         <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10"></div>
          <Image src="/images/logo-background.JPG" alt="Globe background" fill className="object-cover opacity-40" />
        </div>
         <p className="text-sm md:text-base mb-10 z-10">
            No BRASIL sempre vai valer a pena vender Produtos <span className="font-bold text-red-400">IMPORTADOS</span>. Ganhe sua liberdade financeira — Trabalhe pra você e tenha a vida que sempre quis <span className="font-bold">lucrando alto</span>!
          </p> 
          <p className="mb-4 z-10">
            O <span className="text-red-400 font-bold">acompanhamento individual</span> que você precisa para{" "}
            <span className="text-red-400 font-bold">LUCRAR mais de $10.000,00 reais</span> todos os meses
          </p>
      </div>


      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black z-10"></div>
          <Image src="/images/globe-background.JPG" alt="Globe background" fill className="object-cover opacity-40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
        
         

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-red-400">COMO VIVER DE</span> PRODUTOS IMPORTADOS
          </h1>

          <button className="bg-red-400 hover:bg-red-400 text-white font-bold py-3 px-6 rounded-md text-lg transition-all">
           <Link href="https://www.instagram.com/kaio_tsunokawa/" target="_blank"> 
           QUERO COMEÇA HOJE A VENDER
           </Link>
          </button>
        </div>
      </section>  

      {/* Main Offer Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">EU VOU TE AJUDAR A CONSTRUIR UMA OPERAÇÃO SIMPLES E</h2>
          <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-8">FATURAR MÚLTIPLOS 6 E 7 DÍGITOS.</h2>

          <p className="mb-6 text-sm md:text-base">
            Eu vou pegar na sua mão e te guiar na prática para que você c onsiga vender{" "}
            <span className="font-bold">COMO VENDER</span> de forma eficiente. Com a{" "}
            <span className="font-bold">COMO COMPRAR COM MAIOR MARGEM</span>, você irá aprender:
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-16">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-40 relative">
                <Image src="/images/vendas-globais.png" alt="Vendas Globais" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  <span className="text-red-400">FATURANDO MAIS DE</span> <span className="text-white">$1.000,00 POR DIA!</span>
                </h3> 
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-40 relative">
                <Image src="/images/nicho-white-black.png" alt="Nicho White & Black" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  <span className="text-white">COMO</span> <span className="text-white">IMPORTAR E</span>{" "}
                  <span className="text-white">COMO</span> <span className="text-red-400">COMPRAR</span>{" "}
                </h3>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-40 relative">
                <Image src="/images/ofertas-validadas.png" alt="Ofertas Validadas" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  <span className="text-white">LISTA DE</span> <span className="text-red-400">FORNECEDORES</span>
                </h3>
              </div>
            </div>

            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="h-40 relative">
                <Image src="/images/moeda-forte.png" alt="Lucrando em Moeda Forte" fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">
                  <span className="text-white">comprando com</span>{" "}
                  <span className="text-red-400">$3.000,00 de desconto </span>
                </h3>
              </div>
            </div>
          </div>

          {/* For Whom Section */}
          <h2 className="text-3xl font-bold mb-8">
            <span className="text-red-400">PARA QUEM</span> eu indico este treinamento?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-900 rounded-lg p-6 text-left">
              <div className="bg-zinc-950 inline-block px-3 py-1 rounded-full text-xs mb-4">PARA QUEM</div>
              <h3 className="text-xl font-bold mb-3">Quer uma renda forte principal ou renda extra</h3>
              <p className="text-sm text-gray-400">
                Se você já fatura e quer subir um patamar, esse treinamento vai te mostrar como escalar sua operação
                para múltiplos 6 e 7 dígitos. É IDEAL para você.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-left">
              <div className="bg-zinc-950 inline-block px-3 py-1 rounded-full text-xs mb-4">PARA QUEM</div>
              <h3 className="text-xl font-bold mb-3">Quer ganhar mais de $1.000,00 por dia e não depender do CLT, e está buscando sua liberdade financeira</h3>
              <p className="text-sm text-gray-400">
                O real não para de desvalorizar nas suas costas e você quer mais da certeza e ganhar em moeda forte.
                Esse treinamento é IDEAL para você.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg p-6 text-left">
              <div className="bg-zinc-950 inline-block px-3 py-1 rounded-full text-xs mb-4">PARA QUEM</div>
              <h3 className="text-xl font-bold mb-3">Está começando empreender e não sabe de como, e quer ter boa margem de lucro por venda</h3>
              <p className="text-sm text-gray-400">
                Se diferente dos outros, você ainda está no começo do digital, fique tranquilo. Vou te ensinar do zero
                como aprender do básico à ESCALA.
              </p>
            </div>
          </div>

          <button className="bg-red-400 hover:bg-red-400 text-white font-bold py-3 px-12 rounded-md text-lg transition-all mb-16">
            EU QUERO!
          </button>
        </div>
      </section>

      {/* Recap Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 z-10"></div>
          <Image src="/images/recap-background.png" alt="Recap background" fill className="object-cover opacity-30" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Recapitulando para
            <br />
            você entender...
          </h2>
 
          <p className="mb-8">Você vai receber QUATRO bônus:</p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gray-900/80 rounded-lg p-4">
              <div className="bg-slate-400 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                <span className="text-black text-2xl font-bold">📱</span>
              </div>
              <p className="text-sm font-bold">Como fazer criativos que convertem de forma fácil</p>
            </div>

            <div className="bg-gray-900/80 rounded-lg p-4">
              <div className="bg-slate-400 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                <span className="text-black text-2xl font-bold">📃</span>
              </div>
              <p className="text-sm font-bold">lista de fornecedores reais de segurança</p>
            </div>

            <div className="bg-gray-900/80 rounded-lg p-4">
              <div className="bg-slate-400 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                <span className="text-black text-2xl font-bold">📘</span>
              </div>
              <p className="text-sm font-bold">Acesso ao meu TREINAMENTO vivendo de produtos IMPORTADOS</p>
            </div>

            <div className="bg-gray-900/80 rounded-lg p-4">
              <div className="bg-slate j-400 w-12 h-12 flex items-center justify-center rounded-lg mx-auto mb-4">
                <span className="text-black text-2xl font-bold">💰</span>
              </div>
              <p className="text-sm font-bold">Como vender sem precisar de caixa</p>
            </div>
          </div>

          <p className="mb-6 text-sm">Eu vou pegar na sua mão pra te ensinar e te dar acesso a</p>

          <div className="flex flex-col items-start text-left max-w-md mx-auto mb-8">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-red-400 w-5 h-5" />
              <span>Como faço para vender todos os dias</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-red-400 w-5 h-5" />
              <span>como comprar e maximizar o lucro</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="text-red-400 w-5 h-5" />
              <span>Como escalar sua operação</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-red-400 w-5 h-5" />
              <span>Acesso pessoal a mim para tirar suas dúvidas em tempo real</span>
            </div>
          </div>

          <button className="bg-red-400 hover:bg-red-400 text-white font-bold py-3 px-12 rounded-md text-lg transition-all mb-8">
            EU QUERO!
          </button>

          <p className="text-sm text-gray-500">@oSouzzaoficial - Todos os direitos reservados 2021/25</p>
        </div>
      </section>
    </main>
  )
}

import Link from "next/link"
import Image from "next/image"
import { Play, ShoppingCart, Star, Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Impactful Header */}
      <header className="bg-gradient-to-r from-blue-600 to-teal-500 py-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Domine as Estratégias que Transformarão Sua Carreira
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            O curso completo que já ajudou mais de 10.000 alunos a alcançarem resultados extraordinários
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90">
            Quero Começar Agora
          </Button>
        </div>
      </header>

      {/* First VSL Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Descubra Como Este Curso Pode Mudar Sua Vida</h2>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-black shadow-xl">
            <div className="aspect-video relative flex items-center justify-center bg-gray-800">
              <Button
                variant="outline"
                size="icon"
                className="absolute h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm"
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
              <Image
                src="/placeholder.svg?height=720&width=1280&text=Vídeo de Apresentação"
                alt="Vídeo de apresentação do curso"
                width={1280}
                height={720}
                className="h-full w-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Presentation Image */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-10 text-3xl font-bold md:text-4xl">Conheça Nosso Curso Completo</h2>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
            <Image
              src="/placeholder.svg?height=800&width=1600&text=Apresentação do Curso"
              alt="Apresentação do curso"
              width={1600}
              height={800}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Product Catalog - Reduced Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">O Que Você Vai Aprender</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Conteúdo exclusivo desenvolvido por especialistas para garantir seu sucesso
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Fundamentos Essenciais",
                description: "Domine os conceitos básicos que servirão como base para todo seu aprendizado",
                features: ["Conceitos fundamentais", "Exercícios práticos", "Suporte personalizado"],
              },
              {
                title: "Estratégias Avançadas",
                description: "Aprenda técnicas exclusivas que farão você se destacar no mercado",
                features: ["Métodos comprovados", "Estudos de caso reais", "Ferramentas exclusivas"],
              },
              {
                title: "Implementação Prática",
                description: "Coloque todo o conhecimento em prática com projetos do mundo real",
                features: ["Projetos guiados", "Feedback detalhado", "Certificação reconhecida"],
              },
            ].map((module, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-blue-100 flex items-center justify-center">
                  <Image
                    src={`/placeholder.svg?height=240&width=400&text=Módulo ${index + 1}`}
                    alt={`Módulo ${index + 1}`}
                    width={400}
                    height={240}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{module.title}</h3>
                  <p className="mb-4 text-gray-600">{module.description}</p>
                  <ul className="space-y-2">
                    {module.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-teal-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">O Que Nossos Alunos Dizem</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Histórias reais de pessoas que transformaram suas vidas com nosso curso
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Carlos Silva",
                location: "São Paulo, SP",
                testimonial:
                  "Este curso superou todas as minhas expectativas. Em apenas 3 meses, consegui uma promoção e aumento de 40% no meu salário!",
              },
              {
                name: "Ana Oliveira",
                location: "Rio de Janeiro, RJ",
                testimonial:
                  "Graças às estratégias que aprendi, consegui iniciar meu próprio negócio e já estou faturando mais do que no meu antigo emprego.",
              },
              {
                name: "Marcos Santos",
                location: "Belo Horizonte, MG",
                testimonial:
                  "O melhor investimento que já fiz na minha carreira. O conteúdo é prático e os resultados são imediatos. Recomendo a todos!",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="mb-4 flex justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-200">
                        <Image
                          src={`/placeholder.svg?height=48&width=48&text=${index + 1}`}
                          alt="Avatar"
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">"{testimonial.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling VSL */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">A História Por Trás do Nosso Método</h2>
          <p className="mx-auto mb-10 max-w-2xl text-gray-600">
            Descubra como desenvolvemos este método revolucionário e como ele pode transformar sua vida
          </p>

          <div className="mx-auto max-w-3xl overflow-hidden rounded-xl bg-black shadow-xl">
            <div className="aspect-video relative flex items-center justify-center bg-gray-800">
              <Button
                variant="outline"
                size="icon"
                className="absolute h-16 w-16 rounded-full bg-white/10 backdrop-blur-sm"
              >
                <Play className="h-8 w-8 text-white" />
              </Button>
              <Image
                src="/placeholder.svg?height=720&width=1280&text=História do Método"
                alt="Vídeo sobre a história do método"
                width={1280}
                height={720}
                className="h-full w-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Perguntas Frequentes</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Tire suas dúvidas sobre o curso e como ele pode ajudar você
          </p>

          <div className="mx-auto max-w-3xl">
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "Quanto tempo tenho acesso ao curso?",
                  answer:
                    "Você terá acesso vitalício a todo o conteúdo do curso, incluindo atualizações futuras, sem nenhum custo adicional.",
                },
                {
                  question: "O curso tem certificado?",
                  answer:
                    "Sim, ao concluir o curso você receberá um certificado digital que pode ser compartilhado em seu LinkedIn e outras plataformas profissionais.",
                },
                {
                  question: "Preciso ter conhecimento prévio?",
                  answer:
                    "Não, o curso foi desenvolvido para pessoas de todos os níveis. Começamos do básico e avançamos gradualmente para conceitos mais complexos.",
                },
                {
                  question: "Como funciona o suporte?",
                  answer:
                    "Oferecemos suporte completo através de nossa comunidade exclusiva, onde você pode fazer perguntas e receber respostas dos instrutores e de outros alunos.",
                },
                {
                  question: "Posso assistir as aulas pelo celular?",
                  answer:
                    "Sim, nossa plataforma é totalmente responsiva e você pode acessar o conteúdo de qualquer dispositivo: computador, tablet ou smartphone.",
                },
                {
                  question: "E se eu não gostar do curso?",
                  answer:
                    "Oferecemos garantia de satisfação de 30 dias. Se você não estiver satisfeito, basta solicitar o reembolso e devolveremos 100% do seu investimento.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl rounded-xl border border-gray-200 bg-white p-8 shadow-lg">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-blue-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
            </div>
            <h2 className="mb-4 text-2xl font-bold">Garantia Incondicional de 30 Dias</h2>
            <p className="mb-6 text-gray-600">
              Se por qualquer motivo você não ficar satisfeito com o curso nos primeiros 30 dias, basta nos avisar e
              devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <p className="font-medium text-blue-600">Você não tem nada a perder e tudo a ganhar!</p>
          </div>
        </div>
      </section>

      {/* Checkout Section with 3 Plans - Improved */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-20 text-white">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">Escolha o Plano Ideal Para Você</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-white/90">
            Invista em seu futuro hoje e comece a transformar sua vida e carreira
          </p>

          <div className="mx-auto max-w-6xl">
            <Tabs defaultValue="mensal" className="mx-auto w-full max-w-md mb-10">
              <TabsList className="grid w-full grid-cols-2 bg-white/10">
                <TabsTrigger value="mensal">Pagamento Mensal</TabsTrigger>
                <TabsTrigger value="anual">Pagamento Único (30% OFF)</TabsTrigger>
              </TabsList>

              <TabsContent value="mensal" className="mt-6">
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      name: "Básico",
                      price: "R$ 97",
                      description: "Ideal para iniciantes que querem começar sua jornada",
                      features: [
                        { text: "Acesso ao módulo básico", included: true },
                        { text: "Exercícios práticos", included: true },
                        { text: "Certificado digital", included: true },
                        { text: "Comunidade de alunos", included: false },
                        { text: "Atualizações mensais", included: false },
                        { text: "Suporte prioritário", included: false },
                        { text: "Mentoria individual", included: false },
                        { text: "Bônus exclusivos", included: false },
                      ],
                      popular: false,
                      color: "blue",
                      cta: "Começar Agora",
                    },
                    {
                      name: "Premium",
                      price: "R$ 197",
                      description: "Nossa opção mais popular com o melhor custo-benefício",
                      features: [
                        { text: "Acesso a todos os módulos", included: true, highlight: true },
                        { text: "Exercícios práticos avançados", included: true },
                        { text: "Certificado digital", included: true },
                        { text: "Comunidade exclusiva", included: true, highlight: true },
                        { text: "Atualizações mensais", included: true },
                        { text: "Suporte prioritário", included: true },
                        { text: "Mentoria individual", included: false },
                        { text: "Bônus exclusivos", included: true },
                      ],
                      popular: true,
                      color: "teal",
                      cta: "Escolher Premium",
                    },
                    {
                      name: "VIP",
                      price: "R$ 297",
                      description: "Experiência completa com acompanhamento personalizado",
                      features: [
                        { text: "Acesso a todos os módulos", included: true },
                        { text: "Exercícios práticos avançados", included: true },
                        { text: "Certificado digital premium", included: true },
                        { text: "Grupo exclusivo com o professor", included: true, highlight: true },
                        { text: "Atualizações semanais", included: true, highlight: true },
                        { text: "Suporte VIP 24/7", included: true, highlight: true },
                        { text: "Mentoria individual (2 sessões)", included: true, highlight: true },
                        { text: "Todos os bônus + conteúdo exclusivo", included: true },
                      ],
                      popular: false,
                      color: "purple",
                      cta: "Quero Ser VIP",
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`overflow-hidden h-full ${plan.popular ? "border-4 border-yellow-400 scale-105 shadow-xl" : "border border-gray-200"}`}
                    >
                      <CardContent className={`p-0 h-full flex flex-col`}>
                        <div
                          className={`p-6 ${plan.popular ? "bg-gradient-to-br from-teal-500 to-teal-600" : index === 0 ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-600"} text-white`}
                        >
                          {plan.popular && (
                            <div className="mb-3 -mt-6 -mx-6 bg-yellow-400 py-2 text-center text-black font-bold">
                              MAIS POPULAR
                            </div>
                          )}
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <p className="text-white/80 mt-1">{plan.description}</p>
                          <div className="mt-4">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <span className="text-white/80">/mês</span>
                          </div>
                        </div>

                        <div className="p-6 flex-grow">
                          <p className="font-medium mb-4">O que está incluído:</p>
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                {feature.included ? (
                                  <Check
                                    className={`h-5 w-5 mt-0.5 ${feature.highlight ? "text-yellow-500" : "text-teal-500"}`}
                                  />
                                ) : (
                                  <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                  </div>
                                )}
                                <span
                                  className={`${!feature.included ? "text-gray-400" : feature.highlight ? "font-medium" : ""}`}
                                >
                                  {feature.text}
                                  {feature.highlight && feature.included && (
                                    <span className="ml-1 inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                                      Destaque
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-6 pt-0 mt-auto">
                          <Button
                            className={`w-full ${
                              index === 0
                                ? "bg-blue-600 hover:bg-blue-700"
                                : index === 1
                                  ? "bg-teal-600 hover:bg-teal-700"
                                  : "bg-purple-600 hover:bg-purple-700"
                            }`}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            {plan.cta}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="anual" className="mt-6">
                <div className="grid gap-8 md:grid-cols-3">
                  {[
                    {
                      name: "Básico",
                      price: "R$ 797",
                      originalPrice: "R$ 1.164",
                      savings: "Economize R$ 367",
                      description: "Ideal para iniciantes que querem começar sua jornada",
                      features: [
                        { text: "Acesso ao módulo básico", included: true },
                        { text: "Exercícios práticos", included: true },
                        { text: "Certificado digital", included: true },
                        { text: "Comunidade de alunos", included: false },
                        { text: "Atualizações mensais", included: false },
                        { text: "Suporte prioritário", included: false },
                        { text: "Mentoria individual", included: false },
                        { text: "Bônus exclusivos", included: false },
                      ],
                      popular: false,
                      color: "blue",
                      cta: "Começar Agora",
                    },
                    {
                      name: "Premium",
                      price: "R$ 1.497",
                      originalPrice: "R$ 2.364",
                      savings: "Economize R$ 867",
                      description: "Nossa opção mais popular com o melhor custo-benefício",
                      features: [
                        { text: "Acesso a todos os módulos", included: true, highlight: true },
                        { text: "Exercícios práticos avançados", included: true },
                        { text: "Certificado digital", included: true },
                        { text: "Comunidade exclusiva", included: true, highlight: true },
                        { text: "Atualizações mensais", included: true },
                        { text: "Suporte prioritário", included: true },
                        { text: "Mentoria individual", included: false },
                        { text: "Bônus exclusivos", included: true },
                      ],
                      popular: true,
                      color: "teal",
                      cta: "Escolher Premium",
                    },
                    {
                      name: "VIP",
                      price: "R$ 2.497",
                      originalPrice: "R$ 3.564",
                      savings: "Economize R$ 1.067",
                      description: "Experiência completa com acompanhamento personalizado",
                      features: [
                        { text: "Acesso a todos os módulos", included: true },
                        { text: "Exercícios práticos avançados", included: true },
                        { text: "Certificado digital premium", included: true },
                        { text: "Grupo exclusivo com o professor", included: true, highlight: true },
                        { text: "Atualizações semanais", included: true, highlight: true },
                        { text: "Suporte VIP 24/7", included: true, highlight: true },
                        { text: "Mentoria individual (2 sessões)", included: true, highlight: true },
                        { text: "Todos os bônus + conteúdo exclusivo", included: true },
                      ],
                      popular: false,
                      color: "purple",
                      cta: "Quero Ser VIP",
                    },
                  ].map((plan, index) => (
                    <Card
                      key={index}
                      className={`overflow-hidden h-full ${plan.popular ? "border-4 border-yellow-400 scale-105 shadow-xl" : "border border-gray-200"}`}
                    >
                      <CardContent className={`p-0 h-full flex flex-col`}>
                        <div
                          className={`p-6 ${plan.popular ? "bg-gradient-to-br from-teal-500 to-teal-600" : index === 0 ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-600"} text-white`}
                        >
                          {plan.popular && (
                            <div className="mb-3 -mt-6 -mx-6 bg-yellow-400 py-2 text-center text-black font-bold">
                              MAIS POPULAR
                            </div>
                          )}
                          <h3 className="text-2xl font-bold">{plan.name}</h3>
                          <p className="text-white/80 mt-1">{plan.description}</p>
                          <div className="mt-4">
                            <span className="text-4xl font-bold">{plan.price}</span>
                            <div className="mt-1">
                              <span className="line-through text-white/70 mr-1">{plan.originalPrice}</span>
                              <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                                {plan.savings}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 flex-grow">
                          <p className="font-medium mb-4">O que está incluído:</p>
                          <ul className="space-y-3 mb-6">
                            {plan.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                {feature.included ? (
                                  <Check
                                    className={`h-5 w-5 mt-0.5 ${feature.highlight ? "text-yellow-500" : "text-teal-500"}`}
                                  />
                                ) : (
                                  <div className="h-5 w-5 mt-0.5 flex items-center justify-center">
                                    <div className="h-1 w-1 rounded-full bg-gray-300"></div>
                                  </div>
                                )}
                                <span
                                  className={`${!feature.included ? "text-gray-400" : feature.highlight ? "font-medium" : ""}`}
                                >
                                  {feature.text}
                                  {feature.highlight && feature.included && (
                                    <span className="ml-1 inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                                      Destaque
                                    </span>
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-6 pt-0 mt-auto">
                          <Button
                            className={`w-full ${
                              index === 0
                                ? "bg-blue-600 hover:bg-blue-700"
                                : index === 1
                                  ? "bg-teal-600 hover:bg-teal-700"
                                  : "bg-purple-600 hover:bg-purple-700"
                            }`}
                          >
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            {plan.cta}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <div className="mx-auto max-w-3xl mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold mb-4">Ainda com dúvidas sobre qual plano escolher?</h3>
              <p className="mb-6">
                Nosso plano Premium oferece o melhor custo-benefício para a maioria dos alunos. Se você precisa de
                atenção personalizada, o plano VIP é ideal. Não se preocupe, você pode fazer upgrade a qualquer momento!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="outline" className="bg-white/20 hover:bg-white/30 border-white/40">
                  Falar com um Consultor
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Ver Comparativo Completo</Button>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="mb-4 text-white/90">Formas de pagamento aceitas</p>
              <div className="flex justify-center gap-4">
                <Image
                  src="/placeholder.svg?height=40&width=60&text=VISA"
                  alt="Visa"
                  width={60}
                  height={40}
                  className="h-10 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=40&width=60&text=MASTER"
                  alt="Mastercard"
                  width={60}
                  height={40}
                  className="h-10 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=40&width=60&text=PIX"
                  alt="Pix"
                  width={60}
                  height={40}
                  className="h-10 w-auto"
                />
                <Image
                  src="/placeholder.svg?height=40&width=60&text=BOLETO"
                  alt="Boleto"
                  width={60}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-10 text-center text-white">
        <div className="container mx-auto px-4">
          <p className="mb-4">© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4">
            <Link href="#" className="text-white/70 hover:text-white">
              Termos de Uso
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-white/70 hover:text-white">
              Contato
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}


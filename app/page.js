import Hero from './_components/Hero'
import ServicesContact from './_components/ServicesContact'
import Footer from './_components/Footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ServicesContact />
      <Footer />
    </main>
  )
}

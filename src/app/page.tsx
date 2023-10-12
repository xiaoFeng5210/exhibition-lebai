import Header from "~/client-components/home-header"
import HomeCard from "~/client-components/home-card"
import Image from "next/image"

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center p-4 relative">
      <Image src="/image/lebai_logo.jpg" alt="" width={80} height={80} className="absolute left-[2rem]" />
      <Header />
      <HomeCard />
    </main>
  )
}

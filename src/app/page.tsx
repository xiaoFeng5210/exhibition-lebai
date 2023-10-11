import Header from "~/client-components/home-header"
import HomeCard from "~/client-components/home-card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Header />
      <HomeCard />
    </main>
  )
}

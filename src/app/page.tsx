import Header from "~/client-components/home-header"
import GlobalStyleComponent from "~/assets/globalstyles-component"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <GlobalStyleComponent />
      <Header />
      <div className="w-[80%] flex-1 pt-3">
        <div className="w-full h-full">

        </div>
      </div>
    </main>
  )
}

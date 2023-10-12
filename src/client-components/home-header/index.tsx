'use client'
import Image from "next/image"
import { H3title } from "~/assets/common"

const Header = () => {
  return (
    <header className="w-full flex">
      <Image src="/image/lebai_logo.jpg" alt="" width={80} height={80} />
      <H3title>乐白应用解决方案</H3title>
    </header>
  )
}
export default Header

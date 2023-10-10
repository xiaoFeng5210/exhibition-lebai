'use client'
import Image from "next/image"
import { H3title } from "~/assets/common"

const Header = () => {
  return (
    <header className="w-full">
      {/* <Image src='/image/lebai_logo.jpg' width={50} height={50} alt="lebai" /> */}
      <H3title>乐白应用解决方案</H3title>
    </header>
  )
}
export default Header

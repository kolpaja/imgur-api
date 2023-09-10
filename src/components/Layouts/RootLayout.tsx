import React from "react"
import Navbar from "../Navbar"

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <main className=" mx-auto">
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
    </main>
  )
}

export default RootLayout

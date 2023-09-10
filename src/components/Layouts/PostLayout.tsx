import React, { useEffect, useState } from "react"
import SearchGallery from "../GalleryComponents/SearchGallery"
import imgurLogo from "@/assets/imgur.svg"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

type SearchLayoutProps = {
  children: React.ReactNode
}

const PostLayout = ({ children }: SearchLayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setIsScrolled(true)
      } else {
        setScrolled(window.scrollY)
        setIsScrolled(false)
      }
    })

    return () => {
      window.removeEventListener("scroll", () => setIsScrolled(false))
    }
  }, [])
  return (
    <main className="mx-auto bg-gradient-to-b from-blue-900 via-stone-600 to-stone-700">
      <nav className="flex justify-between gap-x-8 w-full bg-blue-900 shadow-sm  items-center px-16 fixed top-0 left-0 h-[90px]">
        <Link to="/" className="min-w-[300px] text-white">
          <img src={imgurLogo} />
        </Link>
        <div className="max-w-[550px] w-full">
          <SearchGallery />
        </div>
        {isScrolled ? (
          <div className="min-w-[280px]" />
        ) : (
          <div className="flex gap-x-2 min-w-[280px]">
            <Button className="bg-purple-600 hover:bg-purple-500 text-white capitalize">
              Go ad-free
            </Button>
            <Button
              variant={"link"}
              className="text-white hover:bg-transparent font-semibold"
            >
              Sign in
            </Button>

            <Button
              variant={"secondary"}
              className="bg-green-500 font-semibold text-white hover:bg-green-400"
            >
              Sign up
            </Button>
          </div>
        )}
      </nav>
      <div className="max-w-6xl mx-auto pt-[190px]">{children}</div>
    </main>
  )
}

export default PostLayout

import imgurPng from "@/assets/img/imgur-favicon-32x32.png"
import navBgImg from "@/assets/img/imgur-header-banner.png"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import imgurLogo from "../assets/imgur.svg"
import { Button } from "./ui/button"

import SearchGallery from "./GalleryComponents/SearchGallery"

type Props = {}

const Navbar = (props: Props) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 300) {
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

  console.log(`is Scrolled `, isScrolled, 400 - scrolled, window.scrollY)

  return (
    <header
      className={cn(
        "w-full flex justify-between absolute top-0 left-0 right-0 mx-auto items-center",
        isScrolled ? "h-[90px] z-30" : `h-[400px] z-10 items-start px-6 py-4`,
      )}
      style={{
        backgroundImage: `url(${navBgImg})`,
        top: `-${scrolled}px`,
      }}
    >
      <div
        className="fixed top-0 left-0 right-0 w-full px-6 py-4 flex justify-between"
        style={{
          backgroundImage: `url(${navBgImg})`,
        }}
      >
        {/* imgur img */}
        {isScrolled ? (
          <span className="min-w-[360px] text-white">
            <img src={imgurPng} width={34} height={34} />
          </span>
        ) : (
          <div className="min-w-[360px] text-white">
            <img src={imgurLogo} />
          </div>
        )}

        {/* search */}
        <div className="max-w-xl mx-auto flex-1">
          <div className="w-full relative top-0 left-0  max-w-[550px]">
            <SearchGallery />
          </div>
        </div>

        {/* go ad-free sign in sign up  */}
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
      </div>
    </header>
  )
}

export default Navbar

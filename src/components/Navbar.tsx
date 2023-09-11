import imgurPng from "@/assets/img/imgur-favicon-32x32.png"
import navBgImg from "@/assets/img/imgur-header-banner.png"
import { cn } from "@/lib/utils"
import { useEffect, useState, useCallback } from "react"
import imgurLogo from "../assets/imgur.svg"
import { Button } from "./ui/button"

import SearchGallery from "./GalleryComponents/SearchGallery"

// @ts-ignore
import { ReactComponent as PlusIcon } from "@/assets/plus.svg"
import ViralFilter from "./Filters/ViralFilter"
import ActionButtons from "./CTA/ActionButtons"
import LayoutToggle from "./CTA/LayoutToggle"

import GalleryFilters from "./Filters/GalleryFilters"
import GalleryTags from "./GalleryComponents/GalleryTags"

const Navbar = () => {
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
    <header
      className={cn(
        "w-full flex justify-between absolute  top-0 left-0 right-0 mx-auto items-center",
        isScrolled ? "h-[90px] z-30" : `h-[400px] z-10 items-start px-6 py-4`,
      )}
      style={{
        backgroundImage: `url(${navBgImg})`,
        top: `-${scrolled}px`,
      }}
    >
      {!isScrolled ? <GalleryTags isScrolled={isScrolled} /> : null}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 w-full px-6 py-4 flex justify-between",
          isScrolled ? "shadow-lg  shadow-black " : "",
        )}
        style={{
          backgroundImage: `url(${navBgImg})`,
        }}
      >
        {/* imgur img */}
        {isScrolled ? (
          <div className="min-w-[360px] flex items-center gap-x-1 text-white">
            <img src={imgurPng} width={34} height={34} />
            <ViralFilter isScrolled={isScrolled} />
          </div>
        ) : (
          <div className="min-w-[360px] flex items-center gap-x-3 text-white">
            <img src={imgurLogo} />
            <Button className="bg-green-600 py-0 hover:bg-green-500 text-md text-white font-semibold">
              <PlusIcon className="mr-1" />
              New Post
            </Button>
          </div>
        )}

        {/* search */}
        <div className="max-w-xl mx-auto flex-1 relative top-0 left-0  z-[1000]">
          <div
            className={cn(
              "w-full relative top-0 left-0  z-[1000] max-w-[550px]",
            )}
          >
            <SearchGallery />
          </div>
        </div>

        {/* go ad-free sign in sign up  */}
        {isScrolled ? (
          <div className="min-w-[280px] flex items-center gap-x-3 ">
            <GalleryFilters isScrolled={isScrolled} />
            <LayoutToggle isScrolled={isScrolled} />
          </div>
        ) : (
          <ActionButtons isScrolled={isScrolled} />
        )}
      </div>
    </header>
  )
}

export default Navbar

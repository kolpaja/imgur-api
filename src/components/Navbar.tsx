import imgurPng from "@/assets/img/imgur-favicon-32x32.png"
import navBgImg from "@/assets/img/imgur-header-banner.png"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import imgurLogo from "../assets/imgur.svg"
import ActionButtons from "./CTA/ActionButtons"
import LayoutToggle from "./CTA/LayoutToggle"
import GalleryFilters from "./Filters/GalleryFilters"
import ViralFilter from "./Filters/ViralFilter"
import GalleryTags from "./GalleryComponents/GalleryTags"
import SearchGallery from "./GalleryComponents/SearchGallery"
import MobileMenu from "./MobileMenu"
import WelcomeMessage from "./WelcomeMessage"
import { Button } from "./ui/button"

// @ts-ignore
import { ReactComponent as PlusIcon } from "@/assets/plus.svg"

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
      <div className="mt-12 text-center max-w-[1556px] mx-auto">
        {!isScrolled ? <WelcomeMessage isScrolled={isScrolled} /> : null}

        {!isScrolled ? <GalleryTags isScrolled={isScrolled} /> : null}
      </div>

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
          <div className="w-full md:w-[300px] md:min-w-[360px] flex items-center  justify-between md:justify-start gap-x-1 text-white">
            <MobileMenu />
            <Link to="/">
              <img src={imgurPng} width={34} height={34} />
            </Link>

            <div className="hidden md:block">
              <ViralFilter isScrolled={isScrolled} />
            </div>

            <div className="flex items-center md:hidden gap-x-3">
              <GalleryFilters isScrolled={isScrolled} />
              <LayoutToggle isScrolled={isScrolled} />
            </div>
          </div>
        ) : (
          <div className="min-w-0 lg:min-w-[360px] flex items-center gap-x-3 text-white mr-2">
            <MobileMenu />

            <Link to="/">
              <img src={imgurLogo} />
            </Link>
            <Button className="bg-green-600 py-0 hidden md:flex hover:bg-green-500 text-sm lg:text-md text-white font-semibold">
              <PlusIcon className="mr-1" />
              New Post
            </Button>
          </div>
        )}

        {/* search */}
        <div className="hidden md:block max-w-xl mx-auto flex-1 relative top-0 left-0  z-[1000]">
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
          <div className="min-w-[280px] hidden md:flex items-center justify-end gap-x-3 ">
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

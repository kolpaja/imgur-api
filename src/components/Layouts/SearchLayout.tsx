import React from "react"
import SearchGallery from "../GalleryComponents/SearchGallery"
import imgurLogo from "@/assets/imgur.svg"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { UploadCloud } from "lucide-react"
import ActionButtons from "../CTA/ActionButtons"
import GalleryMobileNav from "../GalleryComponents/GalleryMobileNav"

type SearchLayoutProps = {
  children: React.ReactNode
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <main className="max-w-5xl mx-auto">
      <GalleryMobileNav />
      <nav className="hidden lg:flex justify-between w-full items-center bg-slate-800 px-16 fixed top-0 left-0 h-[60px] z-[100]">
        <div className="flex  gap-x-6 min-w-[360px]">
          <Link to="/" className=" text-white">
            <img src={imgurLogo} />
          </Link>
          <Button className="bg-green-600 hover:bg-green-500 flex text-white items-center">
            <UploadCloud className="text-white mr-1" /> New Post
          </Button>

          <Button className="bg-orange-600 min-w-[150px] hover:bg-orange-500 text-white">
            Go Ad-Free
          </Button>
        </div>

        <div className="xl:w-full  overflow-hidden relative top-0 left-0  z-[1000] max-w-[550px]">
          <SearchGallery />
        </div>

        <ActionButtons isScrolled={false} fromSearch={true} />
      </nav>

      <div className="lg:hidden max-w-3xl mx-auto px-8 py-4 md:py-10 ">
        <SearchGallery />
      </div>
      <div className="max-w-6xl  lg:mt-[90px]">{children}</div>
    </main>
  )
}

export default SearchLayout

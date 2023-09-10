import React from "react"
import SearchGallery from "../GalleryComponents/SearchGallery"
import imgurLogo from "@/assets/imgur.svg"
import { Link } from "react-router-dom"

type SearchLayoutProps = {
  children: React.ReactNode
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <main className="max-w-7xl mx-auto">
      <nav className="flex justify-between w-full items-center px-16 fixed top-0 left-0 h-[90px]">
        <Link to="/" className="min-w-[360px] text-white">
          <img src={imgurLogo} />
        </Link>
        <SearchGallery />
      </nav>
      <div className="max-w-6xl mt-[90px]">{children}</div>
    </main>
  )
}

export default SearchLayout

import React from "react"
import SearchGallery from "../GalleryComponents/SearchGallery"

type SearchLayoutProps = {
  children: React.ReactNode
}

const SearchLayout = ({ children }: SearchLayoutProps) => {
  return (
    <main>
      <nav>
        <SearchGallery />
      </nav>
      <div>{children}</div>
    </main>
  )
}

export default SearchLayout

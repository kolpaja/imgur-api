import { useAppSelector } from "@/app/hook"
import RootLayout from "@/components/Layouts/RootLayout"
import SearchLayout from "@/components/Layouts/SearchLayout"
import { useSearchGalleriesQuery } from "@/features/galleryApi"
import React from "react"
import { useSearchParams } from "react-router-dom"

// TODO search
// https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get("q")

  const searchFilters = useAppSelector((state) => state.searchFilters)
  const { data, isLoading, isError } = useSearchGalleriesQuery({
    filters: searchFilters,
    q: query as string,
  })
  console.log("🚀 ~ file: SearchPage.tsx:23 ~ SearchPage ~ data:", data, {
    query,
  })
  return <SearchLayout>SearchPage</SearchLayout>
}

export default SearchPage

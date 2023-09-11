import { useAppSelector } from "@/app/hook"
import RootLayout from "@/components/Layouts/RootLayout"
import SearchLayout from "@/components/Layouts/SearchLayout"
import { useSearchGalleriesQuery } from "@/features/galleryApi"
import { useSearchParams } from "react-router-dom"
import underConstruction from "@/assets/img/Under construction-amico.png"

// TODO search page
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
  return (
    <SearchLayout>
      <div className="grid align-middle min-w-[600px]">
        <h1 className="text-white text-3xl">Search galleries Coming soon...</h1>
        <img
          src={underConstruction}
          alt="Under construction-amico"
          width={800}
          height={600}
        />
      </div>
    </SearchLayout>
  )
}

export default SearchPage

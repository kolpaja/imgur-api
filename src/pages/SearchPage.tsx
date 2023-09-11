import { useAppDispatch, useAppSelector } from "@/app/hook"
import underConstruction from "@/assets/img/Under construction-amico.png"
import LoadingCard from "@/components/GalleryComponents/LoadingCard"
import PageNavigation from "@/components/GalleryComponents/PageNavigation"
import PostCard from "@/components/GalleryComponents/PostCard"
import SearchLayout from "@/components/Layouts/SearchLayout"
import { useSearchGalleriesQuery } from "@/features/galleryApi"
import {
  nextSearchPage,
  previousSearchPage,
} from "@/features/searchFilterSlice"
import { cn } from "@/lib/utils"
import { Link, useSearchParams } from "react-router-dom"

//  search page api
// https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats

const IsDev = () => (
  <>
    {" "}
    <h1 className="text-white text-3xl">Search galleries Coming soon...</h1>
    <img
      src={underConstruction}
      alt="Under construction-amico"
      width={800}
      height={600}
    />
  </>
)

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const query = searchParams.get("q")

  const searchFilters = useAppSelector((state) => state.searchFilters)
  const { data, isLoading, isError, isSuccess, refetch } =
    useSearchGalleriesQuery(
      {
        filters: searchFilters,
        q: query as string,
      },
      {
        skip: query!.trim().length === 0,
      },
    )

  console.log({ data })

  const handleNextPage = () => {
    window.scrollTo({ top: 0 })
    dispatch(nextSearchPage())
  }

  const handlePreviousPage = () => {
    window.scrollTo({ top: 0 })
    dispatch(previousSearchPage())
  }

  return (
    <SearchLayout>
      <div className="z-10  ">
        <div className="w-full h-20">
          {isSuccess ? (
            <div>
              <p className="text-white text-lg text-center font-semibold">
                Found {data?.data?.length} for{" "}
                <strong className="text-white font-bold italic">{query}</strong>{" "}
                , sorted by{" "}
                <strong className="underline">{searchFilters.sort}</strong> of{" "}
                <strong className="underline">{searchFilters.window}</strong> on
                current page: {searchFilters.page + 1}
              </p>
            </div>
          ) : null}
        </div>
        {isLoading ? (
          <div className="grid xs:gr1d-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  grid-flow-row gap-4 z-50">
            {Array.from({ length: 30 }).map((_, idx) => (
              <LoadingCard key={idx} />
            ))}
          </div>
        ) : (
          <div
            className={cn(
              "grid  xs:gr1d-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  grid-flow-row gap-4 relative z-50",
            )}
          >
            {data?.data?.length > 0 ? (
              data?.data?.map((post: any) => {
                return (
                  <div key={post.id} className="">
                    <PostCard {...post} layout={"square"} />
                  </div>
                )
              })
            ) : (
              <div>
                <Link to="/" className="text-white">
                  Discover more images.
                </Link>
              </div>
            )}
          </div>
        )}

        <PageNavigation
          page={searchFilters.page}
          nextPage={handleNextPage}
          previousPage={handlePreviousPage}
        />
      </div>
    </SearchLayout>
  )
}

export default SearchPage

import { useState, useEffect, useCallback } from "react"
import { useAppSelector } from "@/app/hook"
import RootLayout from "@/components/Layouts/RootLayout"
import { useGetAllGalleriesQuery } from "@/features/galleryApi"
import LoadingCard from "@/components/GalleryComponents/LoadingCard"
import PageNavigation from "@/components/GalleryComponents/PageNavigation"
import PostCard from "@/components/GalleryComponents/PostCard"
import { cn } from "./lib/utils"
import GalleryFilters from "./components/Filters/GalleryFilters"
import ViralFilter from "./components/Filters/ViralFilter"
import LayoutToggle from "./components/CTA/LayoutToggle"

function App() {
  const [page, setPage] = useState(0)

  const filters = useAppSelector((state) => state.filters)
  const layout = useAppSelector((state) => state.layoutType.layoutType)

  const { isError, isLoading, data } = useGetAllGalleriesQuery({
    filters,
    page,
  })

  const [isScrolled, setIsScrolled] = useState(false)
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY > 150) {
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
    <RootLayout>
      <div
        className={cn(
          "h-fit scroll-smooth px-6 mx-auto overflow-visible mt-[360px] relative z-20",
          isScrolled ? "z-0" : "",
        )}
        style={{
          marginTop: `${330 - scrolled}px`,
        }}
      >
        {!isScrolled && (
          <div className=" w-full flex flex-col md:flex-row justify-between mx-auto z-50 relative">
            <ViralFilter isScrolled={isScrolled} />
            <LayoutToggle isScrolled={isScrolled} />
            <GalleryFilters isScrolled={isScrolled} />
          </div>
        )}

        {isLoading ? (
          <div className="grid   sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 grid-flow-row gap-4 z-20">
            {Array.from({ length: 20 }).map((_, idx) => (
              <LoadingCard key={idx} />
            ))}
          </div>
        ) : (
          <div
            className={cn(
              "sm:grid xs:gr1d-cols-1 sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 grid-flow-row gap-4 relative z-50",
            )}
          >
            {data?.data?.map((post: any) => {
              return (
                <div key={post.id} className="">
                  <PostCard {...post} layout={layout} />
                </div>
              )
            })}
          </div>
        )}

        {isError && <p>something wrong happened</p>}

        <PageNavigation page={page} setPage={setPage} />
      </div>
    </RootLayout>
  )
}

export default App

import React, { useState, useEffect } from "react"

import { useAppDispatch, useAppSelector } from "@/app/hook"
import RootLayout from "@/components/Layouts/RootLayout"
import { useGetAllGalleriesQuery } from "@/features/galleryApi"
import LoadingCard from "@/components/GalleryComponents/LoadingCard"
import PageNavigation from "@/components/GalleryComponents/PageNavigation"
import PostCard from "@/components/GalleryComponents/PostCard"
import { getGalleries } from "./features/galleryListSlice"
import { cn } from "./lib/utils"

function App() {
  const [page, setPage] = useState(0)
  const [layout, setLayout] = useState<"square" | "waterfall">("square")

  const filters = useAppSelector((state) => state.filters)

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
          "h-screen scroll-smooth mt-[360px] relative z-20",
          isScrolled ? "z-0" : "",
        )}
        style={{
          marginTop: `${360 - scrolled}px`,
        }}
      >
        {isLoading ? (
          <div className="grid grid-cols-4 grid-flow-row gap-4 z-20">
            {Array.from({ length: 20 }).map((_, idx) => (
              <LoadingCard key={idx} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-4 grid-flow-row gap-4">
            {data.data.map((post: any) => {
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

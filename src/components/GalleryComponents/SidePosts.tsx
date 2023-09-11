import { initialStateFilters } from "@/features/filterSlice"
import { useGetAllGalleriesQuery } from "@/features/galleryApi"
import React from "react"
import { Link } from "react-router-dom"
import "@/styles/sidePost.css"

const SidePosts = () => {
  const { isError, isLoading, data } = useGetAllGalleriesQuery({
    filters: initialStateFilters,
    page: 0,
  })
  return (
    <div className="h-full min-h-[1923px] ">
      <div className="sticky top-[86px] ">
        <div className="h-20 w-40 mb-5"></div>
        <Link to="/" className="">
          <h3 className="uppercase text-white text-sm mb-4 border-b border-zinc-500">
            newest in most viral
          </h3>
        </Link>

        <div className="relative">
          <div className="h-[240px] overflow-x-hidden gap-y-2 overflow-y-scroll Scrollbar--gray">
            {isLoading ? (
              <div className="animate-pulse">
                <div className="h-20 w-20 bg-gray-200"></div>
                <div className="h-20 w-40 bg-gray-200"></div>
              </div>
            ) : (
              <>
                {data?.data?.map((post: any) => {
                  const imgUrl = post.cover
                    ? `https://i.imgur.com/${post.cover}_d.webp?maxwidth=128&shape=thumb`
                    : `https://i.imgur.com/${post.id}_d.webp?maxwidth=128&shape=thumb`
                  return (
                    <Link
                      to={`/gallery/${post.id}`}
                      className="flex h-[64px] mb-4 overflow-hidden"
                    >
                      <div className="h-16 w-16 rounded-md overflow-hidden bg-zinc-700 relative">
                        <img
                          src={imgUrl}
                          className="w-full h-full object-cover hover:scale-125 transition-all"
                          alt="post img"
                        />
                      </div>
                      <p className="text-white text-sm w-[230px] pl-2">
                        {post.title}
                      </p>
                    </Link>
                  )
                })}
              </>
            )}

            {/* fade out div */}
            <div className="absolute bottom-0 left-0 h-[92px] w-full bg-gradient-to-b from-transparent to-[#27292d]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidePosts

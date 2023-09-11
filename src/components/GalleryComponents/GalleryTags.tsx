import { useGetTagsQuery } from "@/features/galleryApi"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import React from "react"

type Props = {
  isScrolled: boolean
}

const GalleryTags = ({ isScrolled }: Props) => {
  const { data, isLoading, isError } = useGetTagsQuery(undefined)

  if (isError) return null

  return (
    <div className="w-full max-w-7xl h-full mt-24 mx-auto">
      <div className="relative">
        {isLoading ? (
          <div className="bg-transparent flex justify-evenly gap-2 flex-wrap overflow-hidden w-full pt-4 animate-pulse">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                className="w-[110px] h-[130px] border bg-indigo-600 border-indigo-900  rounded-lg "
                key={idx}
              />
            ))}
          </div>
        ) : (
          <div className="bg-transparent flex justify-evenly gap-2 flex-wrap overflow-hidden w-full pt-4">
            <div className="absolute -top-6 left-0 right-0 h-12 w-full px-4 flex  justify-between items-center ">
              <h1 className="uppercase text-lg font-bold text-muted ">
                Explore Tags
              </h1>

              <button className="text-lg font-bold text-muted">
                MORE TAGS +
              </button>
            </div>

            {data?.data?.tags
              .filter((item: any) => item.name === data.data.featured)
              .map((tag: any) => (
                <div
                  className={cn(
                    "w-[210px] h-[130px] border border-indigo-900  rounded-lg relative hover:-translate-y-1 transition hover:cursor-pointer",
                  )}
                  key={tag.id}
                  style={{
                    backgroundImage: `url(https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high)`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-indigo-600  to-green-500"></div>
                  <div
                    className={cn(
                      "absolute bottom-0  left-0 right-0 h-[60px] px-3 pt-1 bg-green-500  text-center",
                      tag.accent !== null ? `bg-[#${tag.accent}]` : "",
                    )}
                  >
                    <h2 className="text-white text-sm font-bold">
                      {tag.display_name}
                    </h2>
                    <h3 className="text-xs flex justify-center items-center  text-gray-300 font-bold">
                      <strong className="uppercase">Featured</strong>{" "}
                      <Dot className="text-gray-300" />
                      <>{Number(tag.total_items).toLocaleString()} </>
                      posts
                    </h3>
                  </div>
                </div>
              ))}
            {data?.data?.tags
              .filter(
                (item: any) =>
                  item.name !== data?.data?.featured && item?.accent !== null,
              )
              ?.slice(0, 8)
              .map((tag: any) => (
                <div
                  className={cn(
                    "w-[110px] h-[130px] border relative bg-slate-800 hover:-translate-y-1 transition hover:cursor-pointer",
                  )}
                  key={tag.id}
                  style={{
                    backgroundImage: `url(https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high)`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full z-0   bg-gradient-to-br from-blue-600  to-purple-900-500 "></div>

                  <div
                    style={{ background: `#${tag.accent}` }}
                    className={cn(
                      "absolute bottom-0  left-0 right-0 h-[60px] px-3 pt-1 z-10 bg-green-500  text-center",
                      tag.accent !== null
                        ? `bg-[#${tag.accent}]`
                        : "bg-green-600",
                    )}
                  >
                    <h2 className="text-white capitalize  text-sm font-bold">
                      {tag.display_name}
                    </h2>
                    <h3 className="text-xs flex justify-center items-center gap-1 text-gray-300 font-bold">
                      {Number(tag.total_items).toLocaleString()} posts
                    </h3>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryTags

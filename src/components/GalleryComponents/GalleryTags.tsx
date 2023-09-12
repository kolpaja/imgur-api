import { useGetTagsQuery } from "@/features/galleryApi"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import React from "react"
import TagCard from "./TagCard"

type Props = {
  isScrolled: boolean
}

const GalleryTags = ({ isScrolled }: Props) => {
  const { data, isLoading, isError } = useGetTagsQuery(undefined)

  if (isError) return null

  return (
    <div className="w-full max-w-[1556px] h-full mt-10 mx-auto">
      <div className="relative">
        {isLoading ? (
          <div className="bg-transparent flex h-[150px] lg:h-auto flex-row justify-evenly gap-2 flex-wrap overflow-hidden w-sm md:w-full pt-4 animate-pulse">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                className="w-[210px] md:w-[110px] h-[130px] border bg-indigo-600 border-indigo-900  rounded-lg "
                key={idx}
              />
            ))}
          </div>
        ) : (
          <div className="bg-transparent flex justify-evenly gap-2 flex-wrap overflow-hidden w-full pt-4">
            <div className="absolute -top-6 left-0 right-0 h-12 w-full px-4 flex justify-center  sm:justify-between items-center ">
              <h1 className=" uppercase text-lg font-bold text-muted ">
                Explore Tags
              </h1>

              <button className="text-lg font-bold text-muted hidden sm:block ">
                MORE TAGS +
              </button>
            </div>

            <div className="bg-transparent flex justify-evenly gap-2 pt-2 flex-wrap overflow-hidden w-full h-[140px]">
              {data?.data?.tags
                .filter((item: any) => item.name === data?.data?.featured)
                .map((tag: any) => (
                  <TagCard key={tag.id} tag={tag} isFeatured />
                ))}

              {data?.data?.tags
                .filter(
                  (item: any) =>
                    item.name !== data?.data?.featured && item?.accent !== null,
                )
                ?.map((tag: any) => (
                  <TagCard key={tag.id} tag={tag} isFeatured={false} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryTags

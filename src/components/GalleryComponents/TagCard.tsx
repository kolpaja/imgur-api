import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import React from "react"

type TagCardProps = {
  tag: any
  isFeatured: boolean
}

const TagCard = ({ tag, isFeatured }: TagCardProps) => {
  return (
    <div
      className={cn(
        "w-[110px] h-[130px]  rounded relative bg-slate-800 hover:-translate-y-1 transition hover:cursor-pointer tagImage",
        isFeatured ? "w-[210px]" : "w-[110px]",
      )}
      style={{
        backgroundImage: `url(https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=800&shape=thumb&fidelity=high)`,
      }}
    >
      <div
        style={{ background: `#${tag.accent}` }}
        className={cn(
          "absolute bottom-0  left-0 right-0 min-h-[60px] max-h-20 px-3 py-2 z-10 bg-green-500  text-center",
        )}
      >
        <h2 className="text-white capitalize  text-sm mb-1 font-bold">
          {tag.display_name}
        </h2>
        <h3 className="text-xs flex justify-center items-center  gap-1 text-gray-300 font-bold">
          {isFeatured ? (
            <>
              <strong className="uppercase">Featured</strong>{" "}
              <Dot className="text-gray-300" />
            </>
          ) : null}
          <>{Number(tag.total_items).toLocaleString()} </>
          posts
        </h3>
      </div>
    </div>
  )
}

export default TagCard

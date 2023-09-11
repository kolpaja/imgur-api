import { cn, nrFormatter } from "@/lib/utils"
import {
  ArrowDownSquare,
  ArrowUpSquare,
  Eye,
  MessageCircle,
} from "lucide-react"
import { Link } from "react-router-dom"

const PostCard = (props: any) => {
  // console.log("🚀 ~ file: PostCard.tsx:8 ~ PostCard ~ post:", props)
  const imageSrc =
    props.cover !== undefined
      ? `http://i.imgur.com/${props.cover}.jpg`
      : `http://i.imgur.com/${props.id}.jpg`
  return (
    <div
      className={cn(
        "w-[300px] min-h-[300px] relative flex border border-gray-600 mb-8 ",
      )}
    >
      <Link to={`/gallery/${props.id}`}>
        <div
          className={cn(
            "w-full",
            props.layout === "waterfall"
              ? "h-auto overflow-visible"
              : "h-[250px] overflow-hidden",
          )}
        >
          <img className="" src={imageSrc} width={300} />
        </div>

        <div className="w-full absolute left-0 bottom-0 bg-[#474a51]">
          <p className="px-4 py-1 text-sm text-white min-h-11  overflow-hidden">
            {props.title}
          </p>
          <div className="px-4 py-2 flex justify-between items-center">
            <div className="flex">
              <ArrowUpSquare className="h-5 w-5 mr-1  text-zinc-400 hover:text-green-500 " />
              <span className="text-zinc-400 text-sm">{props.score}</span>
              <ArrowDownSquare className="h-5 w-5 ml-1 text-zinc-400 hover:text-red-500 " />
            </div>

            <div className="flex group">
              <MessageCircle className="mr-1 h-5 w-5 text-zinc-400 group-hover:text-zinc-200" />
              <span className="text-zinc-400 text-sm group-hover:text-zinc-200">
                {props.comment_count > 0 ? props.comment_count : null}
              </span>
            </div>

            <div className="flex group">
              <Eye className="mr-1 h-5 w-5 text-zinc-400 group-hover:text-zinc-200" />
              <span className="text-zinc-400 text-sm group-hover:text-zinc-200">
                {props.views > 0 ? nrFormatter(props.views) : null}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default PostCard

import { useRef } from "react"

import Error from "@/components/Error"
import LoadingGallery from "@/components/GalleryComponents/LoadingGallery"
import MediaViewer from "@/components/GalleryComponents/MediaViewer"
import SidePosts from "@/components/GalleryComponents/SidePosts"
import UserAvatar from "@/components/GalleryComponents/UserAvatar"
import PostLayout from "@/components/Layouts/PostLayout"
import { Button } from "@/components/ui/button"
import {
  useGetGalleryCommentsQuery,
  useGetSingleGalleryQuery,
} from "@/features/galleryApi"
import { useGetUserByUsernameQuery } from "@/features/usersApi"
import { getPostDate } from "@/lib/date"
import {
  ArrowDown,
  ArrowUp,
  ChevronRight,
  Dot,
  Eye,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Popcorn,
  Share2,
} from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { nrFormatter } from "@/lib/utils"

// Get the current date
const currentDate = new Date()

const Gallery = () => {
  const params = useParams()
  const commentsRef = useRef(null)

  const { id } = params

  const { data, isLoading, isError, isSuccess, error } =
    useGetSingleGalleryQuery(id)

  const {
    isError: isErrorComments,
    isLoading: isLoadingComments,
    data: comments,
  } = useGetGalleryCommentsQuery(id, {
    skip: isLoading,
  })

  const {
    data: userData,
    isError: isErrorUser,
    isSuccess: isSuccessUser,
  } = useGetUserByUsernameQuery(data?.data?.account_url)

  if (!id || isError) return <Error />

  if (isLoading) return <LoadingGallery />

  const postDate = new Date(data?.data?.datetime * 1000)

  const postDateAgo = getPostDate(postDate, currentDate)

  const imageSrc =
    data.data.cover !== undefined
      ? `http://i.imgur.com/${data.data.cover}.jpg`
      : `http://i.imgur.com/${data.data.id}.jpg`

  const currentImage =
    data?.data.images !== undefined ? data?.data?.images[0] : []

  const imagesLength = Number(data?.data?.images_count)

  return (
    <PostLayout
      post={{ title: data?.data?.title, author: data?.data?.account_url }}
    >
      <div className="pt-0 md:pt-[24px] scroll-smooth overflow-visible">
        <div className="flex flex-row justify-center flex-nowrap items-stretch pt-0 lg:pt-6 mx-auto  max-w-6xl">
          <div className="flex w-full pt-0 px-4 lg:pt-10 flex-grow flex-row items-stretch z-10 ">
            <div className="w-[60px] ml-2 hidden md:block  basis-[60px] z-[3]">
              <aside className="sticky top-[200px]  h-auto">
                <div className="relative  p-4 mb-8">
                  <button className=" flex items-center justify-center">
                    <Popcorn className="h-8 w-8 text-orange-400" />
                  </button>
                </div>

                <div className="flex flex-col items-start justify-around border gap-y-3 h-full border-zinc-300 p-4 rounded-md">
                  <button
                    title="Upvote"
                    className="flex items-center justify-center"
                  >
                    <ArrowUp className="h-8 w-8 text-white hover:text-green-500" />
                  </button>
                  <div className="text-sm  flex items-center justify-center text-zinc-400">
                    <span className="text-right" title="Total Score">
                      {data?.data?.points}
                    </span>
                  </div>
                  <button
                    title="Downvote"
                    className="flex items-center justify-center"
                  >
                    <ArrowDown className="h-8 w-8 text-white hover:text-rose-500" />
                  </button>
                  <button
                    className=" mt-4  flex items-center justify-center"
                    title="Add to favorite"
                  >
                    <Heart className="h-8 w-8 text-white hover:text-rose-500 hover:fill-rose-900" />
                  </button>
                </div>

                <div className="h-18 w-10 px-4 py-4 mt-4 mb-8 ">
                  <button
                    title="share"
                    className=" flex items-center justify-center"
                  >
                    <Share2 className="h-6 w-6 text-white" />
                  </button>
                </div>

                <Link
                  to="#gallery-comments"
                  className="p-4 border border-zinc-300 gap-y-1 rounded-md flex flex-col items-center justify-center"
                  title="Jump to comments"
                >
                  <MessageCircle className="h-6 w-6 text-white" />
                  <span className="text-xs text-white">
                    {data?.data?.comment_count}
                  </span>
                </Link>
              </aside>
            </div>

            <section className="flex flex-col rounded-sm bg-stone-700 md:bg-transparent w-full mx-1  px-0 md:px-6 mt-10 pt-2 md:pt-10 ">
              {/* header */}
              <header className="flex px-2 flex-col">
                <div className="flex">
                  <h1 className="min-w-5 text-lg md:text-2xl font-semibold text-zinc-200">
                    {data?.data?.title}
                  </h1>
                  <Button
                    variant="secondary"
                    className="hidden md:inline-flex bg-blue-600 hover:bg-blue-500 text-white ml-auto"
                  >
                    Next <ChevronRight className="h-4 w-4 text-white" />
                  </Button>
                </div>

                <div className="flex items-center gap-x-3 h-8 m-4 ml-0">
                  <UserAvatar username={data?.data?.account_url} />
                  <div className="flex flex-col">
                    {isSuccessUser && (
                      <h3 className="text-green-500 text-sm font-semibold">
                        {userData?.data?.url}
                      </h3>
                    )}
                    <div className="flex items-center justify-center gap-x-0">
                      <span className="text-xs text-gray-300">
                        {Number(data?.data?.views).toLocaleString()} Views
                      </span>
                      <span>
                        <Dot className=" text-gray-300" />
                      </span>
                      <span title={`${postDate}`} className=" text-gray-300">
                        {postDateAgo}
                      </span>
                    </div>
                  </div>
                  <button className="ml-auto">
                    <MoreHorizontal className="text-white" />
                  </button>
                </div>
              </header>

              <div className="flex flex-col h-fit  py-2 rounded-tr-sm">
                <div className="max-w-[760px] h-fit flex flex-col gap-y-8">
                  {imagesLength > 0 ? (
                    data?.data?.images?.map((item: any) => (
                      <MediaViewer key={item.id} mediaObject={item} />
                    ))
                  ) : (
                    <img src={imageSrc} />
                  )}
                </div>

                {data?.data?.description && <p>{data?.data?.description}</p>}

                {data?.data?.tags.length > 0 ? (
                  <div className="hidden md:flex my-2 flex-wrap gap-3">
                    {data?.data?.tags?.map((tag: any) => (
                      <div
                        key={tag.id}
                        style={{
                          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),url(https://i.imgur.com/${tag.background_hash}_d.jpg?maxwidth=200&fidelity=grand)`,
                        }}
                        className="min-w-[100px] shadow-lg h-10 px-2 py-2 text-white border border-zinc-500 lowercase rounded-2xl flex justify-center items-center"
                      >
                        {tag.display_name}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center bg-zinc-600/50  px-3 py-1 justify-between md:hidden  mb-8">
                <div className="flex items-center group">
                  <Eye className="mr-1 h-4 w-4 text-zinc-200 group-hover:text-zinc-100" />
                  <span className="text-zinc-200 text-sm group-hover:text-zinc-100">
                    {data?.data?.views > 0
                      ? Number(data?.data?.views).toLocaleString()
                      : 1}
                  </span>
                </div>

                <div className="flex items-center group">
                  <MessageCircle className="mr-1 h-4 w-4 text-zinc-200 group-hover:text-zinc-100" />
                  <span className="text-zinc-200 text-sm group-hover:text-zinc-100">
                    {data?.data?.comment_count > 0
                      ? data?.data?.comment_count
                      : 0}
                  </span>
                </div>

                <div className="flex items-center group">
                  <Heart className="mr-1 h-4 w-4 text-rose-200 group-hover:text-rose-400" />
                  <span className="text-zinc-200 text-sm group-hover:text-zinc-100">
                    Save
                  </span>
                </div>

                <div className="flex items-center group">
                  <Share2 className="mr-1 h-4 w-4 text-zinc-200 group-hover:text-rose-400" />
                  <span className="text-zinc-200 text-sm group-hover:text-zinc-100">
                    Share
                  </span>
                </div>
              </div>
            </section>
          </div>

          {/* side bar ads */}
          <aside className="hidden lg:block w-[300px] z-20 basis-[300px] grow-0 shrink-0 relative">
            <div className="">
              <SidePosts />
            </div>
          </aside>
        </div>

        <div id="gallery-comments" ref={commentsRef}>
          {/* <Comments {...comments} /> */}
        </div>
      </div>
    </PostLayout>
  )
}

export default Gallery

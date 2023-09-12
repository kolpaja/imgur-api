import React from "react"
import PostLayout from "../Layouts/PostLayout"
import {
  ArrowDown,
  ArrowUp,
  Dot,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Popcorn,
  Share2,
} from "lucide-react"
import UserAvatar from "./UserAvatar"
import { Button } from "../ui/button"

const LoadingGallery = () => {
  return (
    <PostLayout
      post={{
        author: <span className="w-[150px] h-6 bg-zinc-400"></span>,
        title: <h1 className="w-[250px] h-6 bg-zinc-400"></h1>,
      }}
    >
      <div className="pt-[24px] h-screen scroll-smooth animate-pulse overflow-hidden">
        <div className="flex flex-row justify-center flex-nowrap items-stretch  mx-auto  max-w-6xl">
          <div className="flex flex-row justify-center flex-nowrap items-stretch pt-6 px-6 md:mx-auto  max-w-6xl">
            <div className="flex w-full pt-10 flex-grow flex-row items-stretch z-10 ">
              <div className="hidden md:block w-[60px] basis-[60px] z-[3]">
                <aside className="sticky top-[200px]  h-auto">
                  <div className="relative  p-4 mb-8">
                    <button className=" flex items-center justify-center">
                      <Popcorn className="h-8 w-8 text-gray-400" />
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
                      <span
                        className="text-right w-8 rounded-md h-2 bg-zinc-300"
                        title="Total Score"
                      ></span>
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

                  <div className="p-4 border border-zinc-300  gap-y-1 rounded-md flex flex-col items-center justify-center">
                    <MessageCircle className="h-6 w-6 text-gray-400 " />
                    <span className="text-xs rounded-lg bg-zinc-300 w-6 h-2 text-white"></span>
                  </div>
                </aside>
              </div>

              <section className="flex flex-col w-full ">
                {/* header */}
                <header className="flex flex-col">
                  <div className="flex pl-4">
                    <h1 className="min-w-5 w-[150px] md:w-[350px] h-4 rounded-lg text-2xl font-semibold bg-zinc-400 text-zinc-200"></h1>
                    <Button
                      variant="secondary"
                      className="bg-gray-600 w-16 h-6 hover:bg-blue-500 text-white ml-auto"
                    ></Button>
                  </div>

                  <div className="flex items-center gap-x-3 h-8 m-4 ml-0">
                    <UserAvatar username={""} />
                    <div className="flex flex-col">
                      <div className="flex items-center justify-center gap-x-0">
                        <span className="w-[60px] text-xs h-2 rounded-lg bg-zinc-300 text-gray-300"></span>
                        <span>
                          <Dot className=" text-gray-300" />
                        </span>
                        <span className="w-[30px] h-2 rounded-lg bg-zinc-300 text-gray-300"></span>
                      </div>
                    </div>
                    <button className="ml-auto">
                      <MoreHorizontal className="text-white" />
                    </button>
                  </div>
                </header>

                <div className="flex flex-col h-full px-1 md:px-8">
                  <div className="bg-zinc-400 w-[300px] md:w-full h-[350px] rounded-sm md:h-[600px]" />
                </div>
              </section>
            </div>

            {/* side bar ads */}
            <aside className="hidden md:block w-[300px] mt-[200px]">
              <div className="bg-zinc-400 h-[200px] p-2 rounded-md">
                <div className="h-full w-full bg-slate-600 rounded-md flex items-center  justify-center flex-col gap-4">
                  <div className="w-[150px] rounded-md h-8 bg-slate-400" />
                  <div className="w-[150px] rounded-md h-8 bg-slate-400" />
                  <div className="w-[150px] rounded-md h-8 bg-slate-400" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </PostLayout>
  )
}

export default LoadingGallery

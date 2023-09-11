import React, { useEffect, useState } from "react"
import SearchGallery from "../GalleryComponents/SearchGallery"
import imgurLogo from "@/assets/imgur.svg"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ChevronRight } from "lucide-react"
import imgurPng from "@/assets/img/imgur-favicon-32x32.png"

type SearchLayoutProps = {
  children: React.ReactNode
  post: {
    title: string
    author: string
  }
}

const PostLayout = ({ children, post }: SearchLayoutProps) => {
  console.log("🚀 ~ file: PostLayout.tsx:17 ~ PostLayout ~ post:", post)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrolled, setScrolled] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
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
    <main className="mx-auto bg-gradient-to-b from-blue-900 via-stone-600 to-stone-700">
      <nav className="flex justify-between gap-x-1 w-full bg-blue-900 shadow-sm items-center px-6 fixed top-0 left-0 right-0 h-[60px] z-20">
        <Link to="/" className="min-w-[300px] text-white">
          {isScrolled ? (
            <img src={imgurPng} width={34} height={34} />
          ) : (
            <img src={imgurLogo} />
          )}
        </Link>

        <div className="max-w-[650px] -ml-[100px] w-full">
          {isScrolled ? (
            <div className="w-full flex items-center">
              <div className="flex flex-col">
                <h1 className="text-xl text-white font-bold">{post.title}</h1>
                <h3 className="text-sm italic text-zinc-400">
                  by {post.author}
                </h3>
              </div>

              <Button
                variant="secondary"
                className="bg-blue-600 hover:bg-blue-500 text-white ml-auto"
              >
                Next <ChevronRight className="h-4 w-4 text-white" />
              </Button>
            </div>
          ) : (
            <SearchGallery />
          )}
        </div>

        <div className="flex gap-x-2 min-w-[280px] ">
          <Button className="bg-purple-600 hover:bg-purple-500 text-white capitalize">
            Go ad-free
          </Button>
          <Button
            variant={"link"}
            className="text-white hover:bg-transparent font-semibold"
          >
            Sign in
          </Button>

          <Button
            variant={"secondary"}
            className="bg-green-500 font-semibold text-white hover:bg-green-400"
          >
            Sign up
          </Button>
        </div>
      </nav>
      <div className="max-w-6xl mx-auto h-full ">{children}</div>
    </main>
  )
}

export default PostLayout

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Code2, Menu } from "lucide-react"
import imgurLogo from "@/assets/imgur.svg"

import { Link } from "react-router-dom"
import ViralFilter from "./Filters/ViralFilter"
import GalleryFilters from "./Filters/GalleryFilters"
import { Separator } from "@/components/ui/separator"
import WelcomeMessage from "./WelcomeMessage"
import navBgImg from "@/assets/img/imgur-header-banner.png"
import SearchGallery from "./GalleryComponents/SearchGallery"

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className="h-8 w-8 mr-2 lg:hidden text-white" />
      </SheetTrigger>
      <SheetContent className="bg-zinc-800 text-white" side={"left"}>
        <SheetHeader>
          <SheetTitle>
            <Link to="/">
              <img src={imgurLogo} width={100} height={60} className="mb-2" />
            </Link>
          </SheetTitle>

          <SheetDescription className="flex flex-col gap-y-6 px-0 mx-0 justify-start">
            <Separator className="bg-stone-300/50" />

            <div
              className="tagImage h-20 flex justify-center items-center rounded-lg"
              style={{
                backgroundImage: `url(${navBgImg})`,
              }}
            >
              <WelcomeMessage isScrolled={false} />
            </div>

            <Separator className="bg-stone-300/50" />

            <SearchGallery />

            <Separator className="bg-stone-300/50" />

            <ViralFilter isScrolled={false} />

            <Separator className="bg-stone-300/50" />

            <div className="font-bold">
              <h1 className="text-white  text-xl">Galleries Filters:</h1>
              <GalleryFilters isScrolled={false} />
            </div>

            <Separator className="bg-stone-300/50 " />

            <Link
              to="https://codewithkoli.com/"
              target="_blank"
              className="text-indigo-700 flex items-center justify-center text-xl"
            >
              <Code2 className="mr-2 w-8 h-8" />{" "}
              <strong>codewithkoli.com</strong>
            </Link>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu

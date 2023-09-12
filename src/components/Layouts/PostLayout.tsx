import GalleryMobileNav from "../GalleryComponents/GalleryMobileNav"
import GalleryNavbar from "../GalleryComponents/GalleryNavbar"

type SearchLayoutProps = {
  children: React.ReactNode
  post: {
    title: string | JSX.Element
    author: string | JSX.Element
  }
}

const PostLayout = ({ children, post }: SearchLayoutProps) => {
  return (
    <main className="mx-auto relative bg-[#27292d]">
      <div className="absolute top-0 left-0 right-0 w-full h-[650px] bg-gradient-blue" />

      <GalleryNavbar post={post} />

      <GalleryMobileNav />

      <div className="max-w-6xl mx-auto h-full ">{children}</div>
    </main>
  )
}

export default PostLayout

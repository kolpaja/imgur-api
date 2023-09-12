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
    <main className="mx-auto relative bg-stone-700">
      <div className="absolute top-0 left-0 right-0 w-full h-[650px] bg-gradient-to-b from-blue-900 via-stone-600 to-stone-700" />

      <GalleryNavbar post={post} />

      <GalleryMobileNav />

      <div className="max-w-6xl mx-auto h-full ">{children}</div>
    </main>
  )
}

export default PostLayout

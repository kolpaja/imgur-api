import { Copyright, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const currentYear = new Date().getFullYear()

const Footer = () => (
  <footer className="max-w-7xl w-full  mx-auto px-2 py-3">
    <div className="w-full flex justify-center items-center gap-2">
      <Copyright className="h-5 w-5 text-zinc-400" />
      <Link
        to="https://codewithkoli.com/"
        target="_blank"
        className="text-md text-indigo-500 sm:text-lg m-0 p-0 hover:underline"
      >
        CWK(CodeWithKoli)
      </Link>
      <Heart className="text-2xl text-rose-900 fill-rose-800" />
      <strong>{currentYear}</strong>
    </div>
  </footer>
)

export default Footer

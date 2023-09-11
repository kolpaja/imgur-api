import Footer from "../Footer"
import Navbar from "../Navbar"

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  return (
    <main className="mx-auto ">
      <Navbar />
      <div className="max-w-[2100px] min-h-screen h-fit flex flex-col mx-auto ">
        {children}
      </div>
      <Footer />
    </main>
  )
}

export default RootLayout

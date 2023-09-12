import React from "react"

type Props = {
  isScrolled: boolean
}

const WelcomeMessage = (props: Props) => {
  return (
    <div className="">
      <h1 className="hidden sm:block text-[#aed8ea] mt-3 min-h-8 text-2xl ">
        You are doing a freaking great job.
      </h1>
      <h1 className="block sm:hidden text-[#aed8ea] font-extrabold  min-h-8 text-2xl ">
        Laugh, cry, learn.
      </h1>
    </div>
  )
}

export default WelcomeMessage

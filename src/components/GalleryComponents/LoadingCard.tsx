import React from "react"

const LoadingCard = () => {
  return (
    <div className="max-w-[300px] relative h-[300px] animate-pulse flex gap-y-2 rounded-lg mb-4 flex-col bg-zinc-400">
      <div className="bg-zinc-300 w-full h-[230px] " />
      <p className="bg-zinc-600 w-1/3 h-3 my-1 mx-4 rounded-lg"></p>
      <p className="bg-zinc-400 w-full flex justify-between px-4">
        <span className="h-4 w-8 rounded-lg bg-zinc-600"></span>
        <span className="h-4 w-8 rounded-lg bg-zinc-600"></span>
        <span className="h-4 w-8 rounded-lg bg-zinc-600"></span>
      </p>

      {/* tag */}
      <span className="h-4 w-12 rounded-sm bg-zinc-500 absolute top-4 right-4"></span>
    </div>
  )
}

export default LoadingCard

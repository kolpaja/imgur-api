import React from "react"
import error from "@/assets/img/Feeling angry-amico.png"
import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="flex justify-center flex-col gap-4 items-center max-w-6xl mx-auto min-h-full">
      <img src={error} alt="error" width={600} height={600} />
      <div>
        <Link to="/" className="text-indigo-500">
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Error

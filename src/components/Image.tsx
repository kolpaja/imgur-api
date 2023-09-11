import React, { Suspense } from "react"
import { useImage } from "react-image"

function MyImageComponent({ url }: { url: string }) {
  const { src } = useImage({
    srcList: url,
  })

  return <img src={src} />
}

export default function MyImageWrapper({ url }: { url: string }) {
  return (
    <Suspense>
      <MyImageComponent url={url} />
    </Suspense>
  )
}

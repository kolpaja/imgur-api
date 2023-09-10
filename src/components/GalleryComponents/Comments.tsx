import { useGetGalleryCommentsQuery } from "@/features/galleryApi"
import React from "react"

const Comments = (props: any) => {
  console.log({ props })
  // if (!galleryId || isError) return <p>...no comments</p>

  // if (isLoading) return <div>...is loading comments</div>

  return <div>Comments for gallery {props?.id}</div>
}

export default Comments

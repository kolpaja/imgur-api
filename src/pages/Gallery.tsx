import { useState, useMemo, useEffect, useRef } from "react"

import {
  useGetGalleryCommentsQuery,
  useGetSingleGalleryQuery,
} from "@/features/galleryApi"
import React from "react"
import { useParams } from "react-router-dom"
import Comments from "@/components/GalleryComponents/Comments"
import RootLayout from "@/components/Layouts/RootLayout"

const Gallery = () => {
  const params = useParams()
  const commentsRef = useRef(null)

  const { id } = params

  const { data, isLoading, isError } = useGetSingleGalleryQuery(id)
  console.log("🚀 ~ file: Gallery.tsx:21 ~ Gallery ~ data:", data, {})

  // render comments when it is scrolled

  const {
    isError: isErrorComments,
    isLoading: isLoadingComments,
    data: comments,
  } = useGetGalleryCommentsQuery(id, {
    skip: isLoading,
  })

  if (!id || isError) return <div>...something went wrong</div>

  return (
    <RootLayout>
      <div className="max-w-6xl">
        <div className="min-h-screen">
          <aside>
            actions <a href="#gallery-comments">comments</a>
          </aside>
          <section className="flex flex-col">
            <div>Gallery : {id} </div>
            <div>image</div>
          </section>
          <aside>other actions</aside>
        </div>

        <div id="gallery-comments" ref={commentsRef}>
          <Comments {...comments} />
        </div>
      </div>
    </RootLayout>
  )
}

export default Gallery

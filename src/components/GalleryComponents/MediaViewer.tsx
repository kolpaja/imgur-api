const MediaViewer = ({ mediaObject }: any) => {
  const { type, link, description } = mediaObject

  if (type === "image/jpeg" || type === "image/png" || type === "image/gif") {
    return (
      <div className="flex flex-col">
        <img src={link} alt="Image" crossOrigin="anonymous" />
        {description && <p className="p-3 text-white">{description}</p>}
      </div>
    )
  } else if (type === "video/mp4") {
    return (
      <div className="px-4 md:px-5 lg:px-10 bg-zinc-900/50">
        <video controls width="720" height={mediaObject.height}>
          <source src={link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    )
  } else {
    return <p>Unsupported media type</p>
  }
}

export default MediaViewer

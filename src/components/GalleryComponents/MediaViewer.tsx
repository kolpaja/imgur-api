const MediaViewer = ({ mediaObject }: any) => {
  const { type, link } = mediaObject

  if (type === "image/jpeg" || type === "image/png" || type === "image/gif") {
    return <img src={link} alt="Image" crossOrigin="anonymous" />
  } else if (type === "video/mp4") {
    return (
      <video controls width="720" height={mediaObject.height}>
        <source src={link} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  } else {
    return <p>Unsupported media type</p>
  }
}

export default MediaViewer

const ImageComponent = ({ src, alt }) => {
  if (!src.startsWith("https:") && !src.startsWith("http:"))
    src = `https:${src}`
  return (
    <div className="flex items-center justify-center mx-auto">
      <img src={`${src}`} alt={alt} />
    </div>
  )
}

export default ImageComponent

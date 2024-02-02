export default function Loading() {
  return (
    <div>
      <video
        className="mx-auto flex max-w-md items-center justify-center"
        autoPlay
        loop
        muted
      >
        <source src="/loading.mp4" type="video/mp4" />
        Loading...
      </video>
    </div>
  )
}

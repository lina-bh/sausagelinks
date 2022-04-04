import { useRef } from "preact/hooks"

const Links = ({ children }) => {
  const SCROLL_PIXELS = 150
  const ulRef = useRef(null)
  const scroll = (px) => {
    ulRef.current?.scroll({
      left: ulRef.current?.scrollLeft + px,
      behavior: "smooth",
    })
  }
  return (
    <div
      className="flex w-full overflow-x-auto gap-x-1 mouse-no-scrollbar"
      ref={ulRef}
    >
      <button
        className="sticky left-0 px-2 bg-gradient-to-r from-white touchscreen-hide"
        type="button"
        onClick={() => scroll(-SCROLL_PIXELS)}
      >
        {"⬅"}
      </button>
      {children}
      <button
        className="sticky right-0 px-2 ml-auto bg-gradient-to-l from-white touchscreen-hide"
        type="button"
        onClick={() => scroll(SCROLL_PIXELS)}
      >
        {"⮕"}
      </button>
    </div>
  )
}

const LinksItem = ({ children }) => {
  return (
    <span className="block px-4 py-1 text-blue-700 underline border border-black rounded-full whitespace-nowrap">
      {children}
    </span>
  )
}
Links.Item = LinksItem

export default Links

export default function Load () {
  return (
    <div className="load w-full h-full fixed left-0 top-0 bg-blue z-20 flex items-center justify-center transition-all duration-500">
      <img src="./imgs/spinner.gif" alt="loading spinner" className="w-40" />
    </div>
  )
}
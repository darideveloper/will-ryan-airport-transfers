export default function Menu ({menuItems}) {
  return (
    <div className="menu sm:mt-8 lg:mt-0">
      <nav>
        <ul className="flex flex-col items-center justify-center sm:flex-row">
          {menuItems.map(({text, link}, index) => {
            return (<li key={index}>
              <a href={link} className="py-5 block text-lg text-center text-white opacity-80 uppercase sm:px-5">{text}</a>
            </li>)
          })}
        </ul>
      </nav>

      <button className="w-20 h-20 mx-auto flex items-center justify-center sm:hidden">
        <svg className="w-10 h-10 fill-gold" viewBox="0 0 24 24">
          <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"></path>
        </svg>
      </button>

    </div>
  )
}
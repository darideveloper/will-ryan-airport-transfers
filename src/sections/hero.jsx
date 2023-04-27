import Logo from '../assets/logo'

export default function Hero () {
  return (
    <section className="hero">
      <div className="wrapper-logo mx-auto my-10">
        <Logo 
          image='page-logo.png'
          alt='cancun concierge logo'
          width='250px'
        />
      </div>

      <div className="hero-image relative">
        <img src="/imgs/hero.png" alt="transport image" className="w-full"/>
        <div className="text w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center flex flex-col items-center justify-center">
          <h1 className='text-xl py-2 px-4 sm:text-4xl leading-snug bg-white inline-block lg:text-5xl xl:text-6xl lg:py-5 lg:px-20 '>
            PLEASE BOOK NOW AND SECURE YOUR 
            <br />
            AIRPORT TRANSFER TO YOUR HOTE
          </h1>
          <h2 className='text-lg py-1 px-2 sm:text-2xl -mt-2 bg-white inline-block lg:text-2xl xl:text-3xl lg:py-5 lg:px-20 '>
            We will be happy to provide Airport Transportation
          </h2>
        </div>
      </div>
    </section>
  )
}
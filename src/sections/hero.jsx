import Logo from '../components/logo'

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

        <div className="text-wrapper mt-16 mb-10 w-full z-10 text-center flex flex-col items-center justify-center sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:m-0">
          <h1 className='py-2 px-4 text-4xl leading-snug bg-white inline-block lg:text-5xl xl:text-6xl lg:py-5 lg:px-20 '>
            PLEASE BOOK NOW AND SECURE YOUR 
            <br />
            AIRPORT TRANSFER TO YOUR HOTE
          </h1>
          <h2 className='lg py-1 px-2 text-2xl -mt-2 bg-white inline-block lg:text-2xl xl:text-3xl lg:py-5 lg:px-20 '>
            We will be happy to provide Airport Transportation
          </h2>
        </div>

        <img src="./imgs/hero.png" alt="transport image" className="w-full"/>
      </div>
    </section>
  )
}
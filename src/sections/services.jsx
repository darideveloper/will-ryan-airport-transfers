import Subtitle from '../assets/subtitle'
import ServiceCards from '../assets/service-cards'

export default function Service () {
  return (
    <section className="services container">
      <Subtitle 
        text='Our services include'
      />
      <ServiceCards/>


    </section>
  )
}
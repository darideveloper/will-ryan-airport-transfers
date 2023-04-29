import Subtitle from '../components/subtitle'
import ServiceCards from '../components/service-cards'

export default function Service () {
  return (
    <section className="services container" id='services'>
      <Subtitle 
        text='Our services include'
      />
      <ServiceCards/>
    </section>
  )
}
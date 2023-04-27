import Subtitle from '../components/subtitle'
import ServiceCards from '../components/service-cards'

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
import Subtitle from "../components/subtitle"
import TransportType from "../components/transport-type"

export default function Form () {
  return (
    <section className="buy-form">
      <Subtitle 
        text='Transportation Options'
      />
  
      <TransportType />
    </section>
  )
}
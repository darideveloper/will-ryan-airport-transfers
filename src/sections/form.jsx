import Subtitle from "../components/subtitle"
import TransportTypes from "../components/transport-types"

export default function Form () {
  return (
    <section className="buy-form container">
      <Subtitle 
        text='Transportation Options'
      />
  
      <form action="." method="post">
        <TransportTypes />
      </form>
    </section>
  )
}
import Subtitle from "../components/subtitle"
import TransportTypes from "../components/transport-types"
import Input from "../components/input"
import Select from "../components/select"
import Fieldset from "../components/fieldset"

export default function Form () {

  // Generate passager options
  const maxPassenger = 8
  const passengers = []
  for (let passengerNum = 1; passengerNum <= maxPassenger; passengerNum++) {
    let label = `${passengerNum} passengers`
    if (passengerNum == 1) {
      label = `${passengerNum} passenger`
    }
    passengers.push ({"value": `${passengerNum}`, "label": label})
  }

  // Get hotels
  const hotels = [
    "sample a",
    "sample b",
    "sample c"
  ]

  return (
    <section className="buy-form container">
      <Subtitle 
        text='Transportation Options'
      />
  
      <form action="." method="post" className="mx-auto">
        <TransportTypes />

        <Fieldset title='General'>
          <legend className="title text-xl uppercase mb-3"></legend>
          <Input 
            label='Name'
            placeholder='Enter your name'
            type='text'
            name='name'
            handleUpdate={(e) => console.log (e.target.value)}
          />
          <Input 
            label='Last name'
            placeholder='Enter your last name'
            type='text'
            name='last-name'
            handleUpdate={(e) => console.log (e.target.value)}
          />
          <Select 
            label='Number of passengers'
            name='passengers'
            handleUpdate={(e) => console.log (e.target.value)}
            options={passengers}
            activeOption="2"
          />
          <p className="text-left block w-full text-sm">Maximum eight passengers per van</p>
          <Select 
            label='Hotel'
            name='hotel'
            handleUpdate={(e) => console.log (e.target.value)}
            options={passengers}
            activeOption="sample a"
          />
        </Fieldset>
      </form>
    </section>
  )
}
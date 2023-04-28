import { useState, useEffect } from "react"
import Subtitle from "../components/subtitle"
import TransportTypes from "../components/transport-types"
import Input from "../components/input"
import Select from "../components/select"
import Fieldset from "../components/fieldset"
import FormText from "../components/form-text"

export default function Form () {

  const [activeTransportType, setActiveTransportType] = useState('Arriving')
  const [mediaQuery, setMediaQuery] = useState(false)

  function handleUpdateType (id) {
    // Update active transport type
    setActiveTransportType (id)
  }

  function handleResize () {
    const mediaQuery = window.matchMedia ('(max-width: 768px)')
    setMediaQuery (mediaQuery.matches)
  }

  useEffect (() => {
    // Detect when resize screen and update media query status
    window.addEventListener ('resize', () => {
      handleResize ()      
    })

    // Handle when loads
    handleResize ()

  }, [])


  function getArraivingDepartingForm () {
    // Generate arraiving and departing forms
    
    // Identify active transport type
    const activeForms = activeTransportType.split (",")

    const fieldsets = []
    for (let title of activeForms) {
      let direction = "in"
      if (title == "Departing") {
        direction = "from"
      }

      fieldsets.push (
        <Fieldset title={title} key={title}>
          <legend className="title text-xl uppercase mb-3"></legend>
          <Input
            label={`${title} date`}
            type='date'
            name={`${title.toLowerCase()}-date`}
            handleUpdate={(e) => console.log (e.target.value)}
          />
          <Input
            label={`${title} time ${direction} Cancun`}
            type='time'
            name={`${title.toLowerCase()}-time`}
            handleUpdate={(e) => console.log (e.target.value)}
          />
          <Input
            label='Airline'
            type='text'
            name='airline'
            placeholder="Enter your airline"
            handleUpdate={(e) => console.log (e.target.value)}
          />
          <Input
            label='Flight number'
            type='text'
            name='flight'
            placeholder="Enter your flight number"
            handleUpdate={(e) => console.log (e.target.value)}
          />
          <FormText 
            text={`*In case you have connecting flights, please make sure you provide the info for your actual flight ${title.toLowerCase()} ${direction} Cancun`}
          />
        </Fieldset>
      )
    }

    return fieldsets
  }

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

  // Get hotels from api
  const hotels = [
    {value: "sample a", label: "sample a"},
    {value: "sample b", label: "sample b"},
    {value: "sample c", label: "sample c"},
  ]

  return (
    <section className="buy-form container">
      <Subtitle 
        text='Transportation Options'
      />
  
      <form action="." method="post" className="mx-auto">
        <TransportTypes 
          handleUpdateType={handleUpdateType}
          activeTransportType={activeTransportType}
        />

        <div className="fields w-5/6 mx-auto grid gap-10" style={{gridTemplateColumns: mediaQuery ? "repeat(1, 1fr)" : activeTransportType == "Arriving,Departing" ? "repeat(3, 1fr)" : "repeat(2, 1fr)"}}>
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
            <FormText 
              text="Maximum eight passengers per van"
            />
            <Select 
              label='Hotel'
              name='hotel'
              handleUpdate={(e) => console.log (e.target.value)}
              options={hotels}
              activeOption="sample a"
            />
          </Fieldset>

          {getArraivingDepartingForm()}
        </div>


        
      </form>
    </section>
  )
}
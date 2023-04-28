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
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [hotel, setHotel] = useState('')
  const [hotels, setHotels] = useState('')
  const [arrivingDate, setArrivingDate] = useState('')
  const [arrivingTime, setArrivingTime] = useState('')
  const [arrivingAirline, setArrivingAirline] = useState('')
  const [arrivingFlight, setArrivingFlight] = useState('')
  const [departingDate, setDepartingDate] = useState('')
  const [departingTime, setDepartingTime] = useState('')
  const [departingAirline, setDepartingAirline] = useState('')
  const [departingFlight, setDepartingFlight] = useState('')

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

    // TODO: Get hotels from api
    setHotels([
      {value: "sample a", label: "sample a"},
      {value: "sample b", label: "sample b"},
      {value: "sample c", label: "sample c"},
    ])

  }, [])


  function getArraivingDepartingForm () {
    // Generate arraiving and departing forms
    
    // Identify active transport type
    const activeForms = activeTransportType.split (",")

    const fieldsets = []
    for (let title of activeForms) {

      // Text changes and set functions
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
            handleUpdate={(e) => title == "Arriving" ? setArrivingDate (e.target.value) : setDepartingDate (e.target.value)}
            value={title == "Arriving" ? arrivingDate : departingDate}
          />
          <Input
            label={`${title} time ${direction} Cancun`}
            type='time'
            name={`${title.toLowerCase()}-time`}
            handleUpdate={(e) => title == "Arriving" ? setArrivingTime (e.target.value) : setDepartingTime (e.target.value)}
            value={title == "Arriving" ? arrivingTime : departingTime}
          />
          <Input
            label='Airline'
            type='text'
            name='airline'
            placeholder="Enter your airline"
            handleUpdate={(e) => title == "Arriving" ? setArrivingAirline (e.target.value) : setDepartingAirline (e.target.value)}
            value={title == "Arriving" ? arrivingAirline : departingAirline}
          />
          <Input
            label='Flight number'
            type='text'
            name='flight'
            placeholder="Enter your flight number"
            handleUpdate={(e) => title == "Arriving" ? setArrivingFlight (e.target.value) : setDepartingFlight (e.target.value)}
            value={title == "Arriving" ? arrivingFlight : departingFlight}
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
  const passengersData = []
  for (let passengerNum = 1; passengerNum <= maxPassenger; passengerNum++) {
    let label = `${passengerNum} passengers`
    if (passengerNum == 1) {
      label = `${passengerNum} passenger`
    }
    passengersData.push ({"value": `${passengerNum}`, "label": label})
  }

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
              handleUpdate={(e) => setName (e.target.value)}
              value={name}
            />
            <Input 
              label='Last name'
              placeholder='Enter your last name'
              type='text'
              name='last-name'
              handleUpdate={(e) => setLastName (e.target.value)}
              value={lastName}
            />
            <Select 
              label='Number of passengers'
              name='passengers'
              handleUpdate={(e) => setPassengers (e.target.value)}
              options={passengersData}
              activeOption={passengers}
            />
            <FormText 
              text="Maximum eight passengers per van"
            />
            <Select 
              label='Hotel'
              name='hotel'
              handleUpdate={(e) => setHotel (e.target.value)}
              options={hotels}
              activeOption={hotel}
            />
          </Fieldset>

          {getArraivingDepartingForm()}
        </div>


        
      </form>
    </section>
  )
}
// react
import { useState, useEffect } from "react"

// Components
import Subtitle from "../components/subtitle"
import TransportTypes from "../components/transport-types"
import Input from "../components/input"
import Select from "../components/select"
import Fieldset from "../components/fieldset"
import FormText from "../components/form-text"

// Api
import { getHotels } from "../api/hotels"
import { submitStripe } from "../api/stripe"
import { getTransports } from "../api/transports"
import { getAirbnbMunicipalities } from "../api/airbnb-municipality"

// Context
import LoadContext from '../context/load'
import { useContext } from 'react'

export default function Form() {

  const { loading, setLoading } = useContext(LoadContext)

  const [transports, setTransports] = useState([])
  const [activeTransportType, setActiveTransportType] = useState('Arriving')
  const [activeTransportPrice, setActiveTransportPrice] = useState(0)
  const [mediaQuery, setMediaQuery] = useState(false)
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [passengers, setPassengers] = useState('1')
  const [hotel, setHotel] = useState('Airbnb')
  const [hotels, setHotels] = useState([])
  const [airbnbAddress, setAirbnbAddress] = useState('')
  const [airbnbMunicipality, setAirbnbMunicipality] = useState('')
  const [airbnbMunicipalities, setAirbnbMunicipalities] = useState([])
  const [airbnbMunicipalityPrice, setAirbnbMunicipalityPrice] = useState(0)
  const [arrivingDate, setArrivingDate] = useState('')
  const [arrivingTime, setArrivingTime] = useState('')
  const [arrivingAirline, setArrivingAirline] = useState('')
  const [arrivingFlight, setArrivingFlight] = useState('')
  const [departingDate, setDepartingDate] = useState('')
  const [departingTime, setDepartingTime] = useState('')
  const [departingAirline, setDepartingAirline] = useState('')
  const [departingFlight, setDepartingFlight] = useState('')
  const [total, setTotal] = useState(0)

  function updateTotal (transport, municipality, current_hotel=hotel) {
    // Update total based on hotel or airbnb
    if (current_hotel == "Airbnb") {
      setTotal(transport + municipality)
    } else {
      setTotal(transport)
    }
  }

  function handleUpdateType(id) {
    // Update active transport type
    setActiveTransportType(id)

    // Save price
    const price = transports.find(transport => transport.id == id).price
    setActiveTransportPrice(price)
    
    updateTotal (price, airbnbMunicipalityPrice)
  }

  function handleResize() {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setMediaQuery(mediaQuery.matches)
  }

  function handleSubmit(e) {

    // Don't submit form
    e.preventDefault()

    // Get current service price and name
    const currentService = transports.find(transport => transport.id == activeTransportType)
    const serviceName = currentService.text

    // Submit to stripe
    submitStripe(activeTransportType, serviceName, total, loading, setLoading)
  }

  useEffect(() => {

    let transport, municipality

    // Detect when resize screen and update media query status
    window.addEventListener('resize', () => {
      handleResize()
    })

    // Handle when loads
    handleResize(handleResize())

    // Load api data when mounts
    getHotels().then(apiHotels => {
      setHotels(apiHotels)
      setHotel(apiHotels[0].value)
    })

    getTransports().then(apiTransports => {
      setTransports(apiTransports)
      transport = apiTransports[0].price
      setActiveTransportPrice(transport)
      setTotal(apiTransports[0].price)

      getAirbnbMunicipalities().then(apiAirbnbMunicipalities => {
        setAirbnbMunicipalities(apiAirbnbMunicipalities)
        municipality = apiAirbnbMunicipalities[0].price
        setAirbnbMunicipality(municipality)
        setAirbnbMunicipalityPrice(apiAirbnbMunicipalities[0].price)

        // Update total
        updateTotal (transport, municipality)
      })
    })



  }, [])

  // Renmder again when price changeº
  useEffect(() => { }, [airbnbMunicipalityPrice])


  function getArraivingDepartingForm() {
    // Generate arraiving and departing forms

    // Identify active transport type
    const activeForms = activeTransportType.split(",")

    const fieldsets = []
    for (let title of activeForms) {

      // Text changes and set functions
      let direction = "in"
      if (title == "Departing") {
        direction = "from"
      }

      fieldsets.push(
        <Fieldset title={title} key={title}>
          <legend className="title text-xl uppercase mb-3"></legend>
          <Input
            label={`${title} date`}
            type='date'
            name={`${title.toLowerCase()}-date`}
            handleUpdate={(e) => title == "Arriving" ? setArrivingDate(e.target.value) : setDepartingDate(e.target.value)}
            value={title == "Arriving" ? arrivingDate : departingDate}
          />
          <Input
            label={`${title} time ${direction} Cancun`}
            type='time'
            name={`${title.toLowerCase()}-time`}
            handleUpdate={(e) => title == "Arriving" ? setArrivingTime(e.target.value) : setDepartingTime(e.target.value)}
            value={title == "Arriving" ? arrivingTime : departingTime}
          />
          <Input
            label='Airline'
            type='text'
            name='airline'
            placeholder="Enter your airline"
            handleUpdate={(e) => title == "Arriving" ? setArrivingAirline(e.target.value) : setDepartingAirline(e.target.value)}
            value={title == "Arriving" ? arrivingAirline : departingAirline}
          />
          <Input
            label='Flight number'
            type='text'
            name='flight'
            placeholder="Enter your flight number"
            handleUpdate={(e) => title == "Arriving" ? setArrivingFlight(e.target.value) : setDepartingFlight(e.target.value)}
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
    passengersData.push({ "value": `${passengerNum}`, "label": label })
  }

  return (
    <section className="buy-form container" id="buy">
      <Subtitle
        text='Transportation Options'
      />

      <form action="." method="post" className="mx-auto" onSubmit={e => { handleSubmit(e) }}>
        <TransportTypes
          handleUpdateType={handleUpdateType}
          activeTransportType={activeTransportType}
          transports={transports}
        />

        <div className="fields w-5/6 mx-auto grid gap-10" style={{ gridTemplateColumns: mediaQuery ? "repeat(1, 1fr)" : activeTransportType == "Arriving,Departing" ? "repeat(3, 1fr)" : "repeat(2, 1fr)" }}>
          <Fieldset title='General'>
            <legend className="title text-xl uppercase mb-3"></legend>
            <Input
              label='Name'
              placeholder='Enter your name'
              type='text'
              name='name'
              handleUpdate={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              label='Last name'
              placeholder='Enter your last name'
              type='text'
              name='last-name'
              handleUpdate={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <Select
              label='Number of passengers'
              name='passengers'
              handleUpdate={(e) => setPassengers(e.target.value)}
              options={passengersData}
              activeOption={passengers}
            />
            <FormText
              text="Maximum eight passengers per van"
            />
            <Select
              label='Hotel or Airbnb'
              name='hotel-airbnb'
              handleUpdate={(e) => {
                // Save hotel value
                const value = e.target.value
                setHotel(value)

                // Get active municipality
                let price = airbnbMunicipalityPrice
                if (!airbnbMunicipalityPrice) {
                  price = airbnbMunicipalities[0].price
                }

                // Update total
                console.log ({activeTransportPrice, price})
                updateTotal (activeTransportPrice, price, value)
              }}
              options={hotels}
              activeOption={hotel}
            />

            {/* Render address input or select for airbnbType */}
            {
              (hotel == 'Airbnb') &&
              <>
                <Select
                  label='Resort destination'
                  name='airbnb-municipality'
                  handleUpdate={(e) => {

                    // Update municipality data
                    const value = e.target.value
                    setAirbnbMunicipality(value)

                    // Update total price
                    const municipality = airbnbMunicipalities.find(municipality => municipality.value == value)
                    setAirbnbMunicipalityPrice(municipality.price)
                    updateTotal (activeTransportPrice, municipality.price)

                  }}
                  options={airbnbMunicipalities}
                  activeOption={airbnbMunicipality}
                />
                <Input
                  label='Airbnb address'
                  placeholder='Enter your Airbnb address'
                  type='text'
                  name='airbnb-address'
                  handleUpdate={(e) => setAirbnbAddress(e.target.value)}
                  value={airbnbAddress}
                />
              </>
            }


          </Fieldset>

          {getArraivingDepartingForm()}

        </div>

        <p className="total text-center text-2xl w-fulll block mt-10">
          Total
          <span className="px-2 font-bold">
            {total}.00 USD
          </span>
        </p>
        <input type="submit" value="Buy Now" className="no-collect w-48 mx-auto mt-10 block bg-blue border-blue border-2 text-gold py-3 text-2xl font-bold cursor-pointer rounded-xl transition-all duration-300 hover:rounded-3xl hover:bg-white hover:text-blue" />

      </form>
    </section>
  )
}
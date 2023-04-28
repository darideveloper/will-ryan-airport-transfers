import { useState } from "react"
import TransportType from "./transport-type"

export default function TransportTypes() {

  const [activeTransportType, setActiveTransportType] = useState('airport')

  const transports = [
    { id: "airport", text: "Airport - Hotel Transfer", price: '68.50' },
    { id: "hotel", text: "Hotel - Airport Transfer", price: '68.50' },
    { id: "round", text: "Round Trip - Transfer", price: '137.00' },
  ]

  function handleUpdateType (id) {
    // Update active transport type
    setActiveTransportType (id)
  }

  return (
    <section className="transport-types w-2/3 mx-auto max-w-sm flex flex-col items-center justify-center md:flex-row md:w-full md:max-w-none md:gap-20">

      {transports.map((transport) => (
        <TransportType
          key={transport.id}
          id={transport.id}
          text={transport.text}
          price={transport.price}
          handleUpdateType={handleUpdateType}
          activeTransportType={activeTransportType} // submit active transport type to components
        />
      ))}

    </section>
  )
}
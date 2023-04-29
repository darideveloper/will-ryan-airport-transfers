import { useState, useEffect } from "react"
import PropTypes from 'prop-types'
import TransportType from "./transport-type"
import { getTransports } from "../api/transports"  

export default function TransportTypes({handleUpdateType, activeTransportType}) {

  const [transports, setTransports] = useState([])

  // Load api data when mounts
  useEffect (() => {
    getTransports ().then (apiTransports => {
      setTransports (apiTransports)
    })
  }, [])

  return (
    <section className="transport-types w-2/3 mx-auto max-w-sm flex flex-col items-start justify-center md:flex-row md:w-full md:max-w-none md:gap-20">

      {transports.map((transport) => (
        <TransportType
          key={transport.id}
          id={transport.id}
          text={transport.text}
          price={transport.price}
          handleUpdateType={handleUpdateType}
          transportType={activeTransportType} // submit active transport type to components
          initialActive={transport.initialActive}
        />
      ))}

    </section>
  )
}

TransportTypes.propTypes = {
  handleUpdateType: PropTypes.func.isRequired,
  activeTransportType: PropTypes.string.isRequired,
}
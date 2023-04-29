import PropTypes from 'prop-types'
import { useEffect } from 'react'

export default function TransportType ({id, text, price, handleUpdateType, transportType, initialActive}) {

  function handleChange (e) {
    // Submit activate checked to parent
    handleUpdateType (id)
  }

  // active components with initialActive when loads
  useEffect(() => {
    if (initialActive) {
      handleUpdateType (id)
    }
  }, [])

  return (
    <div className="transport-type">

      <div className="checkbox opacity-80 ms-3">
        <label htmlFor={id} className='flex items-center justify-start mb-10 md:justify-center'>

          <div className="box border-2 w-14 h-8 border-blue flex items-center justify-center">
            {/* Activate this div when selected */}
            <div className="inside bg-blue w-8 h-4" style={{display: transportType == id ? "block" : "none"}}></div>
          </div>

          <div className="text ms-5 w-full block">
            <h3 className='uppercase text-xl'>{text}</h3>
            <span className="price text-gold font-bold text-2xl">{price}</span>
          </div>

        </label>
        
        <input type="radio" name="transport-type" className='hidden no-collect' id={id} onChange={(e) => {handleChange (e)}} checked={transportType == id ? true : false} />
        
      </div>
    </div>
  )
}

TransportType.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleUpdateType: PropTypes.func.isRequired,
  transportType: PropTypes.string.isRequired,
  initialActive: PropTypes.bool.isRequired,
}
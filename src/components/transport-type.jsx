import PropTypes from 'prop-types'

export default function TransportType ({id, text, price, handleUpdateType, activeTransportType}) {

  function handleChange (e) {
    // Submit activate checked to parent
    handleUpdateType (id)
  }

  return (
    <div className="transport-type">

      <div className="checkbox opacity-80 ms-3">
        <label htmlFor={id} className='flex items-center justify-start my-10 md:justify-center'>
          <div className="box border-2 w-14 h-8 border-blue flex items-center justify-center">
            {/* Actiuvate this div when selected */}
            <div className="inside bg-blue w-10 h-4" style={{display: activeTransportType == id ? "block" : "none"}}></div>
          </div>

          <div className="text ms-5">
            <h3 className='uppercase text-xl'>{text}</h3>
            <span className="price text-gold font-bold text-2xl">{price}</span>
          </div>

        </label>
        <input type="radio" name="transport-type" className='hidden' id={id} onChange={(e) => {handleChange (e)}}/>
      </div>
    </div>
  )
}

TransportType.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
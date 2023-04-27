import PropTypes from 'prop-types'

export default function TransportType ({id, text, price}) {

  return (
    <div className="transport-type flex items-center justify-start my-10 md:justify-center">

      <div className="checkbox opacity-80 ms-3">
        <label htmlFor={id} className='border-2 w-14 h-8 border-blue flex items-center justify-center'>
          <div className="inside bg-blue w-10 h-4"></div>
        </label>
        <input type="checkbox" name={id} id={id} className='hidden'/>
      </div>

      <div className="text ms-5">
        <h3 className='uppercase text-xl'>{text}</h3>
        <span className="price text-gold font-bold text-2xl">{price}</span>
      </div>

    </div>
  )
}

TransportType.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
}
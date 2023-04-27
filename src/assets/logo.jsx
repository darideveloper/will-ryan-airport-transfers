import PropTypes from 'prop-types'

export default function PageLogo ({ image, alt, width }) {
  return (
    <div className="logo">
      <img src={`/imgs/${image}`} alt={alt}  style={{width: width}} className="mx-auto"/>
    </div>
  )
}

PageLogo.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
}
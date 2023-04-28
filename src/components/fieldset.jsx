import PropTypes from 'prop-types'

export default function Fieldset ({children, title}) {
  return (
    <fieldset className="flex flex-col items-center justify-center w-5/6 mx-auto mt-10">
      <legend className="title text-xl uppercase">{title}</legend>
      {children}
    </fieldset>
  )
}

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}
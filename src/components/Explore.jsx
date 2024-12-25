
import PropTypes from "prop-types"
import '../styles/Explore.css'

const Explore = ({title}) => {
  return (
    <a className="btn relative inline-grid place-items-center z-[1] rounded-full px-[2em] py-0 aspect-square no-underline bg-white text-dark cursor-pointer">{title}</a>
  )
}

Explore.propTypes = {
    title: PropTypes.string
}

export default Explore
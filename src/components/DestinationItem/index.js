// Write your code here
import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {name, imgUrl} = itemDetails
  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="image" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem

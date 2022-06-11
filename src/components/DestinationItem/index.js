import './index.css'

const DestinationItem = props => {
  const {singledestinationsList} = props
  const {name, imgUrl} = singledestinationsList
  return (
    <li className="single-card-container">
      <p className="name">{name}</p>
      <img className="image-item" src={imgUrl} alt={name} />
    </li>
  )
}
export default DestinationItem

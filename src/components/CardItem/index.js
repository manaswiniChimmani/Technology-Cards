// Write your code here.
import './index.css'

const CardItem = props => {
  const {technology} = props
  const {title, description, imgUrl, className} = technology
  return (
    <li className={`${className}`}>
      <div>
        <h1 className="h1">{title}</h1>
        <p className="p1">{description}</p>
      </div>
      <div className="img">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardItem

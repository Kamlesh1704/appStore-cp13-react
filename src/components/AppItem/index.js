// Write your code here
import './index.css'

const AppItem = props => {
  const {AppItemDetails} = props
  const {appId, appName, imageUrl, category} = AppItemDetails
  return (
    <li className="li" alt="appName">
        <img src={imageUrl} alt={appName}/>
      <p className="para">{appName}</p>
    </li>
  )
}
export default AppItem

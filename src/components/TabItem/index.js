// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeItem, isActive} = props
  const {displayText, tabId} = tabDetails
  const activeTabClass = isActive ? 'activetype' : ''
  const onclicking = () => {
    changeItem(tabId)
  }
  return (
    <li className={`img ${activeTabClass}`}>
    <button onClick={onclicking}>
       {displayText}
      </button>
    </li>
  )
}
export default TabItem

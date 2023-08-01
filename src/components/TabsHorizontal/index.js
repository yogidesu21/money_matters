import './index.css'

const TabsVertical = props => {
  const {tabDetails, id, changeactiveid, activated} = props
  const {name} = tabDetails
  const horizotabClassName = activated ? 'horizoactivatedTab' : 'horizotabsList'
  const buttonClicked = () => {
    changeactiveid(id)
  }
  return (
    <button
      className={horizotabClassName}
      type="button"
      onClick={buttonClicked}
    >
      {/* <img src={imageUrl} alt="" className="tabIcons" /> */}
      <p className="tabName">{name}</p>
    </button>
  )
}
export default TabsVertical

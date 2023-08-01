import './index.css'

const TabsVertical = props => {
  const {tabDetails, id, changeactiveid, activated} = props
  const {name, imageUrl} = tabDetails
  const tabClassName = activated ? 'activatedTab' : 'tabsList'
  const buttonClicked = () => {
    changeactiveid(id)
  }
  return (
    <button className={tabClassName} type="button" onClick={buttonClicked}>
      <img src={imageUrl} alt="" className="tabIcons" />
      <p className="tabName">{name}</p>
    </button>
  )
}
export default TabsVertical

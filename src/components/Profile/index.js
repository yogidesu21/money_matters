import './index.css'

const inputListOne = [
  {name: 'Your name', placeholder: 'Charlene Reed', type: 'text'},
  {name: 'Email', placeholder: 'Charlenereed@gmail.com', type: 'email'},
  {name: 'Date of Birth', placeholder: '25 January 1990', type: 'date'},
  {
    name: 'Permanent Address',
    placeholder: 'San Jose, California,USA',
    type: 'text',
  },
  {name: 'Postal Code', placeholder: '45962', type: 'text'},
]
const inputListTwo = [
  {name: 'Username', placeholder: 'Charlene Reed', type: 'text'},
  {name: 'Password', placeholder: '********', type: 'password'},
  {
    name: 'Present Address',
    placeholder: 'San Jose, California,USA',
    type: 'text',
  },
  {name: 'City', placeholder: 'San Jose', type: 'text'},
  {name: 'Country', placeholder: 'USA', type: 'text'},
]
const section = eachItem => {
  const {name, placeholder, type} = eachItem
  return (
    <div className="inputBar">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        className="input"
        id={name}
        placeholder={placeholder}
      />
    </div>
  )
}
const Profile = props => {
  const {show} = props
  const homeClassName = show ? 'profileContainer' : 'notShow'
  return (
    <div className={homeClassName}>
      {/* Profile Pic */}
      <div>
        <img
          className=""
          alt=""
          src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690706531/profilepic_oakfcq.png"
        />
      </div>
      {/* Profile Details in Profile Tab */}
      <div className="inputsContainer">
        {inputListOne.map(eachItem => section(eachItem))}
      </div>
      <div className="inputsContainer">
        {inputListTwo.map(eachItem => section(eachItem))}
      </div>
    </div>
  )
}

export default Profile

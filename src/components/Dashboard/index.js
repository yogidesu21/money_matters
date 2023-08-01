import {Component} from 'react'

// import Cookies from 'js-cookie'

import TabsVertical from '../TabsVertical'

import Home from '../Home'

import Transaction from '../Transactions'

import Profile from '../Profile'

import './index.css'

const tabsList = [
  {
    id: 'Dashboard',
    name: 'Dashboard',
    imageUrl:
      'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690639200/homeicon_xog34d.png',
  },
  {
    id: 'Transactions',
    name: 'Transactions',
    imageUrl:
      'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690639246/Glyph_fwdrfg.png',
  },
  {
    id: 'Profile',
    name: 'Profile',
    imageUrl:
      'https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690639268/user_icon_byewpk.png',
  },
]

class Dashboard extends Component {
  state = {activeTab: tabsList[0].id}

  changeactiveid = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state

    return (
      <div className="mainContainer">
        {/* Left DashBoard */}
        <div className="leftPanel">
          {/* Company Logo */}
          <div>
            <img
              src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690637916/Logocompanylogo_xtknd9.png"
              alt="Company Logo"
              className="logoStyle"
            />
            {/* Tabs */}
            <ul className="leftTabsContainer">
              {tabsList.map(eachTab => (
                <TabsVertical
                  tabDetails={eachTab}
                  id={eachTab.id}
                  changeactiveid={this.changeactiveid}
                  activated={eachTab.id === activeTab}
                />
              ))}
            </ul>
          </div>
          {/* Footer(or) user Details */}
          <div className="footer">
            <div className="subFooter">
              <img
                className="avatarIcon"
                alt=""
                src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690700403/Avatar_rlgsem.png"
              />
              <div className="textDiv">
                <p>Rhye</p>
                <p>olivia@untitledui.com</p>
              </div>
            </div>
            <img
              className="arrowStyle"
              alt=""
              src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690700442/Icon_ezqktr.png"
            />
          </div>
        </div>
        {/* Right main Container */}
        <div className="rightContainer">
          {/* Right Container Header */}
          <div className="rightHeader">
            <p className="headingStyle">{activeTab}</p>
            <button type="button" className="blueBtn">
              <img
                src="https://res.cloudinary.com/dmvnfqqbb/image/upload/v1690698761/plus_v6nls9.png"
                className="plus"
                alt=""
              />
              <p className="addTransaction">Add Transaction</p>
            </button>
          </div>
          <div className="rightMainContainer">
            <Home show={activeTab === 'Dashboard'} />
            <Transaction show={activeTab === 'Transactions'} />
            <Profile show={activeTab === 'Profile'} />
          </div>
        </div>
      </div>
    )
  }
}
export default Dashboard

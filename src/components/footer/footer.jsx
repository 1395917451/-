import * as React from 'react'
import '@/scss/footer.scss'
import footerData from '@/config/footerData'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer className="footerWrapper">
        <div className="footer_container">
          <div className="footer_main">
            <div className="footer_left">
              <div className="footer_logo">{footerData.logoName}</div>
              <div className="phone_number">{footerData.phoneNumber}</div>
            </div>
            <div className="footer_right">
              {footerData.navbar.map((item, index) => {
                return (
                  <div key={index} className="nav_wrapper">
                    <div className="nav_title">{item.title}</div>
                    <div className="nav_group">
                      {item.list.map((dItem, dIndex) => {
                        return (
                          <div key={dIndex} className="nav_item">
                            {dItem.text}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          Copyright 2018 Nome Tech.All rights reserved.
        </div>
      </footer>
    )
  }
}

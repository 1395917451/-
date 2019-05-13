import * as React from 'react'
import homeData from '@/config/homeData'
import '@/scss/menu.scss'

export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { history } = this.props
    return (
      <div className="menuWrapper">
        <div className="logoBox" />
        <div className="menu_group">
          {homeData.menu.map((item, index) => {
            return (
              <div
                key={index}
                className="menu_item"
                onClick={() => {
                  history.push(item.path)
                }}
              >
                <div className="title">{item.title}</div>
                <div className="text">{item.text}</div>
              </div>
            )
          })}
        </div>
        <div className="language_box">
          <div className="language_text">Chinese</div>
        </div>
      </div>
    )
  }
}

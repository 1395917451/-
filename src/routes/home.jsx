import * as React from 'react'
import '@/scss/home.scss'
import Footer from '@/components/footer/footer'
import Menu from '@/components/menu/menu'
import AppPage from '@/routes/appPage/index'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="homeWrapper">
        <div className="mianContent">
          <div className="mianLeft">
            <Menu history={this.props.history} />
          </div>
          <div className="mainRight">
            <AppPage />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

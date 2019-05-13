import * as React from 'react'
import { Route } from 'react-router-dom'
import HomePage from '@/routes/appPage/homePage'
import AboutUsPage from '@/routes/appPage/aboutUsPage'
import ServicesPage from '@/routes/appPage/servicesPage'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/aboutUs" component={AboutUsPage} />
        <Route exact path="/services" component={ServicesPage} />
      </div>
    )
  }
}

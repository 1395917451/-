import { BrowserRouter, Route, Switch } from 'react-router-dom'
import * as React from 'react'
import Home from './routes/home'

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    )
  }
}

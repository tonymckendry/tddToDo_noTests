import React from 'react'
import ReactDOM from 'react-dom'
import { Meteor } from 'meteor/meteor'

import { Main } from './components/main.jsx'

if (Meteor.isClient) {
    Meteor.startup(() => {
        ReactDOM.render(<Main />, document.getElementById('render-target'))
    })
}

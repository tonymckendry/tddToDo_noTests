import React from 'react'
import PropTypes from 'prop-types'
import { expect } from 'chai'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import { createMuiTheme } from 'material-ui/styles'

import TaskList from '../taskList/taskList'
import { theme } from '../theme/theme'

if (Meteor.isServer) return

configure({ adapter: new Adapter() })

describe('Practice', function() {
    //Material UI setup for enzyme
    const muiTheme = createMuiTheme(theme)
    const context = {
        context: { muiTheme },
        childContextTypes: { muiTheme: PropTypes.object }
    }

    it('is a practice test', function() {
        expect(1 + 1).to.equal(2)
        let wrapper = shallow(<TaskList />, context)
        expect(wrapper.find('Page')).to.have.length(1)
    })
})

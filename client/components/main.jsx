import React from 'react'
import createReactClass from 'create-react-class'
import { observer } from 'mobx-react'
import { OnResize } from 'react-window-mixins'

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'

import { theme } from './theme/theme'
import TaskList from './taskList/taskList'

export const Main = observer(
    createReactClass({
        displayName: 'Main',
        mixins: [OnResize],

        render() {
            let appTheme = createMuiTheme(theme)
            return (
                <MuiThemeProvider theme={appTheme}>
                    <TaskList />
                </MuiThemeProvider>
            )
        }
    })
)

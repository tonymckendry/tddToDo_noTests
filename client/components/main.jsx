import React from 'react'
import { Page } from 'react-layout-components'
import { observer } from 'mobx-react'
import { OnResize } from 'react-window-mixins'

import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'

import { theme } from './theme/theme'

export const Main = observer(
    React.createClass({
        displayName: 'Main',
        mixins: [OnResize],

        render() {
            let appTheme = createMuiTheme(theme)
            let component
            let content = <h1>Hello world</h1>
            component = <Page>{content}</Page>

            return <MuiThemeProvider theme={appTheme}>{component}</MuiThemeProvider>
        }
    })
)

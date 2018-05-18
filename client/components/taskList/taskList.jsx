import React from 'react'
import { observer } from 'mobx-react'

import { Page, VBox, Box } from 'react-layout-components'

import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Dialog, { DialogTitle, DialogActions, DialogContent } from 'material-ui/Dialog'
import Typography from 'material-ui/Typography'
import Toolbar from 'material-ui/Toolbar'
import { FormControlLabel } from 'material-ui/Form'
import Checkbox from 'material-ui/Checkbox'
import TextField from 'material-ui/TextField'
import List, { ListItem, ListItemText, ListSubheader } from 'material-ui/List'

import TaskListState from '../../state/singletons/taskList'

const style = {
    appBarButton: {
        position: 'absolute',
        right: 10
    },
    textField: {
        width: '90%'
    },
    titleInput: { fontWeight: 'bold' },
    dialog: {
        contentContainer: {
            minWidth: 300,
            maxWidth: 600,
            width: '50vw'
        }
    }
}

const TaskList = () => {
    return (
        <Page>
            {renderNewTaskDialog()}
            <AppBar title="To-Do List" position="static">
                <Toolbar>
                    <Typography variant="title">To-Do List</Typography>
                    <Button style={style.appBarButton} onClick={TaskListState.openDialogBox}>
                        + New Task
                    </Button>
                </Toolbar>
            </AppBar>
            {renderList()}
        </Page>
    )
}

export default observer(TaskList)

const renderNewTaskDialog = () => {
    return (
        <Dialog open={TaskListState.dialogBoxOpen}>
            <DialogTitle>
                <Box justifyContent="space-between" style={{ height: 20 }}>
                    New Task
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={TaskListState.newTask.private}
                                onChange={(event, checked) => {
                                    TaskListState.setPrivate(checked)
                                }}
                            />
                        }
                        label="Private"
                    />
                </Box>
            </DialogTitle>
            <DialogContent>
                <VBox style={style.dialog.contentContainer}>
                    <TextField
                        label="Task Title"
                        style={style.textField}
                        inputProps={{ style: style.titleInput }}
                        value={TaskListState.newTask.title}
                        onChange={event => {
                            TaskListState.updateNewTask('title', event.target.value)
                        }}
                    />
                    <TextField
                        label="Description"
                        style={style.textField}
                        onChange={event => {
                            TaskListState.updateNewTask('description', event.target.value)
                        }}
                        value={TaskListState.newTask.description}
                    />
                </VBox>
            </DialogContent>
            <DialogActions>
                <Button onClick={TaskListState.closeDialogBox}>Cancel</Button>
                <Button variant="raised" primary onClick={TaskListState.submitNewTask}>
                    Submit
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const renderList = () => {
    return (
        <List>
            <ListSubheader style={{ textAlign: 'center' }}>Task Count: {TaskListState.taskCount}</ListSubheader>
            {TaskListState.allTasks.map(task => {
                return (
                    <ListItem divider key={task.title} button onClick={task.toggleShowDescription}>
                        <ListItemText primary={task.title} secondary={task.description} />
                    </ListItem>
                )
            })}
        </List>
    )
}

import { observable, action, computed } from 'mobx'

import Task from '../prototypes/task'

class TaskListState {
    @observable allTasks = []
    @observable dialogBoxOpen = false
    @observable newTask = { title: '', description: '', private: false }

    @action
    openDialogBox = () => {
        this.dialogBoxOpen = true
    }

    @action
    closeDialogBox = () => {
        this.dialogBoxOpen = false
    }

    @action
    updateNewTask = (field, value) => {
        this.newTask[field] = value
    }

    @action
    submitNewTask = () => {
        this.allTasks.push(new Task(this.newTask))
        this.newTask = { title: '', description: '', private: false }
        this.closeDialogBox()
    }

    @action
    setPrivate = checked => {
        this.newTask.private = checked
    }

    @computed
    get taskCount() {
        return this.allTasks.length
    }
}

const singleton = new TaskListState()

export default singleton

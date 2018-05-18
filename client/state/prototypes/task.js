import { observable, computed, action } from 'mobx'

class Task {
    constructor(task) {
        this._task = task
    }

    @observable _task
    @observable showDescription = false

    @action
    toggleShowDescription = () => {
        this.showDescription = !this.showDescription
    }

    @computed
    get title() {
        return this._task.title
    }

    @computed
    get description() {
        if (this.showDescription) {
            return this._task.description
        }
    }
}

export default Task

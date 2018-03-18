import { observable, computed, autorun } from 'mobx'

class ObservableTodoStore {
  @observable todos = []
  @observable pendingRequests = 0
  i = 0

  constructor() {
    autorun(() => console.log(this.report))
  }

	@computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed).length
  }

	@computed get report() {
		return this.todos.length === 0 ? "<none>"
      : (
        `Next todo: "${this.todos[0].task}". ` +
        `Progress: ${this.completedTodosCount}/${this.todos.length}`
      )
	}

	addTodo(task) {
		this.todos.push({
      id: this.i++,
			task: task,
			completed: false,
			assignee: null
		})
	}
}

// init for test

const observableTodoStore = new ObservableTodoStore()
observableTodoStore.addTodo("read MobX tutorial")
observableTodoStore.todos[0].completed = true
observableTodoStore.todos[0].task = "grok MobX tutorial"

observableTodoStore.addTodo("try MobX")
observableTodoStore.todos[1].task = "try MobX in own project"

export default observableTodoStore

                        
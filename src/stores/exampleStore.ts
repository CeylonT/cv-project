import { observable, computed, action, makeObservable } from 'mobx'

class ExampleStore {
  constructor() {
    makeObservable(this)
  }
  
  @observable
  name = 'สมศักดิ์ จงรักเป็ด'

  @action
  setName = (name: string) => {
    this.name = name
  }
}

export const exampleStore = new ExampleStore()

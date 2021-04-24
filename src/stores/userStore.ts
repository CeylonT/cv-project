import { action, computed, makeObservable, observable } from 'mobx'

class UserStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  user = null

  @action
  setUser = (user: any) => {
    this.user = user
  }
}

export const userStore = new UserStore()

import { observable, computed, action, makeObservable } from 'mobx'

class LoadingStore {
  constructor() {
    makeObservable(this)
  }

  @observable
  loadingCount = 0

  @computed
  get isLoading() {
    return this.loadingCount > 0
  }

  @action
  increase = () => {
    this.loadingCount++
  }

  @action
  decrease = () => {
    if (this.loadingCount > 0) {
      this.loadingCount--
    }
  }

  @action
  resetLoading = () => {
    this.loadingCount = 0
  }
}

export const loadingStore = new LoadingStore()

import { Props as CoreDialogProps } from 'core/CoreDialog'
import { action, makeObservable, observable } from 'mobx'

export class DialogStore {
  constructor() {
    makeObservable(this)
  }

  private defaultProps: Partial<CoreDialogProps> = {
    onClose: () => this.close(),
    onOk: () => this.close(),
    divider: false,
    center: false,
  }

  @observable
  props: Partial<CoreDialogProps> = this.defaultProps

  @observable
  isOpen = false

  @action
  open = (content: any, props: Partial<CoreDialogProps> = {}) => {
    this.props = { ...this.defaultProps, ...props, children: content }
    this.isOpen = true
  }

  @action
  close = () => {
    this.isOpen = false
  }
}

export const dialogStore = new DialogStore()

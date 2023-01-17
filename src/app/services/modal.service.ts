import { Injectable } from '@angular/core';
interface IModal {
  id: string;
  visible: boolean
}

@Injectable({
  providedIn:'root'
})
export class ModalService {
  public modals: IModal[] = []

  constructor() { }
  
  register(id: string){
    this.modals.push({
      id, 
      visible: false,
    })
  }

  unregister(id: string){
    //remove duplicate ids
    this.modals = this.modals.filter((element) => {
      element.id !== id
    })
  }

  isModalOpen(id: string): boolean {
    //return modal with matching id to event
    //double negation makes a none boolean value a boolean or the Boolean key word
    return Boolean(this.modals.find(element => element.id === id)?.visible)
  }

  toggleModal(id: string){
    //find the modal
    const modal = this.modals.find(element => element.id === id)
    //toggle visible property
    if(modal){
      modal.visible = !modal.visible
    }
  }

}

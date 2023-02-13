import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
isVisible = false;
isLoading = false;
  constructor() { }

  showModal(){
    console.log("I was clicked");
    this.isVisible = !this.isVisible;
  }

  showLoader(){
    this.isVisible = false;
    console.log("I am loading");
    
    this.isLoading = true;
  }
}

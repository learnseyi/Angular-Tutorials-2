import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  btnText:string = "Login";
  constructor(public modal:ModalService){

  }

  userState(){
    return this.btnText = this.modal.isVisible ? "Sign in" : "Sign out"
  }

}

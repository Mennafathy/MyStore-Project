import { CartService } from 'src/app/services/cart.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  @Input() confirmationData: any[] = [];
  @Output() passData = new EventEmitter();
  total:number=0;

  constructor(private cartService: CartService) {

    this.cartService.userData$.subscribe(
      (data) => (this.confirmationData = data)
    );
  }
  passUser() {
    this.passData.emit();
  }
  
}

import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-form',
  imports: [],
  templateUrl: './payment-detail-form.component.html',
  styles: ``,
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService) {
  }

  onSubmit(event: Event) {
    event.preventDefault();

    this.service.postPaymentDetail()
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {console.log(err)}
    });
  }
}

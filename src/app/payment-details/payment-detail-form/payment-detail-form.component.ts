import { Component, inject } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``,
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService, private toastr: ToastrService) {
  }

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true;
    if (form.valid) {
      this.service.postPaymentDetail()
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toastr.success('Payment detail added successfully!', 'Payment Detail Register');
        },
        error: err => {
          this.toastr.error('Failed to add payment detail.', 'Error');
        }
      });
    }
  }
}

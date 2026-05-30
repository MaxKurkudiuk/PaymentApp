import { Component, inject, OnInit } from '@angular/core';
import { PaymentDetailFormComponent } from "./payment-detail-form/payment-detail-form.component";
import { PaymentDetailService } from '../shared/payment-detail.service';
import { PaymentDetail } from '../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-details',
  imports: [PaymentDetailFormComponent],
  templateUrl: './payment-details.component.html',
  styles: ``,
})
export class PaymentDetailsComponent implements OnInit {
  public service = inject(PaymentDetailService);
  private toastr = inject(ToastrService);

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord: PaymentDetail) {
    this.service.formData = Object.assign({}, selectedRecord);
  }

  deleteForm(id: number) {
    if (confirm('Are you sure to delete this record?')) { 
      this.service.deletePaymentDetail(id)
      .subscribe({
        next: res => {
          this.service.list = res as PaymentDetail[];
          this.toastr.error('Deleted successfully!', 'Payment Detail Register');
        },
        error: err => {
          this.toastr.error('Failed to delete payment detail.', 'Error');
        }
      });
    }
  }
}

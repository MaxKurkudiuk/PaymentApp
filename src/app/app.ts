import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PaymentDetailsComponent } from "./payment-details/payment-details.component";

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, PaymentDetails],
  imports: [PaymentDetailsComponent],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected readonly title = signal('PaymentApp');
}

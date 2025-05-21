import { Component, linkedSignal, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'v19n';
  shippingOptions = signal([
    'Standard Shipping',
    'Two-Day Shipping',
    'Overnight Shipping',
  ]);

  // Select the first shipping option by default.
  selectedOption = linkedSignal(() => this.shippingOptions()[0]);

  changeShipping(newOptionIndex: number) {
    this.selectedOption.set(this.shippingOptions()[newOptionIndex]);
  }

  changeMethods() {
    this.shippingOptions.set([
      'ne Standard Shipping',
      'ne Two-Day Shipping',
      'ne Overnight Shipping',
    ]);
  }
}

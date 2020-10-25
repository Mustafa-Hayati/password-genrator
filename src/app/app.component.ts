import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password = "";
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick(): void {
    this.password = Math.random().toString();
  }

  onLettersChange(): void {
    this.includeLetters = !this.includeLetters;
  }

  onNumbersChange(): void {
    this.includeNumbers = !this.includeNumbers;
  }

  onSymbolsChange(): void {
    this.includeSymbols = !this.includeSymbols;
  }
}

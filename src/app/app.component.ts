import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  password = "";
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onButtonClick(): void {
    const numbers = "1234567890";
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const symbols = "!@#$%^&*()";

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }

    if (this.includeNumbers) {
      validChars += numbers;
    }

    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = "";

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
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

  onLengthChange(e: Event): void {
    const parsedValue = parseInt((e.target as HTMLInputElement).value, 10);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }
}

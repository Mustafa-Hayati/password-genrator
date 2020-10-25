import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  onButtonClick(): void {
    console.log("====================================");
    console.log("Button Clicked");
    console.log("====================================");
  }
}

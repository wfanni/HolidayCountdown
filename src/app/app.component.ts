import { Component } from '@angular/core';
import { Ng2FittextModule } from "ng2-fittext";
import { LocalStorageService } from './services/localStorage.service';
import { DatePipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Ng2FittextModule, DatePipe, NgClass, NgIf], // using a custom module to be able to fit font size to device width
  providers: [LocalStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  date: any = this.storageService.getItem("storedDate");
  title: any = this.storageService.getItem("storedTitle");
  isDateSelected: any = this.storageService.getItem("dateSelected");;
  countDownDate: any;
  
  constructor(
    private storageService: LocalStorageService,
  ) {};
  
  // setting new title
  onTitleChange(value: string) {
    this.storageService.setItem("storedTitle", value);
    this.title = this.storageService.getItem("storedTitle");
  }

  // setting date to newly selected date
  onDateChange(value: string) {
    this.storageService.setItem("storedDate", JSON.stringify(new Date(value).getTime()));
    this.date = this.storageService.getItem("storedDate");
    this.storageService.setItem("dateSelected", "true");
    this.isDateSelected = this.storageService.getItem("dateSelected");
  }

  // setting countdown format and updating the countdown timer according to new selected date
  countDown = setInterval(() => {
    let now = new Date().getTime();
    let timeDifference = this.date - now;
    let days = Math.floor(timeDifference/(1000*60*60*24));
    let hours = Math.floor((timeDifference % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((timeDifference % (1000*60*60)) / (1000*60));
    let seconds = Math.floor((timeDifference % (1000*60)) / 1000);
    this.countDownDate = days + " days, " + hours + " h, " + minutes + "m, " + seconds + "s"
  });
}

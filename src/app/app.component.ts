import {
  Component,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
  AfterViewInit,
} from '@angular/core'
import { LocalStorageService } from './services/localStorage.service'
import { DatePipe, NgClass, NgIf, NgStyle } from '@angular/common'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePipe, NgClass, NgIf, NgStyle],
  providers: [LocalStorageService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  date: any = this.storageService.getItem('storedDate')
  title: any = this.storageService.getItem('storedTitle')
  isDateSelected: any = this.storageService.getItem('dateSelected')
  countDownDate: any
  titleFontSize: number = 20
  timeFontSize: number = 20
  texts = ['.title', '.date']
  titleMaxFontSize: number = 300
  timeMaxFontSize: number = 150
  titleMinFontSize: number = 20
  timeMinFontSize: number = 20

  constructor(
    private storageService: LocalStorageService,
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    this.adjustFontSize()
  }
  ngAfterViewInit(): void {
    this.adjustFontSize()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.adjustFontSize()
  }

  adjustFontSize() {
    const containerWidth = window.innerWidth
    const containerHeight = window.innerHeight
    const titleContainer = this.elementRef.nativeElement.querySelector('.title')
    const timeContainer = this.elementRef.nativeElement.querySelector('.date')

    if (titleContainer) {
      const textWidth = titleContainer.scrollWidth
      const textHeight = titleContainer.scrollHeight

      if (textWidth !== 0 && textHeight !== 0) {
        this.renderer.setStyle(titleContainer, 'font-size', this.titleFontSize)
        let widthFontSize = containerWidth / (textWidth / this.titleFontSize)
        let heightFontSize = containerHeight / (textHeight / this.titleFontSize)
        let newFontSize = Math.min(widthFontSize, heightFontSize)
        newFontSize = Math.max(Math.min(newFontSize, this.titleMaxFontSize), this.titleMinFontSize)
        this.titleFontSize = newFontSize
        this.renderer.setStyle(titleContainer, 'font-size', this.titleFontSize + 'px')
      }
    }
    if (timeContainer) {
      const textWidth = timeContainer.scrollWidth
      const textHeight = timeContainer.scrollHeight

      if (textWidth !== 0 && textHeight !== 0) {
        this.renderer.setStyle(timeContainer, 'font-size', this.timeFontSize)
        let widthFontSize = containerWidth / (textWidth / this.timeFontSize)
        let heightFontSize = containerHeight / (textHeight / this.timeFontSize)
        let newFontSize = Math.min(widthFontSize, heightFontSize)
        newFontSize = Math.max(Math.min(newFontSize, this.timeMaxFontSize), this.timeMinFontSize)
        this.timeFontSize = newFontSize
        this.renderer.setStyle(timeContainer, 'font-size', this.timeFontSize + 'px')
      }
    }
  }

  // setting new title
  onTitleChange(value: string) {
    this.storageService.setItem('storedTitle', value)
    this.title = this.storageService.getItem('storedTitle')
    this.adjustFontSize()
  }

  // setting date to newly selected date
  onDateChange(value: string) {
    this.storageService.setItem('storedDate', JSON.stringify(new Date(value).getTime()))
    this.date = this.storageService.getItem('storedDate')
    this.storageService.setItem('dateSelected', 'true')
    this.isDateSelected = this.storageService.getItem('dateSelected')
    this.adjustFontSize()
  }

  // setting countdown format and updating the countdown timer according to new selected date
  countDown = setInterval(() => {
    let now = new Date().getTime()
    let timeDifference = this.date - now
    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
    this.countDownDate = days + ' days, ' + hours + ' h, ' + minutes + 'm, ' + seconds + 's'
  })
}

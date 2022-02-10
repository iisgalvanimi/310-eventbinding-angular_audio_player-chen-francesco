import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'myApp';

  ngOnInit() {
    this.audio = new Audio()
    this.audio.src = ""
  }

  audio : HTMLAudioElement ;
  duration : number = 0;

  playAudio() {
    this.duration = this.audio.duration
    this.audio.load()
    this.audio.play()
  }

  stopAudio() {
    this.audio.pause()
  }

  constructor() {
    this.audio = new Audio()
    this.audio.src = ""
  }

}

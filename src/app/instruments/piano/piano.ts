import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-piano',
  imports: [RouterLink],
  templateUrl: './piano.html',
  styleUrl: './piano.css',
})
export class Piano {
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: any) {
    console.log(event); // TODO: REMOVE LATER

    switch (event.keyCode) {
    case 49: // "1"
      this.playNote(0);
      break;

    case 83: // "s"
      this.playNote(1);
      break;

    case 50: // "2"
      this.playNote(2);
      break;

    case 68: // "d"
      this.playNote(3);
      break;

    case 51: // "3"
      this.playNote(4);
      break;

    case 52: // "4"
      this.playNote(5);
      break;

    case 70: // "f"
      this.playNote(6);
      break;

    case 53: // "5"
      this.playNote(7);
      break;

    case 71: // "g"
      this.playNote(8);
      break;

    case 54: // "6"
      this.playNote(9);
      break;

    case 72: // "h"
      this.playNote(10);
      break;

    case 55: // "7"
      this.playNote(11);
      break;

    case 56: // "8"
      this.playNote(12);
      break;

    case 74: // "j"
      this.playNote(13);
      break;

    case 57: // "9"
      this.playNote(14);
      break;

    case 75: // "k"
      this.playNote(15);
      break;

    case 48: // "0"
      this.playNote(16);
      break;
    }
  }

  displayLetters: boolean = true;
  audio: any =
  [
    new Audio('audio/piano-notes/01-C.mp3'),
    new Audio('audio/piano-notes/02-Csharp.mp3'),
    new Audio('audio/piano-notes/03-D.mp3'),
    new Audio('audio/piano-notes/04-Dsharp.mp3'),
    new Audio('audio/piano-notes/05-E.mp3'),
    new Audio('audio/piano-notes/06-F.mp3'),
    new Audio('audio/piano-notes/07-Fsharp.mp3'),
    new Audio('audio/piano-notes/08-G.mp3'),
    new Audio('audio/piano-notes/09-Gsharp.mp3'),
    new Audio('audio/piano-notes/10-A.mp3'),
    new Audio('audio/piano-notes/11-Asharp.mp3'),
    new Audio('audio/piano-notes/12-B.mp3'),
    new Audio('audio/piano-notes/13-C.mp3'),
    new Audio('audio/piano-notes/14-Csharp.mp3'),
    new Audio('audio/piano-notes/15-D.mp3'),
    new Audio('audio/piano-notes/16-Dsharp.mp3'),
    new Audio('audio/piano-notes/17-E.mp3')
  ];

  toggleLetters(): void {
    this.displayLetters = !this.displayLetters;
  }

  playNote(index: number) {
    this.audio[index].currentTime = 0;
    this.audio[index].play();
  }
}

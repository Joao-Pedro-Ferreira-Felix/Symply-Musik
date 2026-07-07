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
    switch (event.keyCode) {
    case 49: // "1"
      this.playNote(0);
      this.highlightNote(0);
      break;

    case 83: // "s"
      this.playNote(1);
      this.highlightNote(1);
      break;

    case 50: // "2"
      this.playNote(2);
      this.highlightNote(2);
      break;

    case 68: // "d"
      this.playNote(3);
      this.highlightNote(3);
      break;

    case 51: // "3"
      this.playNote(4);
      this.highlightNote(4);
      break;

    case 52: // "4"
      this.playNote(5);
      this.highlightNote(5);
      break;

    case 70: // "f"
      this.playNote(6);
      this.highlightNote(6);
      break;

    case 53: // "5"
      this.playNote(7);
      this.highlightNote(7);
      break;

    case 71: // "g"
      this.playNote(8);
      this.highlightNote(8);
      break;

    case 54: // "6"
      this.playNote(9);
      this.highlightNote(9);
      break;

    case 72: // "h"
      this.playNote(10);
      this.highlightNote(10);
      break;

    case 55: // "7"
      this.playNote(11);
      this.highlightNote(11);
      break;

    case 56: // "8"
      this.playNote(12);
      this.highlightNote(12);
      break;

    case 74: // "j"
      this.playNote(13);
      this.highlightNote(13);
      break;

    case 57: // "9"
      this.playNote(14);
      this.highlightNote(14);
      break;

    case 75: // "k"
      this.playNote(15);
      this.highlightNote(15);
      break;

    case 48: // "0"
      this.playNote(16);
      this.highlightNote(16);
      break;
    }
  }

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
  playNote(index: number) {
    for (let i: number = 0; i < this.noteCssClass.length; ++i) { this.unhighlightNote(i); } // Unhighlights all keys whenever a key is pressed (this ensures only 1 is highlighted at a time)

    this.audio[index].currentTime = 0;
    this.audio[index].play();

    this.audio[index].onended = (event: Event) => { console.log('note ended'); this.unhighlightNote(index); console.log(this.noteCssClass); }; // TODO: THIS RIGHT HERE IS WORKING, JUST NOT REFRESHING
  }

  displayLetters: boolean = true;
  toggleLetters(): void {
    this.displayLetters = !this.displayLetters;
  }

  /* CSS class name for the highlights is "white-key.highlight" and "black-key.highlight" */
  noteCssClass: string[] = [ "white-key", "black-key", "white-key", "black-key", "white-key", "white-key", "black-key", "white-key", "black-key", "white-key", "black-key", "white-key", "white-key", "black-key", "white-key", "black-key", "white-key" ]
  highlightNote(index: number) {
    this.noteCssClass[index] += " highlight";
  }
  unhighlightNote(index: number) {
    this.noteCssClass[index] = this.noteCssClass[index].split(' ')[0];
  }
}

import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guitar',
  imports: [RouterLink],
  templateUrl: './guitar.html',
  styleUrl: './guitar.css',
})
export class Guitar {
    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: any) {
      switch (event.keyCode) {
      case 49: // "1"
        this.playNote(0);
        this.highlightNote(0);
        break;

      case 50: // "2"
        this.playNote(1);
        this.highlightNote(1);
        break;

      case 51: // "3"
        this.playNote(2);
        this.highlightNote(2);
        break;

      case 52: // "4"
        this.playNote(3);
        this.highlightNote(3);
        break;

      case 53: // "5"
        this.playNote(4);
        this.highlightNote(4);
        break;

      case 54: // "6"
        this.playNote(5);
        this.highlightNote(5);
        break;

      case 55: // "7"
        this.playNote(6);
        this.highlightNote(6);
        break;

      case 56: // "8"
        this.playNote(7);
        this.highlightNote(7);
        break;

      case 57: // "9"
        this.playNote(8);
        this.highlightNote(8);
        break;

      case 48: // "0"
        this.playNote(9);
        this.highlightNote(9);
        break;
      }
    }

    audio: any =
    [
      new Audio('audio/guitar-notes/01-C.mp3'),
      new Audio('audio/guitar-notes/02-D.mp3'),
      new Audio('audio/guitar-notes/03-E.mp3'),
      new Audio('audio/guitar-notes/04-F.mp3'),
      new Audio('audio/guitar-notes/05-G.mp3'),
      new Audio('audio/guitar-notes/06-A.mp3'),
      new Audio('audio/guitar-notes/07-B.mp3'),
      new Audio('audio/guitar-notes/08-C.mp3'),
      new Audio('audio/guitar-notes/09-D.mp3'),
      new Audio('audio/guitar-notes/10-E.mp3'),
    ];
    playNote(index: number) {
      for (let i: number = 0; i < this.noteCssClass.length; ++i) { this.unhighlightNote(i); } // Unhighlights all keys whenever a key is pressed (this ensures only 1 is highlighted at a time)

      this.audio[index].currentTime = 0;
      this.audio[index].play();

      this.audio[index].onended = (event: Event) => { console.log('note ended'); this.unhighlightNote(index); console.log(this.noteCssClass); }; // TODO: THIS RIGHT HERE IS WORKING, JUST NOT REFRESHING
    }

    /* CSS class name for the highlights is "white-key.highlight" and "black-key.highlight" */
    noteCssClass: string[] = [ "guitar-string", "guitar-string", "guitar-string", "guitar-string", "guitar-string", "guitar-string", "guitar-string", "guitar-string", "guitar-string", "guitar-string" ]
    highlightNote(index: number) {
      this.noteCssClass[index] += " highlight";
    }
    unhighlightNote(index: number) {
      this.noteCssClass[index] = this.noteCssClass[index].split(' ')[0];
    }
}

import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-piano',
  imports: [RouterLink],
  templateUrl: './piano.html',
  styleUrl: './piano.css',
})
export class Piano {
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

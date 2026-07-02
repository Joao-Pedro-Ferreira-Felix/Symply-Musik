import { Routes } from '@angular/router';
import { Home } from '../app/home/home'
import { Piano } from '../app/instruments/piano/piano'
import { Drums } from '../app/instruments/drums/drums'
import { Guitar } from '../app/instruments/guitar/guitar'

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page'
  },
  {
    path: 'piano',
    component: Piano,
    title: 'Play the Piano'
  },
  {
    path: 'drums',
    component: Drums,
    title: 'Play the Drums'
  },
  {
    path: 'guitar',
    component: Guitar,
    title: 'Play the Guitar'
  }
];

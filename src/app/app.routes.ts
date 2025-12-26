import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Projects } from './pages/projects/projects';
import { Internships } from './pages/internships/internships';
import { Hobbies } from './pages/hobbies/hobbies';
import { CivilEngagement } from './pages/civil-engagement/civil-engagement';

export const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'projects', component: Projects },
  { path: 'internships', component: Internships },
  { path: 'hobbies', component: Hobbies },
  { path: 'civil-engagement', component: CivilEngagement },
];

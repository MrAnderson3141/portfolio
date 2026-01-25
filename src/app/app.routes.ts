import { Routes } from '@angular/router';
import { Welcome } from './welcome/welcome/welcome';
import { Project } from './project/project/project';
import { Experience } from './experience/experience/experience';
import { Hobbies } from './hobbies/hobbies/hobbies';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: Welcome },
    { path: 'project', component: Project },
    { path: 'experience', component: Experience },
    { path: 'hobbies', component: Hobbies },
  ];  

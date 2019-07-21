import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './pages/character/character.component';
import { CharacterSearchComponent } from './pages/search/character/character-search.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'character', component: CharacterSearchComponent, pathMatch: 'full' },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

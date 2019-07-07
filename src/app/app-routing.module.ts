import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharacterSearchComponent } from './pages/search/character/character-search.component';
import { CalendarComponent } from './pages/calendar/calendar.component';


const routes: Routes = [
  { path: 'character', component: CharacterSearchComponent, pathMatch: 'full' },
  { path: 'character/:id', component: CharacterComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

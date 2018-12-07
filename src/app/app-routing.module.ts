import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharacterSearchComponent } from './pages/search/character-search/character-search.component';


const routes: Routes = [
  {path: 'character', component: CharacterSearchComponent, pathMatch: 'full' },

  {path: 'character/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

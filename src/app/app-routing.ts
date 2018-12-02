import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';
import { CharacterSearchComponent } from './search/character-search/character-search/character-search.component';


const routes: Routes = [
  {path: 'chracter', component: CharacterSearchComponent, pathMatch: 'full' },

  {path: 'character/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

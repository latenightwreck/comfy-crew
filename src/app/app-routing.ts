import { RouterModule, Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { CharacterComponent } from './character/character.component';


const routes: Routes = [
  {path: '', component: SearchBarComponent, pathMatch: 'full' },
  {path: 'character/:id', component: CharacterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

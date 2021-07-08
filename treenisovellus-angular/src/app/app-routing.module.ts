import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { FaqsComponent } from './faqs/faqs.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'faqs' },
  {
    path: 'albums',
    component: AlbumsComponent,
  },
  {
    path: 'faqs',
    component: FaqsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

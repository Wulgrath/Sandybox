import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddAlbumComponent } from './add-album/add-album.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from 'src/pipes/currency.pipe';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { counterReducer } from './store/reducers/amateur.reducer';
import { albumReducer } from './store/reducers/album.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FaqsComponent } from './faqs/faqs.component';
import { faqReducer } from './store/reducers/faq.reducer';

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AddAlbumComponent,
    CustomCurrencyPipe,
    FaqsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      albums: albumReducer,
      faqs: faqReducer,
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot(effects),
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

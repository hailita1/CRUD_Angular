import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DanhMucComponent} from './danh-muc/danh-muc.component';
import {ThemDanhMucComponent} from './them-danh-muc/them-danh-muc.component';
import {ActivatedRoute, RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {EditDanhMucComponent} from './edit-danh-muc/edit-danh-muc.component';

const routes: Routes = [
  {
    path: '', component: DanhMucComponent
  },

  {
    path: 'them-danh-muc', component: ThemDanhMucComponent
  },
  {
    path: 'edit/:id', component: EditDanhMucComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DanhMucComponent,
    ThemDanhMucComponent,
    EditDanhMucComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

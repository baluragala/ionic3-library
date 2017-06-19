import { AppHeaderComponentModule } from './../../components/app-header/app-header.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BookmarksPage } from './bookmarks';

@NgModule({
  declarations: [
    BookmarksPage,
  ],
  imports: [
    IonicPageModule.forChild(BookmarksPage),
    AppHeaderComponentModule
  ],
  exports: [
    BookmarksPage
  ]
})
export class BookmarksPageModule {}

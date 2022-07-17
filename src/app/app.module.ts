import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { SummaryComponent } from './summary/summary.component'
import { ElementsComponent } from './elements/elements.component'
import { ContentComponent } from './content/content.component'
import { SidebarComponent } from './sidebar/sidebar.component'
import { CommonService } from './common.service'
import { OrderBy } from "./utils/orderBy.pipe"
import { Limit } from "./utils/limit.pipe"


@NgModule({
  declarations: [
    OrderBy,
    Limit,
    AppComponent,
    SummaryComponent,
    ElementsComponent,
    ContentComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})

export class AppModule { }

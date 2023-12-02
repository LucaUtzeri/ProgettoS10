import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './components/todo/todo.component';
import { CompletedComponent } from './components/completed/completed.component';

const routes: Route[] = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'completed',
    component: CompletedComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TodosComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

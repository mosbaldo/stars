import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailComponent } from './containers/user-detail/user-detail.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { InitialsUserPipe } from './pipes/initials-user.pipe';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatIconModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { IndexActions } from './actions';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
  CommonModule,
    RouterModule.forChild([
      {
        path: ':id',
        component: UserDetailComponent
      },
      { path: '', component: UserListComponent }
    ]),
    StoreModule.forFeature('users', reducers),
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  declarations: [
    UserCardComponent,
    UserDetailComponent,
    UserListComponent,
    InitialsUserPipe
  ],
  providers: [
    IndexActions
  ]
})
export class UsersModule { }

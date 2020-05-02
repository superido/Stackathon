import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from '../../services/User.service';
import { RegisterComponent } from './register/register.component';

import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UserRoutingModule,
    NgbAlertModule
  ],
  declarations: [LoginComponent, RegisterComponent, UserComponent],
  providers: [ UserService ],
})
export class UserModule {}

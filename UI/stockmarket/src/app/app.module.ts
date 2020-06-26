import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { HttpUtil } from './util/http.util';
import { MoneyPipe } from './pipe/money.pipe';

import { FooterComponent } from './component/footer/footer.component';
import { IndexModule } from './pages/index/index.module';
import { UserModule } from './pages/user/user.module';

@NgModule({
  declarations: [AppComponent, FooterComponent, MoneyPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule,
    IndexModule,
    NgbAlertModule,
  ],
  providers: [
    HttpUtil,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { HomeComponent } from './pages/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { authInterceptorProviders } from './service/auth.interceptor';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { UserDashBoardComponent } from './pages/user-dash-board/user-dash-board.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { WelcomeAdminComponent } from './pages/welcome-admin/welcome-admin.component';
import { ViewcatagoryadminComponent } from './pages/viewcatagoryadmin/viewcatagoryadmin.component';
import { AddcatagoryadminComponent } from './pages/addcatagoryadmin/addcatagoryadmin.component';
import { ViewquizesadminComponent } from './pages/viewquizesadmin/viewquizesadmin.component';
import { AddquizadminComponent } from './pages/addquizadmin/addquizadmin.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizAdminComponent } from './pages/update-quiz-admin/update-quiz-admin.component';
import { UpdatecatagoryadminComponent } from './pages/updatecatagoryadmin/updatecatagoryadmin.component';
import { ViewQuizQuestionComponent } from './pages/view-quiz-question/view-quiz-question.component';
import { AddquestionadminComponent } from './pages/addquestionadmin/addquestionadmin.component';
import { UpdateQuestionAdminComponent } from './pages/update-question-admin/update-question-admin.component';
import { UsersidebarComponent } from './pages/user-dash-board/usersidebar/usersidebar.component';
import { LoadQuestioncatagoryComponent } from './pages/user-dash-board/load-questioncatagory/load-questioncatagory.component';
import { PreInstructionQuizComponent } from './pages/user-dash-board/pre-instruction-quiz/pre-instruction-quiz.component';
import { StartQuizComponent } from './pages/user-dash-board/start-quiz/start-quiz.component';
import { ViewAllQuizesNormalComponent } from './pages/user-dash-board/view-all-quizes-normal/view-all-quizes-normal.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashBoardComponent,
    UserDashBoardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeAdminComponent,
    ViewcatagoryadminComponent,
    AddcatagoryadminComponent,
    ViewquizesadminComponent,
    AddquizadminComponent,
    UpdateQuizAdminComponent,
    UpdatecatagoryadminComponent,
    ViewQuizQuestionComponent,
    AddquestionadminComponent,
    UpdateQuestionAdminComponent,
    UsersidebarComponent,
    LoadQuestioncatagoryComponent,
    PreInstructionQuizComponent,
    StartQuizComponent,
    ViewAllQuizesNormalComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

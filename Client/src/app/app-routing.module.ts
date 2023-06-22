import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDashBoardComponent } from './pages/user-dash-board/user-dash-board.component';
import { AdminGuard } from './service/admin.guard';
import { NormalGuard } from './service/normal.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeAdminComponent } from './pages/welcome-admin/welcome-admin.component';
import { ViewcatagoryadminComponent } from './pages/viewcatagoryadmin/viewcatagoryadmin.component';
import { AddcatagoryadminComponent } from './pages/addcatagoryadmin/addcatagoryadmin.component';
import { ViewquizesadminComponent } from './pages/viewquizesadmin/viewquizesadmin.component';
import { AddquizadminComponent } from './pages/addquizadmin/addquizadmin.component';
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


const routes: Routes = [
  {
    path:'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch: 'full',
  },
  {
    path:'',
    component :HomeComponent,
    pathMatch: 'full',

  },
  {
    path:'admin',
    component : DashBoardComponent,
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component : WelcomeAdminComponent,
        pathMatch: 'full',
    
      },
      {
        path:'profile',
        component : ProfileComponent,
        pathMatch: 'full',
    
      },
      {
        path:'catagory',
        component : ViewcatagoryadminComponent,
        pathMatch: 'full',

      },
      {
        path:'addcatagory',
        component : AddcatagoryadminComponent,
        pathMatch: 'full',

      },

      {
        path: 'viewcatagory/:cid',
        component: UpdatecatagoryadminComponent,
        pathMatch: 'full',
      },
      {
        path:'quiz',
        component : ViewquizesadminComponent,
        pathMatch: 'full',

      },
      {
        path:'addQuiz',
        component : AddquizadminComponent,
        pathMatch: 'full',

      },
      {
        path:'quiz/:quizId',
        component : UpdateQuizAdminComponent,

      },
      {
        path:'updateQuiz',
        component : UpdateQuizAdminComponent,

      },
      {
        path:'viewQuestion/:quizid/:quiztitle',
        component : ViewQuizQuestionComponent,
      },

      {
        path:'addQuestion/:quizid/:quiztitle',
        component : AddquestionadminComponent,
      },
      {
        path:'viewQuestion/:qstnId',
        component : UpdateQuestionAdminComponent,
      },
    ]
  },
  {
    path:'normal',
    component : UserDashBoardComponent,
    canActivate:[NormalGuard],
    children:[
     
      {
        path:'viewQuiz/:catId/:catTitle',
        component : LoadQuestioncatagoryComponent,
      },
      {
        path:'instructionQuiz/:quizzzId',
        component : PreInstructionQuizComponent,
        pathMatch: 'full',
      },
      {
        path:'viewAllquiz',
        component : ViewAllQuizesNormalComponent,
        pathMatch: 'full',
      },
    ]
  },
  {
    path:'start/:qId',
    component:StartQuizComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

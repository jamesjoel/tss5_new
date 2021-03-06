import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { TdfComponent } from './tdf/tdf.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Rforms2Component } from './rforms2/rforms2.component';


const routes: Routes = [
  {
    path:"student",
    component: StudentComponent
  },
  {
    path:"departments",
    component: DepartmentListComponent
  },
  {
    path:"forms2",
    component:Rforms2Component
  },
  {
    path: "departments/:id",
    component: DepartmentDetailComponent
  },
  {
    path: "form",
    component: TdfComponent
  },
  {
    path:"reactive-form",
    component:ReactiveformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { EmpstoreService } from './services/empstore.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { EmpstoreFormComponent } from './components/empstore-form/empstore-form.component';
import { EmpstoreListComponent } from './components/empstore-list/empstore-list.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
     
        EmpstoreFormComponent,
        EmpstoreListComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'empstore', pathMatch: 'full' },
            { path: 'empstore/:id', component: EmpstoreFormComponent },
            { path: 'empstore', component: EmpstoreListComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers:[
        EmpstoreService
    ]
})
export class AppModuleShared {
}

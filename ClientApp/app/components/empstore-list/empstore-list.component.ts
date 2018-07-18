import { EmpstoreService } from './../../services/empstore.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empstore-list',
  templateUrl: './empstore-list.component.html',
  styleUrls: ['./empstore-list.component.css']
})
export class EmpstoreListComponent implements OnInit {

    empstores: any;
    constructor(
        private empstoreService: EmpstoreService
    ) { }

    ngOnInit() {
        this.empstoreService.getEmpstores()
            .subscribe(empstores => this.empstores = empstores);
    }

}
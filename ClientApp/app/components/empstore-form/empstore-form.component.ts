
import { EmpstoreService } from './../../services/empstore.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-empstore-form',
  templateUrl: './empstore-form.component.html',
  styleUrls: ['./empstore-form.component.css']
})
export class EmpstoreFormComponent implements OnInit {

  empstore = {
    id: 0,
    // name: "",
    // city: "",
    // department: "",
    // salary: 0
  };

   id:any;
  name: any;
  city: any;
  department: any;
  salary: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private empstoreService: EmpstoreService) {
     // this.empstore.id = route.snapshot.params['id'];
      this.id = route.snapshot.params['id'];
    //  console.log(this.empstore.id);
     route.params.subscribe(p => {
     this.empstore.id = +p['id'];
     }, err => {
       if (err.status == 404)
        this.router.navigate(['/empstore']);
     });
  }
  
  ngOnInit() {
    this.empstoreService.getempstore(this.id)
      .subscribe(b => {
        this.empstore = b;
      });
  }

  submit() {
    console.log(this.empstore);
    if (this.id != 0) {
        console.log("if");
      this.empstoreService.update(this.empstore)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/empstore'])
        });
    }
    else {
        console.log("else");
      this.empstoreService.create(this.empstore)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/empstore'])
        });
    }
  }

  delete() {
    if (confirm("Are you sure?")) {
      this.empstoreService.delete(this.id)
        .subscribe(x => {
          console.log(x),
            this.router.navigate(['/empstore'])
        });
    }
  }

}

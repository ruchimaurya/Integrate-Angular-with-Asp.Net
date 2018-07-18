import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpstoreService {

    constructor(private http: Http) { }
    create(empstore: any) {
        console.log("In create method");
        return this.http.post('/api/empstores', empstore)
      .map(res => res.json());
  }
  getempstore(id:any){
    return this.http.get('/api/empstores/' + id)
      .map(res => res.json());
  }
  update(empstore:any){
    console.log(empstore);
    return this.http.put('/api/empstores/' + empstore.id, empstore)
      .map(res => res.json());
  }
  delete(id:any){
    return this.http.delete('/api/empstores/' + id)
      .map(res => res.json());
  }
  getEmpstores()
  {
    return this.http.get('/api/empstores')
      .map(res => res.json());
  }

}


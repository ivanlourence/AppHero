import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private apiService: ApiService) {
      this.create();
    //this.read();
    //this.update();
    //this.delete();
  }

  create() {
    const data:any = {
      id: '0',
      name:'string'
    };

    this.apiService.create(data).subscribe(data => {
      console.log(data);
    })
  }

  read() {
    this.apiService.read().subscribe(data => {
      console.log(data);
    });
  }

  update() {
    const data: any = {
      id:0,
    }
    this.apiService.update(data).subscribe(data => {
      console.log(data);
    });
  }

  delete() {
    this.apiService.delete().subscribe(data => {
      console.log(data);
    });
  }




}

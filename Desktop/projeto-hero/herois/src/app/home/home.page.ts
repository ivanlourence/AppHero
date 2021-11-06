import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NavController, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { HeroCreatePage } from 'src/pages/hero-create/hero-create.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  hero: Observable<any>

  constructor(private apiService: ApiService,
              public navCtrl:NavController,
              private toast: ToastController) {

     //this.hero = this.provider.getAll();

    this.create();
    this.read();
    this.update();
    this.delete();
  }

  id: string;


  create() {
    const data: any = {
      id: '0',
      name: 'string'
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
      id: 0,
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

  newContact(){
    this.navCtrl.navigateForward('HeroCreatePage');
  }

  edit(){
    this.navCtrl.navigateForward('HeroCreatePage');
  }

  remove(id:string) {

  }

}

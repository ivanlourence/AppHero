import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(
              public navCtrl: NavController,
              public api: ApiService,
              public http: HttpClient) { }

      // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
      ngOnInit() {
       this.readData();
      }



      readData() {
        this.api.getNews().subscribe(data => {
          console.log(data)
        })
      }


     //this.hero = this.provider.getAll();

    /* this.create();
    this.read();
    this.update();
    this.delete(); */

 //id: string;


 /*  create() {
    const data: any = {
      id: '0',
      name: 'string'
    };

    this.apiService.create(data).subscribe(data => {
      console.log(data);
    });
  } */

 /*  read() {
    this.apiService.read().subscribe(data => {
      console.log(data);
    });
  }
 */
  /* update() {
    const data: any = {
      id: 0,
    };
    this.apiService.update(data).subscribe(data => {
      console.log(data);
    });
  } */

  /* delete() {
    this.apiService.delete().subscribe(data => {
      console.log(data);
    });
  } */

  register(){
    this.navCtrl.navigateForward('hero-create');
  }

  edit(){
    this.navCtrl.navigateForward('HeroCreatePage');
  }

  remove(id: string) {

  }

}

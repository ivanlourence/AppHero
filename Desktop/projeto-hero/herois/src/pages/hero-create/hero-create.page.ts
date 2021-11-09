import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController, NavParams, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-hero-create',
  templateUrl: './hero-create.page.html',
  styleUrls: ['./hero-create.page.scss'],
})
export class HeroCreatePage implements OnInit {

  hero: any;
  title: string;
  form: FormGroup;

  constructor(

    //public navParams: NavParams,
   /*  private formBuilder: FormBuilder, */
    private toast: ToastController,
    public router: Router,
    public navCtrl: NavController) {

    //this.hero = this.navParams.data.hero || {};
    //this.createForm();
    //this.setuPageTitle();

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }


 /*  private setuPageTitle() {
    this.title = this.navParams.data.hero ? 'Edit' : 'New Register';
  } */


 /*  createForm() {
    this.form = this.formBuilder.group({
      categoryId: [this.hero.data.categoryId, Validators.required],
      name: [this.hero.data.name, Validators.required]
    })
  } */

 /*  onSubmit() {
    if (this.form.valid) {
      this.form.value
        .then(() => {
          this.toast.create({ message: 'Héroi Salvo com Sucesso'});
          this.navCtrl.pop();
        })
        .catch();

    }
  } */

  voltar() {
    this.navCtrl.pop();
  }

}


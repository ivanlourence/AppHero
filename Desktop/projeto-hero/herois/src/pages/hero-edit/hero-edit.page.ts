import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-hero-edit',
  templateUrl: './hero-edit.page.html',
  styleUrls: ['./hero-edit.page.scss'],
})
export class HeroEditPage implements OnInit {

  id: number;

  constructor(
    public activatedRoute: ActivatedRoute,
    public router: Router,
    public apiService: ApiService
  ) {

  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    //get item details using id
   /*  this.apiService.getItem(this.id).subscribe(response => {
      console.log(response);
      this.data = response;
    }) */
  }

  update() {
  }

}

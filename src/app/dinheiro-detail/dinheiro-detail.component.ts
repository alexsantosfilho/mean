import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dinheiro-detail',
  templateUrl: './dinheiro-detail.component.html',
  styleUrls: ['./dinheiro-detail.component.css']
})
export class DinheiroDetailComponent implements OnInit {

  dinheiro = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getDinheiroDetails(this.route.snapshot.params['id']);
  }

  getDinheiroDetails(id) {
    this.api.getDinheiro(id)
      .subscribe(data => {
        console.log(data);
        this.dinheiro = data;
      });
  }

  deleteDinheiro(id) {
    this.api.deleteDinheiro(id)
      .subscribe(res => {
          this.router.navigate(['/dinheiros']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}

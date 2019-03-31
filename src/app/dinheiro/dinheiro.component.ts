import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-dinheiro',
  templateUrl: './dinheiro.component.html',
  styleUrls: ['./dinheiro.component.css']
})
export class DinheiroComponent implements OnInit {

  dinheiros: any;
  displayedColumns = ['valorimovel', 'Percentualentrada', 'taxafinanciamento', 'quantidadeparcelas', 'valorEntrada' ];
  dataSource = new DinheiroDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getDinheiros()
      .subscribe(res => {
        console.log(res);
        this.dinheiros = res;
      }, err => {
        console.log(err);
      });
  }
}

export class DinheiroDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super();
  }

  connect() {
    return this.api.getDinheiros();
  }

  disconnect() {

  }
}

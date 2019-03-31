import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinheiro-create',
  templateUrl: './dinheiro-create.component.html',
  styleUrls: ['./dinheiro-create.component.css']
})
export class DinheiroCreateComponent implements OnInit {

  dinheiroForm: FormGroup;
  valorimovel: number;
  Percentualentrada: number;
  quantidadeparcelas: number;
  taxafinanciamento: number;
  valorEntrada = 100;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.dinheiroForm = this.formBuilder.group({
      'valorimovel' : [null, Validators.required],
      'Percentualentrada' : [null, Validators.required],
      'quantidadeparcelas' : [null, Validators.required],
      'taxafinanciamento' : [null, Validators.required],
      'valorEntrada' : this.valorEntrada,
    });
  }

  onFormSubmit(form: NgForm) {
    console.log('form:', form);
    this.api.postDinheiro(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/dinheiro-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}

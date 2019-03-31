import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinheiro-edit',
  templateUrl: './dinheiro-edit.component.html',
  styleUrls: ['./dinheiro-edit.component.css']
})
export class DinheiroEditComponent implements OnInit {

  dinheiroForm: FormGroup;
  id: number;
  valorimovel: number;
  Percentualentrada: number;
  quantidadeparcelas: number;
  taxafinanciamento: number;
  valorEntrada: number;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getDinheiro(this.route.snapshot.params['id']);
    this.dinheiroForm = this.formBuilder.group({
      'valorimovel' : [null, Validators.required],
      'Percentualentrada' : [null, Validators.required],
      'quantidadeparcelas' : [null, Validators.required],
      'taxafinanciamento' : [null, Validators.required],
      'valorEntrada' : this.valorEntrada
    });
  }

  getDinheiro(id) {
    this.api.getDinheiro(id).subscribe(data => {
      this.id = data._id;
      this.dinheiroForm.setValue({
        valorimovel: data.valorimovel,
        Percentualentrada: data.Percentualentrada,
        quantidadeparcelas: data.quantidadeparcelas,
        taxafinanciamento: data.taxafinanciamento,
        valorEntrada: data.valorEntrada
      });
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.updateDinheiro(this.id, form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/dinheiro-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  dinheiroDetails() {
    this.router.navigate(['/dinheiro-details', this.id]);
  }
}

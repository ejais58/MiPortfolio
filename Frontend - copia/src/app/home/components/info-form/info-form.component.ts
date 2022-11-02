import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from '../../services/home.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent implements OnInit {
 
  miFormulario: FormGroup = this.fb.group({
    name:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    msg:['', [Validators.required]]
  });
  constructor(private fb: FormBuilder, private homeService: HomeService) {}

  ngOnInit(): void {
    
  }

  mensaje(){
    console.log(this.miFormulario.value);
    let {name, email, msg} = this.miFormulario.value;
    this.homeService.mensaje(name, email, msg).subscribe(respuesta =>{
      console.log(respuesta);
      if (respuesta === true){
        console.log('enviado');
        Swal.fire('éxito', 'Mensaje enviado con éxito', 'success')
      }else{
        console.log('cancelado');
        Swal.fire('error', respuesta, 'error');
      }
    })
  }

  

}

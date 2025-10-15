import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: Auth,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      name: [null, [Validators.required]]
    })
  }

  submitForm() {
    this.authService.register(this.registerForm.value).subscribe(result => {
      if (result.id != null) {
        this.message.success("Signup Successfully", { nzDuration: 5000 })
        this.router.navigateByUrl("/");
      } else {
        this.message.error(`${result.message}`, { nzDuration: 5000 })
      }
    });
  }
}

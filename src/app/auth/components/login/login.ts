import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../services/auth/auth';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {

  loginForm!: FormGroup;
  imgUrl: String = "https://i.pinimg.com/474x/7c/90/43/7c90430c0c5d28999a809ee08937cd63.jpg"

  constructor(private fb: FormBuilder,
    private authService: Auth,
    private message: NzMessageService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  submitForm() {
    this.authService.login(this.loginForm.value).subscribe(result => {

      console.log(result);

    }, error => {
      this.message.error("Bad Credentials", { nzDuration: 5000 });
    }
    );

  }


}

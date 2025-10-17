import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-create-room',
  standalone: false,
  templateUrl: './create-room.html',
  styleUrl: './create-room.scss'
})
export class CreateRoom {

  roomDetailsForm: FormGroup;

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService
  ) {

    this.roomDetailsForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      price: ['', [Validators.required]]
    })

  }

  submitForm() {
    this.adminService.createRoom(this.roomDetailsForm.value).subscribe(result => {
      this.message
        .success(`Room Posted Successfully`, { nzDuration: 5000 });
      this.router.navigateByUrl('/admin/dashboard')

    }, errors => {

      this.message.error(`${errors.error}`, { nzDuration: 5000 })
    });

  }
}

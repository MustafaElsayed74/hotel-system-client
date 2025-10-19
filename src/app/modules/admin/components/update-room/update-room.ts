import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AdminService } from '../../services/admin-service';

@Component({
  selector: 'app-update-room',
  standalone: false,
  templateUrl: './update-room.html',
  styleUrl: './update-room.scss'
})
export class UpdateRoom implements OnInit {

  updateRoomForm: FormGroup;
  id!: number;

  constructor(private fb: FormBuilder,
    private message: NzMessageService,
    private router: Router,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute
  ) {
    this.updateRoomForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      price: ['', [Validators.required]],
    })
  }
  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
    this.getRoomById();
  }


  getRoomById() {
    this.adminService.getRoomById(this.id).subscribe(result => {
      this.updateRoomForm.patchValue(result);
    }, errors => {
      this.message.error(`${errors.error}`, { nzDuration: 5000 })
    })
  }


  submitForm() {
    this.adminService.updateRoom(this.id, this.updateRoomForm.value).subscribe(result => {
      this.message.success('Room Updated Successfully', { nzDuration: 5000 });
      this.router.navigateByUrl('admin/dashboard');
    }, error => {
      this.message.error(`${error.error?.message}`, { nzDuration: 5000 })
    });
  }


}

import { Component } from '@angular/core';
import { AdminService } from '../../services/admin-service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  currentPage: number = 1;
  rooms = [];
  total: any;
  loading = false;

  constructor(private adminService: AdminService,
    private router: Router,
    private message: NzMessageService,
    private modalService: NzModalService
  ) { this.getRooms() }


  getRooms() {
    this.adminService.getRooms(this.currentPage - 1).subscribe(result => {

      console.log(result);
      this.rooms = result.rooms;
      this.total = result.totalPages * 6;

    });
  }


  pageIndexChange(value: any) {
    this.currentPage = value;
    this.getRooms();
  }

  showConfirm(roomId: number) {
    this.modalService.confirm({
      nzTitle: ' Confirm',
      nzContent: 'Do you want to delete this room?',
      nzOkText: 'Delete',
      nzCancelText: 'Cancel',
      nzOnOk: () => this.deleteRoom(roomId)
    })
  }

  deleteRoom(id: number) {
    this.adminService.deleteRoom(id).subscribe({
      next: (result) => {
        this.message.success('Room Deleted Successfully');
        this.rooms = this.rooms.filter((room: any) => room.id !== id);
      },
      error: (error) => {
        this.message.error(`${error.error}`, { nzDuration: 5000 });
      }
    });
  }



}

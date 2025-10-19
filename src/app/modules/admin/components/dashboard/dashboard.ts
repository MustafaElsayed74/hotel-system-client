import { Component } from '@angular/core';
import { AdminService } from '../../services/admin-service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private message: NzMessageService
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


}

import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer-service';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-rooms',
  standalone: false,
  templateUrl: './rooms.html',
  styleUrl: './rooms.scss'
})
export class Rooms {

  currentPage: number = 1;
  rooms = [];
  total: any;
  loading = false;

  constructor(private customerService: CustomerService,
    private router: Router,
    private message: NzMessageService,
    private modalService: NzModalService
  ) { this.getRooms() }


  getRooms() {
    this.customerService.getRooms(this.currentPage - 1).subscribe(result => {

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

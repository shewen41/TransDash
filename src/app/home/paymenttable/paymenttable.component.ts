import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import {SharedserviceService } from './../../sharedservice.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-paymenttable',
  templateUrl: './paymenttable.component.html',
  styleUrls: ['./paymenttable.component.scss']
})
export class PaymenttableComponent implements OnInit {

  title ='datatables';
  dtOptions: DataTables.Settings = {};
  todos: any;
  constructor(private service: SharedserviceService) {
    this.service.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      scrollY: '800px',
      pageLength: 10,
      lengthMenu: [[10, 20, 50, -1], [10, 20, 50, 'All']],
      searching: true,
      processing: true
    }
  }
}


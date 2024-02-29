import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,  private dialog: MatDialog) {
    this.LoadUser();
  }
  userlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 
  ngAfterViewInit(): void {
 
  }
  LoadUser() {
    
  }
  displayedColumns: string[] = ['username', 'name', 'email', 'status', 'role', 'action'];
 
  updateuser(code: any) {
    this.OpenDialog('1000ms', '600ms', code);
  }
 
  OpenDialog(enteranimation: any, exitanimation: any, code: string) {
    
  }
 
 
}

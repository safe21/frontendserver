import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-invite-popup',
  templateUrl: './invite-popup.component.html',
  styleUrls: ['./invite-popup.component.css']
})
export class InvitePopupComponent implements OnInit {

  constructor(private http: HttpClient, private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<InvitePopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.datastudent = data.idstudent;
    console.log(this.datastudent)


  }

  ngOnInit(): void {
  }

  datastudent: any;
  editdata: any;




  inviteStudent() {
    //invite table use this function
  }
  invite() {
    
  }
}

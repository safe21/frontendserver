import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent implements OnInit {

  constructor(private builder: FormBuilder, private service: AuthService, private toastr: ToastrService,
    private dialogref: MatDialogRef<UpdatepopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient) {

    this.service.getuserrole().subscribe(res => {
      this.rolelist = Object.entries(res)[1][1];
    });
  }
  ngOnInit(): void {
    if (true) {
      this.loaduserdata(this.data.iduser);
    }
  }
  rolelist: any;
  editdata: any;


  registerform = this.builder.group({
    id: this.builder.control(''),
    name: this.builder.control(''),
    email: this.builder.control(''),
    role_idrole: this.builder.control('', Validators.required),
  });

  loaduserdata(code: any) {
    this.service.GetUserbyid(code).subscribe(res => {
      this.editdata = Object.entries(res)[1][1][0];
      console.log("loaduserdata")
      console.log(this.editdata);

      this.registerform.setValue({
        id: this.editdata.iduser,
        name: this.editdata.name,
        email: this.editdata.email,
        role_idrole: this.editdata.role_idrole,
      });
      console.log(this.registerform.value)
    });
  }

  UpdateUser() {
    if (this.registerform.value.role_idrole == "3") {
      this.http.get("https://serverbackend.cyclic.app/backend/getstudent/:" + this.registerform.value.id).subscribe(async (resst: any) => {
        //ถ้าดึงข้อมูลจากstudentและpost success จะupdate role  
        if (resst.status) {
          var detailspostadvisor = await {
            "idadvisor": resst.data[0].idstudent,
            "en_first_name": resst.data[0].en_first_name,
            "en_last_name": resst.data[0].en_last_name,
            "th_first_name": resst.data[0].th_first_name,
            "th_last_name": resst.data[0].th_last_name,
          }
          this.http.post("https://serverbackend.cyclic.app/backend/updateteacher", detailspostadvisor).subscribe((respost: any) => {
            console.log(respost)
            if (respost.status) {
              this.http.delete("https://serverbackend.cyclic.app/backend/deletestudent/:"+detailspostadvisor.idadvisor).subscribe(resdel=>{

              })
              
              this.service.updaterole(this.registerform.value.id, this.registerform.value.role_idrole).subscribe(async (res: any) => {
              });
              this.dialogref.close();
              this.toastr.success("Update role complete");
            }
            else {
              this.dialogref.close();
              this.toastr.error("Can't update role to teacher 1")
            }
          });
        }
        else {
          this.dialogref.close();
          this.toastr.error("Can't update role to teacher 2")
        }

      })
    }
    else {
      this.service.updaterole(this.registerform.value.id, this.registerform.value.role_idrole).subscribe(async (res: any) => {
        this.dialogref.close();
        this.toastr.success("Update role complete");
      })
    }

  }
}
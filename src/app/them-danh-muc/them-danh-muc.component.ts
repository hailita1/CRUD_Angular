import {Component, OnInit} from '@angular/core';
import {DanhMucService} from '../danh-muc.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-them-danh-muc',
  templateUrl: './them-danh-muc.component.html',
  styleUrls: ['./them-danh-muc.component.css']
})
export class ThemDanhMucComponent implements OnInit {
  message = '';
  isShow = false;
  isSuccess = true;
  formGroup = new FormGroup({
    categoryfirstName: new FormControl(),
    categorylastName: new FormControl()
  });

  constructor(private categoryService: DanhMucService) {
  }

  ngOnInit() {
  }

  save() {
    const firstName = this.formGroup.get('categoryfirstName').value;
    const lastName = this.formGroup.get('categorylastName').value;

    this.categoryService.addCategory(firstName, lastName).subscribe(result => { // status: 200
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.formGroup.reset();
    });
  }


}

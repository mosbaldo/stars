import { FormBuilder, FormGroup, Validators, FormControl, MinLengthValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { log } from 'util';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  
  isNew = false;
  user: User = new User();
  userName: String;
  name: String;
  password: String;
  passwordConfirm: String;
  routeSub: any;
  frm: FormGroup;

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.frm = fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      name: ['', [Validators.required, this.twoNamesValidator]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, this.passwordsMatchValidator.bind(this)]]
    });
  }

  ngOnInit() {
    this.userName = "";
    this.name = "";
    this.password = "";
    this.routeSub = this.route.params.subscribe(params => {
      const userId = params['id'];
      /* if(userId !== 'new') {
        this.frm.controls['username'].disable({ onlySelf: true });
      } else {
        this.isNew = true;
        this.setNewUserValidators();
      } */
    })
  }

  ngOnDestroy() {
    // this.routeSub.unsuscribe();
  }

  getPassword(): any {
    return this.frm.value;
  }

  setNewUserValidators(): void {
    this.frm.controls['password'].setValidators(Validators.required);
    this.frm.controls['passwordConfirm'].setValidators(this.passwordsMatchValidator.bind(this));
  }

  passwordsMatchValidator(control: FormControl) {
    return (this.password !== control.value) ?
      {passwordsMissmatch: true} : null;
  }

  twoNamesValidator(control: FormControl) {
    const namesArr: Array<String> = control.value.split(" ");
    const numberOfNames: number = namesArr.length;
    return (numberOfNames > 1 && namesArr[1].length > 0) ?
      null : {nameMissing: true};
  }
}

import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../../facebook.service';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from '@angular/router'

@Component({
  selector: "app-update",
  templateUrl: "./update.component.html",
  styleUrls: ["./update.component.css"]
})
export class UpdateComponent implements OnInit {
  myForm: FormGroup;
  constructor(private facebookService: FacebookService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      about: new FormControl("")
    });
  }

  onSubmit(myForm: FormGroup) {
    this.facebookService.postFacebookData(myForm.value).subscribe(res => {
      this.router.navigateByUrl('listings');
    })
  }
}

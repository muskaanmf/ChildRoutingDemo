import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {
  constructor(private router: Router, private route: ActivatedRoute){}

  clickCoins(){
    this.router.navigate(['coins'], {relativeTo: this.route});
  }

  clickNotes(){
    this.router.navigate(['notes'], {relativeTo: this.route});

  }

}

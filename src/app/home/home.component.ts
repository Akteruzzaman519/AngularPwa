import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: any
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.data.GetData().subscribe(
      (res) => {
        this.user = res;
      },
      (err) => {
        console.log(err)
      }
    )
  }

}

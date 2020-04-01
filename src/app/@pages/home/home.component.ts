import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any = [];
  constructor(private http: HttpClient){
    this.http.get('assets/data/player-per-game-stats-18-19-nba.csv', {responseType: 'text'}).subscribe(data => {
        const csvToRowArray = data.split('\n');
        for (let index = 1; index < csvToRowArray.length - 1; index++) {
          const row = csvToRowArray[index].split(',');
          console.log(row);
          console.log(row[1].split('\\')[0]);
          this.data.push(row);
        }
        // console.log(this.userArray);
    },
    error => {
        console.log(error);
    });
  }

  ngOnInit(): void {
  }

}

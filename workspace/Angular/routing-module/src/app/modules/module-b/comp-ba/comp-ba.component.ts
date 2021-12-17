import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comp-ba',
  templateUrl: './comp-ba.component.html',
  styleUrls: ['./comp-ba.component.css'],
})
export class CompBaComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // https://jsonplaceholder.typicode.com/posts
  jSonContent: any;

  ngOnInit(): void {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.jSonContent = data;
      });
    }
}

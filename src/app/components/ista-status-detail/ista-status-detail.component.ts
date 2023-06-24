import { Component, Input, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-ista-status-detail',
  templateUrl: './ista-status-detail.component.html',
  styleUrls: ['./ista-status-detail.component.scss'],
})
export class IstaStatusDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() title: string;
  @Input() items: any[];

}

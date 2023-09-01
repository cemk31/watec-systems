import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ista-order-detail',
  templateUrl: './ista-order-detail.component.html',
  styleUrls: ['./ista-order-detail.component.scss'],
})
export class IstaOrderDetailComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Abrufen der ID aus dem Route-Parameter
    this.id = this.route.snapshot.paramMap.get('id');
  }

}

import {Client} from '../model/client';
import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {

  @Input()
  client: Client;

  constructor() {}

  ngOnInit() {
  }

}

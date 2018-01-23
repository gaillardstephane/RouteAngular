import {Client} from '../model/client';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  clients: Array<Client>;
  constructor() {
    const c = new Client();
    c.id = 0;
    c.nom = 'Bob';
    c.prenom = 'bill';
    this.clients = [c];

  }

  ngOnInit() {
  }

}

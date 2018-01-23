import {Client} from '../model/client';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  actualClient: Client;
  id: number;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {this.id = params['id'];});


  }

    ngOnInit() {
    console.log('helllo ', this.id);
    this.actualClient = this.serviceGetClientById(this.id);
  }


serviceGetClientById(id: number): Client {
  const c = new Client();
  if (id == 0) {
    c.id = 0;
    c.nom = 'Bob';
    c.prenom = 'bill';

    return c;
  } else {
    c.id = 1;
    c.nom = 'Pas le bon';
    c.prenom = 'bill';
    return c;

  }
}

}


import { Component, OnInit } from '@angular/core';
import { FacebookService } from '../facebook.service';

export class Social {
  public icon: string;
  public source: string;
  public name: string;
  public address: string;
  public about: string;
  public rating: string;
  public listed: string;

  constructor(icon,source,name,address,about,rating,listed) {
    this.icon = icon;
    this.source = source;
    this.name = name;
    this.address = address;
    this.about = about;
    this.rating = rating;
    this.listed = listed;

  }
}

const ELEMENT_DATA: Social[] = [
  { icon:"google-plus",source: "Google", name: 'ABC Dental', address: "2810 San Jose,CA", about: 'latest', rating:'3/5',listed:"Yes" },
  { icon: "yelp",source: "Yelp", name: 'ABC Dental', address: "2810 San Jose,CA", about: 'latest', rating: '3/5', listed: "Yes" },
  { icon: "yahoo",source: "Yahoo!", name: 'ABC Dental', address: "2810 San Jose,CA", about: 'latest', rating: '3/5', listed: "Yes" },
  { icon: "foursquare",source: "Foursquare", name: 'ABC Dental', address: "2810 San Jose,CA", about: 'latest', rating: '3/5', listed: "Yes" },

];


@Component({
  selector: 'app-listings',
  styleUrls: ['./listings.component.css'],
  templateUrl: './listings.component.html',
})
export class ListingsComponent implements OnInit{
  displayedColumns: string[] = ['icon', 'source', 'name', 'address', 'about', 'rating', 'listed', 'status', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(public facebookService: FacebookService) { }

  ngOnInit() {
    this.facebookService.getFacebookPage().subscribe(res => {
      this.dataSource.push(new Social("facebook","Facebook",res['name'],res['location']['street'],res['about'],"2/5","yes"))
      this.dataSource = [...this.dataSource];
    });
  }

}

import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import 'firebase/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
  firebase.initializeApp({
    apiKey: "AIzaSyCrvBXoN32gVb6lT1WHUDe3rqOR1TyLJoE",
    authDomain: "ng-recipe-book-fd815.firebaseapp.com"
  })
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}

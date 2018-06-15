import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>'
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created!';
  severName = 'Testserver';
  serverCreted = false;
  servers = ['Testserver', 'Testserver 2'];

  constructor() {
  setTimeout( () => {
     this.allowNewServer = true;
  }, 2000);
}

  ngOnInit() {
  }
 onCreateServer() {
   this.serverCreted = true;
   this.servers.push(this.severName);
  this.serverCreationStatus = 'Server was created Name is ' + this.severName;
 }

 onUpdateServerName(event: any) {
   this.severName = (<HTMLInputElement>event.target).value;
 }
}

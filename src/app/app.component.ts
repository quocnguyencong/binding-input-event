import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: any[];


  constructor() {
    this.servers = [];
  }

  onSeverAdded(serverData: {serverName: string, serverContent: string}) {
    this.servers.push({
      type: 'server',
      serverName: serverData.serverName,
      serverContent: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string}) {
    console.log(bluePrintData);
    this.servers.push({
      type: 'blueprint',
      serverName: bluePrintData.serverName,
      serverContent: bluePrintData.serverContent
    });
  }
}

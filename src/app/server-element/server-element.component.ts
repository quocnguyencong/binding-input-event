import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, serverName: string, serverContent: string };

  constructor() { }

  ngOnInit() {
    console.log(this.element);
  }

}

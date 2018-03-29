import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  serverName: string;
  serverContent: string;

  constructor() { }

  ngOnInit() {
  }

  addServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    });
  }

  addServerBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    });
  }
}

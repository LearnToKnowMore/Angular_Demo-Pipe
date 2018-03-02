import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'app';
  serversList = [
    {
      instanceType: 'medium',
      name: 'Production',
      status: 'stable',
      startedDate: new Date()
    },
    {
      instanceType: 'small',
      name: 'QA server',
      status: 'sleep',
      startedDate: new Date()
    },
    {
      instanceType: 'large',
      name: 'User database',
      status: 'stable',
      startedDate: new Date()
    },
    {
      instanceType: 'small',
      name: 'Development server',
      status: 'offline',
      startedDate: new Date()
    }
  ];
  filteredStatus = '';

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('up`n running');
    }, 2000);
  });

  ngOnInit() {
  }

  getServerStatus(server: { status }) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-info': server.status === 'sleep'
    }
  }

  onAddnewServer() {
    this.serversList.push({
      instanceType: 'not-defined',
      name: 'unknown server',
      status: 'stable',
      startedDate: new Date()
    });
  }
}

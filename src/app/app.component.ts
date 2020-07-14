import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parentApp';
  linkSidebar='//localhost:4000/elements/sidebarApp-elements-es2015.js';
  linkHeader='//localhost:4001/elements/headerApp-elements-es2015.js';
  linkFooter='//localhost:4002/elements/footerApp-elements-es2015.js';
  linkDashboard='//localhost:4005/elements/dashboardApp-elements-es2015.js';

}

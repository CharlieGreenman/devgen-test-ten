import { Component } from '@angular/core';

@Component({
  selector: 'devgen-test-ten-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'devgen-test-ten';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
    console.log('this.sideNavOpen');
    console.log(this.sideNavOpen);
  }
}

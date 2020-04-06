import { Component, OnInit } from '@angular/core';
import {OsiService} from '../osi.service';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-osi',
  templateUrl: './osi.component.html',
  styleUrls: ['./osi.component.css'],
  providers: [OsiComponent]
})
export class OsiComponent implements OnInit {

  private osiLevels: OsiLevel[];

  constructor(private osiService: OsiService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getOsiLevels();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('User choice: ' + event.url);
      }
    });
  }

  public goToDetails(selected: OsiLevel) {
    this.router.navigate(['detail', selected.id], {relativeTo: this.activatedRoute});
  }

  private getOsiLevels() {
    this.osiService.getOsiLevels()
      .subscribe(osiLevels => this.osiLevels = osiLevels);
  }
}

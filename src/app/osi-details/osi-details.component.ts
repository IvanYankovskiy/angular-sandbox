import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OsiService} from '../osi.service';
import {ProtocolService} from '../protocol.service';
import {Protocol} from '../model/protocol';
import {Location} from '@angular/common';

@Component({
  selector: 'app-osi-details',
  templateUrl: './osi-details.component.html',
  styleUrls: ['./osi-details.component.css']
})
export class OsiDetailsComponent implements OnInit {
  osiLevel: OsiLevel;
  relatedProtocols: Protocol[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private osiService: OsiService,
              private protocolService: ProtocolService,
              private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.getOsiLevelInfo();
  }

  getOsiLevelInfo() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.osiService.getOsiLevel(id)
      .subscribe(osiLevel => {
        this.osiLevel = osiLevel;
        if (this.osiLevel) {
          this.protocolService.getProtocolsByOsiLevel(this.osiLevel.name)
            .subscribe(protocols => this.relatedProtocols = protocols);
        }
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToProtocolDetails(id: number) {
    this.router.navigateByUrl('detail/' + id);
  }
}

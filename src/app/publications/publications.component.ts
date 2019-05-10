import { Publication } from './../publication';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  publications$: Observable<Publication>;
  constructor(private mainService: MainService) {
    this.publications$ = this.mainService.getPublications();
  }

  ngOnInit() {}
}

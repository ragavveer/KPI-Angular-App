import { Observable } from 'rxjs';
import { Patent } from './../patent';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';

@Component({
  selector: 'patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.scss']
})
export class PatentsComponent implements OnInit {
  patents$: Observable<Array<Patent>>;
  constructor(private mainService: MainService) {
    this.patents$ = this.mainService.getPatents();
  }

  ngOnInit() {}
}

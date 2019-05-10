import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  comparison = new FormControl('');
  selected$: Observable<string>;
  constructor() {
    this.selected$ = this.comparison.valueChanges.pipe(
      map(value => {
        const date = new Date();
        const month = new Intl.DateTimeFormat('en-US', {
          month: 'long'
        }).format(date);
        return `${month + ' ' + (date.getFullYear() - value)} - ${month +
          ' ' +
          date.getFullYear()}`;
      })
    );
  }

  ngOnInit() {}
}

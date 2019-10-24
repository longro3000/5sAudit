import { Component, OnInit, Input } from '@angular/core';
import { CheckItem } from 'src/app/audits/audits.model';

@Component({
  selector: 'app-check-item',
  templateUrl: './check-item.component.html',
  styleUrls: ['./check-item.component.scss'],
})
export class CheckItemComponent implements OnInit {
  @Input() checkItem: CheckItem;
  constructor() { }

  ngOnInit() {
  }

}

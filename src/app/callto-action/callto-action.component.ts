import { Component } from '@angular/core';
import { DataType } from '../interfaces/data-type';
import { DataServiceService } from '../providers/data-service.service';

@Component({
  selector: 'app-callto-action',
  templateUrl: './callto-action.component.html',
  styleUrls: ['./callto-action.component.css'],
})
export class CalltoActionComponent {
  public data: DataType[] = [];

  constructor(private dataProvider: DataServiceService) {}

  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => {
      this.data = response as DataType[];
    });
  }


}

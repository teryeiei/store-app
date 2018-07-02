import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { CommonService } from '../services/common/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  resultData: any;

  constructor(
    private _apiService: ApiService,
    private _common: CommonService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  async ngOnInit() {
    try {
      let response = await this._apiService.get('open');
      if (response !== null) {
        this.resultData = response;
        for (let i in this.resultData) {
          this.resultData[i].birth_date = this._common.convertDate(this.resultData[i].birth_date);
        };
      } else {
        this.resultData = [];
      }
    } catch (error) {
      console.log(error);
    }
  }

}

import { ApiService } from 'src/app/services/api/api.service';
import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from './services/indexed-db.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private apiService: ApiService, private dbService: IndexedDbService) {



  }

  async ngOnInit() {

    (await this.dbService.getItem(4)).subscribe((data) => console.log(data))

    this.apiService.getItems().forEach((item) => {
      this.dbService.addItem(item)
    })

    

  }

}

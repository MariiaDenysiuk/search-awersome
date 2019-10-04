import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'lib-search-awersome',
  templateUrl: './search-awersome.component.html',
  styleUrls: ['./search-awersome.scss']
})
export class SearchAwersomeComponent  {
  @Output() onChangeData = new EventEmitter();

  public getSearchInf(event) {
    this.onChangeData.next(event);
  }

}

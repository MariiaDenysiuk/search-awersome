import { Component, OnInit } from '@angular/core';
import { SearchAwersomeService } from "../services/search-awersome.service";

@Component({
  selector: 'lib-search',
  templateUrl: './search-awersome.component.html',
  styleUrls: ['./search-awersome.scss']
})
export class SearchWrapperComponent implements OnInit {
  public inputData: any;
  public curretnEvent;
  public NO_OF_CHARS = 256;

  constructor(private data: SearchAwersomeService) {
    this.inputData = this.data.getData();
  }

  ngOnInit() {}

  public getSearchedData(event) {
    this.getData(this.inputData, event);
  }

  private getData(data, event) {
    data.map(
      (m) => {
        let separators = '('+event+')';
        this.curretnEvent = event;
        for(const propertyName in m.data) {
          let inputData =  m.data[propertyName].value ? m.data[propertyName].value : m.data[propertyName];
          m.data[propertyName] = {value: inputData, serchedValue: inputData.split(new RegExp(separators)), searched: true};
        }

        if(m.hasOwnProperty('children')) {
          m.expanded = true;
          this.getData(m.children, event);
        }
      }
    )
  }

  private max(a, b) { return (a > b) ? a : b; }

  private badCharHeuristic(str, size, badchar) {
    let i;
    for (i = 0; i < this.NO_OF_CHARS; i++) {
      badchar[i] = -1;
    }
    for (i = 0; i < size; i++) {
      badchar[str[i].charCodeAt(str[i])] = i;
    }
  }

  public  search(txt, pat) {
    const patLen = pat.length;
    const textLen = txt.length;
    const badchar =  [this.NO_OF_CHARS];
    let positionOcur = [];

    this.badCharHeuristic(pat, patLen, badchar);


    let s = 0;

    while ( s <= ( textLen - patLen) ) {
      let wordDuration = patLen - 1;

      while (wordDuration >= 0 && pat[wordDuration] === txt[s + wordDuration] ) {
        wordDuration--;
      }

      if ( wordDuration < 0 ) {
        positionOcur.push(s);
        s += ( s + patLen < textLen ) ? patLen - badchar[ txt.charCodeAt( txt[ s + patLen ]) ] : 1;
      } else {

        s += this.max(1, wordDuration = badchar[ txt.charCodeAt( txt[s + wordDuration]) ]);
      }

    }
    return positionOcur;
  }

}

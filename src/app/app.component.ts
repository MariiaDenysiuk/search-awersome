import {Component, OnInit} from '@angular/core';
import {TreeNode} from "primeng/api";
import {max} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  files1: TreeNode[];

  files2: TreeNode[];

  cols: any[];

  constructor() { }
  property;
  marked = false;

  subj = new Subject();

  curretnEvent;


  getLet(event) {

      this.getData(this.files2, event);


  }


  getData(data, event) {
    data.map(
      (m) => {
          let separators = '('+event+')';
          this.curretnEvent = event;
          for(const propertyName in m.data) {
           let inputData =  m.data[propertyName].value ? m.data[propertyName].value : m.data[propertyName];
            m.data[propertyName] = {value: inputData, serchedValue: inputData.split(new RegExp(separators)), searched: true};
          }

          if(m.hasOwnProperty('children')) {
            m.expanded = true
            this.getData(m.children, event);
          }

      }
    )
  }



  NO_OF_CHARS = 256;

  max(a, b) { return (a > b) ? a : b; }

  badCharHeuristic(str, size, badchar) {
    let i;

    for (i = 0; i < this.NO_OF_CHARS; i++) {
      badchar[i] = -1;
    }

    for (i = 0; i < size; i++) {
      badchar[str[i].charCodeAt(str[i])] = i;
    }

  }


  search(txt, pat) {
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




  ngOnInit() {



    this.files2 = [{
      data: {
        "name": "Documentssss",
        "size":"75",
        "type":"Folder"
      },
      children: [],
      leaf: true,
      expanded: true
    },
      {
        data: {
          "name":"Documents1",
          "size":"75kb",
          "type":"Folder"
        },
        children: [],
        leaf: true,
        expanded: true
      },
      {
        data: {
          "name":"Documents",
          "size":"75kb",
          "type":"Folder"
        },
        children:[
          {
            data:{
              "name":"Work",
              "size":"55kb",
              "type":"Folder"
            },
            children:[
              {
                data:{
                  "name":"Expenses.doc",
                  "size":"30kb",
                  "type":"Document"
                }
              },
              {
                data:{
                  "name":"Resume.doc",
                  "size":"25kb",
                  "type":"Resume"
                }
              }
            ]
          },
          {
            data:{
              "name":"Home",
              "size":"20kb",
              "type":"Folder"
            },
            children:[
              {
                data:{
                  "name":"Invoices",
                  "size":"20kb",
                  "type":"Text"
                }
              }
            ]
          }
        ],
        expanded: false
      }
    ];


   this.subj.subscribe(n=> {
     this.files2.map(
       nn => {
         return nn.expanded = true;
       }
     )
   });
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];
  }

}

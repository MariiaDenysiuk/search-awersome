import {Injectable, OnInit} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchAwersomeService implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  getData() {
     return [{
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
    //
    // this.subj.subscribe(n=> {
    //   this.files2.map(
    //     nn => {
    //       return nn.expanded = true;
    //     }
    //   )
    // });
    //
    // this.cols = [
    //   { field: 'name', header: 'Name' },
    //   { field: 'size', header: 'Size' },
    //   { field: 'type', header: 'Type' }
    // ];
  }


}

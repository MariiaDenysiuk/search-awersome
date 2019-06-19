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

  subj = new Subject()


  getLet(event) {

    if(event.length === 0) {

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


    } else {


      this.files2.map(
        (m) => {
          if(m.data.name === event) {
            // {value: "Documents", searched: true}

            if(this.search(event, m.data.name)) {
              console.log(this.search(event, m.data.name))
              m.data.name = {value: [event], searched: true}
            }

          }

          if(m.data.size === event) {
            // {value: "Documents", searched: true}

            if(this.search(event, m.data.size)) {
              console.log(this.search(event, m.data.size))
              m.data.size = {value: [event], searched: true}
            }
          }

          if(m.data.type === event) {
            // {value: "Documents", searched: true}

            if(this.search(event, m.data.type)) {
              m.data.type = {value: [event], searched: true}
            }
          }


          if(m.hasOwnProperty('children')) {

            m.children.map(
              (n) => {
                console.log(event)
                if(n.data.name === event) {

                  m.expanded = true;


                  n.data.name = {value: [event], searched: true}
                  this.subj.next(this.files2)
                }
              }
            )
          }




        }
      )
    }

  }

  NO_OF_CHARS = 256;

  badCharHeuristic(text, textSize, badCharacters) {
    let i;
    // Initialize all occurrences as -1
      for(i = 0; i < this.NO_OF_CHARS; i++) {
        badCharacters[i] = -1;
      }

    // Fill the actual value of last occurrence
    // of a character
      for(i = 0; i < textSize; i++) {
        badCharacters[text[i]] = i;
      }
  }

 search(text: string, pattern: string) {
    let textSize = text.length;
    let patternSize = pattern.length;

    let badChars = [this.NO_OF_CHARS];

   /* Fill the bad character array by calling
 the preprocessing function badCharHeuristic()
 for given pattern */
   this.badCharHeuristic(pattern, patternSize, badChars);

   let shiftNumber = 0; // shift pattern

   while(shiftNumber <= (textSize - patternSize)) {
     let j = patternSize - 1;

     while(j >=0 && pattern[j] == text[shiftNumber + j]) {
       j--;
     }

     if(j < 0) {
        shiftNumber += (shiftNumber + patternSize < textSize) ? patternSize - badChars[text[shiftNumber + patternSize]] : 1;
        console.log('dd')
     } else {
        shiftNumber += Math.max(1, j = badChars[text[shiftNumber + j]]);
        console.log(shiftNumber);
     }
     return shiftNumber;
   }


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

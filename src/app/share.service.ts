import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {

  constructor() { }

  shareService(headline){
    let newVariable: any;
    newVariable = window.navigator;
    if (newVariable && newVariable.share) {
      newVariable.share({
        title:headline.title,
        text: headline.description,
        url:headline.url
      }).then(() => {
        alert('News Shared Succesfully');
      })
      .catch(err => {
      alert(`Couldn't share because of`+ err.message);
      });
    } else {
      alert('web share not supported');
    }
   }
  }


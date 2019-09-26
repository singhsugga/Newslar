import { DataService } from './data.service';
import { ShareService } from './share.service';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  headlines:any;
  loading=true;
  constructor(private ShareService:ShareService, private data:DataService){

  }
  ngOnInit(){
     this.data.getHeadlines().subscribe(data=>{
       this.headlines=data;
       console.log(this.headlines)
       this.loading=false;
     })
  }
   share(headline){
    this.ShareService.shareService(headline);

   }

   headlineByCategory(cat){
    
    this.loading=true;
    this.data.byCategory(cat).subscribe(data=>{
      this.headlines=data;
      console.log(this.headlines)
      this.loading=false;
      }
    )
   }
  }

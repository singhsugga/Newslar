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
  started = false;
 
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






   
//text to speech logic starts here
   speaks = [
  {
    "name": "Alex",
    "lang": "en-US"
  },
  {
    "name": "Alice",
    "lang": "it-IT"
  },
  {
    "name": "Alva",
    "lang": "sv-SE"
  },
  {
    "name": "Amelie",
    "lang": "fr-CA"
  },
  {
    "name": "Anna",
    "lang": "de-DE"
  },
  {
    "name": "Carmit",
    "lang": "he-IL"
  },
  {
    "name": "Damayanti",
    "lang": "id-ID"
  },
  {
    "name": "Daniel",
    "lang": "en-GB"
  },
  {
    "name": "Diego",
    "lang": "es-AR"
  },
  {
    "name": "Ellen",
    "lang": "nl-BE"
  },
  {
    "name": "Fiona",
    "lang": "en"
  },
  {
    "name": "Fred",
    "lang": "en-US"
  },
  {
    "name": "Ioana",
    "lang": "ro-RO"
  },
  {
    "name": "Joana",
    "lang": "pt-PT"
  },
  {
    "name": "Jorge",
    "lang": "es-ES"
  },
  {
    "name": "Juan",
    "lang": "es-MX"
  },
  {
    "name": "Kanya",
    "lang": "th-TH"
  },
  {
    "name": "Karen",
    "lang": "en-AU"
  },
  {
    "name": "Kyoko",
    "lang": "ja-JP"
  },
  {
    "name": "Laura",
    "lang": "sk-SK"
  },
  {
    "name": "Lekha",
    "lang": "hi-IN"
  },
  {
    "name": "Luca",
    "lang": "it-IT"
  },
  {
    "name": "Luciana",
    "lang": "pt-BR"
  },
  {
    "name": "Maged",
    "lang": "ar-SA"
  },
  {
    "name": "Mariska",
    "lang": "hu-HU"
  },
  {
    "name": "Mei-Jia",
    "lang": "zh-TW"
  },
  {
    "name": "Melina",
    "lang": "el-GR"
  },
  {
    "name": "Milena",
    "lang": "ru-RU"
  },
  {
    "name": "Moira",
    "lang": "en-IE"
  },
  {
    "name": "Monica",
    "lang": "es-ES"
  },
  {
    "name": "Nora",
    "lang": "nb-NO"
  },
  {
    "name": "Paulina",
    "lang": "es-MX"
  },
  {
    "name": "Samantha",
    "lang": "en-US"
  },
  {
    "name": "Sara",
    "lang": "da-DK"
  },
  {
    "name": "Satu",
    "lang": "fi-FI"
  },
  {
    "name": "Sin-ji",
    "lang": "zh-HK"
  },
  {
    "name": "Tessa",
    "lang": "en-ZA"
  },
  {
    "name": "Thomas",
    "lang": "fr-FR"
  },
  {
    "name": "Ting-Ting",
    "lang": "zh-CN"
  },
  {
    "name": "Veena",
    "lang": "en-IN"
  },
  {
    "name": "Victoria",
    "lang": "en-US"
  },
  {
    "name": "Xander",
    "lang": "nl-NL"
  },
  {
    "name": "Yelda",
    "lang": "tr-TR"
  },
  {
    "name": "Yuna",
    "lang": "ko-KR"
  },
  {
    "name": "Yuri",
    "lang": "ru-RU"
  },
  {
    "name": "Zosia",
    "lang": "pl-PL"
  },
  {
    "name": "Zuzana",
    "lang": "cs-CZ"
  }
];

speak(headline){
const msg = new SpeechSynthesisUtterance();
msg.volume = 1; // 0 to 1
msg.rate = 0.7; // 0.1 to 10
msg.pitch = 1.5; // 0 to 2
msg.text  = headline.description;
const voice = this.speaks[40]; //47
console.log(`Voice: ${voice.name} and Lang: ${voice.lang}`);
//msg.voiceURI = voice.name;
msg.lang = voice.lang;
speechSynthesis.speak(msg);
msg.onstart =  (event)=> {
   this.started=true;
};

msg.onend =  (event)=> {
  this.started=false;
};
  }
}

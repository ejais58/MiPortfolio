import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // barraLateral={
  //   "top": "0",
  //   "right": "-250px",
  //   "padding": "40px",
  //   "background": "#fff",
  //   "width": "250px",
  //   "height": "100vh",
  //   "z-index": "1",
  //   "transition": "all 300ms"
  // }

  // backMenu={
  //   "position": "fixed",
  //   "top": "0",
  //   "left": "0",
  //   "width": "100%",
  //   "height": "100vh",
  //   "background": "rgba(0, 0, 0, 0.5)",
  //   "display": "none"
  // }
  constructor() {
    this.loadScripts();
  }

  ngOnInit(): void {
    
  }

 

  //Leer archivo js
  loadScripts() {
    const dynamicScripts = [
     '../../../../assets/js/script-menu.js'
    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }


  

  

}

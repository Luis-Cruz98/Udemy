import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destacados',
  templateUrl: './destacados.component.html',
  styleUrls: ['./destacados.component.scss'],
})
export class DestacadosComponent  implements OnInit {
courses = [
  {
    title: "Diseño",
    image : "../assets/Udemy/org1.jpeg",
     url: ''
  
  },
  {
    title: "Desarrollo",
    image : "../assets/Udemy/org2.jpeg",
     url: ''
  
  },
  {
    title: "Marketing",
    image : "../assets/Udemy/org3.jpeg",
     url: ''
  
  },
  {
    title: "Informática y Software",
    image : "../assets/Udemy/org4.jpeg",
     url: ''
  
  }

]
courses2 = [
  {
    title: "Informática y Software",
    image : "../assets/Udemy/org5.jpeg",
   url: ''
  },
  {
    title: "Negocios",
    image : "../assets/Udemy/org6.jpeg",
     url: ''
  
  },
  {
    title: "Fotografia",
    image : "../assets/Udemy/org7.jpeg",
     url: ''
  
  },
  {
    title: "Musica",
    image : "../assets/Udemy/org8.jpeg",
     url: ''
  
  }

]

  constructor() { }

  ngOnInit() {}

}

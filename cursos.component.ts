import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent implements OnInit {
  courses = [
    {
      title: 'Python Practicando. Desde 0 hasta Desarrollador',
      image: '../assets/Udemy/curso1.jpeg',
      price: 179,
      rating: 4.5,
      url: ''
    },
    {
      title: 'Universidad Python - Cero a Experto',
      image: '../assets/Udemy/curso2.jpeg',
      price: 149,
      rating: 4.7,
      url: ''
    },
    {
      title: 'Python para no matemáticos',
      image: '../assets/Udemy/curso3.jpeg',
      price: 199,
      rating: 4.2,
      url: ''
    },
    {
      title: 'Python 3 Plus: Python desde Cero + Data Analysis',
      image: '../assets/Udemy/curso4.jpeg',
      price: 199,
      rating: 4.6,
      url: ''
    },
  ];

  // Cursos recomendados (segunda fila)
  recommendedCourses = [
    {
      title: 'Python TOTAL - Programador Avanzado en 16 días',
      image: '../assets/Udemy/curso5.jpeg',
      price: 199,
      rating: 4.5,
      url: ''
    },
    {
      title: 'Desarrollo Web Completo con HTML5, CSS3 Y JS AJAX PHP',
      image: '../assets/Udemy/curso6.jpeg',
      price: 199,
      rating: 4.5,
      url: ''
    },
    {
      title: 'Curso Power BI - Análisis de Datos y Business Intelligence',
      image: '../assets/Udemy/curso7.jpeg',
      price: 199,
      rating: 4.6,
      url: ''
    },
    {
      title: 'Excel TOTAL en 30 Días - Completo de Cero a Avanzado',
      image: '../assets/Udemy/curso8.jpeg',
      price: 199,
      rating: 4.8,
      url: ''
    },
  ];

  constructor() { }

  ngOnInit() {}

}


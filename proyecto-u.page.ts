import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto-u',
  templateUrl: './proyecto-u.page.html',
  styleUrls: ['./proyecto-u.page.scss'],
})
export class ProyectoUPage implements OnInit {
  
// Lista de cursos
courses = [
  {
    title: 'Python Practicando. Desde 0 hasta Desarrollador',
    image: '../assets/Udemy/curso1.jpeg',
    price: 179,
    rating: 4.5,
    onClick: function() {
      // Acción que se ejecutará al hacer clic en el botón
      alert(`¡Has seleccionado el curso: ${this.title}!`);
  }
  },
  {
    title: 'Universidad Python - Cero a Experto',
    image: '../assets/Udemy/curso2.jpeg',
    price: 149,
    rating: 4.7
  },
  {
    title: 'Python para no matemáticos',
    image: '../assets/Udemy/curso3.jpeg',
    price: 199,
    rating: 4.2
  },
  {
    title: 'Python 3 Plus: Python desde Cero + Data Analysis',
    image: '../assets/Udemy/curso4.jpeg',
    price: 199,
    rating: 4.6
  },
];

// Cursos recomendados (segunda fila)
recommendedCourses = [
  {
    title: 'Python TOTAL - Programador Avanzado en 16 días',
    image: '../assets/Udemy/curso5.jpeg',
    price: 199,
    rating: 4.5
  },
  {
    title: 'Desarrollo Web Completo con HTML5, CSS3 Y JS AJAX PHP',
    image: '../assets/Udemy/curso6.jpeg',
    price: 199,
    rating: 4.5
  },
  {
    title: 'Curso Power BI - Análisis de Datos y Business Intelligence',
    image: '../assets/Udemy/curso7.jpeg',
    price: 199,
    rating: 4.6
  },
  {
    title: 'Excel TOTAL en 30 Días - Completo de Cero a Avanzado',
    image: '../assets/Udemy/curso8.jpeg',
    price: 199,
    rating: 4.8
  },
];
  constructor() { }

  ngOnInit() {
  }

}

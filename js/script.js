var app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    menu: ["Home","Pages","Courses","Features","Blog","Shop"],
    corsi: [
      {
        costo: 18.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 21.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 19.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 35.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 19.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 19.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 25.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 22.00,
        nome: "The Acrylic Painting Academy"
      }
    ],
    teacher: [
      {
        src: "img/artist-testimonial-avatar-01.jpg",
        nome: "Florence Themes",
        materia: "/ Multimedia Admin"
      },
      {
        src: "img/artist-testimonial-avatar-02.jpg",
        nome: "Mina Hallace",
        materia: "/ Freelancer"
      },
      {
        src: "img/artist-testimonial-avatar-03.jpg",
        nome: "Madley Pandor",
        materia: "/ IT Specialist"
      },
      {
        src: "img/artist-testimonial-avatar-04.jpg",
        nome: "Ajeje Brazorf",
        materia: "/ Train Passenger"
      }
    ]
  },
  methods: {
    questo(indice){
      this.counter = indice;
      console.log(this.counter);
    }
  }
});

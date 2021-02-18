var app = new Vue({
  el: "#app",
  data:{
    counter: 0,
    menu: [
      {nome: "Home", option: [
        "MaxCoach Education",
        "Course Portal",
        "Distant Learning",
        "Multimedia Pedagogy",
        "Modern Schooling",
        "Remote Training",
        "Health Coaching",
        "Gym Coaching",
        "Business",
        "Artist",
        "Kitchen Coach",
        "Motivation"
        ]},
      {nome: "Pages", option: [
        "Start Here",
        "Success Story",
        "About me",
        "About us 01",
        "About us 02",
        "About us 03",
        "Contact me",
        "Contact us",
        "Purchase Guide",
        "Privacy Policy",
        "Terms of Service"
      ]},
      {nome: "Courses", option: [
        "Courses Grid 01",
        "Courses Grid 02",
        "Courses Grid 03",
        "Membership Levels",
        "Become a Teacher",
        "Profile",
        "Checkout"
      ]},
      {nome: "Features", option: [
        "Events",
        "Zoom Meetings"
      ]},
      {nome: "Blog", option: [
        "Blog Grid",
        "Blog Masonry",
        "Blog Classic",
        "Blog List"
      ]},
      {nome: "Shop", option: [
        "Shop Left Sidebar",
        "Shop Right Sidebar",
        "Cart",
        "Wishlist",
        "Single Product"
      ]}
    ],
    corsi: [
      {
        costo: 18.00,
        nome: "The Acrylic Painting Academy"
      },
      {
        costo: 21.00,
        nome: "Drawing and shading: complete Course"
      },
      {
        costo: 19.00,
        nome: "The Color Theory for Digital Artist"
      },
      {
        costo: 35.00,
        nome: "Ultimate Guide to Digital Sketching for beginner"
      },
      {
        costo: 19.00,
        nome: "Portrait Drawing The Smart Way"
      },
      {
        costo: 19.00,
        nome: "Mastering Watercolor Painting from Beginner"
      },
      {
        costo: 25.00,
        nome: "The Art & Science of Drawing"
      },
      {
        costo: 22.00,
        nome: "The Colored Pencil Drawing Course"
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
  mounted(){
    var countDownDate = new Date("Feb 19, 2021 18:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
  },
  methods: {
    questo(indice){
      this.counter = indice;
      console.log(this.counter);
    },
    tornaSu() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }
});

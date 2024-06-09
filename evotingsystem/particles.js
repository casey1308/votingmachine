// Define particles.js configuration object
var particlesConfig = {
    "particles": {
      "number": {
        "value": 80, // Number of particles
        "density": {
          "enable": true,
          "value_area": 800 // Area where particles will be distributed
        }
      },
      "color": {
        "value": "#ffffff" // Color of particles
      },
      "shape": {
        "type": "circle", // Shape of particles (circle, edge, triangle, polygon, star, image)
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5, // Opacity of particles
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3, // Size of particles
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true, // Whether particles are connected by lines
        "distance": 150, // Distance between particles
        "color": "#ffffff", // Color of lines
        "opacity": 0.4, // Opacity of lines
        "width": 1 // Width of lines
      },
      "move": {
        "enable": true, // Whether particles are moving
        "speed": 6, // Speed of particle movement
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  };
  
  // Initialize particles.js with configuration object
  particlesJS('particles-js', particlesConfig);
  
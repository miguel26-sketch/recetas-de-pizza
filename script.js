particlesJS("particles-js", {
  "particles": {
    "number": {"value": 50},
    "size": {"value": 5},
    "shape": {"type": "circle"},
    "move": {"speed": 3},
    "line_linked": {"enable": true}
  }
});


<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Partículas</title>
    <style>
        #particles-js {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .contenido {
            position: relative;
            text-align: center;
            margin-top: 100px;
            color: #fff;
            font-family: merienda, sans-serif;
        }
    </style>
</head>
<body>

<div id="particles-js"></div>

<div class="contenido">
    <h1>Recetas de Pizza</h1>
    <p>Fase 1 de partículas activada</p>
</div>

<script src="https://cdn.jsdelivr.net/npm/particles.js"></script>

<script>
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff00ff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 4,
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ff00ff",
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out"
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});
</script>

</body>
</html>

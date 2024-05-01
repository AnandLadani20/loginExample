import "./styles.css";
import etro from "etro";

const canvas = document.getElementById("potato");
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;

const videoElement = document.getElementById("video");

const movie = new etro.Movie({ canvas });

const layer = new etro.layer.Text({
  startTime: 0,
  duration: 1,
  text: "Hello",
  x: 130, // default: 0
  y: 130, // default: 0
  width: null, // default: null (full width)
  height: null, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
  font: "10px sans-serif", // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: "left", // default: 'left'
  textBaseline: "alphabetic", // default: 'alphabetic'
  textDirection: "ltr" // default: 'ltr'
});
const layer2 = new etro.layer.Text({
  startTime: 1,
  duration: 1,
  text: "Hello",
  x: 130, // default: 0
  y: 130, // default: 0
  width: null, // default: null (full width)
  height: null, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
  font: "20px sans-serif", // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: "left", // default: 'left'
  textBaseline: "alphabetic", // default: 'alphabetic'
  textDirection: "ltr" // default: 'ltr'
});

const layer3 = new etro.layer.Text({
  startTime: 2,
  duration: 1,
  text: "Hello",
  x: 130, // default: 0
  y: 130, // default: 0
  width: null, // default: null (full width)
  height: null, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
  font: "30px sans-serif", // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: "left", // default: 'left'
  textBaseline: "alphabetic", // default: 'alphabetic'
  textDirection: "ltr" // default: 'ltr'
});

const layer4 = new etro.layer.Text({
  startTime: 3,
  duration: 1,
  text: "Hello",
  x: 130, // default: 0
  y: 130, // default: 0
  width: null, // default: null (full width)
  height: null, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
  font: "40px sans-serif", // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: "left", // default: 'left'
  textBaseline: "alphabetic", // default: 'alphabetic'
  textDirection: "ltr" // default: 'ltr'
});

const layer5 = new etro.layer.Text({
  startTime: 4,
  duration: 1,
  text: "Hello",
  x: 130, // default: 0
  y: 130, // default: 0
  width: null, // default: null (full width)
  height: null, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
  font: "50px sans-serif", // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: "left", // default: 'left'
  textBaseline: "alphabetic", // default: 'alphabetic'
  textDirection: "ltr" // default: 'ltr'
});

const layer9 = new etro.layer.Text({
  startTime: 5,
  duration: 5,
  text: "World",
  x: 130, // default: 0
  y: 130, // default: 0
  width: null, // default: null (full width)
  height: null, // default: null (full height)
  opacity: 1, // default: 1
  color: etro.parseColor("white"), // default: new etro.Color(0, 0, 0, 1)
  font: "50px sans-serif", // default: '10px sans-serif'
  textX: 20, // default: 0
  textY: 20, // default: 0
  textAlign: "left", // default: 'left'
  textBaseline: "alphabetic", // default: 'alphabetic'
  textDirection: "ltr" // default: 'ltr'
});

movie.addLayer(layer);
movie.addLayer(layer2);
movie.addLayer(layer3);
movie.addLayer(layer4);
movie.addLayer(layer5);
movie.addLayer(layer9);

// movie.play();
movie
  .record({ frameRate: 30 })
  .then((b) => alert("done"))
  .catch((e) => alert(e));
// movie
//   .record({ frameRate: 24 }) // or just `play` if you don't need to save it
//   .then((blob) => console.log(blob));


// body {
//     font-family: sans-serif;
//     height: 100vh;
//   }
  
//   #app {
//     height: 50%;
//   }
  
//   video {
//     display: none;
//   }

{/* <body>
<div id="app">
  <canvas id="potato" />
  <video
    id="video"
    src="https://download.samplelib.com/mp4/sample-5s.mp4"
  ></video>
</div>

<script src="src/index.js"></script>
</body> */}

// import "./styles.css";
// import etro from "etro";

// const canvas = document.getElementById("potato");
// canvas.width = canvas.parentElement.offsetWidth;
// canvas.height = canvas.parentElement.offsetHeight;

// const videoElement = document.getElementById("video");

// const movie = new etro.Movie({ canvas });

// const layer = new etro.layer.Video({ startTime: 0, source: videoElement }); // the layer starts at 0s
// movie.addLayer(layer);

// movie.play();
  
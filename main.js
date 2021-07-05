function preload() {
    
    }
    
    function setup() {
    canvas= createCanvas(600,500);

       canvas.position(110,300)
       video= createCapture(VIDEO);
       video.hide();

       filter_color=" "
    }
    
    function draw() {
    image(video,0,0,600,500);
      tint(filter_color);
    }
     function applyfilter(){
         filter_color= document.getElementById("filterColourInput").value;
     }
     function take_snapshot(){
         save("smartpeopleimage");
     }
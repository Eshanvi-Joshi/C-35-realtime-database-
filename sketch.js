var ball;
var database;

function setup(){
    createCanvas(500,500);

    //NAMESPACING
    //ESHANVI JOSHI => ESHU
    database = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    //READ DATA FROM DATABASE
    //database.ref("node").on("value", function to be called if there is data, function to be called if no data);
    var ballPosition = database.ref("ball/position");
    ballPosition.on("value", readPosition, showError)
}

function draw(){
    background("white");

    if(keyDown(LEFT_ARROW)){
        //calling the function with arguments(values)
        changePosition(-1,0);
    }

    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }

    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }

    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }

    drawSprites();
}

//read function 
function readPosition(data){
    position = data.val();
    ball.x = position.x
    ball.y = position.y
    console.log(position.x)
}

//error function
function showError(){
    console.log("no data found")
}

//function definition
function changePosition(x,y){
  database.ref("ball/position").set({
      "x": position.x + x,
      "y": position.y + y
  })
}

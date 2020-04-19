function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


var canvas = document.getElementById('myCanvas1');

if (canvas.getContext) {

     // drawing code here

     function drawText(text){
        ctx.fillStyle = "black";
        ctx.font = "30px Verdana";
        ctx.fillText(text,100,36,);
    }    
     function MyObj(){
        this.x = 100;
        this.y = 100;
        this.i=0
        this.size = 40;
        this.scale = 1;
        this.array=sortorder[0];
    }
    MyObj.prototype = {
        getUnitTime(duration){  // get the unit time
            
            var unitTime = (globalTime - startTime) / duration;
            if(unitTime >= 1){ // if over time 
                 unitTime = 1; // make sure that the current frame is not over
                 startTime = startTime + duration; // next frame start (could be in the past)
                 currentAnim += 1;   // next animation in the list
            }
            return unitTime;
        },
        
        change(){
           if(anim===undefined){
               anim=0
           }
           this.getUnitTime(1000)
            if (this.i<sortorder.length-1 && currentAnim>anim){
                anim=currentAnim
                this.i=this.i+1
                
                // console.log(i)
                // console.log(sortorder)
                
                this.array=sortorder[this.i]
            }
            
        },
        
       
        
        draw(){
            renderRectangles(this.array,this.i)
            // console.log(this)
        }
    }
    
    
    

    var ctx = canvas.getContext('2d');

    // ctx.fillStyle = "white";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    let unSortedArray=[]

    //code to generate rectangles
    function genaerateArray(){
        
        for(i=0; i<30; i++){
            var height=getRandomArbitrary(1,400)
            unSortedArray.push(height)
        }
        return unSortedArray
    }

    //code to render rectangle
    function renderRectangles(list,n){
       

            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            drawText("step "+n);
            ctx.fillStyle = 'rgb(200, 0, 0)';
        
        for(i=0; i<30; i++){
            
            var height=list[i]
           
            ctx.fillRect(10+i*26, 500-height, 26, height);
            ctx.strokeRect(10+i*26, 500-height, 26, height);
        }
       }

   var arr = genaerateArray()

   var sortorder=[]
   selectionSort(arr)
   var obj=new MyObj()
   

   //selection sort algorithm
   function selectionSort(arr) {
    let len = arr.length;
    
    for (let i = 0; i < len; i++) {
        
        
        
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
            
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
            sortorder.push([...arr]) 
            
        }
        
        
    }
    
    return arr;
}

function update(time){
    globalTime = time;  // set the global
    if(currentAnim === undefined){ // if not set then 
        startTime = time;  // set start time
        currentAnim = 0;   // set the index of the first animation
    }
    
    
    animationList[currentAnim % animationList.length]();

    
    obj.draw();
    
    requestAnimationFrame(update);
}
 requestAnimationFrame(update);



// holds the animation list
const animationList = [
    obj.change.bind(obj),
    
];

var currentAnim;  // index of current animation
var startTime;    // start time of current animation
var globalTime;   // time from the requestAnimationFrame callback argument
var anim   
    
 
} else {
  // canvas-unsupported code here
}
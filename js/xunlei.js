var img=document.getElementById("img");
var imgArr=["201806261053564966.jpg","201806082104343468.jpg","201804171831356107.png","201702151452362548.jpg","201702151452533692.jpg"];
var box=document.querySelectorAll(".box");
console.log(box);
function change(indx){
    for(var i in imgArr){
        if(i==indx){
            img.src="images/"+imgArr[i]
        }
    }
}

function maodiang(j){
    for(var i in box){
        if(i==j){
            box[i].style.display="block";
        }else{
            box[i].style.display="none";
        }
    }
}
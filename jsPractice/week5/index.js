var btn=document.getElementById('btn');
btn.onclick=()=>{
    const newDiv = document.createElement("div");
  
    // and give it some content
    const newContent = document.createElement("p");
    newContent.innerHTML ="hello im howard"
 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
  
    // add the newly created element and its content into the DOM
    ;
    document.body.insertBefore(newDiv, Window.childNodes);
    
}

var square= document.getElementById('container');
square.onmousedown=(event)=>{
   const y=event.clientY-square.offsetTop;
   const x=event.clientX-square.offsetLeft;
   document.onmousemove =function(position){
    position =position||window.position;
    let left=position.pageX-x;
    let top=position.pageY-y;
    square.style.left=left+'px';
    square.style.top=top+'px';
    //当鼠标松开时 box1 位置固定
    document.onmouseup=function(){
        document.onmousemove =null;//将定位事件设置为空 使拖拽固定
        //当以上结束时 onmouseup还在保持运行 需要结束onmouseup
        if(document.onmousemove==null){
            document.onmouseup=null;
        }
    
    }
    }
}
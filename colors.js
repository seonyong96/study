var Body = {
    setColor:function (color){
    document.querySelector('body').style.color = color;
        },
    setBackgrondColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
        }
    }
var Links = {
    setColor:function(color){
    var links = document.querySelectorAll('a');
            var i = 0;
            while(i<links.length){
                links[i].style.color=color;
                i=i+1;
            }
        }
    }

function nightDayHandler(self){
    var target = document.querySelector('body')
        if(self.value==='night'){
            Body.setBackgrondColor('black');
            Body.setColor('white');
            self.value='day';

            Links.setColor('powderblue');

        }
        else{
            Body.setBackgrondColor('white');
            Body.setColor('black');
            self.value='night';

            Links.setColor('blue');
        }
}
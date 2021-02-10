function nightDayHandler(self){
    if(self.value === 'night'){
       Body.setBackgroundColor('black');
       Body.setColor('white');
       self.value = 'day';
       Links.SetColor('powderblue');
    }
    else{
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value = 'night';
      Links.SetColor('blue');
    }
  }
  
  var Body = {
    setColor : function(color) {
    //   document.querySelector('body').style.color = color;
    $('body').css('color', color);
    } ,
    setBackgroundColor : function(color) {
    //   document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
    }
  }

  var Links = {
    SetColor : function(color){
    //  var alist = document.querySelectorAll('a');
    //    var i=0;
    //    while(i < alist.length){
    //      alist[i].style.color = color;
    //      i = i + 1;
    //    }    
    $('a').css('color', color);
    }

  }
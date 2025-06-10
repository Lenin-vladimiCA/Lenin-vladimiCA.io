let sobremi = document.querySelector('.sobre_mi');
let habilidades = document.querySelector('.hab1');
let contenido = document.querySelector('.conte1');
let proyectos = document.querySelector('.proyectos');
let opacityValue = 0.0; 

let Posicion_Sobremi = {
  width:  300,
  height: 430,
  top:    30,
  left:   20
  
}

let Posicion_habilidades ={
  width:  200,
  height: 200,
  top:     20,
  left:   320
}

let Posicion_contenido={
  width:  220,
  height: 200,
  top:    260,
  left:   330
}

let Posicio_proyectos={
  width: 530,
  height:140,
  top:470,
  left:20
}


sobremi.addEventListener('click',function(){

  if(sobremi.style.width == '600px'){

    sobremi.style.width  = Posicion_Sobremi.width  + 'px';
    sobremi.style.height = Posicion_Sobremi.height + 'px';
    sobremi.style.left   = Posicion_Sobremi.left   + 'px';
    sobremi.style.top    = Posicion_Sobremi.top    + 'px';
    sobremi.style.borderRadius = '25px 10px 10px 10px';
    
  
  }else{
    sobremi.style.width  ='600px';
    sobremi.style.height ='600px';
    sobremi.style.left   ='700px';
    sobremi.style.borderRadius = '25px 25px 25px 25px';

    habilidades.style.width  = Posicion_habilidades.width  + 'px';
    habilidades.style.height = Posicion_habilidades.height + 'px';
    habilidades.style.left   = Posicion_habilidades.left   + 'px';
    habilidades.style.top    = Posicion_habilidades.top    + 'px';

    contenido.style.width  =  Posicion_contenido.width  + 'px';
    contenido.style.height =  Posicion_contenido.height + 'px';
    contenido.style.top    =  Posicion_contenido.top    + 'px';
    contenido.style.left   =  Posicion_contenido.left   + 'px';

    proyectos.style.width =  Posicio_proyectos.width + 'px';
    proyectos.style.height =  Posicio_proyectos.height + 'px';
    proyectos.style.top =  Posicio_proyectos.top + 'px';
    proyectos.style.left =  Posicio_proyectos.left + 'px';
  }

});

habilidades.addEventListener('click',function(){

  if(habilidades.style.width == '600px'){
    habilidades.style.width  = Posicion_habilidades.width  + 'px';
    habilidades.style.height = Posicion_habilidades.height + 'px';
    habilidades.style.left   = Posicion_habilidades.left   + 'px';
    habilidades.style.top    = Posicion_habilidades.top    + 'px';
    habilidades.style.borderRadius ='10px 25px 10px 10px';
    
  }else{

    habilidades.style.width  ='600px';
    habilidades.style.height ='600px';
    habilidades.style.left   ='700px';
    habilidades.style.top    = '5px';
    habilidades.style.borderRadius = '25px 25px 25px 25px';
    

    sobremi.style.width  = Posicion_Sobremi.width  + 'px';
    sobremi.style.height = Posicion_Sobremi.height + 'px';
    sobremi.style.left   = Posicion_Sobremi.left   + 'px';
    sobremi.style.top    = Posicion_Sobremi.top    + 'px';

    contenido.style.width =  Posicion_contenido.width   + 'px';
    contenido.style.height =  Posicion_contenido.height + 'px';
    contenido.style.top =  Posicion_contenido.top       + 'px';
    contenido.style.left =  Posicion_contenido.left     + 'px';

    proyectos.style.width =  Posicio_proyectos.width + 'px';
    proyectos.style.height =  Posicio_proyectos.height + 'px';
    proyectos.style.top =  Posicio_proyectos.top + 'px';
    proyectos.style.left =  Posicio_proyectos.left + 'px';
  }

});

contenido.addEventListener('click',function(){

  if(contenido.style.width == '600px'){
    contenido.style.width =  Posicion_contenido.width + 'px';
    contenido.style.height =  Posicion_contenido.height + 'px';
    contenido.style.top =  Posicion_contenido.top + 'px';
    contenido.style.left =  Posicion_contenido.left + 'px';
    contenido.style.borderRadius = '10px 10px 10px 10px';
  }else{

    contenido.style.width  ='600px';
    contenido.style.height ='600px';
    contenido.style.left   ='700px';
    contenido.style.top    = '20px';
    contenido.style.borderRadius = '25px 25px 25px 25px';

    sobremi.style.width  = Posicion_Sobremi.width  + 'px';
    sobremi.style.height = Posicion_Sobremi.height + 'px';
    sobremi.style.left   = Posicion_Sobremi.left   + 'px';
    sobremi.style.top    = Posicion_Sobremi.top    + 'px';

    habilidades.style.width  = Posicion_habilidades.width  + 'px';
    habilidades.style.height = Posicion_habilidades.height + 'px';
    habilidades.style.left   = Posicion_habilidades.left   + 'px';
    habilidades.style.top    = Posicion_habilidades.top    + 'px';
   
    proyectos.style.width =  Posicio_proyectos.width + 'px';
    proyectos.style.height =  Posicio_proyectos.height + 'px';
    proyectos.style.top =  Posicio_proyectos.top + 'px';
    proyectos.style.left =  Posicio_proyectos.left + 'px';
  }

});


proyectos.addEventListener('click',function(){

  if(proyectos.style.width =='600px'){
    proyectos.style.width =  Posicio_proyectos.width + 'px';
    proyectos.style.height =  Posicio_proyectos.height + 'px';
    proyectos.style.top =  Posicio_proyectos.top + 'px';
    proyectos.style.left =  Posicio_proyectos.left + 'px';
    //proyectos.style.borderRadius = '10px 10px 10px 10px';
  }else{

    proyectos.style.width  ='600px';
    proyectos.style.height ='600px';
    proyectos.style.left   ='700px';
    proyectos.style.top    = '20px';
    proyectos.style.borderRadius = '25px 25px 25px 25px';
    
    sobremi.style.width  = Posicion_Sobremi.width  + 'px';
    sobremi.style.height = Posicion_Sobremi.height + 'px';
    sobremi.style.left   = Posicion_Sobremi.left   + 'px';
    sobremi.style.top    = Posicion_Sobremi.top    + 'px';

    habilidades.style.width  = Posicion_habilidades.width  + 'px';
    habilidades.style.height = Posicion_habilidades.height + 'px';
    habilidades.style.left   = Posicion_habilidades.left   + 'px';
    habilidades.style.top    = Posicion_habilidades.top    + 'px';

    contenido.style.width  =  Posicion_contenido.width  + 'px';
    contenido.style.height =  Posicion_contenido.height + 'px';
    contenido.style.top    =  Posicion_contenido.top    + 'px';
    contenido.style.left   =  Posicion_contenido.left   + 'px';
  
  }
});







function getInputFieldValue(fieldId){
    const inputField = document.getElementById(fieldId)
    const inputFieldString = inputField.value;
       inputField.value='';
    const inputFieldFloat= parseFloat(inputFieldString);

 

    return inputFieldFloat;
  
}




function setText(id,area){

    const textId= document.getElementById(id);
        textId.innerHTML=area;


}

function areaCalculation(name,area){
   const areaCalculationEntry=document.getElementById('area-colection');
   const count=areaCalculationEntry.childElementCount;
    
   const p= document.createElement('p');
   p.classList="text-xs my-2";
    p.innerHTML =  `${count+1}. ${name} ${area} cm<sup>2</sup> <button class=" bg-[#E76F51] rounded px-2 py-2 text-white hover:bg-black text-xs ">Convert to m<sup>2</sup> </button>`
    
    areaCalculationEntry.appendChild(p);
   }



function triangleArea() {
    const base= getInputFieldValue('triangleBase');
    
    const height= getInputFieldValue('triangleHeight');
    if(isNaN(base) || isNaN(height)){
        alert("Provide a valid number");
       return;
    }


   const area= 0.5*base*height;

    setText('triangleArea', area);

   areaCalculation('Triangle Area: ', area);


   }





function rectangleArea(){
   const width=getInputFieldValue('rectangleWidth');
   const length=getInputFieldValue('rectangleHeight')

   if(isNaN(width) || isNaN(length)){
    alert("Provide a valid number");
   return;
}
   const area=width*length;

   setText('rectangleeArea', area);

   areaCalculation('Rectangle Area: ', area);

}



function parallelogramArea(){

    const base=getInputFieldValue('parallelogramBase');
    const height= getInputFieldValue('parallelogramHeight');
    if(isNaN(base) || isNaN(height)){
        alert("Provide a valid number");
       return;
    }
    const area=base*height;

    setText('parallelogramArea', area)
    areaCalculation('Parallelogram Area: ', area);


}




function rhombusArea(){

    const d1=getInputFieldValue('d1');
    const d2= getInputFieldValue('d2');
    if(isNaN(d1) || isNaN(d2)){
        alert("Provide a valid number");
       return;
    }
    const area= 0.5*d1*d2;

    setText('rhombusArea', area)
    areaCalculation('Rombus Area: ', area);



}




function pentagonArea(){

    const parameter=getInputFieldValue('pentagonParameter');
    const apothem= getInputFieldValue('pentagonApothem');
    if(isNaN(parameter) || isNaN(apothem)){
        alert("Provide a valid number");
       return;
    }
    const area= 0.5*parameter*apothem;

    setText('pentagonArea', area)
    areaCalculation('Pentagon Area: ', area);


}




function ellipsArea(){

    const aAxis=getInputFieldValue('ellipseAaxis');
    const bAxis= getInputFieldValue('ellipseBaxis');
    if(isNaN(aAxis) || isNaN(bAxis)){
        alert("Provide a valid number");
       return;
    }
    const area= Math.PI*aAxis*bAxis;
    const ellipsArea=area.toFixed(2);

    setText('ellipsArea', ellipsArea)
    areaCalculation('Ellips Area: ', ellipsArea);


}


var SlideImag=Array.from(document.querySelectorAll('.Slider-container img'));
var slidescount=SlideImag.length;
var currentslid=1;

var SlidernumberElement=document.querySelector('.Slider-number');


var nextbutton=document.querySelector('#Next');
var prevbutton=document.querySelector('#Prev');
var numberElement=document.querySelector('.indicators');


nextbutton.onclick=nextSlider;
prevbutton.onclick=prevouSlider;



function nextSlider()
{
    console.log('Next');
}


function prevouSlider()
{
    console.log('Prev');
}


var paginationElement=document.createElement('ul');
    paginationElement.setAttribute('id','pagination-ul');


    for(var i=1;i<=slidescount;i++)
    {

    var paginationItems=document.createElement('li');

    paginationItems.setAttribute('data',i);
    if(paginationItems.getAttribute('data')==1){
    prevbutton.classList.add('class','disabled');
    }
    paginationItems.appendChild(document.createTextNode(i));

   paginationElement.appendChild( paginationItems);
   numberElement.appendChild(paginationElement);

    }




function check()
{

    SlidernumberElement.textContent="#Slide  "+ (currentslid) +" of" +slidescount;
    SlideImag[currentslid-1].classList.add("class","active");
    paginationElement.children[currentslid-1].classList.add('class','active');


}

check();






var itemsI=document.querySelectorAll('#pagination-ul li');



itemsI.forEach(function(items)
{

items.onclick=function()
{
    for(var i=0;i<itemsI.length;i++)
    {
    
    itemsI[i].classList.remove('active');
    
    }
items.classList.add('class','active');

var x=items.getAttribute('data');
if(x==slidescount)
{
    nextbutton.classList.add('disabled');


}
else
{

nextbutton.classList.remove('disabled');

}
if(x==1)
{


    prevbutton.classList.add('disabled');
}
else

{
prevbutton.classList.remove('disabled');

}
for(var i=0;i<slidescount;i++)
    {
    
   SlideImag[i].classList.remove('active');
    
    }
SlideImag[x-1].classList.add('class','active');
SlidernumberElement.textContent="#Slide  "+ (x) +" of" +slidescount;


}
})



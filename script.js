// pick the accordion container as dom using query selector //

const accordionItem = document.querySelectorAll('.accordion-item');
const accordionContent = document.getElementsByClassName('.accordion-content')
//const button = document.querySelectorAll('.btn');


//add Eventlistener to the content

document.addEventListener('DOMContentLoaded', function(){
	accordionItem.forEach(item=>{

		item.addEventListener('click', function(){
			// close all accordion items
			accordionItem.forEach((accordionItem) => {
				if(accordionItem !== item){
					accordionItem.classList.remove('active');
					// accordionContent.style.display = 'none';
				}
			});
			// toggle active class in css
            this.classList.toggle('active')
		});
	});
});
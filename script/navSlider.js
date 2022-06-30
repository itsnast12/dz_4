const navSlider = document.querySelector('#navslider')
let navslideId = 0;

const navSliderImg = [ 
	{
		slidetitle: 'Бухгалтерские услуги в центре Москвы', 
		bgImage: '1.jpg',
	},
	{
		slidetitle: 'Бухгалтерские услуги в Москве', 
		bgImage: '2.jpg',
	},
	{
		slidetitle: 'Бухгалтерские услуги в центре Санкт-Петербурга', 
		bgImage: '3.jpg',
	},
	{
		slidetitle: 'Бухгалтерские услуги в Санкт-Петербурге', 
		bgImage: '4.jpg',
	},
];

const navSliderMain = document.createElement('div')
const navSliderCollage = document.createElement('div')
const navSlideControl = document.createElement('div')



const navSlidedotsElem = document.createElement('div')
const navSlidearrowsElem = document.createElement('div')



const navArrowLeftElem = document.createElement('div')
const navArrowRightElem = document.createElement('div')


navSliderMain.classList.add('navslidermain')
navSliderCollage.classList.add('navslidercollage')
navSlideControl.classList.add('navslidecontrol')


navSlidedotsElem.classList.add('navslidedots')
navSlidearrowsElem.classList.add('navslidearrows')


navArrowLeftElem.classList.add('navarrowleft')
navArrowRightElem.classList.add('navarrowright')



navSlider.append(navSliderMain, navSlideControl)
navSliderMain.append(navSliderCollage)
navSlidedotsElem.append(navSlidearrowsElem)
navSlidearrowsElem.append(navArrowLeftElem, navArrowRightElem)
navSlideControl.append(navSlidedotsElem, navSlidearrowsElem)

navArrowLeftElem.innerText = '<'
navArrowRightElem.innerText = '>'

const navSliderrender = () =>{
	navSliderCollage.style.right = navSliderMain.offsetWidth * navslideId + 'px';

	const dotsList = document.querySelectorAll('.navslidedots div')
	dotsList.forEach(t => t.classList.remove('active'))
	dotsList[navslideId].classList.add('active'); 


}

const filmElems = navSliderImg.map(content =>{
	const divElem = document.createElement('div')
	divElem.style.backgroundImage = `url('media/navSlider/${content.bgImage}')`;
	divElem.style.width = navSliderMain.offsetWidth + 'px';

	const contentRange = document.createElement('div')
	contentRange.classList.add('content_range');


	const sliderTitle = document.createElement('div');
	sliderTitle.classList.add('slidertitle');
	sliderTitle.innerText = content.slidetitle;


	const sliderButton = document.createElement('div');
	sliderButton.classList.add('sliderbutton');
	sliderButton.innerText = 'Наша презентация';

	divElem.append(contentRange)
	contentRange.append(sliderTitle, sliderButton)
	
	return divElem
})


navSliderCollage.append(...filmElems)

window.addEventListener('resize', ()=>{
	
	filmElems.forEach(elem => {
		elem.style.width = navSliderMain.offsetWidth + 'px';
		navSliderCollage.style.right = navSliderMain.offsetWidth * navslideId + 'px';

	})
})


navArrowLeftElem.addEventListener("click", event=>{
	if (navslideId > 0){
		navslideId --
	}else{
		navslideId = navSliderImg.length - 1
	}
	navSliderrender()
})


navArrowRightElem.addEventListener("click", event=>{
	if(navSliderImg.length - 1 > navslideId){
		navslideId++;
	}else{
		navslideId = 0
	}
	navSliderrender()
})



navSlidedotsElem.append(...navSliderImg.map((_, index) => {
	const dotsElem = document.createElement('div')

	dotsElem.addEventListener('click', event => {
		const dotElement = event.target;
		const dotsList = [...dotElement.parentNode.children];
		navslideId = dotsList.indexOf(dotElement)

		navSliderrender()
	})

	return dotsElem
}));


navSliderrender()



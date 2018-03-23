let a = {};
a.name = document.querySelector('.section-gallery .name').innerHTML;
a.areaName = document.querySelector('.section-gallery .place').innerHTML.match(/[\u4e00-\u9fa5]+/)[0];
a.price = document.querySelector('.section-gallery .num').innerHTML;
a.imgUrl = document.querySelector('.section-gallery .big img').src;
a.imgs = Array.prototype.slice.call(document.querySelectorAll('.section-gallery li img'), 1 , 5).map((item, index) => {
  return item.dataset.ori;
});
let className = Array.prototype.map.call(document.querySelectorAll('.section-detail li'),(item, index) => {
	return item.className
});
a.wifi = className.includes('itm-wifi');
a.nitrox = className.includes('itm-nitrox');
a.luxury = className.includes('itm-luxury');
a.ac = className.includes('itm-ac');
a.size = document.querySelector('.itm-size span').innerHTML;
a.guest = document.querySelector('.itm-guest span').innerHTML;
a.about = document.querySelector('.about .all').innerHTML.replace(/^(\s+)([\S\s]+)/, '$2');

let b = {};
b.name = document.querySelector('.section-itinerary .name').innerHTML;
b.totalTime = document.querySelector('.section-itinerary .duration').innerHTML
b.embark = document.querySelector('.section-itinerary .i-embark .value').innerHTML;
b.disembark = document.querySelector('.section-itinerary .i-disembark .value').innerHTML;
b.dives = document.querySelector('.section-itinerary .i-dives .value').innerHTML;
b.Des = document.querySelector('.section-itinerary .active .desc') ? document.querySelector('.section-itinerary .active .desc').innerHTML : '';
b.Route = [...document.querySelectorAll('.section-itinerary .panle .active .day-list .day-item')].map((item, index) => {
  return {
    title: item.querySelector('.name').innerHTML.replace(/([\s\S]+?)(\<[\s\S]+)/, '$1'),
    process: [...item.querySelectorAll('li')].map((item ,index) => {
      return {
        step: index.toString(),
        do: item.innerHTML
      }
    })
  }
})
b.facilities = [...document.querySelectorAll('.itm-1 li')].map((item, index) => {
  return item.innerHTML;
})
b.amusement = [...document.querySelectorAll('.itm-2 li')].map((item, index) => {
  return item.innerHTML;
})
b.diet = [...document.querySelectorAll('.itm-3 li')].map((item, index) => {
  return item.innerHTML;
})
b.equipmentLeasing = [...document.querySelectorAll('.itm-5')[0].querySelectorAll('li')].map((item, index) => {
  return {
    name: item.querySelector('.name2').innerHTML,
    value: item.querySelector('.value').innerHTML
  }
})
b.qualification = [...document.querySelectorAll('.itm-5')[1].querySelectorAll('li')].map((item, index) => {
  return {
    name: item.querySelector('.name2').innerHTML,
    value: item.querySelector('.value').innerHTML
  }
})

console.log(JSON.stringify(b));
console.log(11111)
console.log(JSON.stringify(a));
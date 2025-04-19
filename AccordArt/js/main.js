let catalogBlock = document.querySelector('#catalog');
let overlay = document.querySelector('#overlay');
let btnCatalogOpen = document.querySelector('#btn_catalog_open');
let btnCatalogClose = document.querySelector('#btn_close');


btnCatalogOpen.onclick = function() {
    catalogBlock.style.opacity = '1';
    catalogBlock.style.zIndex = '999';
    overlay.style.visibility = 'visible';
};
btnCatalogClose.onclick = function() {
    catalogBlock.style.opacity = '0';
    catalogBlock.style.zIndex = '-999';
    overlay.style.visibility = 'hidden';
};
overlay.addEventListener('click', function(e) {
    if (!catalogBlock.contains(e.target)) {
        catalogBlock.style.opacity = '0';
        catalogBlock.style.zIndex = '-999';
        overlay.style.visibility = 'hidden';
    }
});

document.addEventListener('keydown', function(e) {
	if ( e.key == 'Escape' ) {
		catalogBlock.style.opacity = '0';
        catalogBlock.style.zIndex = '-999';
        overlay.style.visibility = 'hidden';
	}
});

let keyboards = document.getElementById('keyboards'); 
let guitars = document.getElementById('guitars');
let bowed = document.getElementById('bowed');
let drums = document.getElementById('drums');
let percussion = document.getElementById('percussion');
let wind = document.getElementById('wind');
let accordions = document.getElementById('accordions');
let studioEq = document.getElementById('studio_eq');
let soundEq = document.getElementById('sound_eq');
let switching = document.getElementById('switching');
let accessories = document.getElementById('accessories');

let keyboardsContent = document.querySelector('.keyboards');
let guitarsContent = document.querySelector('.guitars');
let bowedContent = document.querySelector('.bowed');
let drumsContent = document.querySelector('.drums');
let percussionContent = document.querySelector('.percussion');
let windContent = document.querySelector('.wind');
let accordionsContent = document.querySelector('.accordions');
let studioEqContent = document.querySelector('.studio_eq');
let soundEqContent = document.querySelector('.sound_eq');
let switchingContent = document.querySelector('.switching');
let accessoriesContent = document.querySelector('.accessories');

function contentBlock() {
    keyboardsContent.style.display = 'none';
    guitarsContent.style.display = 'none';
    bowedContent.style.display = 'none';
    drumsContent.style.display = 'none';
    percussionContent.style.display = 'none';
    windContent.style.display = 'none';
    accordionsContent.style.display = 'none';
    studioEqContent.style.display = 'none';
    soundEqContent.style.display = 'none';
    switchingContent.style.display = 'none';
    accessoriesContent.style.display = 'none';
};


keyboards.addEventListener('click', function() {
    contentBlock();
    keyboardsContent.style.display = 'flex';
});
guitars.addEventListener('click', function() {
    contentBlock();
    guitarsContent.style.display = 'flex';
});
bowed.addEventListener('click', function() {
    contentBlock();
    bowedContent.style.display = 'flex';
});
drums.addEventListener('click', function() {
    contentBlock();
    drumsContent.style.display = 'flex';
});
percussion.addEventListener('click', function() {
    contentBlock();
    percussionContent.style.display = 'flex';
});
wind.addEventListener('click', function() {
    contentBlock();
    windContent.style.display = 'flex';
});
accordions.addEventListener('click', function() {
    contentBlock();
    accordionsContent.style.display = 'flex';
});
studioEq.addEventListener('click', function() {
    contentBlock();
    studioEqContent.style.display = 'flex';
});
soundEq.addEventListener('click', function() {
    contentBlock();
    soundEqContent.style.display = 'flex';
});
switching.addEventListener('click', function() {
    contentBlock();
    switchingContent.style.display = 'flex';
});
accessories.addEventListener('click', function() {
    contentBlock();
    accessoriesContent.style.display = 'flex';
});

const video = document.getElementById('video');
video.addEventListener('ended', function() {
    video.play();
});


const cardOfProduct = document.querySelectorAll(".card_of_product");

cardOfProduct.forEach((cardProduct) => {
    cardProduct.addEventListener('mouseover', function() {
        cardProduct.querySelector('#name').style.opacity = "0";
        cardProduct.querySelector('#more_details').style.opacity = "1";
    });

    cardProduct.addEventListener('mouseout', function() {
        cardProduct.querySelector('#name').style.opacity = "1";
        cardProduct.querySelector('#more_details').style.opacity = "0";
    });
});


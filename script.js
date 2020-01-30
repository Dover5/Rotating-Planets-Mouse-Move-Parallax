function Parallax(options){
    options = options || {};
    this.nameSpaces = {
        wrapper: options.wrapper || '.parallax',
        layers: options.layers || '.parallax-layer',
        deep: options.deep || 'data-parallax-deep'
    };
	
    this.init = () => {
        let self = this,
        parallaxWrappers = document.querySelectorAll(this.nameSpaces.wrapper);
			
      	for(let i = 0; i < parallaxWrappers.length; i++){
			(function(i){
				  parallaxWrappers[i].addEventListener('mousemove', function(e){
					x = e.clientX,
				    y = e.clientY,
					layers = parallaxWrappers[i].querySelectorAll(self.nameSpaces.layers);
					
					for(let j = 0; j < layers.length; j++){
						(function(j){
							  deep = layers[j].getAttribute(self.nameSpaces.deep),
							  disallow = layers[j].getAttribute('data-parallax-disallow'),
							  itemX = (disallow && disallow === 'x') ? 0 : x / deep,
							  itemY = (disallow && disallow === 'y') ? 0 : y / deep;
							  if(disallow && disallow === 'both') return;
							  layers[j].style.transform = 'translateX(' + itemX + '%) translateY(' + itemY + '%)';
						})(j);  
					}
				})
			})(i);
      	}
    };
    this.init();
    return this;
}

window.addEventListener('load', function(){
    new Parallax();
});

$(window).load(function(){     
	$('#toggle > span').click(function() {
		let ix = $(this).index();
		
		$('#hud, #select, .wrapper, #earthS, #earthOUT, #earthS2').toggle( ix === 0 );
		$('.wrapper2, #hudT, #select2, #earthX, #earthX2, #earthS3').toggle( ix === 1 );
		$('.wrapper3, #hudJ, #select3, #earthX3, #earthX4, #earthS4').toggle( ix === 2 );
		$('.wrapper4, #hudG, #geo1, #geo2, #earthR, #earthR2, #select4, #earthS5').toggle( ix === 3 );
		$('.wrapper5, #hudE, #dstar , #select5, #earthX5, #earthX6, #earthS6').toggle( ix === 4 );
		$('.wrapper6, #hudD, #earthR3, #select6, #earthX7, #earthX8, #earthS7').toggle( ix === 5 );
		$('.wrapper7, .wrapper8, #hudY, #earthR5, #earthR6, #earthSY, #shadowY, #earthOUTY, #select7, #earthS8').toggle( ix === 6 );
		$('.wrapper9, #hudM, #earthR7, #earthR8, #select8, #earthS9').toggle( ix === 7 );
		$('.wrapper10, .wrapper11, .wrapper12, #hudB, #earthR9, #earthR10, #shadowB1, #earthSB1, #shadowB2, #earthSB2, #select9, #earthS10').toggle( ix === 8 );
		$('.wrapper13, #hudC, #earthR11, #earthR12, #select10, #earthX9, #earthX10, #earthS11').toggle( ix === 9 );
		$('.wrapper14, #hudDa, #earthR13, #earthR14, #select11, #earthS12').toggle( ix === 10 );
		$('.wrapper15, #hudCo, #select12, #earthX11, #earthX12, #earthS13').toggle( ix === 11 );
		$('.wrapper16, #hudS, #earthR15, #earthR16, #select13, #earthS14').toggle( ix === 12 );
		$('.wrapper17, #hudDS, #earthDS, #select14, #Dshoot1, #Dshoot2').toggle( ix === 13 );
		$('.wrapper18, #hudA, #select15, #earthX13, #earthX14, #earthS15').toggle( ix === 14 );
		$('.wrapper19, #hudSK, #select16, #SKshoot1, #SKshoot2, #earthX15, #earthX16').toggle( ix === 15 );
		$('.wrapper20, #hudF, #select17, #earthX17, #earthX18, #earthS16').toggle( ix === 16 );
	});
});

//]]>

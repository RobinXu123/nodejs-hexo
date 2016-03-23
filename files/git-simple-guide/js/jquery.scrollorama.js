/*
	scrollorama - The jQuery plugin for doing cool scrolly stuff
	by John Polacek (@johnpolacek)
	
	Dual licensed under MIT and GPL.
*/

(function($) {
    $.scrollorama = function(options) {
		
		// PRIVATE VARS
		var blocks = [],
			browserPrefix = '',
			onBlockChange = function() {};
		
		var scrollorama = this;
		
		var defaults = {offset:0};
		
		scrollorama.settings = $.extend({}, defaults, options);
		scrollorama.blockIndex = 0;
		
		if (options.blocks === undefined) alert('ERROR: Must assign blocks class selector to scrollorama plugin');
		
		// PRIVATE FUNCTIONS
		function init() {
			if (typeof scrollorama.settings.blocks === 'string')  scrollorama.settings.blocks = $(scrollorama.settings.blocks);
			
			// set browser prefix
			if ($.browser.mozilla)	browserPrefix = '-moz-';
			if ($.browser.webkit)	browserPrefix = '-webkit-';
			if ($.browser.opera)	browserPrefix = '-o-';
			if ($.browser.msie)		browserPrefix = '-ms-';
			
			// create blocks array to contain animation props
			$('body').css('position','relative');
			
			var i;
			for (i=0; i<scrollorama.settings.blocks.length; i++)="" {="" var="" block="scrollorama.settings.blocks.eq(i);" blocks.push({="" block:="" block,="" top:="" block.offset().top,="" pin:="" 0,="" animations:[]="" });="" }="" convert="" elements="" to="" absolute="" position="" for="" (i="0;" i<blocks.length;="" blocks[i].block="" .css('position',="" 'absolute')="" .css('top',="" blocks[i].top);="" $("body").prepend("<div="" id="scroll-wrap">");
			
			var didScroll = false;
			$(window).scroll(function(){
				didScroll = true; 
			});
			setInterval(function(){ 
				if(didScroll){
					onScrollorama();
					didScroll = false;
				}				
			}, 50);
		}
		
		function onScrollorama() {
			var scrollTop = $(window).scrollTop();
			var currBlockIndex = getCurrBlockIndex(scrollTop);
			
			// update all animations
			for (var i=0; i<blocks.length; i++)="" {="" go="" through="" the="" animations="" for="" each="" block="" if="" (blocks[i].animations.length)="" (var="" j="0;" j<blocks[i].animations.length;="" j++)="" var="" anim="blocks[i].animations[j];" above="" current="" block,="" settings="" should="" be="" at="" start="" value="" (i=""> currBlockIndex) {
							if (currBlockIndex != i-1 && anim.baseline != 'bottom') {
								setProperty(anim.element, anim.property, anim.startVal);
							}
							if (blocks[i].pin) {
								blocks[i].block
									.css('position', 'absolute')
									.css('top', blocks[i].top);
							}
						}
						
						// if below current block, settings should be at end value
						// unless on an element that gets animated when it hits the bottom of the viewport
						else if (i < currBlockIndex) {
							setProperty(anim.element, anim.property, anim.endVal);
							if (blocks[i].pin) {
								blocks[i].block
									.css('position', 'absolute')
									.css('top', (blocks[i].top + blocks[i].pin));
							}
						}
						
						// otherwise, set values per scroll position
						if (i == currBlockIndex || (currBlockIndex == i-1 && anim.baseline == 'bottom')) {
							// if block gets pinned, set position fixed
							if (blocks[i].pin && currBlockIndex == i) {
								blocks[i].block
									.css('position', 'fixed')
									.css('top', 0);
							}
							
							// set start and end animation positions
							var startAnimPos = blocks[i].top + anim.delay;
							if (anim.baseline == 'bottom')  startAnimPos -= $(window).height();
							var endAnimPos = startAnimPos + anim.duration;							
							
							// if scroll is before start of animation, set to start value
							if (scrollTop < startAnimPos)  setProperty(anim.element, anim.property, anim.startVal);
							
							// if scroll is after end of animation, set to end value
							else if (scrollTop > endAnimPos) {
								setProperty(anim.element, anim.property, anim.endVal);
								if (blocks[i].pin) {
									blocks[i].block
											.css('position', 'absolute')
											.css('top', (blocks[i].top + blocks[i].pin));
								}
							}
							
							// otherwise, set value based on scroll
							else {
								// calculate percent to animate
								var animPercent = (scrollTop - startAnimPos) / anim.duration;
								// then multiply the percent by the value range and calculate the new value
								var animVal = anim.startVal + (animPercent * (anim.endVal - anim.startVal));
								setProperty(anim.element, anim.property, animVal);
							}
						}
					}
				}
			}
			
			// update blockIndex and trigger event if changed
			if (scrollorama.blockIndex != currBlockIndex) {
				scrollorama.blockIndex = currBlockIndex;
				onBlockChange();
			}
		}
		
		function getCurrBlockIndex(scrollTop) {
			var currBlockIndex = 0;
			for (var i=0; i<blocks.length; i++)="" {="" check="" if="" block="" is="" in="" view="" (blocks[i].top="" <="scrollTop" -="" scrollorama.settings.offset)="" currblockindex="i;" }="" return="" currblockindex;="" function="" setproperty(target,="" prop,="" val)="" (prop="==" 'rotate'="" ||="" prop="==" 'zoom'="" 'scale')="" 'rotate')="" target.css(browserprefix+'transform',="" 'rotate('+val+'deg)');="" else="" var="" scalecss="scale(" +val+')';="" (browserprefix="" !="=" '-ms-')="" scalecss);="" target.css('zoom',="" target.css(prop,="" val);="" public="" functions="" scrollorama.animate="function(target)" *="" target="animation" arguments="array" of="" animation="" parameters="" parameters:="" delay="amount" scrolling="" (in="" pixels)="" before="" starts="" duration="amount" over="" which="" the="" occurs="" property="css" being="" animated="" start="start" value="" end="end" pin="pin" during="" (applies="" to="" all="" animations="" within="" block)="" baseline="top" (default,="" when="" reaches="" top="" viewport)="" or="" bottom="" (when="" first="" comies="" into="" view)="" string,="" convert="" dom="" object="" (typeof="" 'string')="" find="" targetindex;="" targetblock;="" for="" (var="" i="0;" i<blocks.length;="" (blocks[i].block.has(target).length)="" targetblock="blocks[i];" targetindex="i;" add="" each="" blocks="" array="" (i="1;" i<arguments.length;="" anim="arguments[i];" left="" right="" bottom,="" set="" relative="" positioning="" static="" (anim.property="=" 'top'="" anim.property="=" 'left'="" 'bottom'="" 'right'="" )="" (target.css('position')="=" 'static')="" target.css('position','relative');="" anim.start,="" anim.end="" defaults="" (anim.start="==" undefined)="" anim.start="0;" (anim.end="==" rotate,="" zoom="" scale,="" letter-spacing="" 'scale'="" 'letter-spacing'="" &&="" target.css(anim.property))="" (anim.baseline="==" (anim.pin="" targetblock.pin="" 0)="" anim.baseline="top" ;="" (anim.delay="==" anim.delay="0;" targetblock.animations.push({="" element:="" target,="" delay:="" anim.delay,="" duration:="" anim.duration,="" property:="" anim.property,="" startval:="" undefined="" ?="" :="" parseint(target.css(anim.property),10),="" undefined,="" use="" current="" css="" endval:="" baseline:="" });="" (anim.pin)="" (targetblock.pin="" anim.duration="" +="" anim.delay)="" offset="anim.duration" targetblock.pin;="" adjust="" positions="" below="" j="targetIndex+1;" j<blocks.length;="" j++)="" blocks[j].top="" blocks[j].block.css('top',="" blocks[j].top);="" onscrollorama();="" };="" passing="" blockchange="" event="" callback="" scrollorama.onblockchange="function(f)" onblockchange="f;" getting="" an="" scrollpoints="" (top="" and="" element="" scroll="" point)="" scrollorama.getscrollpoints="function()" scrollpoints.push(blocks[i].top);="" go="" through="" (blocks[i].animations.length="" blocks[i].pin=""> 0) {
					for (var j=0; j</blocks.length;></blocks.length;></scrollorama.settings.blocks.length;>
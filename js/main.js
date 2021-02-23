var container;
window.onload = function(){

	container = document.getElementById('fc');

	//particle spawner
	var spawner = setInterval(function(){
	    var x = newParticle();
	    container.appendChild(x);
	}, 1500);

	function newParticle(){
	  
	  var rand = ((parseInt(Math.random() * 10000))%100) + 50; // 50 - 149
	  var rand2 = ((parseInt(Math.random()* 10000))%10) + 10; // 10 - 19
	  var rand3 = ((parseInt(Math.random()* 10000))%100); //0-99

	  var particle = document.createElement('div');
	  particle.className = "particle";
	  particle.style.width = rand + "px";
	  particle.style.height = rand + "px";
	  particle.style.webkitAnimationDuration = rand2 + "s";
	  particle.style.left = rand3 + "%";
	  particle.addEventListener('webkitAnimationEnd'
	                  , function(){
	                      container.removeChild(particle);
	                    });
	  setTimeout(function(elem){
	  	if(container.contains(elem))
	  		container.removeChild(elem);
	  }, 19000, particle);
	  return particle;
	}

}
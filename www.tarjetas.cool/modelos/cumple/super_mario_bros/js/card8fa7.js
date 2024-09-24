// IMAGENES --------------------------------------------------------------------------
let posicion_imagen = 0;
let imagenes = [
	{ name: "2.png", width: "280px", top: "-32px", left: "10px" },
	{ name: "1.png", width: "270px", top: "-19px", left: "-15px" },
	{ name: "3.png", width: "350px", top: "78px", left: "-20px" },
	{ name: "4.png", width: "340px", top: "100px", left: "-15px" },
];
const elemento_img = document.getElementById("imagenes");
function cambiarImagenes() {
	elemento_img.hidden = true;
	elemento_img.style.top = imagenes[posicion_imagen].top;
	elemento_img.style.left = imagenes[posicion_imagen].left;
	elemento_img.style.width = imagenes[posicion_imagen].width;
	elemento_img.src = "./img/" + imagenes[posicion_imagen].name;

	setTimeout(() => {
		elemento_img.hidden = false;
	}, 50);
	posicion_imagen < imagenes.length - 1 ? posicion_imagen++ : (posicion_imagen = 0);
}

// FOTOS --------------------------------------------------------------------------
let posicion_foto = 0;
const fotos = ["foto1.jpg"];
const elemento_foto = document.getElementById("foto");
function cambiarFoto() {
	// elemento_foto.hidden = true;
	elemento_foto.src = "./img/" + fotos[posicion_foto];

	setTimeout(() => {
		// elemento_img.hidden = false;
	}, 50);
	posicion_foto < fotos.length - 1 ? posicion_foto++ : (posicion_foto = 0);
}

cambiarImagenes();
cambiarFoto();

function remove_loader() {
	let loader = document.getElementById("loader");
	// remove loader element
	loader.parentNode.removeChild(loader);
	audio.play();
}

document.addEventListener('visibilitychange', () => {
	if (document.hidden) audio.pause();
	else if (!document.getElementById("loader")) audio.play();
  });

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const countDown = new Date("Oct 5, 2024 18:00:00").getTime();
  
  x = setInterval(function () {
	  const now = new Date().getTime();
	  const distance = countDown - now;
  
	  document.getElementById("days").innerHTML = Math.floor(distance / day);
	  document.getElementById("hours").innerHTML = Math.floor((distance % day) / hour);
	  document.getElementById("minutes").innerHTML = Math.floor((distance % hour) / minute);
	  document.getElementById("seconds").innerHTML = Math.floor((distance % minute) / second);
  
	  if (distance < 0) {
		  clearInterval(x);
		  document.getElementById("countdown").innerHTML = "<div class='text-center fs-2'>¡Gracias por acompañarme!</b>";
	  }
  }, second);
  


window.onload = () => {
	if (imagenes.length > 1) setInterval(cambiarImagenes, 6000);
	if (fotos.length > 1) setInterval(cambiarFoto, 2000);
};

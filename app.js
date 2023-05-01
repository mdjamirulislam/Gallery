
const image_create = document.querySelectorAll('.image_create img');
const image_magic = document.querySelector('.image_magic img');
const image_magicee = document.querySelector('.image_magic ');
const atag = document.querySelector('a');

atag.addEventListener('click',(x) => {
	image_magicee.classList.toggle('magiee')
})




image_create.forEach((x) => {
	x.addEventListener('click',(d)=>{
		image_magic.setAttribute('src',d.target.src)
		atag.classList.remove('disco')
		image_magicee.classList.add('mdkhanpow')
         

	})
})








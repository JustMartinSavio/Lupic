function ProcessJson(varjson) {
  window.addEventListener('DOMContentLoaded', function () {
    // Get the URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    // Get the value of the 'image' parameter from the URL
    var imageParam = urlParams.get('image');
    // Get the image entity
    var textEntity = document.getElementById('PortfolioDescription');
    var main_sliderEntity = document.getElementById('main_slider');
    var AFrameEntity = document.getElementById('contenedor_de_canvas');
    var VRbannerEntity = document.getElementById('bannerVRexperience');
    var TarjetaPortfolioEntity = this.document.getElementById('TarjetaPortfolio')

    if (/Mobi/.test(navigator.userAgent)) {
      // User is on a mobile device, do nothing (don't hide AFrameEntity)
  } else {
      // User is not on a mobile device, hide AFrameEntity
      VRbannerEntity.style.display = 'none';
  }


    //Hide Canvas Container if empty
    AFrameEntity.children.length <= 0 ? AFrameEntity.classList.add('empty') : ""

    // Set the image source based on the parameter
    if (imageParam === 'fauna') {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      var imageHTML = '';
      var videoHTML = '<div class="swiper-slide">' + varjson.Fauna.Videos + '</div>';
      var faunaImages = varjson.Fauna.Imagenes;
      for (var i = 0; i < faunaImages.length; i++) {
        imageHTML += `<div class="swiper-slide">
        <img src="` + faunaImages[i] + `" alt="">
        </div>`;
      }
      imageHTML += videoHTML;
      main_sliderEntity.innerHTML = imageHTML
      // Relleno el div contenedor_canvas con el A Frame
      AFrameEntity.innerHTML = `<a-scene class="image360test">
      <a-assets>
        <img id="fauna" crossorigin src="assets/img/portfolio/360-test-fauna.jpeg" alt="360viewer">
        <img id="cuevas" crossorigin src="assets/img/portfolio/360-test-cuevas.jpeg" alt="360viewer">
      </a-assets>
      <a-sky src='#fauna' id="imagen360"></a-sky>
    </a-scene>`

      VRbannerEntity.innerHTML =
        `<section id="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Live the VR experience yourself</h3>
          </div>
        </div>
    </section>`;

    TarjetaPortfolioEntity.innerHTML = 
      `<li><strong>Category</strong>: `+varjson.Fauna.Category+`</li>
        <li><strong>Client</strong>: `+varjson.Fauna.Client+`</li>
        <li><strong>Project date</strong>: `+varjson.Fauna.Project_Date+`</li>`

      textEntity.innerHTML = `<h2>` + varjson.Fauna.Titulo + `</h2> <p>` + varjson.Fauna.Texto_Descripcion + `</p>`

      let imageEntity = document.getElementById('imagen360');
      imageEntity.setAttribute('material', 'src', '#fauna');
      imageEntity.setAttribute('rotation', '0 -90 0');
      // imageEntity.setAttribute('position', '0 0 0');
      textEntity.innerHTML = `<h2>` + varjson.Fauna.Titulo + `</h2> <p>` + varjson.Fauna.Texto_Descripcion + `</p>`



    } else if (imageParam === 'cuevas') {
      //Estos styles son para poder scrollear y ver el canvas
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
      //Esta es la slide del video
      var imageHTML = '<div class="swiper-slide">' + varjson.Cuevas.Videos + '</div>';
      var Images = varjson.Cuevas.Imagenes;
      for (var i = 0; i < Images.length; i++) {
        imageHTML += `<div class="swiper-slide">
        <img src="` + Images[i] + `" alt="">
        </div>`;
      }
      main_sliderEntity.innerHTML = imageHTML

      // Relleno el div contenedor_canvas con el A Frame
      AFrameEntity.innerHTML =
        `<a-scene class="image360test">
      <a-assets>
        <img id="fauna" crossorigin src="assets/img/portfolio/360-test-fauna.jpeg" alt="360viewer">
        <img id="cuevas" crossorigin src="assets/img/portfolio/360-test-cuevas.jpeg" alt="360viewer">
      </a-assets>
      <a-sky src='#fauna' id="imagen360"></a-sky>
    </a-scene>`

      VRbannerEntity.innerHTML =
        `<section id="portfolio">
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-md-12">
            <h3 class="section-title">Live the VR experience yourself</h3>
          </div>
        </div>
    </section>`

      TarjetaPortfolioEntity.innerHTML = 
      `<li><strong>Category</strong>: `+varjson.Cuevas.Category+`</li>
        <li><strong>Client</strong>: `+varjson.Cuevas.Client+`</li>
        <li><strong>Project date</strong>: `+varjson.Cuevas.Project_Date+`</li>`

      // Despues de instanciar el id imagen360 lo roto
      let imageEntity = document.getElementById('imagen360');
      imageEntity.setAttribute('material', 'src', '#cuevas');
      imageEntity.setAttribute('rotation', '0 180 0');
      // Aca completo el texto del portfolio detail
      textEntity.innerHTML = `<h2>` + varjson.Cuevas.Titulo + `</h2>  <p>` + varjson.Cuevas.Texto_Descripcion + `</p>`

    } else if (imageParam === 'gusanito') {
      var imageHTML = '';
      var videoHTML = '<div class="swiper-slide">' + varjson.Gusanito.Videos + '</div>';
      var gusanitoImages = varjson.Gusanito.Imagenes;
      for (var i = 0; i < gusanitoImages.length; i++) {
        imageHTML += `<div class="swiper-slide">

        <img src="` + gusanitoImages[i] + `" alt="">
                
        </div>`;
      }
      imageHTML += videoHTML;
      main_sliderEntity.innerHTML = imageHTML
      // Aca completo el texto del portfolio detail
      textEntity.innerHTML = `<h2>` + varjson.Gusanito.Titulo + `</h2> <p>` + varjson.Gusanito.Texto_Descripcion + `</p>`

    } else if (imageParam === 'depto') {
      var imageHTML = '';
      var videoHTML = '<div class="swiper-slide">' + varjson.Depto.Videos + '</div>';
      var deptoImages = varjson.Depto.Imagenes;
      for (var i = 0; i < deptoImages.length; i++) {
        imageHTML += `<div class="swiper-slide">
        <img src="` + deptoImages[i] + `" alt="">       
        </div>`;
      }
      imageHTML += videoHTML
      main_sliderEntity.innerHTML = imageHTML
      textEntity.innerHTML = `<h2>` + varjson.Depto.Titulo + `</h2> <p>` + varjson.Depto.Texto_Descripcion + `</p>`
    }
    else {
      imageEntity.setAttribute('material', 'src', '#default');
    }

    // console.log(imageParam)
    // console.log(imageEntity)
    // console.log(textEntity)
    // console.log(id_slide1.innerHTML)
    // console.log(id_slide2.innerHTML)
  });
}

// Define an async function to load JSON data into a variable
// async function loadData() {
//   try {
//     const response = await fetch('assets/js/myjson.json'); // Load the JSON file
//     // const response = await fetch('https://httpstat.us/404'); // Load the JSON file
//     const jsonData = await response.json(); // Parse the JSON response
//     // You can also return the jsonData if needed
//     ProcessJson(jsonData)
//     console.log(jsonData)
//   } catch (error) {
//     console.error('Error loading JSON:', error);
//   }

// }
// loadData();

// const axios = require('axios');

async function fetchData() {
  try {
    const response = await axios.get('assets/js/myjson.json');
    const jsonData = response.data;
    ProcessJson(jsonData)
    console.log(jsonData)
  } catch (error) {
    console.error(error);
  }
}

// Call the async function to fetch data
fetchData();

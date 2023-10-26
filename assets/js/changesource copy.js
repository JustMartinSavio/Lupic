// Define an async function to load JSON data into a variable
async function loadData() {
  try {
    const response = await fetch('assets/js/myjson.json'); // Load the JSON file
    const jsonData = await response.json(); // Parse the JSON response

    // You can also return the jsonData if needed
    return jsonData;
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
}

// Call the async function
var varjson = loadData();


window.addEventListener('DOMContentLoaded', function () {

  
  // Get the URL parameters
  var urlParams = new URLSearchParams(window.location.search);

  // Get the value of the 'image' parameter from the URL
  var imageParam = urlParams.get('image');

  // Get the image entity
  var imageEntity = document.getElementById('imagen360');
  var textEntity = document.getElementById('PortfolioDescription');
  var id_slide1 = document.getElementById('slide1')
  var id_slide2 = document.getElementById('slide2')

  // Set the image source based on the parameter
  if (imageParam === 'fauna') {
    imageEntity.setAttribute('material', 'src', '#fauna');
    imageEntity.setAttribute('rotation', '0 -90 0');
    textEntity.innerHTML = `<h2>Texto de Fauna</h2>
      <p>
        Parrafo de Fauna
      </p>`

  } else if (imageParam === 'cuevas') {
    imageEntity.setAttribute('material', 'src', '#cuevas');
    imageEntity.setAttribute('rotation', '0 180 0');
    textEntity.innerHTML = `<h2>Texto de Cuevas</h2>
      <p>
        Parrafo de Cuevas
      </p>`


  }

  else if (imageParam === 'gusanito') {
    console.log(varjson)

    id_slide1.innerHTML = '<img src="' + varjson.Gusanito.Imagenes.imagen1 + '" alt="">'

    // id_slide1.innerHTML = '<img src="assets/img/portfolio/portfolio-details1-test.png" alt="">'

    // id_slide2.innerHTML = '<img src="assets/img/portfolio/portfolio-details2-test.png" alt="">'

    // textEntity.innerHTML =`<h2>Texto de Gusanit</h2>
    // <p>
    //   Parrafo de Gusanito
    // </p>`
  }

  else if (imageParam === 'depto') {


    id_slide1.innerHTML = '<iframe width="800" height="480" src="https://www.youtube-nocookie.com/embed/gY16zIUGQ4o?si=h6ZkiYVbJn7fLLL6&amp;controls=0&amp;start=11" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

    id_slide2.innerHTML = '<img src="assets/img/portfolio/depto2.jpg" alt="">'

    textEntity.innerHTML = `<h2>Texto de Depto</h2>
      <p>
        Parrafo de Depto
      </p>`
  }
  else {
    imageEntity.setAttribute('material', 'src', '#default');
  }

  console.log(imageParam)
  console.log(imageEntity)
  console.log(textEntity)
  console.log(id_slide1.innerHTML)
  console.log(id_slide2.innerHTML)
});



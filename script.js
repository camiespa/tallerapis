const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('La solicitud no se completó correctamente');
    }
    return response.json();
  })
  .then(data => {
    const fotosContainer = document.getElementById('fotos-container');
    data.slice(0, 10).forEach(foto => {
        const img = document.createElement('img');
        img.src = foto.url;
        img.alt = foto.title;
        fotosContainer.appendChild(img);
    }); 
  })
  .catch(error => {
    console.error('Hubo un error:', error);
  });
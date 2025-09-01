function cargarTratamientos() {
  fetch('http://localhost:3000/tratamientos')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(tratamiento => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Tratamiento:</strong> ${tratamiento.tratamiento_id}<br>
          <strong>Nombre:</strong> ${tratamiento.nombre}<br>
          <strong>Descripción:</strong> ${tratamiento.descripcion}<br>
          <strong>Precio:</strong> ${tratamiento.precio}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar tratamientos:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarTratamientos);

function cargarConsultaTratamientos() {
  fetch('http://localhost:3000/consulta_tratamientos')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
        data.forEach(item => {
          const li = document.createElement('li');
          li.innerHTML = `
            <strong>ID:</strong> ${item.id}<br>
            <strong>Consulta ID:</strong> ${item.consulta_id}<br>
            <strong>Tratamiento ID:</strong> ${item.tratamiento_id}<br>
            <strong>Nombre Tratamiento:</strong> ${item.nombre}<br>
            <strong>Cantidad:</strong> ${item.cantidad}<br>
            <strong>Precio:</strong> ${item.precio}
          `;
          lista.appendChild(li);
        });
    })
    .catch(error => {
      console.error('Error al cargar consulta tratamientos:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarConsultaTratamientos);

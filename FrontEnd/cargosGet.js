function cargarCargos() {
  fetch('http://localhost:3000/cargos')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(cargo => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Cargo:</strong> ${cargo.cargo_id}<br>
          <strong>Nombre:</strong> ${cargo.nombre}<br>
          <strong>Descripción:</strong> ${cargo.descripcion}<br>
          <strong>Activo:</strong> ${cargo.activo}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar cargos:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarCargos);

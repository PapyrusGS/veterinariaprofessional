function cargarMascotas() {
  fetch('http://localhost:3000/mascotas')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(mascota => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Mascota:</strong> ${mascota.mascota_id}<br>
          <strong>Nombre:</strong> ${mascota.nombre}<br>
          <strong>Especie:</strong> ${mascota.especie}<br>
          <strong>Raza:</strong> ${mascota.raza}<br>
          <strong>Fecha Nacimiento:</strong> ${mascota.fecha_nacimiento}<br>
          <strong>Sexo:</strong> ${mascota.sexo}<br>
          <strong>Activo:</strong> ${mascota.activo}<br>
          <strong>Propietario:</strong> ${mascota.propietario} ${mascota.apellido_propietario}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar mascotas:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarMascotas);

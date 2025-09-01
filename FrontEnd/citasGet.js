function cargarCitas() {
  fetch('http://localhost:3000/citas')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(cita => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Cita:</strong> ${cita.cita_id}<br>
          <strong>Fecha:</strong> ${cita.fecha}<br>
          <strong>Hora:</strong> ${cita.hora}<br>
          <strong>Motivo:</strong> ${cita.motivo}<br>
          <strong>Estado:</strong> ${cita.estado}<br>
          <strong>Activo:</strong> ${cita.activo}<br>
          <strong>Mascota:</strong> ${cita.mascota}<br>
          <strong>Cliente:</strong> ${cita.cliente} ${cita.apellido_cliente}<br>
          <strong>Empleado:</strong> ${cita.empleado}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar citas:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarCitas);

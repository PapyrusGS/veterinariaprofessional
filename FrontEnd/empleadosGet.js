function cargarEmpleados() {
  fetch('http://localhost:3000/empleados')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(empleado => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Empleado:</strong> ${empleado.empleado_id}<br>
          <strong>Nombre:</strong> ${empleado.nombre}<br>
          <strong>Primer Apellido:</strong> ${empleado.primer_apellido}<br>
          <strong>Segundo Apellido:</strong> ${empleado.segundo_apellido}<br>
          <strong>Teléfono:</strong> ${empleado.telefono}<br>
          <strong>Dirección:</strong> ${empleado.direccion}<br>
          <strong>Email:</strong> ${empleado.email}<br>
          <strong>Fecha Registro:</strong> ${empleado.fecha_registro}<br>
          <strong>Activo:</strong> ${empleado.activo}<br>
          <strong>Cargo:</strong> ${empleado.cargo}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar empleados:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarEmpleados);

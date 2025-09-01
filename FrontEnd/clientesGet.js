function cargarClientes() {
  fetch('http://localhost:3000/clientes')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Cliente:</strong> ${cliente.cliente_id}<br>
          <strong>Nombre:</strong> ${cliente.nombre}<br>
          <strong>Primer Apellido:</strong> ${cliente.primer_apellido}<br>
          <strong>Segundo Apellido:</strong> ${cliente.segundo_apellido}<br>
          <strong>Teléfono:</strong> ${cliente.telefono}<br>
          <strong>Dirección:</strong> ${cliente.direccion}<br>
          <strong>Email:</strong> ${cliente.email}<br>
          <strong>Fecha Registro:</strong> ${cliente.fecha_registro}<br>
          <strong>Activo:</strong> ${cliente.activo}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar clientes:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarClientes);

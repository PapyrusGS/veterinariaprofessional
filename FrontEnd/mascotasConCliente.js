document.addEventListener('DOMContentLoaded', async () => {
  const lista = document.getElementById('listaMascotasCliente');
  lista.innerHTML = '<div class="text-center">Cargando...</div>';
  try {
    const res = await fetch('http://localhost:3000/mascotas/mascotas-con-cliente');
    const datos = await res.json();
    let html = `<table class="table table-striped table-hover align-middle">
      <thead class="table-primary">
        <tr>
          <th>Mascota</th>
          <th>Especie</th>
          <th>Raza</th>
          <th>Fecha Nacimiento</th>
          <th>Sexo</th>
          <th>Cliente</th>
          <th>Teléfono</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>`;
    datos.forEach(item => {
      html += `<tr>
        <td>${item.nombre_mascota}</td>
        <td>${item.especie}</td>
        <td>${item.raza}</td>
        <td>${item.fecha_nacimiento ? item.fecha_nacimiento.split('T')[0] : ''}</td>
        <td>${item.sexo}</td>
        <td>${item.nombre_cliente}</td>
        <td>${item.telefono}</td>
        <td>${item.email}</td>
      </tr>`;
    });
    html += '</tbody></table>';
    lista.innerHTML = html;
  } catch (err) {
    lista.innerHTML = '<div class="text-danger">Error al cargar datos</div>';
  }
});

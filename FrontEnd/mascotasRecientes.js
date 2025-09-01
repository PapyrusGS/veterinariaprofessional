document.addEventListener('DOMContentLoaded', async () => {
  const lista = document.getElementById('listaMascotas');
  lista.innerHTML = '<div class="text-center">Cargando...</div>';
  try {
    const res = await fetch('http://localhost:3000/mascotas');
    const mascotas = await res.json();
    mascotas.sort((a, b) => new Date(b.fecha_registro) - new Date(a.fecha_registro));
    let html = '<table class="table table-striped"><thead><tr><th>ID</th><th>Nombre</th><th>Especie</th><th>Raza</th><th>Edad</th><th>Fecha registro</th></tr></thead><tbody>';
    mascotas.forEach(m => {
      html += `<tr><td>${m.mascota_id || ''}</td><td>${m.nombre}</td><td>${m.especie}</td><td>${m.raza}</td><td>${m.edad}</td><td>${m.fecha_registro || ''}</td></tr>`;
    });
    html += '</tbody></table>';
    lista.innerHTML = html;
  } catch (err) {
    lista.innerHTML = '<div class="text-danger">Error al cargar mascotas</div>';
  }
});

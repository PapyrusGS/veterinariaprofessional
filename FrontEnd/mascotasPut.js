document.getElementById('mascotaPutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  (async () => {
  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  const especie = document.getElementById('especie').value;
  const raza = document.getElementById('raza').value;
  const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
  const sexo = document.getElementById('sexo').value;
  // cliente_id NO se envía en el PUT
  const data = { nombre, especie, raza, fecha_nacimiento, sexo };
    try {
      const res = await fetch(`http://localhost:3000/mascotas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      document.getElementById('mensaje').textContent = 'Mascota actualizada correctamente';
    } catch (error) {
      document.getElementById('mensaje').textContent = 'Error al actualizar mascota';
    }
  })();
});

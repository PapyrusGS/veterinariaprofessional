document.getElementById('mascotaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const especie = document.getElementById('especie').value;
  const raza = document.getElementById('raza').value;
  const fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
  const sexo = document.getElementById('sexo').value;
  const cliente_id = document.getElementById('cliente_id').value;
  fetch('http://localhost:3000/mascotas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, especie, raza, fecha_nacimiento, sexo, cliente_id })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Mascota agregada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar mascota';
    });
});

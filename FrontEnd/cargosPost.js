document.getElementById('formCargo').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const descripcion = document.getElementById('descripcion').value;
  fetch('http://localhost:3000/cargos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, descripcion })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Cargo agregado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar cargo';
    });
});

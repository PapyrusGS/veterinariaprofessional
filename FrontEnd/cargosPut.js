document.getElementById('formCargoPut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  fetch(`http://localhost:3000/cargos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Cargo actualizado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al actualizar cargo';
    });
});

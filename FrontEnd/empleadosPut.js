document.getElementById('formEmpleadoPut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  fetch(`http://localhost:3000/empleados/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Empleado actualizado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al actualizar empleado';
    });
});

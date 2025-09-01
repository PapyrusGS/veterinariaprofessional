document.getElementById('formConsultaTratamientoPut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const consulta_id = document.getElementById('consulta_id').value;
  const tratamiento_id = document.getElementById('tratamiento_id').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('precio').value;
  fetch(`http://localhost:3000/consulta_tratamientos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ consulta_id, tratamiento_id, cantidad, precio })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Consulta tratamiento actualizado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al actualizar consulta tratamiento';
    });
});

document.getElementById('formTratamientoDelete').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  fetch(`http://localhost:3000/tratamientos/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Tratamiento eliminado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al eliminar tratamiento';
    });
});

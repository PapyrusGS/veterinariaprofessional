document.getElementById('formCitaDelete').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  fetch(`http://localhost:3000/citas/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Cita eliminada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al eliminar cita';
    });
});

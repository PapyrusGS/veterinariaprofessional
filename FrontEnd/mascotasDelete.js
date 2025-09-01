document.getElementById('formMascotaDelete').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  fetch(`http://localhost:3000/mascotas/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Mascota eliminada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al eliminar mascota';
    });
});

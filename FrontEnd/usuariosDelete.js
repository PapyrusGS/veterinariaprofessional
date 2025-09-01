document.getElementById('formUsuarioDelete').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  fetch(`http://localhost:3000/usuarios/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Usuario eliminado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al eliminar usuario';
    });
});

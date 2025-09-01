document.getElementById('formClienteDelete').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  fetch(`http://localhost:3000/clientes/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Cliente eliminado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al eliminar cliente';
    });
});

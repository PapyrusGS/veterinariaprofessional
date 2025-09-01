document.getElementById('formConsultaDelete').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  fetch(`http://localhost:3000/consultas/del/${id}`, {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Consulta eliminada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al eliminar consulta';
    });
});

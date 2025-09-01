document.getElementById('formClientePut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  const primer_apellido = document.getElementById('primer_apellido').value;
  const segundo_apellido = document.getElementById('segundo_apellido').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const email = document.getElementById('email').value;
  fetch(`http://localhost:3000/clientes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, primer_apellido, segundo_apellido, telefono, direccion, email })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Cliente actualizado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al actualizar cliente';
    });
});

document.getElementById('formUsuario').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;
  const empleado_id = document.getElementById('empleado_id').value || null;

  fetch('http://localhost:3000/usuarios', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, empleado_id })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Usuario agregado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar usuario';
    });
});
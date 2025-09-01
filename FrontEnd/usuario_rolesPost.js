document.getElementById('formUsuarioRol').addEventListener('submit', function(e) {
  e.preventDefault();
  const rol = document.getElementById('rol').value;
  fetch('http://localhost:3000/usuario_roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ rol })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Usuario rol agregado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar usuario rol';
    });
});

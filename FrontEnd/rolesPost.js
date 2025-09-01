document.getElementById('formRol').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  fetch('http://localhost:3000/roles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Rol agregado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar rol';
    });
});

document.getElementById('formEmpleado').addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  const primer_apellido = document.getElementById('primer_apellido').value;
  const segundo_apellido = document.getElementById('segundo_apellido').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const email = document.getElementById('email').value;
  const cargo = document.getElementById('cargo').value;
  fetch('http://localhost:3000/empleados', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, primer_apellido, segundo_apellido, telefono, direccion, email, cargo })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Empleado agregado correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar empleado';
    });
});

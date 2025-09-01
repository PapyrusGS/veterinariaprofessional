document.getElementById('formCita').addEventListener('submit', function(e) {
  e.preventDefault();
  const mascota_id = document.getElementById('mascota_id').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const motivo = document.getElementById('motivo').value;
  const empleado_id = document.getElementById('empleado_id').value;
  fetch('http://localhost:3000/citas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mascota_id, fecha, hora, motivo, empleado_id })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Cita agregada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar cita';
    });
});

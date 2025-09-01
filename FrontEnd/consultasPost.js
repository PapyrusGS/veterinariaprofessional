document.getElementById('formConsulta').addEventListener('submit', function(e) {
  e.preventDefault();
  const cita_id = document.getElementById('cita_id').value;
  const diagnostico = document.getElementById('diagnostico').value;
  const observaciones = document.getElementById('observaciones').value;
  fetch('http://localhost:3000/consultas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cita_id, diagnostico, observaciones })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Consulta agregada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al agregar consulta';
    });
});

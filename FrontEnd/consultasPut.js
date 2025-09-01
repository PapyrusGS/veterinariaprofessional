document.getElementById('formConsultaPut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const cita_id = document.getElementById('cita_id').value;
  const diagnostico = document.getElementById('diagnostico').value;
  const observaciones = document.getElementById('observaciones').value;
  fetch(`http://localhost:3000/consultas/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ cita_id, diagnostico, observaciones })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById('mensaje').textContent = 'Consulta actualizada correctamente';
    })
    .catch(error => {
      document.getElementById('mensaje').textContent = 'Error al actualizar consulta';
    });
});

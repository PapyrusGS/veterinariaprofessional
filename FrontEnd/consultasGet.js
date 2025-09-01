function cargarConsultas() {
  fetch('http://localhost:3000/consultas')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(consulta => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Consulta:</strong> ${consulta.consulta_id}<br>
          <strong>Cita ID:</strong> ${consulta.cita_id}<br>
          <strong>Diagnóstico:</strong> ${consulta.diagnostico}<br>
          <strong>Observaciones:</strong> ${consulta.observaciones}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar consultas:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarConsultas);

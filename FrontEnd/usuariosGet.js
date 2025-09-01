function cargarUsuarios() {
  fetch('http://localhost:3000/usuarios')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(usuario => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Usuario:</strong> ${usuario.usuario_id}<br>
          <strong>Username:</strong> ${usuario.username}<br>
          <strong>Empleado ID:</strong> ${usuario.empleado_id}<br>
          <strong>Activo:</strong> ${usuario.activo}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar usuarios:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarUsuarios);

function cargarUsuarioRoles() {
  fetch('http://localhost:3000/usuario_roles')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Usuario Rol:</strong> ${item.usuario_rol_id || item.id}<br>
          <strong>Usuario ID:</strong> ${item.usuario_id}<br>
          <strong>Rol ID:</strong> ${item.rol_id}<br>
          <strong>Activo:</strong> ${item.activo}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar usuario roles:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarUsuarioRoles);

function cargarRoles() {
  fetch('http://localhost:3000/roles')
    .then(response => response.json())
    .then(data => {
      const lista = document.getElementById('data');
      lista.innerHTML = '';
      data.forEach(rol => {
        const li = document.createElement('li');
        li.innerHTML = `
          <strong>ID Rol:</strong> ${rol.rol_id || rol.id}<br>
          <strong>Nombre:</strong> ${rol.nombre}<br>
          <strong>Activo:</strong> ${rol.activo}
        `;
        lista.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al cargar roles:', error);
    });
}
document.addEventListener('DOMContentLoaded', cargarRoles);

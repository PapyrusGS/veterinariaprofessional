document.getElementById('usuarioPutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const username = document.getElementById('nombre').value;
  const password = document.getElementById('password').value;
  const empleado_id = document.getElementById('empleado_id') ? document.getElementById('empleado_id').value : null;
  const activo = document.getElementById('activo') ? document.getElementById('activo').value : 1;

  const data = { username, password, empleado_id, activo };

  (async () => {
    try {
      const res = await fetch(`http://localhost:3000/usuarios/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      document.getElementById('mensaje').textContent = 'Usuario actualizado correctamente';
    } catch (error) {
      document.getElementById('mensaje').textContent = 'Error al actualizar usuario';
    }
  })();
});
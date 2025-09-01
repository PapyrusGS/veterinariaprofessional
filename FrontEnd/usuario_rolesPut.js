document.getElementById('formUsuarioRolPut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const rol = document.getElementById('rol').value;
  (async () => {
    const usuario_id = document.getElementById('usuario_id').value;
    const rol_id = rol; // Assuming rol corresponds to rol_id
    const data = { usuario_id, rol_id };
    try {
  const res = await fetch(`http://localhost:3000/usuario_roles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      document.getElementById('mensaje').textContent = 'Usuario rol actualizado correctamente';
    } catch (error) {
      document.getElementById('mensaje').textContent = 'Error al actualizar usuario rol';
    }
  })();
});

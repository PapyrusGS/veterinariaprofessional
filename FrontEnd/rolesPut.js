document.getElementById('rolPutForm').addEventListener('submit', function(e) {
  e.preventDefault();
  (async () => {
    const id = document.getElementById('id').value;
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const data = { nombre, descripcion };
    try {
      const res = await fetch(`http://localhost:3000/roles/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      await res.json();
      document.getElementById('mensaje').textContent = 'Rol actualizado correctamente';
    } catch (error) {
      document.getElementById('mensaje').textContent = 'Error al actualizar rol';
    }
  })();
});

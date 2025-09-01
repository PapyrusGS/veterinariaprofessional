document.getElementById('formTratamientoPut').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('id').value;
  const nombre = document.getElementById('nombre').value;
  (async () => {
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const data = { nombre, descripcion, precio };
    try {
      const res = await fetch(`http://localhost:3000/tratamientos/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      document.getElementById('mensaje').textContent = 'Tratamiento actualizado correctamente';
    } catch (error) {
      document.getElementById('mensaje').textContent = 'Error al actualizar tratamiento';
    }
  })();
});

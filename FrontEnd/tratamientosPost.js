document.getElementById('tratamientoForm').addEventListener('submit', function(e) {
  e.preventDefault();
  (async () => {
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const precio = document.getElementById('precio').value;
    const data = { nombre, descripcion, precio };
    try {
      const res = await fetch('http://localhost:3000/tratamientos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      await res.json();
      document.getElementById('mensaje').textContent = 'Tratamiento agregado correctamente';
    } catch (error) {
      document.getElementById('mensaje').textContent = 'Error al agregar tratamiento';
    }
  })();
});

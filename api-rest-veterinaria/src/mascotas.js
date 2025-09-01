import { pool } from "./config/database.js";
import { Router } from "express";

const router = Router();


// Consulta general de mascotas con datos básicos
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT m.mascota_id, m.nombre, m.especie, m.raza, m.fecha_nacimiento, m.sexo, m.activo,
             p.nombre AS propietario, p.primer_apellido AS apellido_propietario
      FROM mascotas m
      INNER JOIN clientes c ON m.cliente_id = c.cliente_id
      INNER JOIN personas p ON c.persona_id = p.persona_id
      WHERE m.activo = 1;
    `);
    res.json(rows);
  } catch (error) {
    console.log(`Error al obtener mascotas: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

// Consulta general de mascotas con datos del cliente enlazado
router.get("/mascotas-con-cliente", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT 
        m.mascota_id, m.nombre AS nombre_mascota, m.especie, m.raza, m.fecha_nacimiento, m.sexo, m.activo AS mascota_activa,
        p.nombre AS nombre_cliente, p.primer_apellido, p.segundo_apellido, p.telefono, p.direccion, p.email, p.fecha_registro, c.activo AS cliente_activo
      FROM mascotas m
      INNER JOIN clientes c ON m.cliente_id = c.cliente_id
      INNER JOIN personas p ON c.persona_id = p.persona_id
      WHERE m.activo = 1;
    `);
    res.json(rows);
  } catch (error) {
    console.error(`Error al obtener mascotas con cliente: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query(`
      SELECT m.mascota_id, m.nombre, m.especie, m.raza, m.fecha_nacimiento, m.sexo, m.activo,
             p.nombre AS propietario, p.primer_apellido AS apellido_propietario
      FROM mascotas m
      INNER JOIN clientes c ON m.cliente_id = c.cliente_id
      INNER JOIN personas p ON c.persona_id = p.persona_id
      WHERE m.activo = 1;
    `);
    res.json(rows);
  } catch (error) {
    console.log(`Error al obtener mascotas: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await pool.query(`
      SELECT 
        m.mascota_id, m.nombre AS nombre_mascota, m.especie, m.raza, 
        m.fecha_nacimiento, m.sexo, m.activo AS mascota_activa,
        p.nombre AS propietario, p.primer_apellido, p.segundo_apellido, 
        p.telefono, p.direccion, p.email, p.fecha_registro, c.activo AS cliente_activo
      FROM mascotas m
      INNER JOIN clientes c ON m.cliente_id = c.cliente1_id
      INNER JOIN personas p ON c.persona_id = p.persona_id
      WHERE m.mascota_id = ?;
    `, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ mensaje: "Mascota no encontrada." });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(`Error al obtener datos de la mascota: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { nombre, especie, raza, fecha_nacimiento, sexo, cliente_id } = req.body;
    await pool.query(
      `INSERT INTO mascotas(nombre, especie, raza, fecha_nacimiento, sexo, cliente_id, activo)
       VALUES(?,?,?,?,?,?,1);`,
      [nombre, especie, raza, fecha_nacimiento, sexo, cliente_id]
    );
    res.json({ mensaje: "Mascota registrada exitosamente." });
  } catch (error) {
    console.log(`Error al registrar mascota: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, especie, raza, fecha_nacimiento, sexo } = req.body;

    await pool.query(
      `UPDATE mascotas 
       SET nombre=?, especie=?, raza=?, fecha_nacimiento=?, sexo=? 
       WHERE mascota_id=?;`,
      [nombre, especie, raza, fecha_nacimiento, sexo, id]
    );

    res.json({ mensaje: "Mascota actualizada correctamente." });
  } catch (error) {
    console.log(`Error al actualizar mascota: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`UPDATE mascotas SET activo=0 WHERE mascota_id=?;`, [id]);
    res.json({ mensaje: "Mascota eliminada (borrado lógico)." });
  } catch (error) {
    console.log(`Error al eliminar mascota: ${error}`);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

export default router;

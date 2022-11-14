const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'tiendita',
    port: '5432'
    
})

const productos = async (req, res) => {
    const response = await pool.query('SELECT * FROM product')
    res.status(200).json(response.rows);
}

const productoById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM product WHERE id =$1', [id]);
    res.json(response.rows);
}

const deleteproducto = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM product WHERE id = $1', [id]);
    console.log(response);
    res.json(`Usuario ${id} eliminado`)
}

const updateproducto = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE product SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id
    ]);
    console.log(response);
    res.json('Uusario actualizado correctamente')

}


module.exports = {
    productos,
    productoById,
    deleteproducto,
    updateproducto
}
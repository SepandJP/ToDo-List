const db = require('../../database/mysql');
exports.getAll = async() => {
    const sql = "SELECT `id`, `title`, `status` FROM `tasks` ORDER BY `tasks`.`created_at` DESC";
    const [result] = await db.query(sql);
    return result;
};
exports.create = async(data) => {
    const [result] = await db.query("INSERT INTO `tasks` SET ?", [data]);
    return result;
};
exports.delete = async(id) => {
    const [result] = await db.query("DELETE FROM `tasks` WHERE id=?", [id]);
    return result.affectedRows > 0;
};
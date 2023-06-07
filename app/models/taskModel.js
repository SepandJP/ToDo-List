const db = require('../../database/mysql');
exports.getStatus = async(id) => {
    const [result] = await db.query("SELECT `status` FROM `tasks` WHERE `tasks`.`id`=?;", [id]);
    return result;
};
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
exports.check = async(id, status) => {
    const [result] = await db.query("UPDATE `tasks` SET `status` = ? WHERE `tasks`.`id` = ?;", [status, id]);
    return result.affectedRows > 0;
};
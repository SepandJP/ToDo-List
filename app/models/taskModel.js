const db = require('../../database/mysql');
exports.getAll = async() => {
    const sql = "SELECT `title`, `status` FROM `tasks` ORDER BY `tasks`.`created_at` ASC";
    const [result] = await db.query(sql);
    return result;
};
exports.create = async(data) => {
    const [result] = await db.query("INSERT INTO `tasks` SET ?", [data]);
    return result;
};
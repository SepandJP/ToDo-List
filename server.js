require('dotenv').config();
const startApplication = require('./app');
startApplication();
// const db = require('./db');
// const crypto = require('crypto')
// const query = "drop table todo_node.tasks;"
// const query = "CREATE TABLE `todo_node`.`tasks` (`id` CHAR(32) NOT NULL , `user_id` CHAR(32) NULL DEFAULT NULL , `status` BOOLEAN NOT NULL DEFAULT FALSE , `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `updated_at` TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP , `title` CHAR(255) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;"
// const query = "INSERT INTO `tasks`(`id`, `title`) VALUES (?,?);";
// db.query(query, [crypto.randomUUID(), 'task1'], (err, results, fields) => {
//     if (err) throw err;
//     console.log(results);
// });
// const query = "UPDATE tasks SET title = ? WHERE id = ?";
// db.query(query, ['task3', '435775c1-d13c-445e-9fb5-d4e99b7e'], (err, res) => {
//     if (err) throw err;
//     console.log(res);
// });
const query = "SELECT title FROM tasks";
const sql = async () => {
   const [titles] = await db.query(query)
   const [ids] = await db.query("SELECT * FROM tasks WHERE title = ?", [titles[2].title]);
    return ids;
};
sql().then(ids => {console.log(ids)}).catch(err => {console.log(err)});
//Creation Table Tasks
let createTasks = `create table if not exists tasks(
    id int primary key auto_increment,
    title varchar(255)not null,
    description varchar(255)not null
)`;

connection.query(createTasks, function(err, results, fields) {
if (err) {
console.log(err.message);
}
});

connection.end(function(err) {
if (err) {
return console.log(err.message);
}
});
module.exports = { Tasks };
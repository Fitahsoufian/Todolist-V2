//Crud project
class Project{
constructor(id,name,description,task_id){
this.id = id;
this.name = name;
this.description = description;
this.task_id = task_id;
}
getAll = ()=>{
    return new Promise((resolve,reject)=>{
        let sql = "SELECT * FROM projects"
        connection.query(sql,(err,result)=>{
            if(err){
                reject(err)
            }else{
                resolve(result) 
            }
        })


    })


}
addProject () {
    let sql = 'INSERT INTO projects (name,description)'
    VALUES(
      '${this.name}',
      '${this.description}');
  }
}

import { Injectable } from '@angular/core';
import { SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';



@Injectable({
  providedIn: 'root'
})
export class DbtaskService {

  /* Declaración de variable*/
  db: SQLiteObject  = null;
  

  constructor() { }
  
  setDatabase(db:SQLiteObject){
    if(this.db===null)
    {
      this.db =db
    };
    
  }

  /* Tablas */
  createTables():Promise<any>{
    let tables=`
    CREATE TABLE IF NOT EXISTS sesion_data
    (
      user_name TEXT PRIMARY KEY NOT NULL,
      password INTEGER NOT NULL,
      active INTEGER(1) NOT NULL
    );
    CREATE TABLE IF NOT EXISTS experiencia
    (
      id NUMBER PRIMARY KEY AUTOINCREMENT,
      empresa TEXT NOT NULL,
      anio_incio TEXT NOT NULL,
      trabajo_actual INTEGER(1) NOT NULL,
      anio_termino TEXT,
      cargo TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS certificacion
    (
      id NUMBER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT NOT NULL,
      fecha_obtención TEXT NOT NULL,
      vencimiento INTEGER(1) NOT NULL,
      fecha_vencimiento TEXT
    );`;
    return this.db.executeSql(tables);
  }

  sesionActive(){
    let sql = `SELECT user_name, active FROM sesion_data WHERE active=1 LIMIT 1`
    return this.db.executeSql(sql,[])
    .then(Response=>{
      return Promise.resolve(Response.rows.item(0))
    });
  }
  /*
  @param sesion
  */
 getSesionData(sesion:any){
   let sql = `SELECT user_name, active FROM sesion_data
   WHERE user_name=? AND password=? LIMIT 1`;
   return this.db.executeSql(sql,[sesion.Usuario,
     sesion.Password]).then(response=>{
       return Promise.resolve(response.rows.item(0));
     });
 }

 /* Registro */
  /*
  @param sesion*/
 createSesionData(sesion:any){
  let sql = `INSERT INTO sesion_data(user_name,password,active)
  VALUES(?,?,?)`;
  return this.db.executeSql(sql, [sesion.Usuario, 
    sesion.Password, sesion.Active]).then(response=>{
      return Promise.resolve(response.rows.item(0));
    });;
}
updateSesionData(sesion:any){
  let sql = `UPDATE sesion_data
  SET active=?
  WHERE user_name=?`;
  return this.db.executeSql(sql, [sesion.active,sesion.user_name]);
}
}

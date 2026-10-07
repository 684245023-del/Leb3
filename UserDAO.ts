import {BaseDAO} from"./BaseDAO";
export class UserDAO extends BaseDAO{
    protected initTable(): void {
        this.db.exec`
        CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        point TEXT NOT NULL,
        isActive TEXT NOT NULL
        )`
    }
    public addUser(user:User):boolean{
        const stmt = this.db.prepare(`INSERT INTO user (username,point,isActive)) VALUES(?,?,?);`)
        return result.changes>0;
    }
    public findUserById(id:number):User|null:user[]{
        const stmt = this.db.prepare(`SELECT*FROM user`);
        const rows = stmt.all()as{id:number,username:string,point:number,isActive:boolean}[];
        return rows.map(row => new UserDAO((row.id,row.username,row.point,row.isActive)))
    }
}

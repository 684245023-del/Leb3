export abstract class BaseDAO{
    constructor(dbpath:string="user_system.db"){}
    protected abstract initTable():void;
}
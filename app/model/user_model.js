const user_db = require('./db/user_db')

module.exports = {

    async m_UserJoin(name, age, gender, id, password , birthday , phone_number) {
        let query = 'insert into user_info set id = ? , age = ? , name = ? , gender = ? , password = ? ,birthday = ? , phone_number = ? ';
        let data = [id, age, name, gender, password , birthday , phone_number];
        return await user_db.ReadDB(query,data);
    },

    async m_UserSearch(id) {
        let query = 'select id,name,gender,password,age,birthday,phone_number from user_info where id = ?';
        return await user_db.ReadDB(query,[id]);
    },

    async m_UserInfoUpdate(name, id) {
        let query = 'update user_info set name = ? where id = ?';
        return await user_db.ReadDB(query,[name,id]);
    },

    async m_UserLeave(id) {
        let query = 'delete from user_info where id = ?';
        return await user_db.ReadDB(query,[id]);
    },

}


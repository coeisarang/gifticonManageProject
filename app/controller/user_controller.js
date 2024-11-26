const user_model = require("../model/user_model");

module.exports = {

    async c_UserJoin(req,res){

        const {name , id , password , age , gender , birthday , phone_number} = req.body;
        let [ result , error ] = await user_model.m_UserJoin(name,age,gender,id,password, birthday , phone_number);

        if(error){
            res.json( { error_message : error });
            return;
        }

        res.status(201);
        res.json(result);
    },

    async c_UserSearch(req,res){

        if(req.session.auth){ // 로그인 했는지 체크.
            const id = req.params.id; // 전송 받은 id값 가져오기
            let [ result , err ] = await user_model.m_UserSearch(id); 
            res.json(result);
        } else {
            res.json({message : "로그인이 필요 합니다."});
        }
    },

    async c_UserInfoUpdate(req,res){
        const {name , id  } = req.body;
        let [ result , err_message ] = await user_model.m_UserInfoUpdate(name,id);
        res.json(result);
    },

    async c_UserLeave(req,res){
        const { id } = req.body;
        let [ result , err_message ] = await user_model.m_UserLeave(id);
        res.json(result);
    },
    async c_UserLogin(req,res){

        const {id,password} = req.body;
        let [ result , error ] = await user_model.m_UserSearch(id);

        let result_data = { message : "로그인 실패 아이디 혹은 암호가 틀립니다." , success : false}

        if(result){
            if(result.length > 0){
                if( result[0].password == password ) {
                    // 로그인 성공시 세션에 데이터 저장.
                    req.session.auth = true; // auth 프로퍼티를 통해 로그인이 되었는지 확인.
                    req.session.user_id = id; // 세션에 유저 아이디값 저장.
                    req.session.password = password; // 비밀번호 저장.

                    // 응답으로 전송하는 데이터에 로그인 성공값을 저장
                    result_data.success = true;
                    result_data.message = "로그인 성공";
                }
            } 
        }

        res.json(result_data);
    },
    async c_Logout(req,res){
        req.session.destroy(function(err){
            if(err){
                res.json({ success : false, message:"로그아웃 에러"});
            } else {
                res.json({ success : true,  message:"로그아웃 완료"});
            }
        });
    },


}
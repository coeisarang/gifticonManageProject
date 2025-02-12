const router = require("express").Router()
const user_controller = require("../controller/user_controller");

//routers/user.js


/** 회원 가입
 * @swagger
 *
 * /api/user:
 *  post:
 *    summary: "회원 가입" 
 *    description: "POST 방식으로 회원을 등록한다."
 *    tags: [User]
 *    requestBody:
 *      description: 회원 가입 페이지. birthday , phone_number
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "유저 계정 (이메일주소) 글자수 제한 : 5~ 255"
 *              password:
 *                type: string
 *                description: "비밀번호  글자수 제한 : 8 ~ 20"
 *              name:
 *                  type: string
 *                  description : "회원 이름 바이트 제한 : 3~16"
 *              birthday:
 *                type: string
 *                description: "생년 월일 1990-01-01"
 *              phone_number:
 *                  type: string
 *                  description : "휴대폰 번호 010-0000-0000"
 *    responses:
 *      "200":
 *        description: 회원등록 성공시 sueccess = true 실패시 sueccess = false 
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *      "409":
 *        description: 아이디 중복
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                error_message:
 *                  type: string
 *                  example : "아이디 중복"
 *                    
 */
router.post("/", user_controller.c_UserJoin);
/** 회원 정보 수정
 * @swagger
 *
 * /api/user:
 *  patch:
 *    summary: "회원 정보 수정"
 *    description: "patch 방식으로 회원 정보를 수정."
 *    tags: [User]
 *    requestBody:
 *      description: 회원 정보 수정.
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "변경할 유저 계정 (이메일주소) 글자수 제한 : 5~ 255"
 *              name:
 *                  type: string
 *                  description : "수정할 회원 이름 : 3~16"
 *    responses:
 *      "200":
 *        description: 유저등록 성공시 sueccess = true 실패시 sueccess = false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                    
 */
router.patch("/", user_controller.c_UserInfoUpdate );
/** 회원 삭제
 * @swagger
 *
 * /api/user:
 *  delete:
 *    summary: "회원 삭제"
 *    description: "Delete 방식으로 회원을 삭제."
 *    tags: [User]
 *    requestBody:
 *      description: 
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              id:
 *                type: string
 *                description: "삭제할 유저 계정"
 *    responses:
 *      "200":
 *        description: 유저등록 삭제시 sueccess = true 실패시 sueccess = false
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                sueccess:
 *                  type: boolean
 *                    
 */
router.delete("/", user_controller.c_UserLeave);
/** 회원 정보 가져오기
 * @swagger
 * /api/user/{id}:
 *  get:
 *    summary: "회원 정보 가져오기"
 *    description: "회원 정보를 가져온다."
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: 유저 닉네임
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 회원 정보를 돌려준다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  example: [{
 *                              "id": "jk",
 *                              "name": "기일동입니다",
 *                              "gender": "남",
 *                              "password": "jk",
 *                              "age": 30,
 *                              "birthday": "1959-12-31T15:30:00.000Z",
 *                              "phone_number": "000-0000-0000"
 *                           }]
 */
router.get("/:id", user_controller.c_UserSearch);
/** 회원 정보 가져오기
 * @swagger
 * /api/user?id={id}:
 *  get:
 *    summary: "회원 정보 가져오기 Query 방식"
 *    description: "회원 정보를 가져온다."
 *    tags: [User]
 *    parameters:
 *      - in: query
 *        name: id
 *        required: true
 *        description: 유저 아이디
 *        schema:
 *          type: string
 *    responses:
 *      "200":
 *        description: 회원 정보를 돌려준다.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                user:
 *                  type: object
 *                  example: [{
 *                              "id": "jk",
 *                              "name": "기일동입니다",
 *                              "gender": "남",
 *                              "password": "jk",
 *                              "age": 30,
 *                              "birthday": "1959-12-31T15:30:00.000Z",
 *                              "phone_number": "000-0000-0000"
 *                           }]
 */
router.get("/", (req,res) =>{
    // 회원 정보 가져오기.
    console.log( req.query);
    res.json( req.query);
});/** 로그인
* @swagger
*
* /api/user/login:
*  post:
*    summary: "로그인" 
*    description: "로그인."
*    tags: [User]
*    requestBody:
*      description: 로그인
*      required: false
*      content:
*        application/x-www-form-urlencoded:
*          schema:
*            type: object
*            properties:
*              id:
*                type: string
*                description: "유저 계정 (이메일주소) 글자수 제한 : 5~ 255"
*              password:
*                type: string
*                description: "비밀번호  글자수 제한 : 8 ~ 20"
*    responses:
*      "200":
*        description: 회원등록 성공시 sueccess = true 실패시 sueccess = false 
*        content:
*          application/json:
*            schema:
*              type: object
*              properties:
*                sueccess:
*                  type: boolean
*                    
*/
router.post("/login", user_controller.c_UserLogin);
/** 로그 아웃
 * @swagger
 *
 * /api/user/logout:
 *  delete:
 *    summary: "로그 아웃" 
 *    description: "로그 아웃"
 *    tags: [User]
 *    responses:
 *      "200":
 *        description: 로그 아웃.
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                success:
 *                  type: boolean
 *                    
 */
 router.delete("/logout", user_controller.c_Logout);



module.exports = router;
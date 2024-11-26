const router = require("express").Router()
const admin_controller = require("../controller/admin_controller");

/** 기프티콘 저장
 * @swagger
 *
 * /api/admin/gift:
 *  post:
 *    summary: "기프티콘 등록" 
 *    description: "  기프티콘 등록."
 *    tags: [Admin]
 *    requestBody:
 *      description: 기프티콘 등록
 *      required: false
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              gift_name:
 *                type: string
 *                description: "기프티콘 이름"
 *              gift_group:
 *                type: string
 *                description: "기프티콘 종류"
 *              gift_number:
 *                 type: string
 *                 description : "기프티콘 번호"
 *    responses:
 *      "200":
 *        description: 기프티콘 등록 성공시 sueccess = true 실패시 sueccess = false 
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
 router.post("/gift", admin_controller.c_CreatGift);
 /** 기프티콘 리스트 가져오기
 * @swagger
 * /api/admin/boks:
 *  get:
 *    summary: "기프티콘 리스트 가져오기"
 *    description: "기프티콘 리스트를 가져온다."
 *    tags: [Admin]
 *    responses:
 *      "200":
 *        description: 기프티콘 리스트를 가져온다.
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
router.get("/gifts", admin_controller.c_GetGiftList);

module.exports = router
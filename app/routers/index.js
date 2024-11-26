const router = require("express").Router()
const user = require('./user');



/**
 * @swagger
 * tags:
 *   name: User
 *   description: 회원 정보 관리
 */
router.use("/user", user)

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: 관리자 기능
 */
 router.use("/admin", require('./admin'));

module.exports = router
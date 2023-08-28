const { Router } = require('express')
const userController=require('../controllers/userController')
const router=require('express').Router()
const { islogout,islogged }=require('../middlewares/auth')



router.get('/login',islogout, userController.showLogin)
router.post('/login',islogout,   userController.validlogin)

router.get('/register',islogout, userController.loadRegister)
router.post('/register',islogout, userController.insertUser)

router.get('/',islogged, userController.showDashboard)
router.post('/logout',islogged,userController.logout)

router.get('/users/:id/editUser',islogged,userController.editProfile)
router.put('/user/:id',islogged,userController.updateUser)




module.exports=router

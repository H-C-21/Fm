const express = require("express");
const { forgotPassword , Privacy , coursepage , coursedescpage ,  header , aboutus , rockcoursedesc ,beginnercoursedesc , description , faq , profile , instructor2 , freelessons  ,purchasedhomepage , homepage,uploadcourse } = require("../controllers/userController.js");



const router = express.Router();

router.get('/forgotPassword' , forgotPassword);

router.get('/Privacy' , Privacy);

router.get('/coursepage' , coursepage);

router.get('/coursedescpage' , coursedescpage);

router.get('/header' , header);

router.post('/create-course',uploadcourse);

router.get('/aboutus' , aboutus);

router.get('/rockcoursedesc' , rockcoursedesc);

router.get('/beginnercoursedesc' , beginnercoursedesc);

router.get('/description' , description);

router.get('/faq' , faq);

router.get('/profile' , profile);

router.get('/instructor2' , instructor2);

router.get('/freelessons' ,freelessons )

router.get('/homepage' , homepage);

router.get('/purchase/homepage' , purchasedhomepage);

module.exports = router;

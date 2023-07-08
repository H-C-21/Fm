const teacherSchema = require('../models/teacher.js');
const userSchema = require('../models/user.js');
const courses = require('../models/course.js');




exports.forgotPassword = async (req, res) => {
    return res.render('forgotPassword');
}



exports.Privacy = async (req, res) => {
    return res.render('Privacy');
}

exports.coursepage = async (req, res) => {
    return res.render('coursepage');
}

exports.coursedescpage = async (req, res) => {
    return res.render('coursedescpage');
}



exports.header = async (req, res) => {
    return res.render('header');
}
exports.spotlight = async (req, res) => {
    return res.render('Spotlight');
}

exports.aboutus = async (req, res) => {
    return res.render('aboutus');
}

exports.rockcoursedesc = async (req, res) => {
    return res.render('rockcoursedesc');
}

exports.studentprofile = async (req, res) => {
    return res.render('/studentprofile');
}
exports.teacherprofile = async (req, res) => {
    return res.render('/teacherprofile');
}
exports.courseprofile = async (req, res) => {
    return res.render('/courseprofile');
}


exports.beginnercoursedesc = async (req, res) => {
    return res.render('beginnercoursedesc');
}


exports.description = async (req, res) => {
    return res.render('description');
}

exports.faq = async (req, res) => {
    return res.render('faq');
}

exports.uploadcourse = async (req, res) => {

    const newcourse = new courses({
        title: req.body.title,
        teacher: req.body.teacher,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        imageUrl: req.body.image_Url,
        sections: req.body.sections
    });
    await newcourse.save();
    res.render('upload-course');

}

exports.profile = async (req, res) => {
    return res.render('profile');
}

exports.instructor2 = async (req, res) => {
    return res.render('instructor2');
}

exports.freelessons = async(req , res) =>{
    return res.render('freelessons');
}


exports.query = async(req , res) =>{
    try{
        const fname = req.body.fname;
        const lname = req.body.lname;
        const email = req.body.email;
        const message = req.body.message;

        const contact = new contactSchema({
            firstname: fname,
            lastname: lname,
            email: email,
            message: message,
          });
          await contact.save();  
          return res.render('homepage');
    }
    catch(error){
            console.log(`Error while query ${error}`)
    }
         
}

exports.uploadcourse = async(req , res) =>{

    console.log(req.body);
    const newcourse = await  new courses(req.body);
    await newcourse.save();

}

exports.homepage = async(req , res) =>{
    return res.render('homepage');
}

exports.purchasedhomepage = async(req , res) =>{
    res.redirect("/homepage");
}





const express = require('express') //Export Express
const SignUpTemplateCopy = require('./models/SignUpModel')
const router = express.Router()
const bcrypt = require('bcrypt')
const AdminTemplateCopy = require('./models/AdminModel')
const ProductsTemplateCopy = require('./models/ProductsModel')
//.pot = Post Request

router.post('/signup', async (request, response) => { //When we're in signup page :

    const saltPassword = await bcrypt.genSalt(10) //Generate the salt by 10
    const securePassword = await bcrypt.hash(request.body.password, saltPassword ) //salt and crypt the password the user send

    const signedUpUser = new SignUpTemplateCopy({ //When they submit, they create a new SignUp

        fullName:request.body.fullName, //grab the fullName of the request they enter (request = post)
        username:request.body.username,
        email:request.body.email,
        password:securePassword,
    })
    signedUpUser.save()//Save all data of user request
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});
router.post('/addproduct', async (request, response) => { //When we're in signup page :

    const addProducs = new ProductsTemplateCopy({ //When they submit, they create a new SignUp

        nameproduct:request.body.nameproduct, //grab the fullName of the request they enter (request = post)
        imageproduct:request.body.imageproduct,
        descriptionproduct:request.body.descriptionproduct,
        quantityproduct:request.body.quantityproduct,
    })
    addProducs.save()//Save all data of user request
    .then(data => {
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});
router.post('/login', async(req, res)=>{
    
    const { username, password } = req.body;
    try {
        //check for user id
        const user = await SignUpTemplateCopy.findOne({username: username})
        if(!user) res.json({message: "Invalid ID#"})
        //bcrypt.compare to check and compare the hashed password
        if(user && (await bcrypt.compare(password, user.password))){
            console.log(req.body);
            res.redirect('/member');

        }else{
            res.json({auth: false, message: "Invalid Password!"})
        }
    } catch (err) {
        console.error(err.message)
    }
    });
    router.post('/loginadmin', async(req, res)=>{
    
        const { usernameadmin, passwordadmin } = req.body;
        try {
            //check for user id
            const user = await AdminTemplateCopy.findOne({usernameadmin: usernameadmin})
            if(!user) res.json({message: "Invalid ID#"})
            //bcrypt.compare to check and compare the hashed password
            if(user && (await bcrypt.compare(passwordadmin, user.passwordadmin))){
                console.log(req.body);
                res.redirect('/admintrue');
    
            }else{
                res.json({auth: false, message: "Invalid Password!"})
            }
        } catch (err) {
            console.error(err.message)
        }
        });

      /*  router.put("/updateproduct", (req, res) => {
            if(!ObjectID.isValidObjectId(req.params.nameproduct)) {
                return res.status(400).send("ID unknow :" + req.params.nameproduct)
            }
            const updateRecord = {
                imageproduct: req.body.imageproduct,
                descriptionproduct: req.body.descriptionproduct,
                quantityproduct: req.body.quantityproduct,

            }
            //Mettre à jour la BDD
            PostsModel.findByIdAndUpdate (
                req.params.id,
                { $set: updateRecord },
                { new: true },
                (err,docs) => {
                    if(!err) res.send(docs) //Si y'a pas d'erreur tu m'envoies la docs
                    else console.log("Update error : "+ err);
                    }
                )
            })
*/
router.get('/goodies', function(req, res, next) {
      
    ProductsTemplateCopy.find((err, docs) => {
        if (!err) {
            res.render("list", {
                data: docs
            });
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });
 
});

module.exports = router
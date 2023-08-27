const nodemailer=require("nodemailer")
const Mailgen = require("mailgen")
const AddCoupon=require("../Models/addCoupon.js")

exports.addCoupon=async(req,res)=>{
    try{
        let addcoupon=new AddCoupon(req.body)
        const savedComment = await addcoupon.save();
          let config = {
            service: "gmail",
            auth: {
              user: "abdelrahmanmohab10a29@gmail.com",
              pass: "vhzjjigvcmgtuejw",
            },
          };
          let transporter = nodemailer.createTransport(config);

          let MailGenerator = new Mailgen({
            theme: "default",
            product: {
              name: `كوبون من شركة ${req.body.storeName}`,
              link: "https://mailgen.js/",
            },
          });

          let response = {
            body: {
              name: req.body.name,
              intro: `نسبت الخصم و الكود ${req.body.code} ${req.body.discount} كوبون جديد من شركة ${req.body.storeName}`,
              table: {
                data: [
                  {
                    الاسم: req.body.name,
                    الرقم: req.body.phoneNumber,
                    اسم_المتجر: req.body.storeName,
                    لينك_المتجر: req.body.storeLink,
                    كود_الكويون: req.body.code,
                    نسبت_الخصم: req.body.discount,
                    ايمال_المتجر: req.body.email,
                  },
                ],
              },
            },
          };

          let mail = MailGenerator.generate(response);

          let message = {
            from: "abselrahmanmohab10a29@gmial.com",
            to: "easybot.sa@gmail.com",
            subject: "كوبون جدبد يريد ان يتم اضافته في موقعك",
            html: mail,
          };

    transporter
      .sendMail(message)
      res.status(200).send("the email has sent")

    }
    catch(e){
        res.status(400).send(e.message)
    }


}

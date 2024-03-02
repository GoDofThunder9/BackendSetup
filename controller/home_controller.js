
const desc = require('../model/Description')
module.exports.home =function(req,res)
{     const dec = desc.find({}).exec();
      return res.render('home',
      {
         title: "todo list",
         description: dec
      }
      );
}
module.exports.form = function(req,res){
   const Description = desc.Create(
      {
         work: req.body.work,
      }
   );
   }

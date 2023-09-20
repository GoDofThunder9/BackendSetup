module.exports.home = function(req,res)
{
   return res.render('home',{
    title: "home"
   });
}
module.exports.game = function(req,res)
{
    return res.end("<h1> FUCK YOU ALL</h1>");
}
module.exports.fame = function(req,res)
{
    return res.end("<h1> Matters a lot </h1>");
}
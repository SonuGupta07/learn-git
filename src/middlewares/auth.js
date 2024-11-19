const adminAuth = (req,res,next)=>{
    console.log("admin is getting checked");
    const token = "xyz";
    const isAdminAuthorizedUser = (token==="xyz");
    if(isAdminAuthorizedUser){
        console.log("admin is authorized")
        next();
        


    }
    else{
        res.status(401).send("Unaauthorized User");
    }
};
const userAdmin = (req,res,next)=>{
    console.log("User is getting checked");
    const token = "xyze";
    const isAdminAuthorizedUser = (token==="xyz");
    if(isAdminAuthorizedUser){
        console.log("user is authorized");
        next();
    }
    else{
        res.status(401).send("Unauthorized user");
    }
}
module.exports = {adminAuth,userAdmin};
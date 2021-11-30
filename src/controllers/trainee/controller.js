class TraineeController {
     create = function(req,res){
    //  console.log("🚀 ~ file: controller.js ~ line 3 ~ TraineeController ~ req", req)
            res.send({Data:"Here is your post  response call"});
    }
    get =  function(req,res){
        res.send({Data:"Here is your get  response call"});
    }
    update = function(req,res){
        res.send({Data:"User updated"});
    }
    delete = function(req,res){
        res.send({Data:"User deleted"});
   
    }
   
}
export default new TraineeController();

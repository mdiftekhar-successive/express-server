const express = require('express');
const apps = new express.Router();
class TraineeController {
 
    getRoute() {
        apps.get('/api/get',function(req,res){
        res.send({Data:"Here is your get  response call"});
    });
        return apps;
    }
    postRoute() {
        apps.post('/api/post',function(req,res){
        res.send({Data:"User created"});
    });
      return apps;
    }
    putRoute() {
        apps.put('/api/put',function(req,res){
        res.send({Data:"User updated"});
    });
     return apps;
    }
    deleteRoute() {
        apps.delete('/api/delete',function(req,res){
        res.send({Data:"User deleted"});
    });
     return apps;
    }
   
}
export default new TraineeController();

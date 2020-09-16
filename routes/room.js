var express = require('express');
const {route}= require(".");
var router = express.Router();

var{room, customers}= require("../common/data")

router.post("/", function (req,res){
    let data={
        id : room.length + 1,
        roomName: req.body.name,
        seats: req.body.seats,
        amenities: req.body.amenities,
        price_per_hour: req.body.price_per_hour,
        room_number: req.body.room_number,
        bookedStatus : false
   
    }
    room.push(data)

    res.json({
        message:"Room created",
        roomId : data.id
    })


})

router.get("/",function(req,res){
    res.json(room)

})

router.get('/booking',function(req,res){

 let op=[];
 room.forEach(e=>{
    let FindData= customers.find((s) => s.roomId == s.id);
    let findIndex= customers.indexOf(FindData);
     let data={
        customerName : customers[findIndex].name,
        RoomName : e.name,
        date : customers[findIndex].date,
        startTime : customers[findIndex].startTime,
        endTime: customers[findIndex].endTime

     }
     op.push(data);
 })
 res.json(op);

})



module.exports = router;

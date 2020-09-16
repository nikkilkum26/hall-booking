var express = require('express');
const {route}= require(".");
var router = express.Router();

var{customers,room}= require("../common/data")

/* GET users listing. */
router.get('/', function(req, res) {



  res.json(customers);
});

router.post("/",function(req,res){
  
    let data={
        id: customers.length+1,
        customerName: req.body.name,
        startDate: req.body.startdate,
        endDate: req.body.enddate,
        roomId: req.body.roomId
       

    }

    let roomBookStatus = room.find((s) => s.id == req.body.roomId)
    let roomIndex = room.indexOf(roomBookStatus)
    room[roomIndex.bookingstatus]= "Booked"
    customers.push(data)
    res.json({
        message:"congrats room Booked!",
        Id: data.id
    })
})

router.get('/customersBooked',function(req,res){
    let op=[];
    customers.forEach(e => {
        let bookrooms = room.find((room) => room.id == customers.roomId);
        let roomIndex = room.indexOf(bookrooms);
        let data ={
            RoomName: room[roomIndex].roomName,
            Status : room[roomIndex].bookingstatus,
            customerName: customers.customerName,
            startDate : customers.startDate,
            endDate: customers.endDate,
            
        }
        op.push(data);

    });
    res.json(op)
})

module.exports = router;

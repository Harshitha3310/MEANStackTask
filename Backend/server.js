var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// ==================================== LIST of APIS ==========================================//
var registerCheck = require('./registercheck.js');
var loginCheck = require('./logincheck.js');
var getallusersCheck = require('./getalluserscheck.js');
var getusersCheck = require('./getparticularuserinfo.js');
var deleteCheck = require('./deleteusercheck.js');
var updateCheck = require('./updateuser.js');

// =========================================== Register API =========================================//
app.post('/userdetails',function(request,response){
	var details = request.body;
	details.role="user";
	registerCheck.register_check({ details:details}, function (data) {
		console.log(data.Message);
		if (data.status == 200) {
			response.status(data.status).json({ "Message": data.Message })
		}
		else {
			response.status(data.status).json({ "Message": data.Message })
		}
	});
});
// =========================================== Login API =========================================//
app.post('/login',function(request,response){
	var details = request.body;
	loginCheck.login_check({details:details}, function (data) {
		console.log(data.Message);
		if (data.status == 200) {
			response.status(data.status).json( data.Message)
		}
		else {
			response.status(data.status).json({ "Message": data.Message })
		}
	});
})

// ======================================= Get All info API ========================================//
app.post('/getallusers',function(request,response){
	var details = request.body;
	getallusersCheck.getallusers_check({details:details}, function (data) {
		console.log(data.Message);
		if (data.status == 200) {
			response.status(data.status).json( data.Message)
		}
		else {
			response.status(data.status).json({ "Message": data.Message })
		}
	});
})
// ======================================= Get particular user info API ========================================//
app.post('/getuserinfo',function(request,response){
	var details = request.body;
	getusersCheck.getusers_check({details:details}, function (data) {
		console.log(data.Message);
		if (data.status == 200) {
			response.status(data.status).json( data.Message)
		}
		else {
			response.status(data.status).json({ "Message": data.Message })
		}
	});
})
// ======================================= Delete API ========================================//
app.post('/deleteuser',function(request,response){
	var details = request.body;
	deleteCheck.delete_check({details:details}, function (data) {
		console.log(data.Message);
		if (data.status == 200) {
			response.status(data.status).json({ "Message": data.Message})
		}
		else {
			response.status(data.status).json({ "Message": data.Message })
		}
	});
})
// ======================================= Delete API ========================================//
app.post('/updateuser',function(request,response){
	var details = request.body;
	updateCheck.update_check({details:details}, function (data) {
		console.log(data.Message);
		if (data.status == 200) {
			response.status(data.status).json({ "Message": data.Message})
		}
		else {
			response.status(data.status).json({ "Message": data.Message })
		}
	});
})



app.listen(process.env.port || process.env.PORT || 5000,function(){
console.log("Server is running at 5000")
})
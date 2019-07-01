var MongoClient =require('mongodb').MongoClient;
var mongoUrl = process.env.mongodbUrl;
module.exports.login_check = function(params,callback){
	MongoClient.connect(mongoUrl, function(err,db) {
if(err) { 
console.log("Unable to connect to the mongoDB server. Error:"+err);

}
else{
	console.log("Mongo DB is connected !!!");
	var collection = db.collection('userscollection');
	console.log(params.details);
	if(params.details.email == '' || params.details.password == "")
		
	{
		var data ={"Message":"please include the email and password inside your input model","status":"400"}
	callback(data);
	}
	else
	{
		collection.find({ "email": params.details.email,"password":params.details.password }).toArray(function(err,result){
			if(err)
			{
				console.log(err)
				var data ={"Message":err,"status":"500"}
	callback(data);
			}
			else{
				if(result.length >0){
					console.log(result[0]);
				var data ={"Message":result[0],"status":"200"}
	callback(data);
				}
				else{
						console.log(result[0]);
				var data ={"Message":"Documents are not found","status":"200"}
	callback(data);
				}
				
			}
		})
		
		
	}
	
}
	});
}

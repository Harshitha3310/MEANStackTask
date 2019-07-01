var MongoClient =require('mongodb').MongoClient;
var mongoUrl = process.env.mongodbUrl;
module.exports.getallusers_check = function(params,callback){
	MongoClient.connect(mongoUrl,{ useNewUrlParser: true }, function(err,db) {
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
				if(result[0].role == "admin")
				{
					collection.find({"role":"user" }).toArray(function(err,result){
			if(err)
			{
				console.log(err)
				var data ={"Message":err,"status":"500"}
	callback(data);
			}
			else{
				
				 if(result.length >0){
					console.log(result);
				var data ={"Message":result,"status":"200"}
	callback(data);
				}
				else{
						console.log(result);
				var data ={"Message":"You are not an admin","status":"200"}
	callback(data);
				} 
				
			}
		})
				}
				else{
					console.log(result[0]);
					var data ={"Message":result,"status":"200"}
	callback(data);
				}
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

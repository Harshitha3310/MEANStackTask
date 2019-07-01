var MongoClient =require('mongodb').MongoClient;
var mongoUrl = process.env.mongodbUrl;
module.exports.getusers_check = function(params,callback){
	MongoClient.connect(mongoUrl,{ useNewUrlParser: true }, function(err,db) {
if(err) { 
console.log("Unable to connect to the mongoDB server. Error:"+err);

}
else{
	console.log("Mongo DB is connected !!!");
	var collection = db.collection('userscollection');
	console.log(params.details);
	if(params.details.email == '')
		
	{
		var data ={"Message":"please include the email and password inside your input model","status":"400"}
	callback(data);
	}
	else
	{
		
		collection.find({ "email": params.details.email}).toArray(function(err,result){
			if(err)
			{
				console.log(err)
				var data ={"Message":err,"status":"500"}
	callback(data);
			}
			else{
				var data ={"Message":result,"status":"200"}
	callback(data);
					
			}
		})
		
		
	}
	
}
	});
}

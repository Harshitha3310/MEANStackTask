var MongoClient =require('mongodb').MongoClient;
var mongoUrl = process.env.mongodbUrl;
module.exports.register_check = function(params,callback){
	MongoClient.connect(mongoUrl,{ useNewUrlParser: true }, function(err,db) {
if(err) { 
console.log("Unable to connect to the mongoDB server. Error:"+err);

}
else{
	console.log("Mongo DB is connected !!!");
	var collection = db.collection('userscollection');
	console.log(params.details);
	if(params.details == '')
		
	{
		var data ={"Message":"please include the details inside your input model","status":"400"}
	callback(data);
	}
	else
	{
		
		
		collection.insert( params.details,function(err,result){
			if(err)
			{
				console.log(err)
				var data ={"Message":err,"status":"500"}
	callback(data);
			}
			else
			{
				var data ={"Message":"Data Inserted Successfully","status":"200"}
	callback(data);
			}
			
			
		})
		
	}
	
}
	});
}

var MongoClient =require('mongodb').MongoClient;
var mongoUrl = process.env.mongodbUrl;
module.exports.update_check = function(params,callback){
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
		collection.find({ "email": params.details.email }).toArray(function(err,result){
			if(err)
			{
				console.log(err)
				var data ={"Message":err,"status":"500"}
	callback(data);
			}
			else{
				if(result.length >0){
					console.log(result);
				if(result[0].role == "admin")
				{
					console.log("IFFFFFFFFFFFFF")
					collection.find({"email":params.details.altemail },function(err,result){
			if(err)
			{
				console.log(err)
				var data ={"Message":err,"status":"500"}
	callback(data);
			}
			else{
				
				 if(result.length >0){
					console.log(result);
					var document = result;
					document.uname = params.details.uname,
					document.url = params.details.url,
					document.number = params.details.number
					collection.update({"email" : params.details.altemail},{$set: { "uname" : params.details.uname,"url":params.details.url,"number":params.details.number}},function(err,result){
						if(err)
						{
							console.log(err)
						}
						else{
							console.log(result);
							var data ={"Message":"Document updated successfully","status":"200"}
	callback(data);
						}
					});
					
				
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
					var document = result;
					document.uname = params.details.uname,
					document.url = params.details.url,
					document.number = params.details.number
					collection.update({"email" : params.details.altemail},{$set: { "uname" : params.details.uname,"url":params.details.url,"number":params.details.number}},function(err,result){
						if(err)
						{
							console.log(err)
						}
						else{
							console.log(result);
							var data ={"Message":"Document updated successfully","status":"200"}
	callback(data);
						}
					});
					/* console.log(result[0]);
					var data ={"Message":result[0],"status":"200"}
	callback(data); */
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

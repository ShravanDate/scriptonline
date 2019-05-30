const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

const router = express.Router();

router.get('/tmp', function(req, res){
   res.send('GET route on things.');
	var obj={
	testvar01_ : req.query.age,
	testvar02_ : req.query.name
	}
		
	fs.writeFile("/tmp/test.json", obj.testvar01_+".."+obj.testvar02_, function(err) {
		if(err) {
			return console.log(err);
		}
		console.log("The file was saved!------>");	
	}); 
});


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});




app.use(router);
app.listen(port, () => console.log(`Listening on port ${port}`));
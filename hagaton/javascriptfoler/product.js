



function pricepeclick(){
	var ref=firebase.storage().ref()
	
	var image=document.getElementById("image").files[0];
   var date=new Date()+"-"+image.name
   var metadata={
	   contentType:image.type
   }
   var task=ref.child(date).put(image,metadata)
   task.then(snapshot=> snapshot.ref.getDownloadURL())
    .then(url=>{
	localStorage.setItem("url",url)
		console.log
		("images upload and url geted")
	})

}



function addproduct(){
	var catagiri=document.getElementById("post1").value;
	var type=document.getElementById("post2").value;
	var price=document.getElementById("price").value;
	var decs=document.getElementById("deccription").value;


	
var url=localStorage.getItem("url")
console.log("localstorega===>",url)



let obj={
	catagiri,
	type,
	url,
	price,
	decs,
}
console.log(obj);

var key = Math.random()*12345;

firebase.database().ref("product" ).child(key.toFixed()).set(obj);

  }


	
// function show(){

// 	var inputdrop=document.getElementById("post1")
// 	localStorage.setItem("dropvalue",inputdrop.value)
	
// 	var lock=localStorage.getItem("dropvalue")
	
// 	var input=document.getElementById("post")
// 	var newdata=input.innerText=lock;
	
// 	console.log(newdata);
// }



const loadMore = (e) => {
	event.preventDefault(e);
	document.getElementById("questionsId").innerHTML = `
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
				<label>Question</label>
				<input type="text" class="form-control" placeholder="Home Address">
			</div>
		</div>
	</div>

	<div class="row">
		<div class="col-md-4">
			<div class="form-group">
				<label>Option 1</label>
				<input type="text" class="form-control" placeholder="Option 1">
			</div>
			<div class="form-group">
				<label>Option 2</label>
				<input type="text" class="form-control" placeholder="Option 2">
			</div>
			<div class="form-group">
				<label>Option 3</label>
				<input type="text" class="form-control" placeholder="Option 3">
			</div>
			<div class="form-group">
				<label>Option 4</label>
				<input type="text" class="form-control" placeholder="Option 4">
			</div>
			<div class="form-group">
				<label>Answer</label>
				<input type="text" class="form-control" placeholder="Answer">
			</div>
		</div>
	</div>`
}






const AddQuestions = (e) => {
	// const category = document.getElementById("category").value;
	
	
	var inputdrop=document.getElementById("post1")
	localStorage.setItem("dropvalue",inputdrop.value)
	
	var lock=localStorage.getItem("dropvalue")
	
	var input=document.getElementById("post")
	const category=input.innerText=lock;
	
	console.log(category);



	const question = document.getElementById("question").value;
	const answer = document.getElementById("answer").value;
	const option1 = document.getElementById("option1").value;
	const option2 = document.getElementById("option2").value;
	const option3 = document.getElementById("option3").value;
	const option4 = document.getElementById("option4").value;
	// console.log(category, question, answer, option1, option2, option3, option4);
	const allproducts = {
		question,
		option1,
		option2,
		option3,
		option4,
		answer
	}

	// allQuestion.push(quizQuestions)
	// localStorage.setItem('question',JSON.stringify(allQuestion))



	const jsonStringify = JSON.stringify(quizQuestions);

// console.log(c)



	event.preventDefault(e);
	console.log(firebase.database().ref("Products").child(`${category}`).push(allproducts))



}




var arr = [];
const category = () => {
    firebase.database().ref("QUIZ").on('child_added', async function (data) {
        await arr.push(data.key);
    });
    setTimeout(() => {
        for (let i = 0; i < arr.length; i++) {
            const a = arr[i].replaceAll(" ", "-");
            document.getElementById('abcd').innerHTML += `
            <button id=${a} value=${a} onclick=${'loadQuestion(value)'}>${arr[i]}</button>`
        }
    }, 8000);
}
category();

const loadQuestion = (value) => {
    alert(value);

}
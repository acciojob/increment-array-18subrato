let arr = [1, 2, 3, 4, 5];
function incrementArray(arr) {
	let newArr = [];
	for(let t of arr){
		newArr.push(t+1);
	}
	return newArr;
}

alert(incrementArray(arr));

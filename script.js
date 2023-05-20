function createTable() {
    //Write your code here
	let row = prompt('input number of rows');
	while(row==''){
		row = prompt('please enter number of rows');
	}
	let col = prompt('input number of columns');
	row = parseInt(row);
	col = parseInt(col);
	// console.log(row, col)
	const tab = document.getElementById('myTable');
	for(let i = 0; i<row; i++){
		let tr = document.createElement('tr');
		for(let j = 0; j<col; j++){
			let td = document.createElement('td');
			td.innerText = `Row-${i} Column-${j}`
			tr.appendChild(td);
		}
		tab.appendChild(tr);
	}
}

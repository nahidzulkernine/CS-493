let empList =[
    {
        "Course Name": "CS 172",
        "Instructor": "Dr.Zhang",
        "Credit": "4",
        "Description":"Intro C++"
    },
    {
        "Course Name":"CS 291",
        "Instructor":"Thitima Srivatanakul",
        "Credit": "4",
        "Description":"Data Structure I "
    },
    {
        "Course Name":"CS 341",
        "Instructor":"D'latto",
        "Credit": "4",
        "Description":"Data Structure II "
    },
    {
        "Course Name":"CS 451",
        "Instructor": "D'latto",
        "Credit": "4",
        "Description":"Operating System"
    },
    {
        "Course Name":"CS 381",
        "Instructor": "John-Amenyo",
        "Credit": "4",
        "Description":"Software Development "
    },
    {
        "Course Name": "CS 397",
        "Instructor": "Freya Pritchard",
        "Credit": "4",
        "Description":"Assembly Language "
    },
    {
        "Course Name": "CS 485",
        "Instructor": "Dr. Zhang",
        "Credit": "4",
        "Description":"Computer Architecture "
    },
    {
        "Course Name": "MATH 230",
        "Instructor": "F.Mawyer",
        "Credit": "4",
        "Description":" Theory Numbers"
    },
    {
        "Course Name": "CS 461",
        "Instructor": "M.Ahsan",
        "Credit": "4",
        "Description":"Network Computing "
    },
    {
        "Course Name": "Math 122",
        "Instructor": "Alex Cullen",
        "Credit": "4",
        "Description":" calc 2"
    }
];

//

for (let n of empList){
	//console.log(n['Course Name']+""+n.Instructor+""+n.Credit+""+n.Description);
	let row = document.createElement("tr");
    checkBox = document.createElement("input");
    checkBox.addEventListener("click", taskCompleted);
    // let colchkbox = document.createElement("td");
	let colCourseName = document.createElement("td");
	let colInstructor= document.createElement("td");
    let colCredit= document.createElement("td");
    let colDescription= document.createElement("td");
	colCourseName.innerText = n['Course Name'] + " ";
	colInstructor.innerText= n.Instructor + " ";
    colCredit.innerText=n.Credit + " ";
    colDescription.innerText=n.Description + " " ;
    checkBox.type ="checkbox";

    row.appendChild(checkBox);
	row.appendChild(colCourseName);
    row.appendChild(colDescription);
	row.appendChild(colInstructor);
    row.appendChild(colCredit);
    
	document.getElementById("data").appendChild(row);
}
function taskCompleted(){
        let checkbox= event.target;
        console.log(this);
        var label = this.parentNode;


        if (checkbox.checked) 
            label.setAttribute("style", "font-weight: bold;");
            
        else
            label.setAttribute("style", "font-weight: none");
        

    }
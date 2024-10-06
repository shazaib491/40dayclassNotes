const tbody = document.querySelector("#tableBody");
const blogs=[
    {
        id:1,
        title:"Blog 1",
        comments:"This is a blog about JavaScript"
    }
];
function submitHandler(event){
    event.preventDefault();//refresh prevent
    console.log(event.target.title.value);
    console.log(event.target.comments.value);
    const {title:{value:titleValue},comments:{value:commentValue}}=event.target
    // let blogDetail= {
    //     title: event.target.title.value,
    //     comment: event.target.comments.value
    // }

console.log(commentValue);

    let blogDetail= {
        title: titleValue,
        comments: commentValue
    }
    blogs.push(blogDetail);
    displayTable();
    event.target.reset();
}

let first="user";
let second ="usetwop";

let final = "fina string is "+ first + "and the second string \n" + second +"here is the final string";
let templateLiteral =`final string is ${first} and the second string 
 ${second} 
 here is the final string`;

function displayTable(){
        blogs.forEach((element)=>{
            tbody.innerHTML+=`
                <tr>
                    <td>${element.title}</td>
                    <td>${element.comments}</td>
                </tr>
            `
        })
}

displayTable();
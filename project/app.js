const tbody = document.querySelector("#tableBody");
const formid=document.querySelector("#formid");
let blogs = [
  {
    id: 1,
    title: "Blog 1",
    comments: "This is a blog about JavaScript",
  },
];//1


formid.addEventListener("submit",submitHandler);

function submitHandler(event) {
  event.preventDefault(); //refresh prevent
  console.log(event.target.title.value);
  console.log(event.target.comments.value);
  const {
    title: { value: titleValue },
    comments: { value: commentValue },
  } = event.target;
  // let blogDetail= {
  //     title: event.target.title.value,
  //     comment: event.target.comments.value
  // }

  console.log(commentValue);

  let blogDetail = {
    id: blogs.length+1, // generate unique id
    title: titleValue,
    comments: commentValue,
  };
  blogs.push(blogDetail);
  displayTable();
  event.target.reset();
}

function displayTable() {
  tbody.innerHTML = "";
  blogs.forEach((element) => {
    tbody.innerHTML += `
                <tr>
                    <td>${element.title}</td>
                    <td>${element.comments}</td>
                    <td><button class='btn btn-danger' onclick=deleteBlogs(${element.id}) >Delete</button></td>
                </tr>
            `;
  });
}

displayTable();

function deleteBlogs(id){// 2
    blogs=blogs.filter(element=>{
        // {
        //     id: 1,
        //     title: "Blog 1",
        //     comments: "This is a blog about JavaScript",
        //   },
        // {
        //     id: 2,
        //     title: "Blog 2",
        //     comments: "This is a blog about JavaScript",
        //   },
        if(element.id!==id){// 2==2=false 
            return element;
        }
    });
    
    displayTable();
}


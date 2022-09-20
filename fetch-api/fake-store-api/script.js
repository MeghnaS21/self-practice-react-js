// fetch() method is defined on the window Object, 
// which we can use to perform requestAnimationFrame.
// This method will return Promise
// Promise will either be fullfilled or rejected

//fetch(api-link)------> TO FETCH THE DATA FROM THE API
//returns promise
//1-When our promise is fulfilled we have to use then &
//inside then we will give one argument called as data
 
//our data will be stored inside data.
//received data is in json format

//so convert data into object using .json method. 

//after conversion, I'll asume that it's fulfiled so we will use then
//& inside then I will pass an argument called as completeData which
//will store the object format of the json 

//now i want to display the data into browser
//data1 is an empty variable

//now using map method, I'll be  accessing all my data
fetch('https://fakestoreapi.com/products').then((data)=>{
    // console.log(data)
    return data.json();
}).then((completeData)=>{  //completeData is an array
    let data1="";
    //mapp will take 3 arguments, 1st current value, 
    //2nd index number, 3rd array which we are working on
    completeData.map((values)=>{
        data1+= `<div class="card">
                <h1 class="title">${values.title}</h1>
                <img src=${values.image } alt="image" class="images">
                <p>${values.description}</p>
                <p class="category">${values.category}</p>
                <p class="price">Rs. ${values.price}</p>
            </div>`
    });
    document.getElementById("cards").innerHTML=data1;
}).catch((err)=>{
    console.log(err);
})

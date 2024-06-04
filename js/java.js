
// var productNameInput = document.getElementById('productName')//بيمسك الايليمنت وبيخزنه
// var productPriceInput = document.getElementById('productPrice')//بيمسك الايليمنت وبيخزنه
// var productCategoryInput = document.getElementById('productCategory')//بيمسك الايليمنت وبيخزنه
// var productDescriptionInput = document.getElementById('productDescription')//بيمسك الايليمنت وبيخزنه
// var productImgeInput = document.getElementById('productImge')//بيمسك الايليمنت وبيخزنه

// var productList = []

// if(localStorage.getItem('productContainer')!==null){
//     productList=JSON.parse(localStorage.getItem('productContainer'));
//     displayData();
// }


// function addProduct() {
//     var product = {
//         name: productNameInput.value,
//         price: productPriceInput.value,
//         category: productCategoryInput.value,
//         description: productDescriptionInput.value,
//         imge: './imges/testi-3.jpg'
//     }
//     productList.push(product);

//     localStorage.setItem('productContainer' , JSON.stringify(productList)  )

//     displayData();

//     clearForm();
    
//     console.log(productList)
// }
// function clearForm() {
//     productNameInput.value = null;
//     productPriceInput.value = null;
//     productCategoryInput.value = null;
//     productDescriptionInput.value = null;
//     productImgeInput.value = null;
// }



// function displayData(){
//     var cartona='';
//     for(var i=0;i<productList.length;i++){
//         cartona+=
//         `
//         <tr>
//         <td>${i}</td>
//         <td>${productList[i].name}</td>
//         <td>${productList[i].price}</td>
//         <td>${productList[i].category}</td>
//         <td>${productList[i].description}</td>
//         <td><img width="100px" src=" ${productList[i].imge} " alt=""></td>
//         <td>
//             <button class="btn btn-outline-warning btn-sm">Update</button>
//             <button onclick="deleteItem(${i})" class="btn btn-outline-danger btn-sm">Delete</button>
//         </td>
//     </tr>

//     `
//     }
//     document.getElementById('tableData').innerHTML=cartona;
// }

// function deleteItem(indexItem){
//     productList.splice(indexItem , 1)
//     displayData()
//     localStorage.setItem('productContainer' , JSON.stringify(productList)  )
//     console.log(productList)

// }


// // console.log(
// //     "YOUSEF elsayed".toLowerCase().includes("y".toLowerCase())
// // )
// function searchItem(){
//     console.log("hello")
// }
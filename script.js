let inventory = [ 
{ id: "2324",
 name: "iphone 11",
 price: 900,
 quantity: 10, 
 status: "available",
 os:"ios",
}, 

{id: "2325",
 name: "Samsung galaxy s23" ,
 price: 1200,
 quantity: 6, 
 status: "almost of stock",
 os:"Android"},

{id: "2326",
 name: "Google pixel 8" ,
 price: 799,
 quantity: 0, 
 status: "out of stock",
 os:"Android"},
 
{id: "2327" ,
 name: "Google pixel 8" ,
 price: 850,
 quantity: 0, 
 status: "out of stock",
 os:"Android"},

{ id: "2337",
 name: "Xiaomi Redmi Note 12 Pro+",
 price: 500,
 quantity: 15,
 status: "available",
 os: "Android" },
 
 { id: "2347",
 name: "Oppo Reno 8 5G",
 price: 200,
 quantity: 7,
 status:" almost out of stock",
 os: "android"},
 
{id: "2357",
name: "Huawei P50 Pro",
 price: 100,
quantity: 12,
status : "available",
os: "android"},

{id: "2367",
name: "iphone 17",
 price: 1500,
quantity: 15,
status : "available",
os: "Ios"},

{id: "2377",
name: "iphone SE",
 price: 350,
quantity: 0,
status : "out of stock",
os: "ios"},

{id: "2387",
name: "techno 360",
 price: 150,
quantity: 11,
status : "available",
os: "android"}]


function statusCheck(quantity){ 
    let status = ""

        if(quantity <= 0) {
         status = "out of stock"
        }
        else if(quantity <= 10){
          status ="almost out of stock"
        }
        else {
            status = "available"
        }
          return status

}
function addProduct(productName, productPrice, productQuantity,productOs){
    inventory.push (
        {id: idGenerator(),
        name: productName,
        price: productPrice,
        quantity: productQuantity, 
        status: statusCheck(productQuantity),
        os:productOs
        }
    )

}

function removeProduct(identifier){
    inventory = inventory.filter(product =>product.id !== identifier && product.name !==  identifier)
    return inventory
 
    }
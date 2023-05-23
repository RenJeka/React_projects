
// FRONTEND
const frontend_object = {
  "company": {
    "name": '',
    "numberOfProducts": 24,
    "address": '',
    "products": [
      {
        category: '',
        productId: 1
      }
    ]
  }
}


function companyAdapter(backend_object) {
  // const backend_object = {
  //   "companyName": '',
  //   "products": [
  //     {
  //       "companyId": 1,
  //       productId: 1,
            categoryName: ''
  //     }
  //   ]
  // }


  function productsAdapter(products) {
    return returnedProducts
  }

  const frontendProducts = productsAdapter(backend_object.products)

  return {
    "company": {
      "name": backend_object.companyName,
      "numberOfProducts": 24,
      "address": '',
      "products": frontendProducts
    }
  }
}







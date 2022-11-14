function fetchProducts(done) {
    $.get('../../src/controllers/controllers', function (data) {
        done(data)
    })
}

function crearCatalogo(producto) {
    return $(`  
    <div class="card" style="width: 18rem;">
        <img src="${producto.url_image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${producto.name}</h5>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: <strong>${producto.price}</strong></li>
            <li class="list-group-item">Discount: <strong>${producto.discount}</strong></li>
            <li class="list-group-item">Category: <strong>${producto.category}</strong></li>
        </ul>
    </div>
    
    `)
}

$(function () {
    let productList = $('#catalogo')
    fetchProducts(function(products){
        productList.empty()
        for (product of products) {
            productList.append(crearCatalogo(products))
        }
    })
})
function update_cart(num, product){
    var product_id = document.getElementById(`${product}_in_cart`);
    if (num >= 0){
        users_cart[product]++;
        price = price + num;
    } else if (users_cart[product] > 0){
        users_cart[product]--;
        price = price + num;
    }
    product_id.innerText = users_cart[product];
    price_html.innerText = `cart price: $${price}`
}

function create_post(){
    var title = document.getElementById('post-title');
    var content = document.getElementById('post-content');
    posts[title] = content;
    console.log(posts);
}

let price = 0;
let price_html = document.getElementById('price');
let products = {'snapple': 2, 'soda': 1, 'pizza': 4, 'salad': 5, 'waffles': 3}
let users_cart = {'snapple': 0, 'soda': 0, 'pizza': 0, 'salad': 0, 'waffles': 0};
let html_table  = document.getElementById('table');
let image_size = 200;
let posts = {};

for (let key in products) {
    if (products.hasOwnProperty(key)) {
        let value = products[key];
        var row = document.createElement('tr');

        var col = document.createElement('td');
        col.innerHTML = `<img src="assets/${key}.png" width = '${image_size}' height = '${image_size}'>`;
        row.appendChild(col);

        var col = document.createElement('td');
        col.innerText = key;
        row.appendChild(col);

        var col = document.createElement('td');
        col.innerText = `$${value}`;
        row.appendChild(col);

        var col = document.createElement('td');
        col.innerHTML = `<button onclick="update_cart(${value}, '${key}')">add to cart</button>`;
        row.appendChild(col);

        var col = document.createElement('td');
        col.innerHTML = `<button onclick="update_cart(-${value}, '${key}')">remove from cart</button>`;
        row.appendChild(col);

        var col = document.createElement('td');
        col.innerHTML = `<h1 id = '${key}_in_cart'>0</h1>`;
        row.appendChild(col);

        html_table.appendChild(row);
    }
}
CREATE DATABASE tienda;

CREATE TABLE category(
    idcategory SERIAL PRIMARY KEY,
    name VARCHAR(45)
);

CREATE TABLE product(
    idproduct SERIAL PRIMARY KEY,
    name VARCHAR(45),
    url_image VARCHAR(255),
    price FLOAT,
    discount INT,
    category INT,
    FOREIGN KEY (category) references category(idcategory)
);


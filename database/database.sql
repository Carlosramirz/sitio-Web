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


INSERT INTO product (name, url_image, price, discount, category) values ('Ramitas', 'https://ibb.co/JR3jt3D', '500.00', '0', '4');
INSERT INTO product (name, url_image, price, discount, category) values ('Ramitas de queso', 'https://ibb.co/ZBkCJsj', '500.00', '0', '5');
INSERT INTO product (name, url_image, price, discount, category) values ('Kryspo', 'https://ibb.co/d64XpXK', '500.00', '0', '6');
INSERT INTO product (name, url_image, price, discount, category) values ('Cheezels', 'https://ibb.co/8mwF9Mx', '500.00', '0', '7');
INSERT INTO product (name, url_image, price, discount, category) values ('Triton', 'https://ibb.co/7rdwpb2', '500.00', '0', '8');
INSERT INTO product (name, url_image, price, discount, category) values ('Triton doble capa', 'https://ibb.co/DYT4fp8', '500.00', '0', '9');
INSERT INTO product (name, url_image, price, discount, category) values ('Triton limon white', 'https://ibb.co/QpGLV9j', '500.00', '0', '10');
INSERT INTO product (name, url_image, price, discount, category) values ('Triton crema doble', 'https://ibb.co/8XQ10Gg', '500.00', '0', '11');
INSERT INTO product (name, url_image, price, discount, category) values ('Triton dark', 'https://ibb.co/BPdsKyQ', '499.90', '0', '12');
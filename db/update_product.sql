UPDATE products
SET description = ${description}
WHERE product_id = ${id};

SELECT * FROM product;
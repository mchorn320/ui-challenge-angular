CREATE TABLE
    customer
    (
        id BIGINT NOT NULL,
        firstname VARCHAR,
        lastname VARCHAR,
        favoritecolor VARCHAR,
        PRIMARY KEY (id)
    );

CREATE TABLE
    hibernate_sequence
    (
        next_val BIGINT
    );

INSERT INTO customer (id, firstname,lastname,favoritecolor)
  VALUES (1, 'Matthew', 'Segreti', 'blue');

INSERT INTO customer (id, firstname,lastname,favoritecolor)
  VALUES (2, 'Mark', 'Horn', 'red');

INSERT INTO customer (id, firstname,lastname,favoritecolor)
  VALUES (3, 'Mike', 'Jones', 'yellow');


INSERT INTO hibernate_sequence (next_val) VALUES (4);

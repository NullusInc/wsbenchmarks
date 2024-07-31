CREATE TABLE Investment
(
  purchase_id INT PRIMARY KEY,
  username TEXT NOT NULL,
  type TEXT NOT NULL,
  symbol TEXT NOT NULL,
  purchase_date TIMESTAMP NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  purchase_price NUMERIC(10, 2) NOT NULL,
  total_cost NUMERIC(10, 2) GENERATED ALWAYS AS (quantity * purchase_price) STORED,
  FOREIGN KEY (username) REFERENCES "User" (username) ON DELETE CASCADE
);

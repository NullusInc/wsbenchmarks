-- Database: wsbenchmarks

-- DROP DATABASE IF EXISTS wsbenchmarks;
CREATE DATABASE wsbenchmarks
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Canada.1252'
    LC_CTYPE = 'English_Canada.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT ALL ON DATABASE wsbenchmarks TO postgres;

-- Connect to the wsbenchmarks database
\c wsbenchmarks

-- Create the user table
CREATE TABLE user 
(
  username TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  dob DATE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Create the investment table
CREATE TABLE investment
(
  purchase_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  type TEXT NOT NULL,
  symbol TEXT NOT NULL,
  purchase_date TIMESTAMP NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity > 0),
  purchase_price NUMERIC(10, 2) NOT NULL,
  total_cost NUMERIC(10, 2) GENERATED ALWAYS AS (quantity * purchase_price) STORED,
  FOREIGN KEY (username) REFERENCES user (username) ON DELETE CASCADE
);

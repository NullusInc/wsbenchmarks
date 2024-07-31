CREATE TABLE "User"
(
  username TEXT PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT,
  dob DATE,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

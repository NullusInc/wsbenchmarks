package backend

import (
	"context"
	"errors"
	"time"

	"encore.dev/storage/sqldb"
)

type User struct {
	Username  string    `json:"username" db:"username"`
	FirstName string    `json:"first_name" db:"first_name"`
	LastName  string    `json:"last_name" db:"last_name"`
	DOB       time.Time `json:"dob" db:"dob"`
	Email     string    `json:"email" db:"email"`
	Password  string    `json:"password" db:"password"`
}

type Investment struct {
	PurchaseID    int     `json:"purchase_id" db:"purchase_id"`
	Username      string  `json:"username" db:"username"`
	Type          string  `json:"type" db:"type"`
	Symbol        string  `json:"symbol" db:"symbol"`
	PurchaseDate  string  `json:"purchase_date" db:"purchase_date"`
	Quantity      int     `json:"quantity" db:"quantity"`
	PurchasePrice float64 `json:"purchase_price" db:"purchase_price"`
	TotalCost     float64 `json:"total_cost" db:"total_cost"`
}

var db = sqldb.NewDatabase("wsbenchmarks", sqldb.DatabaseConfig{
	Migrations: "./migrations",
})

// encore:api public method=POST path=/backend
func CreateUser(ctx context.Context, p *User) (*User, error) {
	// Validate
	if err := ValidateUser(p); err != nil {
		return nil, err
	}

	// Create User
	_, err := db.Exec(ctx,
		`INSERT INTO "user" (username, first_name, last_name, dob, email, password)
		VALUES ($1, $2, $3, $4, $5, $6)`,
		p.Username, p.FirstName, p.LastName, p.DOB, p.Email, p.Password)
	if err != nil {
		return nil, err
	}

	return p, nil
}

// encore:api public method=PUT path=/backend
func UpdateUser(ctx context.Context, p *User) (*User, error) {
	// Validate
	if err := ValidateUser(p); err != nil {
		return nil, err
	}

	// Update User
	_, err := db.Exec(ctx,
		`UPDATE "user"
		SET first_name = $1, last_name = $2, dob = $3, email = $4, password = $5
		WHERE username = $6`,
		p.FirstName, p.LastName, p.DOB, p.Email, p.Password, p.Username)
	if err != nil {
		return nil, err
	}

	return p, nil
}

// encore:api public method=GET path=/backend/:username
func GetUser(ctx context.Context, username string) (*User, error) {
	// Validate
	if len(username) == 0 {
		return nil, errors.New("invalid username")
	}

	// Get User
	user := &User{Username: username}
	err := db.QueryRow(ctx,
		`SELECT first_name, last_name, dob, email, password FROM "user" WHERE username = $1`,
		username).Scan(&user.FirstName, &user.LastName, &user.DOB, &user.Email, &user.Password)
	if err != nil {
		return nil, err
	}

	return user, nil
}

// encore:api public method=DELETE path=/backend/:username
func DeleteUser(ctx context.Context, username string) error {
	// Validate
	if len(username) == 0 {
		return errors.New("invalid username")
	}

	// Delete User
	_, err := db.Exec(ctx,
		`DELETE FROM "user" WHERE username = $1`, username)
	if err != nil {
		return err
	}

	return nil
}

func ValidateUser(p *User) error {
	if len(p.Username) == 0 {
		return errors.New("username cannot be empty")
	}

	if len(p.FirstName) == 0 {
		return errors.New("first name cannot be empty")
	}

	if len(p.Email) == 0 {
		return errors.New("email name cannot be empty")
	}

	if len(p.Password) == 0 {
		return errors.New("password name cannot be empty")
	}

	// TODO - make strength password checker

	return nil
}

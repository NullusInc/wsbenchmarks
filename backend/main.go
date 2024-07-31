package backend

import (
	"context"
	"errors"

	"encore.dev/storage/sqldb"
)

type User struct {
	Username  string `json:"username" db:"username"`
	FirstName string `json:"first_name" db:"first_name"`
	LastName  string `json:"last_name" db:"last_name"`
	DOB       string `json:"dob" db:"dob"`
	Email     string `json:"email" db:"email"`
	Password  string `json:"password" db:"password"`
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

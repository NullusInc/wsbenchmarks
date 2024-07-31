package backend

import "time"

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

package backend

import (
	"context"
	"errors"
)

//encore:api public method=POST path=/investment
func CreateInvestment(ctx context.Context, p *Investment) (*Investment, error) {
	// Validate
	if err := ValidateInvestment(p); err != nil {
		return nil, err
	}

	// Create Investment
	_, err := db.Exec(ctx,
		`INSERT INTO "investment" (purchase_id, username, type, symbol, purchase_date, quantity, purchase_price, total_cost)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
		p.PurchaseID, p.Username, p.Type, p.Symbol, p.PurchaseDate, p.Quantity, p.PurchasePrice, p.TotalCost)
	if err != nil {
		return nil, err
	}

	return p, nil
}

//encore:api public method=PUT path=/investment
func UpdateInvestment(ctx context.Context, p *Investment) (*Investment, error) {
	// Validate
	if err := ValidateInvestment(p); err != nil {
		return nil, err
	}

	// Update Investment
	_, err := db.Exec(ctx,
		`UPDATE "investment"
		SET username = $1, type = $2, symbol = $3, purchase_date = $4, quantity = $5, purchase_price = $6, total_cost = $7
		WHERE purchase_id = $8`,
		p.Username, p.Type, p.Symbol, p.PurchaseDate, p.Quantity, p.PurchasePrice, p.TotalCost, p.PurchaseID)
	if err != nil {
		return nil, err
	}

	return p, nil
}

//encore:api public method=GET path=/investment/:purchase_id
func GetInvestment(ctx context.Context, purchase_id int) (*Investment, error) {
	// Validate
	if purchase_id == 0 {
		return nil, errors.New("invalid purchase_id")
	}

	// Get Investment
	investment := &Investment{PurchaseID: purchase_id}
	err := db.QueryRow(ctx,
		`SELECT username, type, symbol, purchase_date, quantity, purchase_price, total_cost FROM "investment" WHERE purchase_id = $1`,
		purchase_id).Scan(&investment.Username, &investment.Type, &investment.Symbol, &investment.PurchaseDate, &investment.Quantity, &investment.PurchasePrice, &investment.TotalCost)
	if err != nil {
		return nil, err
	}

	return investment, nil
}

//encore:api public method=DELETE path=/investment/:purchase_id
func DeleteInvestment(ctx context.Context, purchase_id int) error {
	// Validate
	if purchase_id == 0 {
		return errors.New("invalid purchase_id")
	}

	// Delete Investment
	_, err := db.Exec(ctx,
		`DELETE FROM "investment" WHERE purchase_id = $1`,
		purchase_id)
	if err != nil {
		return err
	}

	return nil
}

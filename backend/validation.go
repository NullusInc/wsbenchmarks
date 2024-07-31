package backend

import "errors"

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

func ValidateInvestment(p *Investment) error {
	if p.PurchaseID == 0 {
		return errors.New("purchase_id is required")
	}
	if p.Username == "" {
		return errors.New("username is required")
	}
	if p.Type == "" {
		return errors.New("type is required")
	}
	if p.Symbol == "" {
		return errors.New("symbol is required")
	}
	if p.PurchaseDate == "" {
		return errors.New("purchase_date is required")
	}
	if p.Quantity == 0 {
		return errors.New("quantity is required")
	}
	if p.PurchasePrice == 0 {
		return errors.New("purchase_price is required")
	}
	if p.TotalCost == 0 {
		return errors.New("total_cost is required")
	}
	return nil
}

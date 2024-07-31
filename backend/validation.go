package backend

import (
	"errors"
	"fmt"
)

func ValidateUser(p *User) error {
	fields := map[string]string{
		"username":   p.Username,
		"first name": p.FirstName,
		"email":      p.Email,
		"password":   p.Password,
	}

	for field, value := range fields {
		if len(value) == 0 {
			return errors.New(fmt.Sprintf("%s cannot be empty", field))
		}
	}

	// TODO - make strength password checker

	return nil
}

func ValidateInvestment(p *Investment) error {
	fields := map[string]interface{}{
		"purchase_id":    p.PurchaseID,
		"username":       p.Username,
		"type":           p.Type,
		"symbol":         p.Symbol,
		"purchase_date":  p.PurchaseDate,
		"quantity":       p.Quantity,
		"purchase_price": p.PurchasePrice,
		"total_cost":     p.TotalCost,
	}

	for field, value := range fields {
		switch v := value.(type) {
		case int:
			if v == 0 {
				return errors.New(fmt.Sprintf("%s cannot be empty", field))
			}
		case string:
			if len(v) == 0 {
				return errors.New(fmt.Sprintf("%s cannot be empty", field))
			}

		}
	}

	return nil
}

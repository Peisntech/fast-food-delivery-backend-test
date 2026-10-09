# Fast Food Delivery Backend - Food Delivery API 🇺🇬
> **Status: 🧪 In Testing - MVP v1**

This is the testing version of the core API for Fast  Food Delivery.
Am currently testing endpoints for authentic Ugandan cuisine(local food) delivery in Kampala.

### Tech Used For Testing
- Node.js + Express.js
- CORS + JSON Parser
- In-Memory Storage (for fast testing - resets on restart)

### What Is Working Now (Testing Phase)

| Method | Endpoint | Status | Description |
| :--- | :--- | :--- | :--- |
| GET | `/` | 🟢 Working | Health check |
| GET | `/api/foods` | 🟢 Working | Get Ugandan menu (Rolex, Luwombo, Pilao) |
| POST | `/api/orders` | 🧪 Testing | Create test order |

# Test in  Postman
https://peisntech.github.io/fast-food-delivery-backend-test/
GET http://localhost:5000/api/foods
POST http://localhost:5000/api/orders
Body: { "customer": "Test User", "foodId": 1, "quantity": 2 }

## AUTHOR Nsubuga Pius🦺 piusnsubuga86@gmail.com

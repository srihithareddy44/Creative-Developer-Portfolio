* { box-sizing: border-box; }

body {
  font-family: 'Segoe UI', sans-serif;
  margin: 0;
  background: #f5f6fa;
  color: #333;
}

header {
  background: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

section, main {
  padding: 2rem;
}

h2 {
  color: #007bff;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

button, input, select, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  background: #28a745;
  color: white;
  cursor: pointer;
  font-weight: bold;
}

.cards, .products {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.card, .product {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  flex: 1 1 200px;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.hidden {
  display: none;
}

footer {
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}

.nav-tabs {
  text-align: center;
  margin-top: 1rem;
}

.nav-tabs button {
  display: inline-block;
  background: #007bff;
  color: white;
  border: none;
  margin: 0 5px;
  padding: 10px 20px;
  border-radius: 5px;
}

.nav-tabs button:hover {
  background: #0056b3;
}

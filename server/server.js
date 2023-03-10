const express = require("express");

const {faker} = require("@faker-js/faker");

const app = express();

const port = 8000;

// Create a function that creates a user
// id, password, email, firstname, lastname, phonenumber

const newUserObj = () => ({
    id: faker.database.mongodbObjectId(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number(),
    email: faker.internet.email(),
    password: faker.internet.password()
})


// Create a function that creates a company
// street, city, state, zip, country

const newCompany = () => ({
    id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        country: faker.address.country()
    }
})

//Create a route that returns a new user

app.get("/api/users/new", (req, res) => {
    res.json(newUserObj());
})

// Create a route that returns a new company

app.get("/api/companies/new", (req, res) => {
    res.json(newCompany());
})

// Create a route that returns a new user and a new company

app.get("/api/users/companies/new", (req, res) => {
    res.json({user: newUserObj(), company: newCompany()})
})

app.use( express.json() );
app.use( express.urlencoded({ extended: true}) );

app.get("/api", (req, res) => {
    res.json({message: "Hello World" })
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );


var http = require("http");
//TODO - Use Employee Module here
const employees = require('./Employee')

// uses map to copy and only use firstName and lastName values from employees constant 
const empNames = employees.map(({firstName, lastName}) => `${firstName} ${lastName}`)

// sorts the values of empNames
empNames.sort()

const empSalary = employees.reduce((accumulator, employee) => accumulator + employee.Salary, 0)

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {

    console.log(req.url)

    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.write("<h1>Welcome to Lab Exercise 03 <h1>")
        }

        if (req.url === '/employee/') {
            res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.write("<h2>Displaying Employee Details<h2>")
            res.write(JSON.stringify(employees))
            
        }
        
        if (req.url === '/employee/names/') {
            res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.write("<h2>Displaying Employee Names<h2>")
            res.write(JSON.stringify(empNames))
            
        } 

        if (req.url === '/employee/totalsalary/') {
            res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }  
            res.write("<h2>Displaying Sum of Employees' Salary<h2>")
            res.write(`Total salary: ${JSON.stringify(empSalary)}`)
    }

    res.end()
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})
const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {

    res.send(`

    <!DOCTYPE html>
    <html>
    <head>
        <title>Student Result Tables</title>

        <style>

            body{
                font-family: Arial, sans-serif;
                background-color: #f0f8ff;
                margin: 0;
                padding: 20px;
            }

            h1{
                text-align: center;
                color: white;
                background-color: #0077b6;
                padding: 15px;
                border-radius: 10px;
            }

            .container{
                display: flex;
                justify-content: space-around;
                margin-top: 30px;
                flex-wrap: wrap;
            }

            table{
                border-collapse: collapse;
                width: 400px;
                background-color: white;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            }

            th{
                background-color: #023e8a;
                color: white;
                padding: 12px;
            }

            td{
                border: 1px solid #ccc;
                padding: 10px;
                text-align: center;
            }

            tr:nth-child(even){
                background-color: #caf0f8;
            }

        </style>
    </head>

    <body>

        <h1>Student Academic Report</h1>

        <div class="container">

            <!-- Table 1 -->
            <table>

                <tr>
                    <th colspan="2">Student Result</th>
                </tr>

                <tr>
                    <th>Student Name</th>
                    <th>Result</th>
                </tr>

                <tr>
                    <td>Rahul</td>
                    <td style="color:green;">Pass</td>
                </tr>

                <tr>
                    <td>Priya</td>
                    <td style="color:red;">Fail</td>
                </tr>

                <tr>
                    <td>Amit</td>
                    <td style="color:green;">Pass</td>
                </tr>

                <tr>
                    <td>Sneha</td>
                    <td style="color:green;">Pass</td>
                </tr>

            </table>

            <!-- Table 2 -->
            <table>

                <tr>
                    <th colspan="2">Student CGPA</th>
                </tr>

                <tr>
                    <th>Student Name</th>
                    <th>CGPA</th>
                </tr>

                <tr>
                    <td>Rahul</td>
                    <td>8.5</td>
                </tr>

                <tr>
                    <td>Priya</td>
                    <td>6.9</td>
                </tr>

                <tr>
                    <td>Amit</td>
                    <td>9.1</td>
                </tr>

                <tr>
                    <td>Sneha</td>
                    <td>8.8</td>
                </tr>

            </table>

        </div>

    </body>
    </html>

    `);

});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
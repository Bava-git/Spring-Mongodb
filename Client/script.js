document.getElementById("submitBn").addEventListener('click', async (event) => {

    event.preventDefault();

    let employeeId = document.getElementById('employeeid').value;
    let employeeName = document.getElementById('employeename').value;
    let employeeEmail = document.getElementById('employeeemail').value;
    let employeeLocation = document.getElementById('employeelocation').value;

    let employeeDetails = { employeeId, employeeName, employeeEmail, employeeLocation }

    try {
        const response = await fetch(`http://localhost:8080/employee/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(employeeDetails),
        });
        if (response.ok) {
            alert("Employee added");

            document.querySelectorAll('.AllInputBox').forEach((input) => {
                input.value = "";
            });

        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
});

document.getElementById("getBn").addEventListener('click', async () => {

    const resultviewContainer = document.getElementById('resultviewContainer');
    let html = "";

    try {
        const response = await fetch(`http://localhost:8080/employee`);
        if (response.ok) {
            let data = await response.json();
            for (let i = 0; i < data.length; i++) {
                const element = data[i];
                html += `
                        <tr>
                            <td>${i + 1}</td>    
                            <td>${element.employeeId}</td>    
                            <td>${element.employeeName}</td>    
                            <td>${element.employeeEmail}</td>    
                            <td>${element.employeeLocation}</td>    
                        </tr>
                    `;
            }
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    resultviewContainer.innerHTML = `
                        <table border="1">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Employee Email</th>
                                <th>Employee Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${html}
                        </tbody>
                    </table>
                        `;

});

document.getElementById("getwithidBn").addEventListener('click', async () => {

    let employeeId = document.getElementById('get-employeeid').value;
    const resultviewContainer = document.getElementById('getwithid-resultviewContainer');
    let html = "";

    if (employeeId === "") {
        alert("Please insert the Employee Id");
        return;
    }

    try {
        const response = await fetch(`http://localhost:8080/employee/${employeeId}`);
        if (response.ok) {
            let element = await response.json();
            html = `
                    <tr>
                        <td>${element[0].employeeId}</td>    
                        <td>${element[0].employeeName}</td>    
                        <td>${element[0].employeeEmail}</td>    
                        <td>${element[0].employeeLocation}</td>    
                    </tr>
                `;
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }

    resultviewContainer.innerHTML = `
                        <table border="1">
                        <thead>
                            <tr>
                                <th>Employee ID</th>
                                <th>Employee Name</th>
                                <th>Employee Email</th>
                                <th>Employee Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${html}
                        </tbody>
                    </table>
                        `;
});

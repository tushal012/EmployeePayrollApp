window.addEventListener('DOMContentLoaded', () => {
    createInnerHtml();
});

const createInnerHtml = () => {
    const headerHtml = `<tr>
    <th></th>
    <th>Name</th>
    <th>Gender</th>
    <th>Department</th>
    <th>Salary</th>
    <th>Start Date</th>
    <th>Actions</th>
    </tr>`;
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJson();
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove()" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" onclick="update()" alt="edit" src="../assets/icons/create-black-18dp.svg">
            </td>
    </tr>`;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}

const createEmployeePayrollJson = () => {
    let employeePayrollListLocal = [
        {
            _name: 'Amit Kumar',
            _gender: 'Male',
            _department: [
                'HR',
                'Sales'
            ],
            _salary: '360000',
            _startDate: '29 Oct 2020',
            _note: 'Amit',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Avinash',
            _gender: 'Male',
            _department: [
                'Engineering',
                'Finance'
            ],
            _salary: '400000',
            _startDate: '27 Mar 2020',
            _note: 'Avinash',
            _id: new Date().getTime(),
            _profilePic: '../assets/profile-images/Ellipse -3.png'
        }
    ];

    return employeePayrollListLocal;
}
let employeePayrollList;
window.addEventListener('DOMContentLoaded', () => {
    employeePayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp')
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}
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
    if(employeePayrollList.length==0) return;
    let innerHtml = `${headerHtml}`;
    if(employeePayrollList.length==0) {
        document.querySelector('#table-display').innerHTML = innerHtml;
        return;
    }
    for(const employeePayrollData of employeePayrollList){
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profilePic}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${stringifyDate(employeePayrollData._startDate)}</td>
            <td>
                <img id="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="../assets/icons/delete-black-18dp.svg">
                <img id="${employeePayrollData._id}" onclick="update(this)" alt="edit" src="../assets/icons/create-black-18dp.svg">
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

const remove = (node) => {
    let employeePayrollData = employeePayrollList.find(emp => emp._id == node.id);
    if(!employeePayrollData) return;
    const index = employeePayrollList
                                    .map(emp => emp._id)
                                    .indexOf(employeePayrollData._id);
    employeePayrollList.splice(index,1);
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
    document.querySelector(".emp-count").textContent = employeePayrollList.length;
    createInnerHtml();
}


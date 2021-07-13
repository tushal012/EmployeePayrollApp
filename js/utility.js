const stringifyDate = (date) => {
    let startDate = new Date(date);
    const options = {
        year: 'numeric', month: 'long', day: 'numeric'
    };
    const empDate = !startDate ? "undefined" : startDate.toLocaleDateString("en-IN", options);
    return empDate;
}

const update = (node) => {
    let employeePayRollData = employeePayrollList.find(emp => emp._id == node.id);
    if (!employeePayRollData) return;
    localStorage.setItem('editEmp', JSON.stringify(employeePayRollData));
    window.location.replace(site_properties.add_emp_payroll_page);
};
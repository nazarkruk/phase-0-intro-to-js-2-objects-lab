// Write your solution in this file!
const employee = {
    name: "Nazar",
    streetAddress:"101 Clarendon Ave" 
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return{...employee, [key]:value};

}
updateEmployeeWithKeyAndValue(employee,"Sam","Brodway")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee
}
destructivelyUpdateEmployeeWithKeyAndValue(employee,"Oleh", "Gora Street")

function deleteFromEmployeeByKey(employee, key, value){
    delete employee.key;
    return{...employee, [key]:value};
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}
destructivelyDeleteFromEmployeeByKey (employee, "name","Nazar")

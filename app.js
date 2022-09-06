//----------------Employee Data--------------
function employeData(id, eName, fname, email, address, designation, experince, salary) {
    this.id = id;
    this.eName = eName;
    this.fname = fname;
    this.email = email;
    this.address = address;
    this.designation = designation;
    this.experince = experince;
    this.salary = salary;
}
var Employee1 = new employeData(1, "Abrar", "Lal Bux", "abrarulhassan@gmail.com", "Karachi", "Manager", "3-Yrs", 30000);
var Employee2 = new employeData(2, "Hassan", "Ali", "hassan@gmail.com", "Peshawar", "Assitant-M", "4-Yrs", 40000);
var Employee3 = new employeData(3, "Ubedullah", "zain", "ubedullah@gmail.com", "Pindi", "Dealer", "5-Yrs", 50000);

function implementData() {
    var tble = document.getElementById("data");
    var tblRow1 = document.createElement("tr");
    var tblRow2 = document.createElement("tr");
    var tblRow3 = document.createElement("tr");
    var tblRow4 = document.createElement("tr");
    for (var key in Employee1) {
        //------table Row 1
        //------ start this  for Table heading (th)
        var tblth = document.createElement("th");
        var thText = document.createTextNode(key.toUpperCase());
        //------start this for table append Element in Html
        tblth.appendChild(thText);
        tblRow1.appendChild(tblth);
        tble.appendChild(tblRow1);

        //------table Row 2
        //------start this for table definition (td)
        var tbltd = document.createElement("td");
        var tdText = document.createTextNode(Employee1[key])
        //------start this for table append Element in Html
        tbltd.appendChild(tdText);
        tblRow2.appendChild(tbltd);
        tble.appendChild(tblRow2);
    }
    for (var key in Employee2) {
        //------table Row 3
        var tbltd = document.createElement("td");
        var tdText = document.createTextNode(Employee2[key])
        //------start this for table append Element in Html
        tbltd.appendChild(tdText);
        tblRow3.appendChild(tbltd);
        tble.appendChild(tblRow3);
    }
    for (var key in Employee3) {
        //------table Row 3
        var tbltd = document.createElement("td");
        var tdText = document.createTextNode(Employee3[key])
        //------start this for table append Element in Html
        tbltd.appendChild(tdText);
        tblRow4.appendChild(tbltd);
        tble.appendChild(tblRow4);
    }
}
implementData();
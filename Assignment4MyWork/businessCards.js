
/*

    Name - Ashwin Anand
    Student id - 152042206

*/function DisplayDetails(){
    var name = "Name: ".bold() + this.name + "<br>\n"; 
    var address = "Address: ".bold() + this.address+ "<br>\n";
    var workPhone = "Work Phone: ".bold() + this.workPhone+ "<br>\n";
    var homePhone = "Home Phone: ".bold() + this.homePhone+ "<hr>\n";
    document.write(name ,address ,workPhone ,homePhone);
}

function BusinessCards(name, address, workPhone, homePhone){
    this.name = name;
    this.address = address;
    this.workPhone= workPhone;
    this.homePhone = homePhone;
    this.DisplayDetails = DisplayDetails;

}

var names = [], addresses = [], workPhoneNos = [], homePhoneNos = [];
var currentObject, i;

for(i = 0; i < 3; i++){

    if(i > 0){
        names.push(prompt("Enter the name for another user: "));
    }
    
    else{
        names.push(prompt("Enter the name: "));
    }   
    addresses.push(prompt("Enter " + names[i] + "\'s address."));
    workPhoneNos.push(prompt("Enter " + names[i] + "\'s work phone number."));
    homePhoneNos.push(prompt("Enter " + names[i] + "\'s home phone number."));
    currentObject =  new BusinessCards(names[i], addresses[i], workPhoneNos[i], homePhoneNos[i]);
    currentObject.DisplayDetails();
}
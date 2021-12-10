function canGiveBlood(donor, receiver){                 //defining a function that accepts two arguments; donor, and receiver
    if (donor == "A+") {                                //making if, else if, and else statements to check validity of blood transfusion according to the rules for each blood type
        if (receiver == "A+" || receiver == "AB+"){     
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "B+"){
        if (receiver == "B+" || receiver == "AB+"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "AB+"){
        if (receiver == "AB+"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "O+"){
        if (receiver == "A+" || receiver == "B+" || receiver == "O+" || receiver == "AB+"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "A-"){
        if (receiver == "A+" || receiver == "A-" || receiver == "AB+" || receiver == "AB-"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "B-"){
        if (receiver == "B+" || receiver == "B-" || receiver == "AB+" || receiver == "AB-"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "AB-"){
        if (receiver == "AB+" || receiver == "AB-"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else if (donor == "O-"){
        if (receiver == "A+" || receiver == "A-" || receiver == "B+" || receiver == "B-" || receiver == "O+" || receiver == "O-" || receiver == "AB+" || receiver == "AB-"){
            console.log("True");
        } else {
            console.log("False");
        }
    } else {
        console.log("Blood Type entered is invalid.")
    }
}
        
canGiveBlood("O+", "A+") 
canGiveBlood("A-", "B-") 
canGiveBlood("A-", "AB+") 
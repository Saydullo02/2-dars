// Hmtl document

// var minutus = 230;
// var newHours = Math.floor(minutus / 60);
// var newMinuts = minutus  %  60
// // console.log(Math.floor(Math.random() * 20));
// console.log(`${newHours} soat ${newMinuts} minut`);

// Uss and Euro prizes
var USS_UZB = 9433.34;
var EUR_UZB = 10354.03;

// Harajatlar
var ticketPrize = 500;
var forHotel = 250;
var forMuseum = 120;
var resultForTicketandhotel = ticketPrize + forHotel;

var totalPrize = Math.round((USS_UZB * resultForTicketandhotel) + (EUR_UZB * forMuseum ));
var totalPrompt = prompt("Umumiy harajatlar so'mmasi" , 0);

if (totalPrize <= totalPrompt) {
    console.log("Oq yo'l, Alisher!");
}else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}


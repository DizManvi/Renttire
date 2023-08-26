
// <----- OBJECT DATAS -----> //
var dealsArr = [{
    // img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/29/2eaab0d6-e843-4ad2-b1da-2159d1d30e9e1648537708005-WONDERFUL-DEALS-AHEAD-.jpg"
    image_url : "Landingpage/imglp/2.png"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/aa52212a-f867-4315-9b8b-355261ba0e651647679856552-Shirts---Trousers.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/d506dd29-7339-48c5-8a22-a5fbfdfe16951647679856512-Top-Selling-Kurtas-----1.jpg"
},
{
    img: "https://assets.myntassets.com/f_webp,w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/19/126557af-2621-4b2d-82e6-692d643798301647679856536-Casual-Tees.jpg"
},

];

dealsArr.map(function (el) {

    var box = document.createElement("div");
    var img = document.createElement("img")
    img.setAttribute("src", el.img)

    box.append(img);
    document.querySelector("#deals").append(box);
});



//LANDING PAGE SCRIPT
document.getElementById('landingPage').addEventListener('click', function(){
    window.location.href = "index.html"
})

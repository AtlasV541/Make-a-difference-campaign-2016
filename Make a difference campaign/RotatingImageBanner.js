var bannerImg = new Array();

    bannerImg[0]="debate3.gif";
    bannerImg[1]="debate4.gif";
    bannerImg[2]="debate5.gif";
    bannerImg[3]="debate6.gif";

var newBanner = 0;
var totalBan = bannerImg.length;

function cycleBan() {
    newBanner++;
    if (newBanner == totalBan) {
        newBanner = 0;
    }
document.banner.src=bannerImg[newBanner];
setTimeout("cycleBan()", 5*1000);
}
window.onload=cycleBan;
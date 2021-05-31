
var total = 0;

// accessing different elements
chocoLayer = document.getElementById("choco-cake");
strawberryLayer = document.getElementById("straw-cake");
butterscotchLayer = document.getElementById("scotch-cake");
vanillaLayer = document.getElementById("vanilla-cake");
redvelvetLayer = document.getElementById("red-cake");
candle = document.getElementById("candle");

chocolateBill = document.getElementById("ChocolateBill");
strawberryBill = document.getElementById("StrawberryBill");
butterscotchBill = document.getElementById("ButterscotchBill");
vanillaBill = document.getElementById("VanillaBill");
redvelvetBill = document.getElementById("RedvelvetBill");
totalBill = document.getElementById("total");

chocoLayer.style.display = "none";
strawberryLayer.style.display = "none";
butterscotchLayer.style.display = "none";
vanillaLayer.style.display = "none";
redvelvetLayer.style.display = "none";
candle.style.display = "none";

function addChocolate() {
  if (chocoLayer.style.display == "none") {
    total += 300;
    chocoLayer.style.display = "block";
    chocolateBill.innerHTML = "Chocolate----------300";
  } else {
    total -= 300;
    chocoLayer.style.display = "none";
    chocolateBill.innerHTML = "";
    if (candle.style.display == "block") {
      candle.style.display = "none";
      totalBill.style.display = "none";
    }
  }
}
function addStrawberry() {
  if (strawberryLayer.style.display == "none") {
    total += 100;
    strawberryLayer.style.display = "block";
    strawberryBill.innerHTML = "Strawberry---------100";
  } else {
    total -= 100;
    strawberryLayer.style.display = "none";
    strawberryBill.innerHTML = "";
    if (candle.style.display == "block") {
      candle.style.display = "none";
      totalBill.style.display = "none";
    }
  }
}
function addButterscotch() {
  if (butterscotchLayer.style.display == "none") {
    total += 200;
    butterscotchLayer.style.display = "block";
    butterscotchBill.innerHTML = "Butterscotch-------200";
  } else {
    total -= 200;
    butterscotchLayer.style.display = "none";
    butterscotchBill.innerHTML = "";
    if (candle.style.display == "block") {
      candle.style.display = "none";
      totalBill.style.display = "none";
    }
  }
}
function addVanilla() {
  if (vanillaLayer.style.display == "none") {
    total += 250;
    vanillaLayer.style.display = "block";
    vanillaBill.innerHTML = "Vanilla-------------250";
  } else {
    total -= 250;
    vanillaLayer.style.display = "none";
    vanillaBill.innerHTML = "";
    if (candle.style.display == "block") {
      candle.style.display = "none";
      totalBill.style.display = "none";
    }
  }
}
function addRedvelvet() {
  if (redvelvetLayer.style.display == "none") {
    total += 350;
    redvelvetLayer.style.display = "block";
    redvelvetBill.innerHTML = "RedVelvet---------350";
  } else {
    total -= 350;
    redvelvetLayer.style.display = "none";
    redvelvetBill.innerHTML = "";
    if (candle.style.display == "block") {
      candle.style.display = "none";
      totalBill.style.display = "none";
    }
  }
}

function buy() {
  candle.style.display = "block";
  totalBill.style.display = "block";
  totalBill.innerHTML = "Total--------- " + total;
}

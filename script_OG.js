const cliupg = document.querySelector(".cliupg")
var soundEffect = new Audio('TechoBOOM.mp3')
let PN=false
let Changed=false   
let whattodisplay2=0
const PNC = document.querySelector(".PN")
const Credits = document.querySelector("#idX")
Credits.addEventListener("click",function () {
  alert("Coded and created by: N1XS0N(N.K) 2025-2026 All photos that are used in this game are free online assets.")
})
const cpsupg = document.querySelector(".cpsupg")
const cliupg1 = document.querySelector(".cliupg1")
const cpsupg1 = document.querySelector(".cliupg2")
const Rainupg = document.querySelector(".Rainupg")
const Rainupg1 = document.querySelector(".Rainupg2")
const BW = document.querySelector(".BW")
const BW1 = document.querySelector(".BW2")
const Back2 = document.querySelector(".back2")
const upgrade = document.querySelector(".three")
const upgradebtn = document.querySelector(".upg")
const Khinkali = document.querySelector(".Khinkali")
const Khachapuri = document.querySelector(".Khachapuri")
const Cup=document.querySelector(".CC")
const CupN=document.querySelector(".CUPNum")
const Pan=document.querySelector(".PC")
const PanN=document.querySelector(".PCNum")
const Banana=document.querySelector(".Banana")
const BananaN=document.querySelector(".BananaNum")
const Golden=document.querySelector(".G")
const GN=document.querySelector(".GNum")
const Tea=document.querySelector(".Tea")
const TeaN=document.querySelector(".TeaNum")
const Wasajani=document.querySelector(".W")
const WasajaniN=document.querySelector(".WNum")
const Ramen=document.querySelector(".R")
const RamenN=document.querySelector(".RNum")
const Water=document.querySelector(".Water")
const WaterN=document.querySelector(".WANum")
const Coffee=document.querySelector(".Coffe")
const CoffeeN=document.querySelector(".COffeNum")
const Kharcho = document.querySelector(".Kharcho")
const Gvezeli = document.querySelector(".Gvezeli")
const Pilmeni = document.querySelector(".Pilmeni")
const BTN=document.querySelector(".BTN2")
const Cake = document.querySelector(".Cake")
const CakeN = document.querySelector(".CakeNum")
const GummiBear = document.querySelector(".Gummibear")
const GummiN = document.querySelector(".GUMNum")
const Dragonfruit = document.querySelector(".Dragon")
const DragonfruitN = document.querySelector(".DRANum")
const Xalva = document.querySelector(".Xalva")
const XalvaN = document.querySelector(".XNum")
const Durian = document.querySelector(".Durian")
const DurianN = document.querySelector(".DURNum")
const Donut = document.querySelector(".Donut")
const DonutN = document.querySelector(".DOTNum")
const Milkshake = document.querySelector(".Milkshake")
const MilkshakeN = document.querySelector(".MILNum")
const Ghomi = document.querySelector(".Ghomi")
const Rachuli = document.querySelector(".Lori")
const Pizza = document.querySelector(".Pizza")
const HamB = document.querySelector(".Hamburger")
const PizzaN = document.querySelector(".PNum")
const HamBN = document.querySelector(".HAMNum")
const Shawarma = document.querySelector(".Shawarma")
const Sushi = document.querySelector(".Sushi")
const Fries = document.querySelector(".Fries")
const FriesN = document.querySelector(".FRINum")
const Choco = document.querySelector(".Choco")
const ChocoN = document.querySelector(".ChoNum")
const Hotdog = document.querySelector(".Hotdog")
const HotdogN = document.querySelector(".HotdogNum")
const Ice = document.querySelector(".Ice")
const IceN = document.querySelector(".IceNum")
const Ghuda = document.querySelector(".Ghuda")
const GhudaN = document.querySelector(".GHUNum")
const Ostri = document.querySelector(".Ostri")
const OstriN = document.querySelector(".OSTNum")
const Elarji = document.querySelector(".Elarji")
const ElarjiN = document.querySelector(".ELANum")
const Candy = document.querySelector(".C")
const CandyN = document.querySelector(".LolNum")
const Mtsvadi = document.querySelector(".Mtsvadi")
const MtsvadiN = document.querySelector(".MTSNum")
const Salad = document.querySelector(".Salad")
const SaladN = document.querySelector(".SALNum")
const NFC = document.querySelector(".NFC")
const NFCN = document.querySelector(".NFCNum")
const Churckhela = document.querySelector(".Churckhela")
const ChurckhelaN = document.querySelector(".CHUNum")
const Record1 = document.querySelector("#Record")
const ShawarmaN = document.querySelector(".SHANum")
const SushiN = document.querySelector(".SUSHINum")
const KhinkaliN = document.querySelector(".KNum")
const KhachapuriN = document.querySelector(".KANum")
const KharchoN = document.querySelector(".KHARNum")
const GvezeliN = document.querySelector(".GVENum")
const PilmeniN = document.querySelector(".PILNum")
const GhomiN = document.querySelector(".GHONum")
const RachuliN = document.querySelector(".LORINum")
const Coke = document.querySelector(".Nixsoncola")
const CokeNum = document.querySelector(".CokeNum")
const Pie = document.querySelector(".Nixsonpie")
const PieNum = document.querySelector(".NpieNum")
const Beef = document.querySelector(".Welington")
const BeefNum = document.querySelector(".BeefNum")
const DOCT = document.querySelector("title")
const body = document.querySelector("body")
const title = document.querySelector("#title")
const Logo = document.querySelector("link")
const input = document.querySelector("input")
const btn = document.querySelector(".btn")
const shop = document.querySelector(".shop")
const num = document.querySelector("#Count")
let whattodisplay = "0"
const CpsText = document.querySelector("#cps")
let Cps = 0
let X=0
let Y =0
let SentString = ""
let IsAlphaColor = false
let IsGrayscale = false
let Random = 0
let clicks = 0
let owned = "Owned"
let cost = "cost"
let url = "url"
let Height = "height"
let Width = "width"
let used = "InUse"
let upgcost = "upgcost"
let adder = 1
let GETOUT=false
let inp=document.querySelector(".Filter")
let Cheats = {
  HACKER: {
    c: 500,
    InUse: 0,
  },
  ULTIMATE: {
    c: 1000,
    InUse: 0,
  },
  CATACLYSM: {
    c: 1500, InUse: 0,
  },
  DINOSAUR: {
    c: 3000, InUse: 0,
  },
}
let prices = {
  Cps: {
    upgcost: 1000,
    Earn: 1,
  },
  Clicksbonus: {
    upgcost: 100,
    Earn: 1,
  },
  RainBow:{
    upgcost: 100000,
  },
  Bw:{
    upgcost:200000,
  }
}
const p2 = document.querySelector("#PlusC")
const img = document.querySelector(".KhinkaliMain")
const Back = document.querySelector(".Back")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
let Candystyle = 0
two.style.display = "none"
upgrade.style.display = "none"
window.onbeforeunload = function (event) {
  event.preventDefault()
}
img.addEventListener("click", () => click()
)
window.addEventListener("keyup", function (event) {
  if (event.key == " ") {
    click()
  }
})
shop.addEventListener("click", function () {
  one.style.display = "none"
  two.style.display = "inline"
  Logo.href = "Khinkali.png"
})
Back.addEventListener("click", function () {
  one.style.display = "inline"
  two.style.display = "none"
})
let skins = {
  Khinkali: {
    Owned: true,
    url: "Khinkali.png",
    cost: 0,
    height: "150px",
    width: "150px",
    var1:Khinkali,
    var2:KhinkaliN,
    Message:"Khinkali",
  },
  Khachapuri: {
    Owned: false,
    cost: 30000,
    url: "Khachapuri.png",
    height: "100px",
    width: "100px",
     var1:Khachapuri,
    var2:KhachapuriN,
    Message:"Khachapuri",
  },
  Gvezeli: {
    Owned: false,
    url: "Gvezeli.png",
    cost: 3000,
    width: "120px",
    height: "100px",
     var1:Gvezeli,
    var2:GvezeliN,
    Message:"Gvezeli",
  },
  Pilmeni: {
    Owned: false,
    url: "PILMENI.png",
    cost: 8000,
    height: "150px",
    width: "150px",
     var1:Pilmeni,
    var2:PilmeniN,
    Message:"Pilmeni",
  },
  Rachuli: {
    Owned: false,
    url: "Rachuli.png",
    cost: 80000,
    width: "250px",
    height: "120px",
     var1:Rachuli,
    var2:RachuliN,
    Message:"Lori",
  },
  Ghomi: {
    Owned: false,
    url: "Ghomi.png",
    cost: 120000,
    height: "200px",
    width: "200px",
     var1:Ghomi,
    var2:GhomiN,
    Message:"Ghomi"
  },
  Kharcho: {
    Owned: false,
    url: "kharcho.png",
    cost: 100000,
    width: "140px",
    height: "120px",
     var1:Kharcho,
    var2:KharchoN,
    Message:"Kharcho",
  },
  Pizza: {
    Owned: false,
    url: "Pizza.png",
    cost: 800000,
    height: "200px",
    width: "200px",
     var1:Pizza,
    var2:PizzaN,
    Message:"Pizza",
  },
  HamB: {
    Owned: false,
    url: "HamB.png",
    cost: 1000000,
    height: "200px",
    width: "200px",
     var1:HamB,
    var2:HamBN,
    Message:"Hamburger",
  },
  Sushi: {
    Owned: false,
    url: "Sushi.png",
    cost: 5000000,
    height: "150px",
    width: "150px",
    var1:Sushi,
    var2:SushiN,
    Message:"Sushi"
  },
  Salad: {
    Owned: false,
    url: "Salad.png",
    cost: 10000000,
    width: "180px",
    height: "180px",
     var1:Salad,
    var2:SaladN,
    Message:"Salad",
  },
  Fries: {
    Owned: false,
    url: "Fries.png",
    cost: 300000,
    height: "150px",
    width: "150px",
     var1:Fries,
    var2:FriesN,
    Message:"Fries",
  },
  NFC: {
    Owned: false,
    url: "NFC.png",
    cost: 6000000,
    width: "170px",
    height: "150px",
     var1:NFC,
    var2:NFCN,
    Message:"NFC",
  },
  Elarji: {
    Owned: false,
    url: "Elarji.png",
    cost: 200000,
    width: "150px",
    height: "100px",
     var1:Elarji,
    var2:ElarjiN,
    Message:"Elarji",
  },
  Ostri: {
    Owned: false,
    url: "Ostri.png",
    cost: 600000,
    width: "150px",
    height: "100px",
     var1:Ostri,
    var2:OstriN,
    Message:"Ostri"
  },
  Shawarma: {
    Owned: false,
    url: "Shawarma.png",
    cost: 3000000,
    width: "180px",
    height: "130px",
     var1:Shawarma,
    var2:ShawarmaN,
    Message:"Shawarma",
  },
  Ghuda: {
    Owned: false,
    url: "Cheese.png",
    cost: 2000000,
    width: "170px",
    height: "120px",
     var1:Ghuda,
    var2:GhudaN,
    Message:"Ghuda",
  },
  Churckhela: {
    Owned: false,
    url: "Churckhela.png",
    cost: 30000000,
    width: "170px",
    height: "110px",
     var1:Churckhela,
    var2:ChurckhelaN,
    Message:"Churckhela",   
  },
  Coke: {
    Owned: false,
    url: "coke.png",
    cost: 50000000,
    height: "150px",
    width: "150px",
     var1:Coke,
    var2:CokeNum,
    Message:"Coke",
  },
  Pie: {
    Owned: false,
    url: "Nixson pie.png",
    cost: 20000000,
    width: "175px",
    height: "105px",
     var1:Pie,
    var2:PieNum,
    Message:"Nixson Pie"
  },
  Shnitzel: {
    Owned: false,
    url: "Shnitzel.png",
    cost: 60000000,
    width: "150px",
    height: "100px",
     var1:Shawarma,
    var2:ShawarmaN,
    Message:"Shnitzel"
  },
  Mtsvadi: {
    Owned: false,
    url: "Mtsvadi.png",
    cost: 600000,
    width: "185px",
    height: "135px",
     var1:Mtsvadi,
    var2:MtsvadiN,
    Message:"Mtsvadi"
  },
  Hotdog: {
    Owned: false,
    url: "Hotdog.png",
    cost: 90000000,
    width: "125px",
    height: "75px",
     var1:Hotdog,
    var2:HotdogN,
    Message:"Hotdog"
  },
  IceCream: {
    Owned: false,
    url: "Icecream.png",
    cost: 40000000,
    width: "150px",
    height: "150px",
     var1:Ice,
    var2:IceN,
    Message:"IceCream"
  },
  Cake: {
    Owned: false,
    url: "CAKE.png",
    cost: 100000000,
    width: "150px",
    height: "150px",
     var1:Cake,
    var2:CakeN
,Message:"Cake"
  },
  Chocolate: {
    Owned: false,
    url: "Chocolate.png",
    cost: 70000000,
    width: "150px",
    height: "150px",
     var1:Choco,
    var2:ChocoN,
    Message:"Chocolate"
  },
  Candy: {
    Owned: false,
    url: "Candy1.png",
    cost: 700000,
    width: "130px",
    height: "80px",
     var1:Candy,
    var2:CandyN,
    Message:"Candy"
  },
  Donut: {
    Owned: false,
    url: "Donut.png",
    cost: 9000000,
    width: "120px",
    height: "120px",
     var1:Donut,
    var2:DonutN,
    Message:"Donut"
  },
  Milkshake: {
    Owned: false,
    url: "Milkshake.webp",
    cost: 5000000,
    height: "150px",
    width: "100px",
     var1:Milkshake,
    var2:MilkshakeN,
    Message:"Milkshake"
  },
  Gummibear: {
    Owned: false,
    url: "Gummibear.webp",
    cost: 2000000,
    height: "150px",
    width: "150px",
     var1:GummiBear,
    var2:GummiN,
    Message:"Gummibear"
  },
  Durian: {
    Owned: false,
    url: "Durian.png",
    cost: 100,
    height: "150px",
    width: "150px",
     var1:Durian,
    var2:DurianN,
    Message:"Durian"
  },
  Xalva: {
    Owned: false,
    url: "Xalva.png",
    cost: 3000000,
    height: "100px",
    width: "160px",
     var1:Xalva,
    var2:XalvaN,
    Message:"Xalva"
  },
  Dragonfruit: {
    Owned: false,
    url: "D.png",
    cost: 1000,
    height: "150px",
    width: "150px",
     var1:Dragonfruit,
    var2:Dragonfruit,
    Message:"Dragonfruit"
  },
    Coffee: {
    Owned: false,
    url: "Coffee.png",
    cost: 2000000,
    height: "150px",
    width: "150px",
  },
   Water: {
    Owned: false,
    url: "Water.png",
    cost: 10,
    height: "150px",
    width: "180px",
  },
  Tea:{
    Owned: false,
    url: "Tea.png",
    cost: 700000,
    width: "150px",
    height:"150px",
  },
  NMW: {
    Owned: false,
    url: "Water.png",
    cost: 10,
    height: "150px",
    width: "150px",
  },
  Cupcake:{
    Owned: false,
    url: "Cupcake.png",
    cost: 500000,
    width: "120px",
    height:"120px",
  },
    Pancake:{
    Owned: false,
    url: "Pancake.png",
    cost: 200000,
    width: "150px",
    height:"150px",
  },
      Wasajani:{
    Owned: false,
    url: "Wasajani.png",
    cost: 1000000,
    width: "150px",
    height:"150px",
  },
      Ramen:{
    Owned: false,
    url: "Ramen.png",
    cost: 800000,
    width: "150px",
    height:"150px",
  },
      Banana:{
    Owned: false,
    url: "Banana.png",
    cost: 300000000,
    width: "180px",
    height:"90px",
  },
    GoldenApple:{
    Owned: false,
    url: "Golden apple.png",
    cost: 200000000,
    width: "150px",
    height:"150px",
  },
}
upgradebtn.addEventListener("click", function () {
  one.style.display = "none"
  two.style.display = "none"
  upgrade.style.display = "inline"
  Logo.href = "Khinkali.png"
})
Rainupg.addEventListener("click",function () {
   if (clicks >= prices["RainBow"][upgcost]) {
    if(IsAlphaColor==true){
      IsAlphaColor=false
      Rainupg1.innerHTML="Mode:Off"
    }
    else{
      IsAlphaColor=true
      Rainupg1.innerHTML="Mode:On"
      if(IsGrayscale){
      BW1.innerHTML="Mode:Off"
      IsGrayscale=false
    }
    }
  }
})
BW.addEventListener("click",function () {
     if (clicks >= prices["Bw"][upgcost]) {
    if(IsGrayscale==true){
      IsGrayscale=false
      BW1.innerHTML="Mode:Off"
    }
    else{
      IsGrayscale=true
      BW1.innerHTML="Mode:On"
      if(IsAlphaColor){
        IsAlphaColor=false
      Rainupg1.innerHTML="Mode:Off"}
    }
  }
})
PNC.addEventListener("click",function() {
  if(PN){
    PN=false
    PNC.innerHTML=`Presice numbers: Off`
  }
  else{
    PN=true
    PNC.innerHTML=`Presice numbers: On`
  }
})
cliupg.addEventListener("click", function () {
  if (clicks >= prices["Clicksbonus"][upgcost]) {
        var soundEffect3 = new Audio('POWER.mp3')
  soundEffect3.play()
    prices["Clicksbonus"]["Earn"] = Number(prices["Clicksbonus"]["Earn"] * 2)
    adder += prices["Clicksbonus"]["Earn"]
    prices["Clicksbonus"][upgcost] = Number(prices["Clicksbonus"][upgcost] * 3)
    if (prices["Clicksbonus"][upgcost] > 900) {
      let formatter1 = new Intl.NumberFormat('en-US', {
        notation: 'compact',
        maximumFractionDigits: 1
      })
      cliupg1.innerHTML = "Price:" + String(formatter1.format(prices["Clicksbonus"][upgcost]))
    }
    else {
      cliupg1.innerHTML = "Price:" + String(prices["Clicksbonus"][upgcost])
    }
  }

}
)
cpsupg.addEventListener("click", function () {
  if (clicks >= prices["Cps"][upgcost]) {
        var soundEffect4 = new Audio('POWER.mp3')
  soundEffect4.play()
    Cps = prices["Cps"]["Earn"]
    prices["Cps"]["Earn"] = Number(prices["Cps"]["Earn"] * 2)
    prices["Cps"][upgcost] = Number(prices["Cps"][upgcost] * 3)
    let formatter2 = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    })
    cpsupg1.innerHTML = "Price:" + String(formatter2.format(prices["Cps"][upgcost]))


  }
})
Back2.addEventListener("click", function () {
  one.style.display = "inline"
  upgrade.style.display = "none"
})
Khachapuri.addEventListener("click", function () {
  Isowned()
  buying(KhachapuriN, "Khachapuri")
})
Pilmeni.addEventListener("click", function () {
  Isowned()
  buying(PilmeniN, "Pilmeni")
})
Gvezeli.addEventListener("click", function () {
  Isowned()
  buying(GvezeliN, "Gvezeli")
})
Rachuli.addEventListener("click", function () {
  Isowned()
  buying(RachuliN, "Rachuli")
})
Ghomi.addEventListener("click", function () {
  Isowned()
  buying(GhomiN, "Ghomi")
})
Kharcho.addEventListener("click", function () {
  Isowned()
  buying(KharchoN, "Kharcho")
})
Pizza.addEventListener("click", function () {
  Isowned()
  buying(PizzaN, "Pizza")
})
Milkshake.addEventListener("click", function () {
  Isowned()
  buying(MilkshakeN, "Milkshake")
})
HamB.addEventListener("click", function () {
  Isowned()
  buying(HamBN, "HamB")

})
Shawarma.addEventListener("click", function () {
  Isowned()
  buying(ShawarmaN, "Shawarma")
})
Sushi.addEventListener("click", function () {
  Isowned()
  buying(SushiN, "Sushi")
})
Ghuda.addEventListener("click", function () {
  Isowned()
  buying(GhudaN, "Ghuda")
})
Fries.addEventListener("click", function () {
  Isowned()
  buying(FriesN, "Fries")
})
Mtsvadi.addEventListener("click", function () {
  Isowned()
  buying(MtsvadiN, "Mtsvadi")
})
Salad.addEventListener("click", function () {
  Isowned()
  buying(SaladN, "Salad")
})
Ice.addEventListener("click", function () {
  Isowned()
  buying(IceN, "IceCream")
})
Hotdog.addEventListener("click", function () {
  Isowned()
  buying(HotdogN, "Hotdog")
})
NFC.addEventListener("click", function () {
  Isowned()
  buying(NFCN, "NFC")
})
Durian.addEventListener("click", function () {
  Isowned()
  buying(DurianN, "Durian")
})
GummiBear.addEventListener("click", function () {
  Isowned()
  buying(GummiN, "Gummibear")
})
Elarji.addEventListener("click", function () {
  Isowned()
  buying(ElarjiN, "Elarji")
})
Coke.addEventListener("click", function () {
  Isowned()
  buying(CokeNum, "Coke")
})
Pie.addEventListener("click", function () {
  Isowned()
  buying(PieNum, "Pie")
})
Beef.addEventListener("click", function () {
  Isowned()
  buying(BeefNum, "Shnitzel")
})
Ostri.addEventListener("click", function () {
  Isowned()
  buying(OstriN, "Ostri")
})
Khinkali.addEventListener("click", function () {
  Isowned()
  buying(KhinkaliN, "Khinkali")
})
Churckhela.addEventListener("click", function () {
  Isowned()
  buying(ChurckhelaN, "Churckhela")
})
Cake.addEventListener("click", function () {
  Isowned()
  buying(CakeN, "Cake")
})
Choco.addEventListener("click", function () {
  Isowned()
  buying(ChocoN, "Chocolate")
})
Candy.addEventListener("click", function () {
  Isowned()
  buying(CandyN, "Candy")
})
Donut.addEventListener("click", function () {
  Isowned()
  buying(DonutN, "Donut")
})
Xalva.addEventListener("click", function () {
  Isowned()
  buying(XalvaN, "Xalva")
})
Dragonfruit.addEventListener("click", function () {
  Isowned()
  buying(DragonfruitN, "Dragonfruit")
})
Tea.addEventListener("click", function () {
  Isowned()
  buying(TeaN, "Tea")
})
Water.addEventListener("click", function () {
  Isowned()
  buying(WaterN, "Water")
})
Coffee.addEventListener("click", function () {
  Isowned()
  buying(CoffeeN, "Coffee")
})
Cup.addEventListener("click", function () {
  Isowned()
  buying(CupN, "Cupcake")
})
Pan.addEventListener("click", function () {
  Isowned()
  buying(PanN, "Pancake")
})
Ramen.addEventListener("click", function () {
  Isowned()
  buying(RamenN, "Ramen")
})
Wasajani.addEventListener("click", function () {
  Isowned()
  buying(WasajaniN, "Wasajani")
})
Banana.addEventListener("click", function () {
  Isowned()
  buying(BananaN, "Banana")
})
Golden.addEventListener("click", function () {
  Isowned()
  buying(GN, "GoldenApple")
})
 function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}
function buying(Label, Objectname) {
  if (skins[Objectname]["Owned"]) {
    Label.innerHTML = Objectname
    img.src = skins[Objectname][url]
    img.style.height = skins[Objectname][Height]
    img.style.width = skins[Objectname][Width]
    Logo.href = skins[Objectname][url]
    DOCT.innerHTML = Objectname + " " + "clicker"
    title.innerHTML = Objectname + " " + "clicker"
    p2.innerHTML = "25px"
  }
}

function click() {
     soundEffect = new Audio('TechoBOOM.mp3')
  soundEffect.play()
 if(isMobile()){
  img.style.cursor="default"
 }
 
    if (p2.classList != "plus") {
    p2.classList.add("plus")
  }
  setTimeout(function () {
    p2.classList.remove("plus")
  }, 300)
  


    img.classList.remove("Hover2")
  if (clicks > 999 && !PN) {
    let z = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    })
    whattodisplay = String(z.format(clicks))
   p2.innerHTML="+"+String(z.format(adder))
  }
  else {
    whattodisplay = String(clicks)
    p2.innerHTML="+" + String(adder)
  }
  if (IsAlphaColor) {
    Changed=false
    Random = Math.floor(Math.random() * 360)
    img.style.filter = `hue-rotate(${Random}deg) drop-shadow(4px 0 0 black) drop-shadow(0 4px 0 black)  drop-shadow(-4px 0 0 black)  drop-shadow(0 -4px 0 black)`
  }
  else if (IsGrayscale) {
    Random = 0
    Changed=false
    img.style.filter = "grayscale(100%)"
  }
  else if(!IsGrayscale && !IsAlphaColor && !Changed) {
    img.style.filter = "none"
    Changed=true       
  }
  if(Changed){
    img.style.filter="drop-shadow(4px 0 0 black) drop-shadow(0 4px 0 black)  drop-shadow(-4px 0 0 black)  drop-shadow(0 -4px 0 black)"     
  }

  //Clicks
  clicks += adder

  if (adder > 999) {
    let formatter3 = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    })
  }
  num.innerHTML = `${whattodisplay}`
  //Animation
  if (img.classList != "p") {
    img.classList.add("p")
  }
  setTimeout(function () { img.classList.remove("p") }, 100)

  Isowned()
}
function Isowned() {
  for (i in skins) {
    if (clicks >= skins[i][cost] && skins[i][owned] == false) {
      skins[i][owned] = true
    }
    else if(skins["GoldenApple"][owned] == false && clicks>=skins["GoldenApple"][cost]){
      Cps=Cps*2
    }
      else if(skins["Banana"][owned] == false && clicks>=skins["GoldenApple"][cost]){
      Cps=Cps*3
    }
    else if (skins["Candy"][owned] == true) {
      Candystyle = Math.floor(Math.random() * 4)
      if (!Candystyle == 0 || !Candystyle == 4) {
        skins["Candy"][url] = `Candy${Candystyle}.png`
      }
      else {
        skins["Candy"][url] = `Candy1.png`
      }
    }
  }




  //Cheats 
}
function Cheat() {
  let string = input.value.replaceAll(" ", "").toUpperCase()
  Addcheats(string)
}
function Addcheats(inputvalue) {

  let Str = inputvalue
  for (i in Cheats) {
    if (String(i) == Str) {
      if (Cheats[i][used] == 0) {
        Cheats[i][used] = 1
        clicks += Cheats[i]["c"]
            var soundEffect2 = new Audio('Wow.mp3')
  soundEffect2.play()
        input.value = ""
      }
    }
  }
}
let z1=0
//CPS (It runs every sec.)
const addcps = setInterval(function () {
  CpsText.innerHTML = `CPS:${Cps}`
  num.innerHTML = `${whattodisplay}`
  clicks += Cps
  //Number formatting !!!
  if (clicks > 999 && !PN) {
    z1 = new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    })
     whattodisplay = String(z1.format(clicks))
 }
  else{
     whattodisplay = String(clicks)}
}, 1000)
//code by N.K (N1XS0N) 2026 
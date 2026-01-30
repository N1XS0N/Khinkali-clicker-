console.log("Cheats:HACKER,ULTIMATE,CATACLYSM")
const Khinkali = document.querySelector(".Khinkali")
const Khachapuri = document.querySelector(".Khachapuri")
const Kharcho = document.querySelector(".Kharcho")
const Gvezeli = document.querySelector(".Gvezeli")
const Pilmeni = document.querySelector(".Pilmeni")
const Khashlama = document.querySelector(".Khashlama")
const KhashlamaN = document.querySelector(".KhasNum")
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
const CpsText = document.querySelector("#cps")
let Cps = 0
let SentString = ""
let IsAlphaColor = false
let Random = 0
let clicks = 0
let clicks1 = 2
let owned = "Owned"
let cost = "cost"
let url = "url"
let Height = "height"
let Width = "width"
let used = "InUse"
let Cheats = {
  HACKER: {
    c: 500,
    c1: 100,
    InUse: 0,
  },
  ULTIMATE: {
    c: 1000,
    c1: 2000,
    InUse: 0,
  },
  CATACLYSM: {
    c: 1500,
    c1: 3000, InUse: 0,
  },
    MASTER: {
    c:  1000000000000,
    c1: 2000000000000, InUse: 0,
  },
  
}
const img = document.querySelector("img")
const p2 = document.querySelector("#PlusC")
const Back = document.querySelector(".Back")
const one = document.querySelector("#one")
const two = document.querySelector("#two")
two.style.display = "none"
let Prescore = 0
window.onbeforeunload = function (event) {
  request = window.indexedDB.open("RecordHolder", 1);
  request.onupgradeneeded = e => {
    let Db = e.target.result;
    Db.createObjectStore("Record", { keyPath: "id" })
  }
  request.onsuccess = e => {
    Db = e.target.result;
    const tx = Db.transaction("Record", "readwrite");
    const store = tx.objectStore("Record");
    const tx0 = Db.transaction("Record", "readonly");
    const store0 = tx.objectStore("Record");
    const storex = store0.get(1)
    storex.onsuccess = () => {
      res = storex.result.text
      if (clicks >= res) {
        store.put({ id: 1, text: clicks })
      }
      else {
        store.put({ id: 1, text: res })
      }
    }
  }
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
  DOCT.innerHTML = "Khinkali store"
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
    Message: "Khinkali",
    height: "150px",
    width: "150px",
  },
  Khachapuri: {
    Owned: false,
    cost: 3000000,
    url: "Khachapuri.png",
    Message: "Khachapuri",
    height: "100px",
    width: "100px",
  },
  Gvezeli: {
    Owned: false,
    url: "Gvezeli.png",
    cost: 300000,
    Message: "Gvezeli",
    width: "120px",
    height: "100px",
  },
  Pilmeni: {
    Owned: false,
    url: "PILMENI.png",
    cost: 800000,
    Message: "Pilemeni",
    height: "150px",
    width: "150px",
  },
  Rachuli: {
    Owned: false,
    url: "Rachuli.png",
    cost: 8000000,
    Message: "Lori",
    width: "250px",
    height: "120px",
  },
  Ghomi: {
    Owned: false,
    url: "Ghomi.png",
    cost: 12000000,
    Message: "Ghomi",
    height: "200px",
    width: "200px",
  },
  Kharcho: {
    Owned: false,
    url: "kharcho.png",
    cost: 10000000,
    Message: "Kharcho",
    width: "140px",
    height: "120px",
  },
  Pizza: {
    Owned: false,
    url: "Pizza.png",
    cost: 8000000000,
    Message: "Pizza",
    height: "200px",
    width: "200px",
  },
  HamB: {
    Owned: false,
    url: "HamB.png",
    cost: 10000000,
    Message: "HamB",
    height: "200px",
    width: "200px",
  },
  Sushi: {
    Owned: false,
    url: "Sushi.png",
    cost: 500000000,
    Message: "Sushi",
    height: "150px",
    width: "150px",
  },
  Salad: {
    Owned: false,
    url: "Salad.png",
    cost: 1000000000,
    Message: "Salad",
    width: "180px",
    height: "180px",
  },
  Fries: {
    Owned: false,
    url: "Fries.png",
    cost: 30000000,
    Message: "Fries",
    height: "150px",
    width: "150px",
  },
  NFC: {
    Owned: false,
    url: "NFC.png",
    cost: 600000000,
    Message: "NFC",
    width: "170px",
    height: "150px",
  },
  Elarji: {
    Owned: false,
    url: "Elarji.png",
    cost: 200000000,
    Message: "Elarji",
    width: "150px",
    height: "100px",
  },
  Ostri: {
    Owned: false,
    url: "Ostri.png",
    cost: 60000000,
    Message: "Ostri",
    width: "150px",
    height: "100px",

  },
  Shawarma: {
    Owned: false,
    url: "Shawarma.png",
    cost: 300000000,
    Message: "Shawarma",
    width: "125px",
    height: "60px",
  },
  Ghuda: {
    Owned: false,
    url: "Cheese.png",
    cost: 200000000,
    Message: "Ghuda",
    width: "200px",
    height: "200px",
  },
  Churckhela: {
    Owned: false,
    url: "Churckhela.png",
    cost: 3000000000,
    Message: "Churckhela",
    width: "210px",
    height: "150px",
  },
  Coke: {
    Owned: false,
    url: "coke.png",
    cost: 5000000000,
    Message: "Coke",
    height: "150px",
    width: "150px",
  },
  Pie: {
    Owned: false,
    url: "Nixson pie.png",
    cost: 2000000000,
    Message: "Pie",
    width: "230px",
    height: "150px",

  },
  Wellington: {
    Owned: false,
    url: "Beef.png",
    cost: 7000000000,
    Message: "Beef",
    height: "150px",
    width: "150px",
  },
  Mtsvadi: {
    Owned: false,
    url: "Mtsvadi.png",
    cost: 60000000,
    Message: "Mtsvadi",
    width: "185px",
    height: "135px",
  },
  Hotdog: {
    Owned: false,
    url: "Hotdog.png",
    cost: 900000000,
    Message: "Hotdog",
    width: "125x",
    height: "75px",
  },
  IceCream: {
    Owned: false,
    url: "icecream.png",
    cost: 400000000,
    Message: "Ice",
    width: "150x",
    height: "150px",
  },
  Khashlama:{
      Owned: false,
    url: "Khaslama.png",
    cost: 4000000,
    Message: "Khashlama",
    width: "170x",
    height: "100px"},
}
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
  buying(BeefNum, "Welington")
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
Khashlama.addEventListener("click",function(){
   Isowned()
  buying(KhashlamaN, "Khashlama")
})
function buying(Label, Objectname) {
  if (skins[Objectname][owned]) {
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
ShowRec()
if (Prescore == 0 || Prescore == null || Prescore == undefined) {
  Record1.innerHTML = `Previos score:0`
}
else {
  Record1.innerHTML = `Previos record:${Prescore}`
}
function click() {
  if (IsAlphaColor) {
    Random = Math.floor(Math.random() * 360)
    img.style.filter = `hue-rotate(${Random}deg)`
  }
  else {
    Random = 0
    img.style.filter = `hue-rotate(${Random}deg)`
  }
  //Clicks
  clicks += 1
  if (clicks >= clicks1 / 2) {
    clicks += clicks1 / 2
    clicks1 += 2
    num.innerHTML = `${clicks}`
    p2.innerHTML = `+${clicks1 / 2}`
    if (clicks > 999) {
      Cps = Math.round(clicks / 1000)
    }
  }
  //Animation
  if (img.classList != "p") {
    img.classList.add("p")
  }
  setTimeout(function () { img.classList.remove("p") }, 100)
  if (p2.classList != "plus") {
    p2.classList.add("plus")
  }
  setTimeout(function () {
    p2.classList.remove('plus')
  }, 300)
  Isowned()
}
function Isowned() {
  for (i in skins) {
    if (clicks >= skins[i][cost] && skins[i][owned] == false) {
      skins[i][owned] = true
    }
  }




  //Cheats 
}
function Cheat() {
  let string = input.value.trim().toUpperCase()
  switch (string) {
    case "ALPHACOLOR":
      if (IsAlphaColor) {
        IsAlphaColor = false
      }
      else {
        IsAlphaColor = true
      }
      input.value = ""
      break;
    case "ZERO":
      clicks = 0
      clicks1 = 2
      input.value = ""
      break;
    default:
      Addcheats(string)
      break;
  }
}
function Addcheats(inputvalue) {
  let Str = inputvalue
  for (i in Cheats) {
    if (String(i) == Str) {
      if (Cheats[i][used] == 0) {
        Cheats[i][used] = 1
        clicks += Cheats[i]["c"]
        clicks1 += Cheats[i]["c1"]
        input.value = ""
      }
    }
  }
}
const addcps = setInterval(() => {
  clicks += Cps
  clicks1 += Cps * 2
  CpsText.innerHTML = `CPS:${Cps}`
  num.innerHTML = `${clicks}`

}, 1000)
function ShowRec() {
  let Db1
  const request1 = window.indexedDB.open("RecordHolder", 1)
  request1.onupgradeneeded = c => {
    Db1 = c.target.result;
    Db1.createObjectStore("Record", { keyPath: "id" })

  }
  request1.onsuccess = c => {
    Db1 = c.target.result;
    const tx1 = Db1.transaction("Record", "readonly");
    const store1 = tx1.objectStore("Record");
    tx1.oncomplete = () => {
      const tx4 = Db1.transaction("Record", "readonly");
      const store3 = tx4.objectStore("Record");
      const getreq2 = store3.get(1);
      getreq2.onsuccess = () => {
        Prescore = getreq2.result.text
      }
    }
  }
}
//code by N.K (N1XS0N) 2026 
const optionsBtns = document.querySelectorAll('.type-package-option-btn')
const basicBtn = document.getElementById('basicBtn')
const frontBtn = document.getElementById('frontBtn')
const fullFrontBtn = document.getElementById('fullFrontBtn')
const fenixCompleteBtn = document.getElementById('fenixCompleteBtn')

const packageName = document.querySelector('.package-name')
const packageList = document.querySelector('.foil-range-list')
const packageShortInfo = document.querySelector('.type-package-short-info')
const photo = document.getElementById('type-package-img')
const packagePrice = document.getElementById('package-price')

const packageBasic = {
    name: "Pakiet BASIC",
    shortInfo: "Najbardziej podstawowy pakiet chroniący przednie lampy oraz zderzak a także tworzywo słupków.",
    list: ["Lampy przednie","Zderzak przedni","Słupki piano Black"],
    image: "basic.jpeg",
    price: "od 1 000zł Netto"
}

const packageFront = {
    name: "Pakiet FRONT",
    shortInfo: "Częściowa ochrona maski oraz błotnika wraz z pełnym zabezpieczeniem zderzaka przedneigo oraz lamp. ",
    list: ["Lampy przednie","Zderzak przedni","Wnęki pod klamkami","Półka bagażnika","Lusterka","Maska w całości","Błotnik w całości","Słupki piano Black"],
    image: "front.jpeg",
    price: "od 2 900zł Netto"
}

const packageFullFront = {
    name: "Pakiet FULL FRONT",
    shortInfo: "Ten rodzaj pakietu zabezpiecza najbardziej narażone na uszkodzenia elementy samochodu.",
    list: ["Lampy przednie","Zderzak przedni","Wnęki pod klamkami","Półka bagażnika","Lusterka","Maska w całości","Błotnik w całości","Fragment dachu","Słupek A","Słupki piano Black"],
    image: "full-front.jpeg",
    price: "od 4 000zł Netto"
}

const packageFenixComplete = {
    name: "Pakiet FENIX COMPLETE",
    shortInfo: "W tym pakiecie otrzymujesz zabezpieczenie wszystkich elementów lakierowanych samochodu oraz reflektorów zewnętrznych.",
    list: ["Lampy przednie","Zderzak przedni","Lusterka","Maska w całości","Błotnik w całości","Cały dach","Słupek A, B, C","Komplet drzwi","Progi","Bagażnik","Tylny zderzak","El. Dekoracyjne"],
    image: "fenix-complete.jpeg",
    price: "od 15 000zł netto"
}

const resetActiveBtn = () => {
    optionsBtns.forEach(el => el.classList.remove('active'))
}

const createList = (list,listValue) => {
    list.textContent = ""

    listValue.forEach(el => {
        const li = document.createElement('li')
        li.textContent = el

        list.append(li)
    });
}

const render = (package) => {
    packageName.textContent = package.name
    packageShortInfo.textContent = package.shortInfo

    photo.setAttribute('src',`../images/packages foils/${package.image}`)
    photo.setAttribute('alt',`Fenix ${package.image}`)

    createList(packageList,package.list)

    packagePrice.textContent = package.price
}

render(packageBasic)

basicBtn.addEventListener('click', () => {
    resetActiveBtn()
    basicBtn.classList.add('active')
    render(packageBasic)
})
frontBtn.addEventListener('click', () => {
    resetActiveBtn()
    frontBtn.classList.add('active')
    render(packageFront)
})
fullFrontBtn.addEventListener('click', () => {
    resetActiveBtn()
    fullFrontBtn.classList.add('active')
    render(packageFullFront)
})
fenixCompleteBtn.addEventListener('click', () => {
    resetActiveBtn()
    fenixCompleteBtn.classList.add('active')
    render(packageFenixComplete)
})
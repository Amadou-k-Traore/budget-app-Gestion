//jout dans le localStorage et recuperation de Depense

let initialeDepense = getDEPENSE() || []
function setDEPENSE(Depense) {
        localStorage.setItem("Depense", JSON.stringify(Depense))
}
function getDEPENSE() {
      return  JSON.parse(localStorage.getItem("Depense"))
}

setDEPENSE(initialeDepense)
let Depense = getDEPENSE()


// Ajout dans localStorage et recupere de Revenu
let initialeRevenu = getREVENU() || []
function setREVENU(Revenu) {
        localStorage.setItem("Revenu", JSON.stringify(Revenu) )
}
function getREVENU() {
      return  JSON.parse(localStorage.getItem("Revenu"))
}
setREVENU(initialeRevenu)
let Revenu = getREVENU()

//Remplir le tableau Revenu
const table = document.querySelector(".tableau")
const tbbody = document.createElement("tbody")
function makeRevu(){
        for (let index = 0; index <  Revenu.length; index++) {
                const row = document.createElement("tr")
                //bouton de supression Revenu
                let buttoncelle = document.createElement("td") 
                let deletebutton = document.createElement("button")
                let buttonText = document.createTextNode("Suprimer")
                deletebutton.setAttribute("class", "del-button")
                deletebutton.appendChild(buttonText)
                for (let element = 0; element < Object.keys(Revenu[index]).length; element++) {
                        let cell = document.createElement("td")
                        let celletext = document.createTextNode(
                                Object.values(Revenu[index])[element]
                        )
                        deletebutton.setAttribute('VerseRevenu', Revenu[index].montantREV)
                        buttoncelle.appendChild(deletebutton)
                        row.appendChild(cell)
                        cell.appendChild(celletext)
                        row.setAttribute('id', Revenu[index].montantREV)
                        row.appendChild(buttoncelle)
                }
                tbbody.appendChild(row)
        }
        table.appendChild(tbbody)
        document.body.appendChild(table)
}
makeRevu()

let deletebutton = document.querySelectorAll(".del-button")
deletebutton.forEach(function (button) {
        button.addEventListener('click', function () {
                const montantREV = this.getAttribute("VerseRevenu");
                let row = document.getElementById(montantREV)
                row.parentNode.removeChild(row)
                setREVENU(Revenu)
        })
})
//Ajout REVENU
let boutonn = document.getElementById("boutonn")
boutonn.onclick = function (event) {
        event.preventDefault()
        const descriptionREV = document.getElementById("descriptionrev").value
        const montantREV = document.getElementById("montantrev").value
        if (!descriptionREV || !montantREV) {
                alert("Veillez remplir toutes les champs")
                return                
        }
        const newRevenu = { descriptionREV, montantREV }
        Revenu.push(newRevenu)
        setREVENU(Revenu)
        let row = document.createElement("tr")

        let cell0 = row.insertCell(0)
        let cell0Text = document.createTextNode(descriptionREV)
        row.appendChild(cell0)
        cell0.appendChild(cell0Text)

        let cell1 = row.insertCell(1)
        let cell1Text = document.createTextNode(montantREV)
        row.appendChild(cell1)
        cell1.appendChild(cell1Text)

        //bouton de supression Revenu
        
        let buttoncelle = document.createElement("td") 
        let deletebutton = document.createElement("button")
        let buttonText = document.createTextNode("Suprimer")
        deletebutton.setAttribute("VerseRevenu", montantREV)
        deletebutton.setAttribute("class", "del-button")
        deletebutton.appendChild(buttonText)
        buttoncelle.appendChild(deletebutton)
        row.appendChild(buttoncelle)
        
        deletebutton.addEventListener('click', function () {
                const montantREV = this.getAttribute("VerseRevenu");

                let row = document.getElementById(montantREV)
                row.parentNode.removeChild(row)
                setREVENU(Revenu)       
        })
        row.setAttribute('id', montantREV)
        tbbody.appendChild(row)
        table.appendChild(tbbody)
        document.body.appendChild(table)

        document.getElementById("descriptionrev").value = ""
        document.getElementById("montantrev").value = ""        
}


//Remplir tableau pour Depense
const Table = document.getElementById("tableDepense")
const tblbody = document.createElement("tbody")
function makeDepense() {
        for (let index = 0; index < Depense.length; index++) {
                const row = document.createElement("tr")
                //Button de supression

                let CELLEbutton = document.createElement("td")
                let DELETEbutton = document.createElement("button")
                let ButtonText = document.createTextNode("Supprimer")
                DELETEbutton.setAttribute("class", "Sup-button")
                DELETEbutton.appendChild(ButtonText)

                for (let Element = 0; Element < Object.keys(Depense[index]).length; Element++) {
                        let CEll = document.createElement("td")
                        let cellDText = document.createTextNode(
                                Object.values(Depense[index])[Element]
                        )
                        DELETEbutton.setAttribute('VerseDepense', Depense[index].montantDEP)
                        CELLEbutton.appendChild(DELETEbutton)
                        row.appendChild(CEll)
                        CEll.appendChild(cellDText)
                        row.setAttribute('id', Depense[index].montantDEP)
                        row.appendChild(CELLEbutton)
                }
                tblbody.appendChild(row)
        }
        Table.appendChild(tblbody)
        document.body.appendChild(Table)
}
makeDepense()

let DELETEbutton = document.querySelectorAll(".Sup-button")
DELETEbutton.forEach(function (button) {
        button.addEventListener('click', function () {
                const montantDEP = this.getAttribute("VerseDepense");
                let row = document.getElementById(montantDEP)
                row.parentNode.removeChild(row)
                setDEPENSE(Depense)
        })
})


//Ajout Depense
let bouton= document.getElementById("bouton")
bouton.onclick = function (event){
        event.preventDefault()
        const descriptionDEP = document.getElementById("descriptionDEP").value
        const montantDEP = document.getElementById("montantDEP").value
        if (!descriptionDEP  || !montantDEP) {
                alert("Veillez remplir toutes les champs")
                return        
        }
        const newDepense = {descriptionDEP, montantDEP  }
        Depense.push(newDepense)
        setDEPENSE(Depense)
        let row = document.createElement("tr")

        let cell2 = row.insertCell(0)
        let cell2Text = document.createTextNode(descriptionDEP)
        row.appendChild(cell2)
        cell2.appendChild(cell2Text)

        let cell3 = row.insertCell(1)
        let cell3Text = document.createTextNode(montantDEP)
        row.appendChild(cell3)
        cell3.appendChild(cell3Text)

        let CELLEbutton = document.createElement("td")
        let DELETEbutton = document.createElement("button")
        let ButtonText = document.createTextNode("Supprimer")
        DELETEbutton.setAttribute("VerseDepense", montantDEP)
        DELETEbutton.setAttribute("class", "Sup-button")
        DELETEbutton.appendChild(ButtonText)
        CELLEbutton.appendChild(DELETEbutton)
        row.appendChild(CELLEbutton)

        DELETEbutton.addEventListener('click', function () {
                const montantDEP = this.getAttribute("VerseDepense");
                let row = document.getElementById(montantDEP)
                row.parentNode.removeChild(row)
                setDEPENSE(Depense)                
        })

        row.setAttribute('id', montantDEP)
        tblbody.appendChild(row)
        Table.appendChild(tblbody)
        document.body.appendChild(Table)

        document.getElementById("descriptionDEP").value = ""
        document.getElementById("montantDEP").value=""
}


let modaledepense = document.getElementById("formulairedepense");
let modalerevenu = document.getElementById("formulairevenu");

ajoutedepense.onclick = function(){
        modaledepense.style.display = "block"
        
}
ajoutrevenu.onclick = function(){
        modalerevenu.style.display="block"
}

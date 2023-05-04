//jout dans le localStorage et recuperation de Depense
function setDEPENSE() {
        localStorage.setItem("Depense", JSON.stringify(Depense) )
}
function getDEPENSE() {
      return  JSON.parse(localStorage.getItem(Depense))
}
//Remplir le tableau Revenu

let Revenu = []
const table = document.querySelector(".tableau")
const tbbody = document.createElement("tbody")
function makeRevu(){
        for (let index = 0; index <  Revenu.length; index++) {
                const row = document.createElement("tr")
                for (let element = 0; element < Object.keys(Revenu[index]).length; element++) {
                        let cell = document.createElement("td")
                        let celletext = document.createTextNode(
                                Object.values(Revenu[index])[element]
                        )
                        row.appendChild(cell)
                        cell.appendChild(celletext)
                        row.appendChild(cell)
                        row.setAttribute('id', Revenu[index].montantREV)
                }
                tbbody.appendChild(row)
        }
        table.appendChild(tbbody)
        document.body.appendChild(table)
}
makeRevu()

// Ajout REVENU


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
        let row = document.createElement("tr")

        let cell0 = row.insertCell(0)
        let cell0Text = document.createTextNode(descriptionREV)
        row.appendChild(cell0)
        cell0.appendChild(cell0Text)


        let cell1 = row.insertCell(1)
        let cell1Text = document.createTextNode(montantREV)
        row.appendChild(cell1)
        cell1.appendChild(cell1Text)

        row.setAttribute('id', montantREV)
        tbbody.appendChild(row)
        table.appendChild(tbbody)
        document.body.appendChild(table)
}


//Remplir tableau pour Depense
let Depense= []
const Table = document.getElementById("tableDepense")
const tblbody = document.createElement("tbody")
function makeDepense() {
        for (let index = 0; index < Depense.length; index++) {
                const row = document.createElement("tr")
             
                for (let Element = 0; Element < Object.keys(Depense[index]).length; Element++) {
                        let CEll = document.createElement("td")
                        let cellDText = document.createTextNode(
                                Object.values(Depense[index])[Element]
                        )
                        row.appendChild(CEll)
                        CEll.appendChild(cellDText)
                        row.appendChild(CEll)
                        row.setAttribute('id', Depense[index].montantDEP)
                }
                tblbody.appendChild(row)
        }
        Table.appendChild(tblbody)
        document.body.appendChild(Table)
}
makeDepense()


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
        let row = document.createElement("tr")

        let cell2 = row.insertCell(0)
        let cell2Text = document.createTextNode(descriptionDEP)
        row.appendChild(cell2)
        cell2.appendChild(cell2Text)

        let cell3 = row.insertCell(1)
        let cell3Text = document.createTextNode(montantDEP)
        row.appendChild(cell3)
        cell3.appendChild(cell3Text)

        row.setAttribute('id', montantDEP)
        tblbody.appendChild(row)
        Table.appendChild(tblbody)
        document.body.appendChild(Table)
}





let modaledepense = document.getElementById("formulairedepense");
let modalerevenu = document.getElementById("formulairevenu");

ajoutedepense.onclick = function(){
         modaledepense.style.display="block"
}
ajoutrevenu.onclick = function(){
        modalerevenu.style.display="block"
}

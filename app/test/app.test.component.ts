import { Component } from "@angular/core"
import { DataService } from "../services/app.service.data"

@Component({
    moduleId: module.id,
    selector: "my-test",
    templateUrl: "app.test.html",
})

export class TestComponent {

    dataService : DataService = null

    medecin: any
    telephone: any

    lesMedecins : any

    showAllMedecin: boolean = true



    constructor(dataService: DataService) {
        this.dataService = dataService

        this.chartgeToutrLesMedecins()
    }

    /**
     * Charge tout les médecins depuis le service REST
     */
    chartgeToutrLesMedecins() {
        this.dataService.chargerMedecins("").subscribe((data) => {
            this.lesMedecins = data
        }, (error) => {
            console.error(error)
        })
    }

    /**
     * Affiche les informations sur un médecin
     * @param medecin
     */
    editMedecin(medecin :any) {

        console.log("EDITING ...", medecin)

        this.medecin = medecin
        this.telephone = medecin.tel
        this.showAllMedecin = false

    }

    /**
     * Met à jour les données du médecin
     */
    updateMedecin() {

        console.log("UPDATING...")

        this.dataService.updateMedecinTelephone(this.medecin.id, this.telephone).subscribe((data) => {
            console.log(data)

            this.chartgeToutrLesMedecins()
            this.showAllMedecin = true
        }, (error) => {
            console.log(error)
        })

    }

}

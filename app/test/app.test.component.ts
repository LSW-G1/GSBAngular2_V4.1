import { Component } from "@angular/core"
import { DataService } from "../services/app.service.data"

@Component({
    moduleId: module.id,
    selector: "my-test",
    templateUrl: "app.test.html",
})

export class TestComponent {

    dataService : DataService = null
    lesMedecins : any



    constructor(dataService: DataService) {
        this.dataService = dataService

        this.chartgeToutrLesMedecins()
    }

    chartgeToutrLesMedecins() {
        this.dataService.chargerMedecins("").subscribe((data) => {
            this.lesMedecins = data
        }, (error) => {
            console.error(error)
        })
    }

}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

//  switchMap ->este te permite recibir un observable y devolver otro observable distintinto
// tap es un operador que lanza un efecto secundario
import { switchMap, tap } from "rxjs/operators";
import { Country } from "../../interfaces/pais.interface";

import { PaisService } from "../../services/pais.service";

@Component({
  selector: "app-ver-pais",
  templateUrl: "./ver-pais.component.html",
  styles: [],
})
export class VerPaisComponent implements OnInit {
  pais!: Country; // ! -> quiere decir que pais puede ser nulo pero tratalo como si tubiera datos
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisPorAlpha(id)),
        tap(console.log)
      )
      .subscribe((pais) => (this.pais = pais[0]));
  }
}

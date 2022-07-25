import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PraiasComponent } from "./components/praias/praias.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";

const routes: Routes = [
    {
        path: '',
        component: SidenavComponent,
        children: [
            {
                path: 'praias',
                component: PraiasComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class LoggedRoutingModule {}
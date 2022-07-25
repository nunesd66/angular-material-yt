import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoggedModule } from "./logged/logged.module";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'logged',
    },
    {
        path: 'logged',
        loadChildren: () => import('./logged/logged.module').then(m => m.LoggedModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AppRoutingModule {}
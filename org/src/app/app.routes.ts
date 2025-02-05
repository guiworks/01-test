import {Route} from '@angular/router';
import {UserSearchComponent} from "./features/test/containers/user-search.component";

export const appRoutes: Route[] = [
    {
        component: UserSearchComponent,
        path: 'test'
    }
];
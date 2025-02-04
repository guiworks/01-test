import {Route} from '@angular/router';
import {TestComponent} from "./features/test/containers/test.component";

export const appRoutes: Route[] = [
    {
        component: TestComponent,
        path: 'test'
    }
];
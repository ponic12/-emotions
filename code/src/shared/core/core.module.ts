import { NgModule, ErrorHandler } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@NgModule({
    imports: [
        AngularFireAuthModule,
        AngularFireAuthModule
    ],
    providers: [AuthService]
})
export class CoreModule { }

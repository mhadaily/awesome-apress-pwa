import { Injectable } from "@angular/core";
import { Router, CanLoad } from "@angular/router";
import { AuthService } from "../core/auth.service";
import { Observable, of } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private auth: AuthService, private router: Router) {}

  canLoad(): Observable<boolean> {
    console.log(this.auth.authenticated);
    if (!this.auth.authenticated) {
      this.router.navigate(["/user"]);
      return of(false);
    }
    return of(true);
  }
}

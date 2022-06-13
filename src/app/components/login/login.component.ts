import { Component, OnInit } from '@angular/core';
export class User{
  username: String | undefined
  password: String | undefined

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  user: User = new User()

  loginsubmit(){
    console.log(this.user)
  }

  // loginsubmit() {



  //   this.userService.getUserByUsernameAndPassword(this.user.username, this.user.password).subscribe((data:any) => {
  //     console.log(data)

  //     if (data == null) {

  //       this.snack.open("Bad credentials", "ok", { duration: 2000 })
  //     }
  //     else {

        

  //       localStorage.setItem('userId',data.userId);
        
  //       console.log(data.userId)
  //       const requestBody = { userName: this.user.username, password: this.user.password }
  //       this.authService.generateToken(requestBody).subscribe((data) => {
  //         const parsedData = JSON.parse(data)
  //         this.cookies.set('jwt_token', parsedData.JWT, { expires: 30 })
  //         console.log(parsedData)
  //         this.snack.open("Success", "ok", { duration: 1000 })

  //         this.router.navigate(["land"]);
  //       })



  //     }

  //   }, (error) => {
  //     console.log(error);

  //   });

}

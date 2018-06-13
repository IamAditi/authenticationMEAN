import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  log(data){
    console.log(data);    
  }
  formData = {
    zxc: [],
    zxcStatus: false,
    qwe: ''
  }

  setCkbxValue(value, field, status){
    if(status)
      this.formData[field].push(value);
    else{
      var loc = this.formData[field].indexOf(value);
      if(loc > -1)
        this.formData[field].splice(loc, 1);
    }
    var  statusField = field + 'Status';
    this.formData[statusField] = true;
  }

  FormSubmit(data){
    data.zxc = this.formData.zxc;
    console.log(data);    
  }

}

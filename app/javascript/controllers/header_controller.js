import { Controller } from "@hotwired/stimulus"
import  { enter, leave, toggle } from 'el-transition'

// Connects to data-controller="header"
export default class extends Controller {

  static targets = [ 'dropdown', 'openUserMenu']

  connect() {
    console.log("enter: ", enter)
    this.openUserMenuTarget.addEventListener("click", (e)=>  {
      this.toggle(this.dropdownTarget)
    })
  }
    toggle(element) {
        toggle(element);
    }

}



 class Dropdown{
    constructor(element){
       this.element = element;
       this.trigger = element.querySelector(".dropdown-menu__trigger");
       this.menu = element.querySelector(".dropdown-menu__content");
       this.isOpen = false;

       this.init()
    }

    init(){
         this.trigger.addEventListener("click", (e)=>{
           e.stopPropagation();
           this.toggle();
         })
    }

    show(){
      this.menu.classList.add("visible");
      this.isOpen = true ;
    }

    hide(){

        this.menu.classList.remove("visible");
        this.isOpen = false;
    }

    toggle(){
        if(this.isOpen) {
            this.hide()
        } else {
             // Close all other dropdowns first
             DropDownManager.closeAll()
            this.show()
        }
    }

    destroy(){
        this.element = null;
        this.menu =null;
        this.isOpen = null;
    }

}



export const DropDownManager = (()=>{
   let dropdowns = [];
     return{
        init(){
           const dropdownElements = document.querySelectorAll(".dropdown-menu")
           dropdownElements.forEach(element=>{
            const dropdown = new Dropdown(element)
            console.log(dropdown,"ve")
           });

           document.addEventListener("click", ()=>{
            this.closeAll();
           })
        },

        closeAll(){
            dropdowns.forEach(dropdown=>{
                dropdown.hide();
            })
        },

        add(element){
            const dropdown = new Dropdown(element);
            dropdowns.push(dropdown);
            return dropdown;
        },

        destroy(){
            dropdowns.forEach(dropdown=> dropdown.destroy());
            dropdowns = []
        }

     }
})()
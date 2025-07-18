import meal1Img from "./asset/meal-1.jpg";
import meal2Img from "./asset/meal-2.jpg";
export const menu = () =>{
    return `
        <div class="container grid grid--3-cols">
               <div class="meal">
                   <img 
                   class="meal-img"
                   src=${meal1Img} 
                   alt="Japanese Gyozas">
                   <div class="meal-content">
                       <div class="meal-tag">
                           <span class="tag tag-vegetarian">VEGETARIAN</span>
                       </div>
                       <p class="meal-title">Japanese Gyozas</p>
                       <ul class="meal-attributes">
                           <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                        <span> <strong>650</strong> calories</span>   
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                        <span>NutriScore &reg; <strong>74</strong></span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                            <span><strong>4.9</strong> rating (537)</span>
                        </li>
                       </ul>
                   </div>
               </div>
      
             <div class="meal">
                <img class="meal-img" src=${meal2Img} alt="Avocado Salad">
                <div class="meal-content">
                    <div class="meal-tag ">
                        <span class="tag tag-vegan">VEGAN</span>
                        <span class="tag tag-paleo">PALEO</span>
                    </div>
                    <p class="meal-title">Avocado Salad</p>
                    <ul class="meal-attributes">
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="flame-outline"></ion-icon>
                            <span><strong>400</strong> calories</span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="restaurant-outline"></ion-icon>
                            <span>NutriScore &reg; <strong>92</strong></span>
                        </li>
                        <li class="meal-attribute">
                            <ion-icon class="meal-icon" name="star-outline"></ion-icon>
                            <span><strong>4.8</strong> rating (441)</span>  
                         </li>
                    </ul>
                </div>
            </div>
            
            <div class="diets">
                <p class="diet-title">Works with any diet:</p>
                <ul class="list">
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Vegetarian</span>
                    </li>

                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Vegan</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Pescatarian</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Gluten-free</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Lactose-free</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Keto</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Paleo</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Low FODMAP</span>
                    </li>
                    <li class="list-item">
                        <ion-icon class="list-icon" name="checkmark-outline"></ion-icon>
                        <span>Kid-friendly</span>
                    </li>
                </ul>
            </div>
    </div> 
    <div class=" all-recipes">
        <a href="#" class="link">See all recipes &rarr;</a>
    </div>


    `
}
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("recipe 1","first recipe","https://get.pxhere.com/photo/dish-food-cuisine-ingredient-produce-recipe-meat-vegetarian-food-comfort-food-side-dish-bento-Yong-tau-foo-meal-salad-teriyaki-chinese-food-japanese-cuisine-donburi-1575227.jpg"),
    new Recipe("recipe 2","second recipe","https://get.pxhere.com/photo/dish-meal-food-salad-vegetable-recipe-healthy-snack-cuisine-delicious-pasta-cheese-noodle-cook-grapefruit-asian-food-noodles-vegetarian-zucchini-spaghetti-vegetarian-food-diet-mozzarella-thai-food-italian-food-leaf-vegetable-european-food-southeast-asian-food-capellini-taglierini-1375599.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}

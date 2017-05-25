import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routes} from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {FoodComponent} from "./food/food.component";
import {AboutComponent} from "./about/about.component";
import * as reducer from './reducers';
import {HomeComponent} from "./home/home.component";
import {RecipeService} from "./services/recipe.service";
import {MovieService} from "./services/movie.service";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import {PortfolioComponent} from "./portfolio/portfolio.component";
import {TicTacToeComponent} from "./portfolio/tic-tac-toe/tictactoe.component";
import {MovieSearchComponent} from "./portfolio/movie-search/movie-search.component";
import {CategoryPipe} from "./pipes/category.pipe";
import {StoreModule} from "@ngrx/store";
import {FoodListComponent} from "./food/food-list.component";
import {MovieSearchImageComponent} from "./portfolio/movie-search/image/movie-search-image.component";
import {MovieMoreInfoComponent} from "./portfolio/movie-search/more-info/movie-more-info.component";
import {PaginationComponent} from "./shared/pagination/pagination.component";
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {WhoWasItComponent} from "./portfolio/who-was-it/home/who-was-it.component";
import {WhoWasItAboutComponent} from "./portfolio/who-was-it/about/who-was-it-about.component";
import {WhoWasItResultsComponent} from "./portfolio/who-was-it/home/who-was-it-results.component";


@NgModule({
  declarations: [
    AppComponent, FoodComponent, AboutComponent,
    PortfolioComponent, HomeComponent, PaginationComponent,
    WhoWasItComponent, WhoWasItAboutComponent, WhoWasItResultsComponent, TicTacToeComponent, MovieSearchComponent,
    MovieSearchImageComponent, MovieMoreInfoComponent, FoodListComponent, CapitalizePipe, CategoryPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    StoreModule.provideStore(reducer.default),
  ],
  providers: [RecipeService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule{

}

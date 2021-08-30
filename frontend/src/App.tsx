import "./theme/index.scss";
import React, { ReactElement } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import dotenv from "dotenv";
import Home from "@pages/Home";
import Login from "@pages/Login";
import PostList from "@pages/PostList";
import PostDetail from "@pages/PostDetail";
import ProductList from "@pages/ProductList";
import ProductDetail from "@pages/ProductDetail";
import WebtoonList from "@pages/WebtoonList";
import WebtoonDetail from "@pages/WebtoonDetail";
import GameList from "@pages/GameList";
import GameDetail from "@pages/GameDetail";

dotenv.config();

export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Login} />

      <Route exact path="/game" component={GameList} />
      <Route path="/game/:id" component={GameDetail} />

      <Route exact path="/post" component={PostList} />
      <Route path="/post/:id" component={PostDetail} />

      <Route exact path="/product" component={ProductList} />
      <Route path="/product/:id" component={ProductDetail} />

      <Route exact path="/webtoon" component={WebtoonList} />
      <Route path="/webtoon/:id" component={WebtoonDetail} />
    </BrowserRouter>
  );
}

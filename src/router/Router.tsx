import { memo, VFC } from "react";
import { Switch, Route } from 'react-router-dom'
import { AllPosts } from "../components/AllPosts";
import { NewPost } from "../components/NewPost";
import { Page404 } from "../components/Page404";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <AllPosts />
      </Route>
      <Route path="/posts/new">
        <NewPost />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>

  )
})

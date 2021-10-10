import { memo, VFC } from "react";
import { Switch, Route } from 'react-router-dom'
import { AllPosts } from "../components/AllPosts";
import { AllWeights } from "../components/AllWeights";
import { NewPost } from "../components/NewPost";
import { NewWeight } from "../components/NewWeight";
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
      <Route exact path="/bodies">
        <AllWeights />
      </Route>
      <Route path="/bodies/new">
        <NewWeight />
      </Route>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>

  )
})

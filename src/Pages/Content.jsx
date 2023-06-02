import React from 'react'
import "../Styles/Content.css"

const Content = () => {
  return (
    <div className="container">
      
      <div className="box">
      <h1>React Blog</h1>
        <div className="content">
          This blog is the official source for the updates from the React team. Anything important, including release notes or deprecation notices, will be posted here first. You can also follow the <a href="/">@reactjs</a> account on Twitter, but you won’t miss anything essential if you only read this blog.
        </div>
        <div className='card'>
          <h2>React Canaries: Incremental Feature Rollout Outside Meta</h2>
          May 3, 2023
          <br />
          Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final—similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.
          <br />
          Read more
        </div>
        <div className='card'>
          <h2>React Labs: What We've Been Working On – March 2023</h2>
          March 22, 2023
          <br />
          In React Labs posts, we write about projects in active research and development. Since our last update, we’ve made significant progress on React Server Components, Asset Loading, Optimizing Compiler, Offscreen Rendering, and Transition Tracing, and we’d like to share what we learned.
          <br />
          Read more
        </div>
        <div className='card'>
          <h2>Introducing react.dev</h2>
          March 16, 2023
          <br />
          Today we are thrilled to launch react.dev, the new home for React and its documentation. In this post, we would like to give you a tour of the new site.
          <br />
          Read more
        </div>
        <div className='card'>
          <h2>React Labs: What We've Been Working On – June 2022</h2>
          March 16, 2023
          <br />
          React 18 was years in the making, and with it brought valuable lessons for the React team. Its release was the result of many years of research and exploring many paths. Some of those paths were successful; many more were dead-ends that led to new insights. One lesson we’ve learned is that it’s frustrating for the community to wait for new features without having insight into these paths that we’re exploring…
          <br />
          Read more
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Content
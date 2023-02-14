import "./App.css"

function App() {
  return (
    <div>
      <button class="duplicate">
      Duplicate
      </button>
      <button class="toggle">
          Toggle Color
      </button>
      <button class="change">
          Change Title
      </button>
      <button class="delete">
          Delete
      </button>
      <div class="card">
          <h1 class="title">Mickey Mouse</h1>
          <section class="inside-card">
              <img class="mickey" src="https://di2ponv0v5otw.cloudfront.net/posts/2022/05/04/6272d95efdd4cd63f1180f24/m_wp_6272dadf06d59c44a1fdcd13.webp" alt="Mickey Mouse"/>
              <div class="not-image">
                  <p class="description">Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime mascot of The Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves.</p>
                  <a class="hax-button" href="#">Details</a>
              </div>
          </section>
      </div>
    </div>
  );
}

export default App;

import logo from "./logo.svg";

function App() {
  return (
    <>
      {/* <!-- HEADER --> */}
      <header class="header">
        <section class="flex">
          <a href="#home">
            <img
              class="logo"
              src={logo}
              alt="Pool Petter Hijuela Florian - popehiflo"
            />
          </a>
          <nav class="navbar">
            <a href="#home">home</a>
            <a href="#about">about</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#skills">skills</a>
            <a href="#contact">contac</a>
            <a href="#blog">blog</a>
          </nav>

          <div id="menu-btn" class="fas fa-bars"></div>
        </section>
      </header>

      {/* <!-- MAIN --> */}
      <main class="main">
        <article>
          {/* <!-- #HERO --> */}
          <section>
            <div class="content">
              <h1>Hi! I'm popehiflo</h1>
              <p>Junior Software Developer</p>
            </div>
            <div class="bg-animated">
              <ul class="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </section>

          {/* <!-- #ABOUT  --> */}
          <section>
            <h1>About Section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus!
            </p>
          </section>

          {/* <!-- #PORTFOLIO  --> */}
          <section>
            <h1>Portfolio Section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus!
            </p>
          </section>

          {/* <!-- #SKILLS  --> */}
          <section>
            <h1>Skills Section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus!
            </p>
          </section>

          {/* <!-- #CONTACS  --> */}
          <section>
            <h1>Contacts Section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus!
            </p>
          </section>
        </article>
      </main>

      {/* <!-- FOOTER --> */}
      <footer class="footer">#FOOTER</footer>
    </>
  );
}

export default App;

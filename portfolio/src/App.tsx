import Logo from "./Logo"

function App() {
  return (
    <section>
      <p>
        <span style={{ color: 'var(--guest-color)' }}>visitor</span>
        @
        <span style={{ color: 'var(--green-color)' }}>terminal.edd.dev</span>
        :~$ welcome
      </p>

      <Logo />

      <p>Welcome to my terminal portfolio! (Version 1.0.0)</p>

      <br />
      <p>----</p>
      <br />

      <p>This project's source code can be seen in this <a href="https://github.com/just-edd/portfolio-web" className="github">GitHub repo.</a></p>

      <br />
      <p>----</p>
      <br />

      
    </section>
  )
}

export default App
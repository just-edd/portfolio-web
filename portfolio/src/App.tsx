import { useRef } from "react";
import Header from "./components/Header";
import Terminal from "./components/Terminal";

const App: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-scroll func
  const autoScroll = () => {
    sectionRef.current?.scrollTo({
      behavior: 'auto',
      top: sectionRef.current.scrollHeight
    });
  }

  return (
    <section ref={sectionRef}>
      <Header />
      <Terminal autoScroll={autoScroll} />
    </section>
  )
};

export default App;
import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="bg-background">
            <Navbar />
            <Container />
            <Footer />
        </div>
    );
}

export default App;

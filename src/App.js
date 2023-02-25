import React from 'react';
import Title from "./components/Title";
import About from "./components/About";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const menuHandler = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <div className="relative">
            <div className="container">
               <Nav menuOpen={menuOpen} menuHandler={menuHandler}/>
                <Title/>
                <About/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

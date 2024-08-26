import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';
import Card from "./components/Card";
import Category, { categories, filterCategory } from "./components/Category";
import Container from "./components/Container";

function App() {
    return (
        <div className="App">
            <Header/>
            <Banner image="favoritos"/>
            <Container>
                {categories.map((category, index) =>
                    <Category category={category} key={index} >
                        {filterCategory(index).map(video => <Card id={video.id} key={video.id} />)}
                    </Category>
                )}
            </Container>
            <Footer />
        </div>
    );
}

export default App;

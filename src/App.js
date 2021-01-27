import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import bg1 from "./images/bg1.jpg"
import bg3 from "./images/bg3.jpg"

const App = () => {
    return (
        <>
            <Header
                title="Dimon-Pokemon"
                descr="GameAAAAAAAAAAAAAAAAAAAAAA"
            />
            <Layout
                id={1}
                title="Layout 1"
                descr="Layout description 1"
                urlBg={bg1}

            />
            <Layout
                id={2}
                title="Layout 2"
                descr="Layout description 2"
                colorBg="purple"
            />
            <Layout
                id={3}
                title="Layout 3"
                descr="Layout description 3"
                urlBg={bg3}
            />
            <Footer />
        </>
    )
}

export default App;
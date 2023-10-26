import "bootstrap/dist/css/bootstrap.min.css"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Todo from "./components/pages/Todo";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

let client = new QueryClient();
function App() {
    return (
        <div className="App">
            <QueryClientProvider client={client}>
                <BrowserRouter>
                    <main>
                        <Routes>

                            <Route path={'/'} element={<Home/>}></Route>
                            <Route path={'/home'} element={<Home/>}></Route>
                            <Route path={'/about'} element={<About/>}></Route>
                            <Route path={'/todos'} element={<Todo/>}></Route>


                        </Routes>

                    </main>
                </BrowserRouter>
                <ReactQueryDevtools/>
            </QueryClientProvider>

        </div>
    );
}

export default App;

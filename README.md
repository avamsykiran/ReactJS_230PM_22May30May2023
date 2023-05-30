ReactJS
---------------------------------------------------------------------------------------------------

    Pre-Requisites
        Html 5      Typography, tables, lists, forms, validation attributes, event attributes
                    html 5 api
        
        CSS 3      Selectors, Selector Operators, the regular css-properties

        JavaScript (ECMAScript 6)
                Object, Math, String, Date, docuemnt, window
                functions   closures, maxims, call backs, arrow functions
                arrays and array prototype function like reduce, map , filter ..etc.,
                ES6 concepts like   spread operators, template literals, classes,
                objects, json, inheretence, modules, asynchronosu programming (Promise, async
                and await)

    Lab Setup

        VSCode      IDE
        NodeJS      Development Environment
        Chrome      Browser

    Introduction

        is a javascript based SPA library.

        WebSite (static)    -------------> Dynamic Web Applications --------------> SPA

        Dynamic Web Application

            Server                                                  Client/Browser
                ServletsJSP/        <-------------REQ---------------
                ASP.net / PHP
                                process the request
                                generate html content dynamically

                                    ---------RESP (html content) ------>

                                                                    html is received and loaded on the browser, after unloading any prev content.

                                                                    in case of an event / form submition / a link click
                                <-------------REQ---------------
                                process the request
                                generate html content dynamically

                                 ---------RESP (html content) ------> 

        SPA - Single Page Application ?

            Server                                                  Client/Browser
                spa-bundle        <-------------REQ---------------
                (index.html + *.js + *.css)
                          
                                ---------RESP (spa-bundle) ------>  the entire spa-bundle.

                                                                    index.html along with the assosiated JS
                                                                    is laoded.

                                                                    all evetns / form submitions/ links ..etc.,
                                                                    are handled on the cleint itself by the JS.

                                                                    any needed new html content is also
                                                                    generated on the client and it repalces
                                                                    the old content of index.html which eliminates
                                                                    loading and unloading.

                rest-api    <-----data operation (xml/json)------>  data opertions like CRUD.

    NodeJS?

        is a javascript runtime to enable javascript to execute in a stand alone mode without any browser.

        while developing a reactjs app, we have to

            compose                     IDE             VSCode
            build and package           build tool      NPM     (part of NodeJS)
            manage dependencies         build tool      NPM     (part of NodeJS)
            test                        testing lib     Jest    is a JS library (has to run on NodeJS)
            deploy /host                Dev Server      react-scripts server    (has to run on NodeJS)
            execute                     browser         chrome

        hence we need nodejs.

    NPM

        node package manager.

        each app is called a package in nodejs. 

        npm --version

        npm init                is used to initialize a folder as a node project.
        npm init -y             is used to initialize a folder as a node project skipping the wizard.

        package.json            is the build config file. contains project meta data, list
                                of dependencies and a few scripts.

                                npm start               is used to build and execute the app
                                npm test                is used to build and run test cases
                                npm build               is used to build and pack
                                npm run <custom-script>

        npm install library-name --save     is used to install a library local to the project.
        npm install library-name --save -g  is used to install a library globally on the dev-machine
        npm install library-name --save-dev is used to install a library local to the project but not
                                                include it in the final bundle.

        node_modules        is available in each project and only in our 'users' folder.

                            all globally installed packages will goto 'node_module' of 'users' folder
                            all locally installed packages will goto 'node_module' of your project.

        npm install         will create a node_modules folder in the project and downloads
                            all the libraries listed in package.json

        
    Create a React App

        npx create-react-app proj-name

        (or)

        npm intall -g create-react-app
        create-react-app proj-name

    JSX ?

        JavaScript XML (JavaScript eXtended MarkUp Language)

            1. this script allows us to assign html elements directly 
                to a javascript variable.
            2. this script allows interpolation {} to embed javascript inside html.
            3. We can use a set of paranthesis to compose multi-line html.
            4. we can use operators like &&, || and ?: for conditional formatting.
            5. it is completly case sensitive and all html elements must be in lower case.
            6. All html attributes must follow camel case as hypens are not allowed:

                'onclick'  is writeen as 'onClick'
                'aris-media'    is written as 'arisMedia'

            7. the html 'class' attribute is not allowed, instead we use 'className'.

                let userName = "Vamsy";
                let myPara = <p> {userName} </p>;

                let p=23000;
                let r=3.2;
                let t=236;
                let myPara2 = <p> Interest to be paid is { (p*t*r)/100 } </p>;

                let friends = ["Vamsy","Sagar","Suseela","Kiran"];
                let frdsList = friends.length===0 ? <p>No Freidns</p> : (
                    <ol>
                        { friends.map( ele => <li>{ele}</li> ) }
                    </ol>
                );

    React Components

        reactjs offers html extendability meaning we can create our own html elements (tags) an attributes in
        reactjs, such react elements are called components.

        Function Components
        Class Components

    Function Components

        is are known as state-less components

        is a javascript function that returns a single JSX element and can accept an optional arg 'props'.

        react components must be following initial capitalization.

        const Header = () => <h3>My First React SPA</h3>;

        <Header></Header>

    props ?

        is an object that carries data from parent component into a child component through attributes.

    Class Components

        is known as state-ful component.

        is a javascript class that extends React.Component.

            React.Component offers
                1. state
                2. setState()
                3. componentDidMount()
                4. render()
                5. componentDidUpdate()
                6. componentDidCatch()
                7. componentWillUnMount()

            class Dashboard extends React.Component{
                constructor(props){
                    super(props);
                    this.state = {};
                }

                render(){
                    return (<p></p>);
                }
            }

        state ?

            is a field used to hold all the related data of a component.
            the state field is initialized in the component constructor.

            the state is observed for changes and once state gets changed
            the 'render()' get invoked automatically.

            'state' is immutable. but the entire state has to be replaced.

            to replace state we use 'setState()' method.

        render() 

            method is to return the JSX element to be outputted by our component. means
            the developer has to override the render() to return the disired DOM.

        props ? 

            class components receive 'props' through thier constructor.

    Integrating Bootstrap

        npm i bootstrap --save

        node_module
            |- bootstrap
                |- dist
                    |-css
                        |-bootstrap.min.css    
                    |-js
                        |-bootstrap.bundle.js

        import both of these files into index.js

    Assignment # 1

        Develop an SPA using reactjs to perform CRUD operation on 'Employee' in
        hirarchiel component design pattern. The Employee fields are your choice (miniumum 4 fields).

    ReactJS Forms

        Controlled

            the form element is boudn to a state field and the changes are tracked using onChanges event.
            the single source of truth is ensured.

        UnControlled

            use react 'refs'.
            where a ref is a accessable id given to an html-element.

            <input type="text" ref="tb1" />

            let data = this.refs.tb1.value;

    Component LifeCycle Methods

        constructor()               //use to initialize the state and receive 'props'
            ↓
            render()                //used to return the DOM to be display for the component.
            ↓
            componentDidMount()     //used to execute any job after the first 'render()' is done.

                /*****************************************************************/
                    when ever setState() is called through any event handler or
                    componentDidMount()
                /*****************************************************************/
                ↑    ↓
                |    render()                //used to return the DOM to be display for the component.
                |      ↓
                |      componentDidUpdate() //used to execute any job after each rendering.
                |       ↓
                |-------|

    React Hooks

        a hook is a function designed to provide a particular react feature to a functional component,
        so that functional components can do everything that a class component is capable of.

        this makes functional component onpar with class components and more over function components
        are easy to test and hence 90% of the app is constructed using function component.

        LifeCycle Hooks

            useState            provides state to a function component.
                                returns a [getter,setter]
                                accepts an initial value

                                let [x,setX] = useState(0);

            useEffect           provides componentDidMount and componentDidUpdate equivalents.
                                accept a callback and an optional dependency array.

                                useEffect( () => {/*this method gets executed after every render()*/ } )
                                useEffect( () => {//this method gets executed after the first render()} , [])
                                useEffect( () => {/*this method gets executed after every render() if x changed */ } , [x])

    Application Level State Management using Redux

        npm i redux react-redux --save

        redux       is a individual library used to maintain state for a UI/UX app.

                    store           is an object managed by redux to hold the state.
                                    an application has only one store.

                                    let hrStore = createStore(hrReducer);
                                    let hrStore = createStore(combineReducers({emps:empsReducer,detps:deptsReducer}));

                    reducer         is a pure function that does data operations like CRUD on the store.

                                    const empsReducer = (state,action) => {
                                        //peform the data operations
                                        //deopending on the action coming in

                                        return modifedState; //is going to repalce the state in the store.
                                    };

                    dispatch        is a dynamic function that is used to send actions to a reducer
                                    from a component.

                    action          is an object having a type and payload as fields; where type indicates
                                    what operation needs to be done and payload carries the data need to do the operation.

                                    const EMP_INSERT_ACTION = {type:"ADD",emp:{id:1,name:"Vamsy",basic:45600} }
                                    const DEL_EMP_ACTION = { type="REMOVE",empId:123};

        react-redux     is  a library that acts as integration between redux and react.                             
           
                Provider        is a component that wrap a store around the top-level component of our app.

                                <Provider store={hrStore}>
                                 <App />
                                </Provider>

                useSelector     is a hook used to extract needed data from the globalState of the store into a component.

                useDispatch     is a hook that returns 'dispatch' function.

                connect(mapStateToProps,mapDispatchToProps)(classComponent)
                                is used to integrate dispatch and extract data from a globalState into a class component.

            store →-------(state)----------------------
             ↑                   ↓                   ↓
             |                   |                   |
             |                   | useSelector       | useSelector (extract needed info from global-state)
             |                   |                   |
             | modifiedState   Component1          Component2
             |                   |                   |
             |                   |                   |
             |                   | useDispatch       | useDispatch
             |                   |                   |
             |                   |                   |
             |          |--←dispatch(action)         |
          reducer ←-----|                            |
                        |---------------------------←|dispatch(action)

        cosnt itemsReducer = (state = { itemsList=[] } ,action) =>{
            //itmes managed
        }

        cosnt empsReducer = (state = { empsList=[] } ,action) =>{
            //emps managed
        }

        cosnt deptsReducer = (state = { deptsList=[] } ,action) =>{
            //depsts managed
        }

        cosnt invStore = createStore(itemsReducer);

            invStore                                    let items = useSelector(state => state.itemsList);
                |- itemsList

        cosnt hrStore = createStore(combineReducers({emps:empsReducer,depts:deptsReducer}));

            hrStore                                     let emps = useSelector(state => state.emps.empsList)
                |-depts
                |   |-deptsList
                |-emps
                    |-empsList

    Assignment # 2

        Develop an SPA using reactjs to perform CRUD operation on 'Employee' in
        hirarchiel component design pattern. The Employee fields are your choice (miniumum 4 fields).
        The state has to be at application level and managed using REDUX.

    rest-api using json-server

        json-server is a javascript library to that generate fake rest-api end-points from a given '.json' file.
        it is for learning purpose.

        md inv-api
        cd inv-api
        npm init -y
        npm i json-server --save

            inv-api
                |- invData.json
                |- package.json "start":"json-server --port 9999 --watch ./invData.json"

        npm start

    
    calling rest-api using AXIOS (asynchronous XML Input Output System)

        npm i axios --save

            axios.get(url)  returns a Promise object
            axios.post(url,requestBody)  returns a Promise object
            axios.put(url,requestBody)  returns a Promise object
            axios.delete(url)  returns a Promise object

                let p1 = axios.get("http://localhost:9999/items");

                p1.then( resp => {} ).catch( err => {} )

    integrating rest-api calls with redux using redux-thunk 

        npm i redux-thunk --save

        redux-thunk offers a middleware called 'thunk' which sits between asynchronous calls and 'reducer'.

        cosnt invStore = createStore(itemsReducer,applyMiddleware(thunk));

        thunk accepts  function as an action, and executes the function and the result is shared
        with the reducer through a action object.

            store →-------(state)----------------------
             ↑                   ↓                   ↓
             |                   |                   |
             |                   | useSelector       | useSelector (extract needed info from global-state)
             |                   |                   |
             | modifiedState   Component1          Component2
             |                   |                   |
             |                   |                   |
             |                   | useDispatch       | useDispatch
             |                   |                   |
             |                   |                   |
             |          |--←dispatch(actionObj)      |
          reducer ←-----|                            |
                        |                            |dispatch(actionThunk)
                        |                            ↓
                        |                           thunk invokes the actionThunk
                        |                                              |-----------------------------------------|
                        |----------------------------← (waitAction)----|  1. dispatch(waitAction)                |   
                        |                                              |    2. make an axios call                |
                        |                                              |        2(a) if sucessful response       |
                        |----------------------------← (dataAction)----|                dispatch(dataAction)     |
                        |                                              |        2(b) if error                    |
                        |----------------------------← (errAction )----|                dispatch(errAction)      |   
                                                                       |-----------------------------------------|    

    Assignment # 3

        Develop an SPA using reactjs to perform CRUD operation on 'Employee' in
        hirarchiel component design pattern. The Employee fields are your choice (miniumum 4 fields).
        The state has to be at application level and managed using REDUX and integrate it with rest-api
        using axios and redux-thunk.

        the rest-api can be created using json-server.
 
    React Routing

        npm i react-router react-router-dom --save

            <BrowserRouter>

                <Header />

                <Routes>
                    <Route path="/" element={<C1 />} />
                    <Route path="/a" element={<C2 />} />
                    <Route path="/b" element={<C3 />} />
                    <Route path="/c/:pathVariable" element={<C4 />} />
                </Routes>

                <Footer />

            </BrowserRouter>


            <Link to"" ></Link>       instead of <a></a>

            <Navigate to="" />  
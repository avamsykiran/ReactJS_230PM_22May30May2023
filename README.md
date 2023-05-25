ReactJS
-----------------------------------------------------------------------------------------

    1. Pre-requisites
        HTML 5, CSS 3, Javascript (ES6) and Bootstrap 5.

    2. ReactJS is a SPA framework.

    3. SPA - Single Page Application

    4. React Archetectue

        React SPA has components are the basic building blocks.

        A Component is extended html element deifned using the React FrameWork.

        Function Component      has no state can not access any component life cycle methods.
        Class Component         has state and access to all Component Life Cycle methods.
        High Order Component    which is a pure function that accepts a component as param
                                and retrns a modified component.

    5. How do we create a reactjs application

        Lab Setup
            1. NodeJS
            2. VSCode IDE

        npx create-react-app app-name

    6. Function Component

            a) a function component is any function that takes an optional parameter called 'props'
                and returns a JSX element.

            b. a function component is used as an HTML ELEMENT.

            c. props    short for properties is used to receive data from a parent component
                        to a child component through attributes.

    7. JSX Elements ( JavaScrpt XML elements)

        was designed to reduce the repeated usage of DOM Manipulation.

        1. A JSX element can have one and only one root at a time.

            let p1 = <p>This is a nes Para</p> ;
            let ol = (
                        <ol>
                            <li>item1</li>
                            <li>Item2</li>
                        </ol>
                     );
            let desp = <p>This is a special project</p> <p>And this is our first time</p> //error
            let desp = (
                            <div>
                                <p>This is a special project</p> 
                                <p>And this is our first time</p> 
                            </div>
            );

        2. Every component must have initial capaitlas and all html elements must 
            be written in lower case.
        
        3. the attribute 'class' must not be sued and instead 'className' can be used.

        4. we use {} to embed javascript inside html.

            let userName = "Vamsy Kiran":
            let p1 = <p>Hello {userName}! welcome aboard!</p>;

            let age=17;
            let msg = age>=17 && <p> Your can marry </p>
            let msg2 = age>=17?  <p> Your can marry </p> : <p> have to wait a little more</p>

            let friends = ["Vamsy","Suseela","Jyothi","Lalitha"];

            let frdLsit = (
                <ol>
                    friends.map( fnm => <li>fnm</li>)
                </ol>
            );

    8. Bootstrap Integration

        npm i bootstrap --save

        node_modules
            |-bootstrap
                |-dist
                    |-css
                        |-bootstrap.min.css
                    |-js
                        |-bootstrap-bundle.js

        these two fiel are to be imported into index.js

    9. Class Component

        is a javascript class that inherits from React.Component class and overrides render() method.

        From React.Component a class components inherits:
            a. setState()
            b. state property
            c. render()
            d. and other component life cycle methods.

        render() has to return the JSX to be displayed on the screen.

        state will hold all the data related to the component.

        state is immutable. but the state can be replaced using setState() method.

        each time the state is set, the render() gets invoekd automatically so that the
        screen stays consisitant with the state.

        class components can also receive props through the constructor.

    6. ReactJS Forms And Event Handling

    7. ReactJS Component Life Cycle Methods

        constructor()                       to initilize state
            |
            ↓
            render()                        to return the (DOM) html result of the component
                |
                ↓
                componentDidMount()         to do any operation after the first rendering of the component
                        |
                        ↓
                    /********************************************
                        No Operation happens until setState is called
                        in any event handler ...
                    **********************************************/
                         ↑              | //only when setState is called
                         |              ↓
                         |             render()    
                         |                |  
                         |                ↓     
                         |<------------ componentDidUpdate()    to perform any operation after each rendering...


    8. React Hooks

         a hook is a function designed to impart enhaned properties to a function component.

         if we use a hook, it is supposed to be the initial lines of code of the functiona component.

         useState               will enable function component to have state.

                                let [getter,setter] = useState(initalValue);

                                let [userName,setUserName] = useState("Vamsy");

        useEffect               is used as an equivalent to componentDidMount and componentDidUpdate.

                                useEffect(callBack,[]);

                                if the array is empty, the callBack is executed after the first render that is 
                                equivalent to the componentDidMount

                                if the array has any state fields, the the callBack get executed only when
                                those fields are modified and it is equvalent to componentDidUpdate.


    9. json-server

            is sued to create fake rest-api end-points based on a hypothetical
            .json file.

        md rest-api
        cd rest-api
        npm init -y                     //to initiate a nodejs project in that folder
        npm i json-server --save        //to install json-server library

        create rest-api/data.json       //this file should contain our hypothetical data.

        include "start":"json-server --port 9999 --watch ./data.json"   in rest-api/package.json file

        npm start

    10. axios

        npm i axios --save

        axios.get("url").then( resp => { /*resp.data*/ } ).catch( err => {}  )
        axios.put("url",reqBody) .then( resp => { /*resp.data*/ } ).catch( err => {}  )
        axios.post("url",reqBody) .then( resp => { /*resp.data*/ } ).catch( err => {}  )
        axios.delete("url") .then( resp => { /*resp.data*/ } ).catch( err => {}  )

    
        
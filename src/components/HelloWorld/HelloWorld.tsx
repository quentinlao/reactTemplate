import './HelloWorld.css';
import logo from '../../assets/react.svg';
import { HelloWorldInterface } from '../../types';

interface HelloWorldProps extends HelloWorldInterface {
    name: string;
}

export const HelloWorld = (props: HelloWorldProps): JSX.Element => {
    const { name, title, description } = props;
    return (
        <div id="helloWorldId" className="helloWorldContainer">
            <img src={logo} height="100" />
            <h1>
                {title}, {name} !
            </h1>

            <p id="descriptionId">{description}</p>
        </div>
    );
};

export const sumFunction = (a: number, b: number) => a + b;

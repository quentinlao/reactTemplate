import './HelloWorld.css';
import logo from '../../assets/react.svg';
import { HelloWorldInterface } from '../../types';

const HELLO_WORLD_ID = 'helloWorldId';
const DESCRIPTION_ID = 'descriptionId';
interface HelloWorldProps extends HelloWorldInterface {
    name: string;
}

export const HelloWorld = (props: HelloWorldProps): JSX.Element => {
    const { name, title, description } = props;
    return (
        <div id={HELLO_WORLD_ID} className="helloWorldContainer">
            <img src={logo} height="100" />
            <h1>
                {title}, {name} !
            </h1>
            <h2>Sum {sumFunction(1, 2)}</h2>
            <p data-test-id={DESCRIPTION_ID}>{description}</p>
        </div>
    );
};

export const sumFunction = (a: number, b: number): number => a + b;

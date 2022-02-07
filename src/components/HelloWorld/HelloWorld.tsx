import React from 'react';
import './HelloWorld.css';

interface HelloWorldProps {
    name: string;
}

export const HelloWorld = (props: HelloWorldProps): JSX.Element => {
    const { name } = props;
    return (
        <div className="helloWorldContainer">
            <h1>Hello world, {name} !</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                accumsan libero sit amet felis vehicula tincidunt. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. Quisque euismod a
                lectus nec faucibus. Aenean eleifend sollicitudin purus, non
                efficitur nunc finibus efficitur. Nunc commodo tincidunt augue,
                a blandit tellus lobortis id. Proin in hendrerit nisi. Nullam
                commodo quis sapien non consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Nam sit amet nulla tincidunt,
                tristique mauris eu, scelerisque magna. Vestibulum a mattis
                purus.
            </p>
        </div>
    );
};

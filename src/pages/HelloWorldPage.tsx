import React from 'react';
import { HelloWorld } from '../components/HelloWorld/HelloWorld';
import HelloWorldService from '../api/helloworld.service';
import { HelloWorldInterface } from '../types';
export const HelloWorldPage = (): JSX.Element => {
    const [data, setData] = React.useState<HelloWorldInterface>({
        title: '',
        description: '',
    });
    React.useEffect(() => {
        HelloWorldService.getHelloWorld().then(
            (response: HelloWorldInterface) => {
                setData(response);
            }
        );
    }, []);

    return (
        <>
            <HelloWorld
                name="Jean"
                title={data.title}
                description={data.description}
            />
        </>
    );
};

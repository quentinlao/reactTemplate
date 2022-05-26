import { useState, useEffect } from 'react';
import { HelloWorld } from '../components/HelloWorld/HelloWorld';
import HelloWorldService from '../api/helloworld.service';
import { HelloWorldInterface } from '../types';

export const HelloWorldPage = (): JSX.Element => {
    const [data, setData] = useState<HelloWorldInterface>({
        title: '',
        description: '',
    });
    useEffect(() => {
        HelloWorldService.getHelloWorld().then(
            (response: HelloWorldInterface) => {
                setData(response);
            }
        );
    }, []);

    return (
        <HelloWorld
            name="Jean"
            title={data.title}
            description={data.description}
        />
    );
};

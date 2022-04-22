import { List, Datagrid, TextField, EmailField } from 'react-admin';
import UrlCustom from '../UrlCustom/UrlCustom';

export const UserList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="address.street" />
            <TextField source="phone" />
            <UrlCustom source="website" />
            <TextField source="company.name" />
        </Datagrid>
    </List>
);

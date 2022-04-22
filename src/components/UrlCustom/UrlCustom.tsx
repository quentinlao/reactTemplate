import { useRecordContext } from 'react-admin';
import { Link } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

const UrlCustom = ({ source }: { source: string }) => {
    const record = useRecordContext();
    return record ? (
        <Link href={record[source]} sx={{ textDecoration: 'none' }}>
            {record[source]}
            <LaunchIcon
                sx={{ width: '0.5em', height: '0.5em', paddingLeft: 2 }}
            />
        </Link>
    ) : null;
};

export default UrlCustom;

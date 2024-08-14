import { useParams } from 'react-router-dom';

import style from './style.module.scss';

export const DetailInfo = () => {
    const { id } = useParams();

    return (
        <div>
            <h1 className={style.title}>DetailInfo</h1>
            <p>id: {id}</p>
        </div>
    );
};

import style from './style.module.scss';

export const GeneralError = () => (
    <div className={style.container}>
        <p className={style.text}>Something went wrong.</p>
    </div>
);

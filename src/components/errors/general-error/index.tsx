import style from './style.module.scss';

type GeneralErrorProps = {
    message?: string;
};

export const GeneralError = ({ message = 'Something went wrong.' }: GeneralErrorProps) => (
    <div className={style.container}>
        <p className={style.text}>{message}</p>
    </div>
);

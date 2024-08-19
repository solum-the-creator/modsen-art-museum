import style from './style.module.scss';

type LoaderProps = {
    isLoading: boolean;
    size?: number;
};

export const Loader = ({ isLoading, size = 80 }: LoaderProps) => {
    if (!isLoading) return null;

    return (
        <div className={style.container}>
            <div
                data-testid='loader-container'
                className={style.loading_container}
                style={{ width: `${size}px`, height: `${size}px` }}
            >
                <div className={style.loading_progress} />
            </div>
        </div>
    );
};

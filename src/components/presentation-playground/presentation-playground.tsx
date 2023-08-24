import classNames from 'classnames';
import styles from './presentation-playground.module.scss';

export interface PresentationPlaygroundProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const PresentationPlayground = ({ className }: PresentationPlaygroundProps) => {
    return (
        <div className={styles.Layouter}>
            <div
                className={classNames(
                    styles.TwoColumnLayout,
                    styles.ThreeColumnLayout,
                    styles.Main
                )}
            >
                <div className={styles['div-color']}>
                    <div className={styles['div-size']} />
                    <div className={styles['div-size']} />
                </div>
                <div className={styles['div-color']}>
                    <div />
                </div>
                <div className={styles['div-color']} />
                <div className={styles['div-color']} />
            </div>
        </div>
    );
};

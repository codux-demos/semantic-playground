import classNames from 'classnames';
import styles from './layout-indicator.module.scss';
import { Button } from 'semantic-ui-react';

export interface LayoutIndicatorProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const LayoutIndicator = ({ className }: LayoutIndicatorProps) => {
    return (
        <div className={classNames(styles.container, className)}>
            <div className={classNames(styles.indicator, styles['text-container'])}>
                <h1 className={styles['heading-font']}>Semantic UI </h1>
                <p className={styles['prgrp-font']}>
                    This is a paragraph. about how semantic is good, and we are - as a group, also
                    very very good group. Good pips, good vibe, nice product, needs a change but
                    it&apos;s ok.{' '}
                </p>
            </div>
            <div className={styles.indicator}>
                <div className={classNames(styles.indicator, styles['two-column-layout'])}>
                    <div>
                        <Button basic color="black">
                            Black
                        </Button>
                    </div>
                    <Button basic color="orange">
                        Orange
                    </Button>
                    <Button basic color="brown">
                        Brown
                    </Button>
                    <Button basic color="green">
                        Green
                    </Button>
                    <Button basic color="blue">
                        Blue
                    </Button>
                </div>
            </div>
            <div className={styles.indicator} />
            <div className={styles.indicator} />
            <div className={styles.indicator} />
            <div className={styles.indicator} style={{ background: 'royalblue' }} />
            <div style={{ background: 'lightseagreen', gridColumn: 'span 2' }} />
            <div className={styles.indicator} />
            <div className={styles.indicator} />
            <div className={styles.indicator} />
        </div>
    );
};

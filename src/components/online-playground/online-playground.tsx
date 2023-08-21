import classNames from 'classnames';
import styles from './online-playground.module.scss';
import { Button, Image, Label, Segment } from 'semantic-ui-react';

export interface OnlinePlaygroundProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const OnlinePlayground = ({ className }: OnlinePlaygroundProps) => {
    return (
        <div className={styles['grid-container']}>
            <div className={classNames(styles['grid-element'], styles['Page-title'])}>
                <h1 className={styles['title-font']}>Semantic UI Is Great</h1>
                <p className={styles['prgrp-font']}>
                    ytgu jgjg hjjk swldk e3 dkmd dxm xksn . sdmxs xnodnwclo . dkcec . sekdnc . dksn
                    xksmxlz xksxc skxc pednfc xsocxnx{' '}
                </p>
                <div className={styles.buttons}>
                    <Button color="purple" className={styles['button-size']}>
                        Read Artical
                    </Button>
                    <Button basic color="purple">
                        Decomentation
                    </Button>
                </div>
            </div>
            <div className={classNames(styles['grid-element'], styles.Main)}>
                <div className={styles.buttons}>
                    <Label color="yellow" tag>
                        New
                    </Label>
                    <Label color="red" tag>
                        Upcoming
                    </Label>
                    <Label color="teal" tag>
                        Featured
                    </Label>
                </div>
                <div className={classNames(styles['Two-Columns'])}>
                    <Image
                        fluid
                        label={{ color: 'gr', corner: 'left', icon: 'heart' }}
                        src="https://react.semantic-ui.com/images/wireframe/image.png"
                        className={styles['Img-size']}
                    />
                    <Image
                        fluid
                        label={{ color: 'red', corner: 'right', icon: 'file' }}
                        src="https://react.semantic-ui.com/images/wireframe/image.png"
                        floated="right"
                        className={styles['Img-size']}
                    ></Image>
                </div>
                <div className={styles['Two-Columns']}>
                    <Segment attached color="black">
                        <Label color="black" ribbon>
                            Overview
                        </Label>
                        <span>Account Details</span>
                        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                    </Segment>

                    <Segment attached color="orange">
                        <Label color="orange" ribbon="right">
                            Community
                        </Label>
                        <span>Account Details</span>

                        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
                    </Segment>
                </div>
            </div>
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={classNames(styles['grid-element'], styles.main)} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
            <div className={styles['grid-element']} />
        </div>
    );
};

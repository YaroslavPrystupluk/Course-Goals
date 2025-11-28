import {FC, ReactNode} from 'react';

type InfoBoxHintProps = {
    mode: 'hint',
    children: ReactNode
}

type InfoBoxWarningProps = {
    mode: 'warning',
    severity: 'low' | 'medium' | 'high'
    children: ReactNode
}

type InfoBox = InfoBoxHintProps | InfoBoxWarningProps

const InfoBox: FC<InfoBox> = ({mode, children, ...rest}) => {

    if (mode === 'hint') {
        return (
            <aside className='infobox infobox-hint'>
                {children}
            </aside>
        )
    }
    const {severity} = {...rest}

    return (
        <aside className={`infobox infobox-warning warning--${severity}`}>
            <h2>Warning</h2>
            {children}
        </aside>
    );
};

export default InfoBox;
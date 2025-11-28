import {FC, ReactNode} from 'react';

export type Props = {
        image:{
        src: string;
        alt: string;
    };
    children: ReactNode;
}

const Header: FC<Props> = ({image, children}) => {
    return (
        <header>
            <img src={image.src} alt={image.alt} />
            <h1>{children}</h1>
        </header>
    );
};

export default Header;
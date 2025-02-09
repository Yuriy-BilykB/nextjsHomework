import Link from "next/link";
const Menu = () => {
    return (
        <nav>
            <ul>
                <li><Link href={'/cars'}>Cars</Link></li>
                <li><Link href={'/carForm'} >Add Car</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
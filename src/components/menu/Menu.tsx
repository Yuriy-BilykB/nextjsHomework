import Link from "next/link";
const Menu = () => {
    return (
        <ul>
            <li><Link href={'/'}>Home</Link></li>
            <li><Link href={'/cars'}>Cars</Link></li>
            <li><Link href={'/registerForm'}>Add Car</Link></li>
        </ul>
    );
};

export default Menu;
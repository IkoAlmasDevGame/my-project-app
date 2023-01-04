import { Footer, Link } from "react-daisyui";

const Created = () => {
    return (
        <Footer className="p-10 bg-neutral text-neutral-content">
            <div>
                <Footer.Title>
                    <Link href="https://github.com/IkoAlmasDevGame/" className="link">Github</Link>
                    <br />
                    <Link href="https://www.youtube.com/@Ikoalmasofficial" className="link">Youtube</Link>
                </Footer.Title>
                </div>
        </Footer>
    );
}

export default Created
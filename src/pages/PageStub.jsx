import Button from "../components/ui/Button.jsx";
export default function PageStub({ title, description }) { return <section className="page-stub"><p className="eyebrow">Cakes Chocolates & More · Austin</p><h1>{title}</h1><p>{description}</p><Button to="/">Back to home <span>→</span></Button></section>; }

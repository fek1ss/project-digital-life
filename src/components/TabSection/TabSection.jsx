import Button from "../Button/Button";
import "./TabSection.css";


export default function TabSection({ active, onChange }) {
    return (
        <section className="tabSection">
            <Button isActive={active === "about"} onClick={() => onChange('about')}>
                О нас
            </Button>
            <Button isActive={active === "main"} onClick={() => onChange("main")}>
                Главная
            </Button>
            <Button isActive={active === "topics"} onClick={() => onChange("topics")}>
                Темы
            </Button>
            <Button isActive={active === "Сhats"} onClick={() => onChange("Chats")}>
                Чаты
            </Button>
            <Button isActive={active === "settings"} onClick={() => onChange("settings")}>
                Настройки
            </Button>
            <Button isActive={active === "registration"} onClick={() => onChange("registration")}>
                Регистрация
            </Button>
        </section>
    );
}

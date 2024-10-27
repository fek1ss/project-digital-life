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
            <Button isActive={active === "chats"} onClick={() => onChange("chats")}>
                Чаты
            </Button>
            <Button isActive={active === "settings"} onClick={() => onChange("settings")}>
                Настройки
            </Button>
            <Button isActive={active === "sign in"} onClick={() => onChange("sign_in")}>
                Авторизация
            </Button>
            <Button isActive={active === "registration"} onClick={() => onChange("registration")}>
                Регистрация
            </Button>
        </section>
    );
}

import { LinkSC, LinksContainerSC, StyledNavigationSC } from "./style";
import { INavigationProps } from "./type";

const config = [
  {
    href: "main",
    title: "Об интенсиве",
  },
  {
    href: "programm",
    title: "Программа",
  },
  {
    href: "results",
    title: "Итоги  интенсива",
  },
  {
    href: "rates",
    title: "Тариф",
  },
  {
    href: "reviews",
    title: "Отзывы",
  },
  {
    href: "me",
    title: "Кто я такая?",
  },
  {
    href: "faq-section",
    title: "Ответы на вопросы",
  },
];

export const Navigation = ({ isOpen }: INavigationProps) => {
  return (
    <StyledNavigationSC isOpen={isOpen}>
      <LinksContainerSC>
        {config.map((item, index) => (
          <LinkSC to={item.href} key={index} smooth={true} duration={500}>
            {item.title}
          </LinkSC>
        ))}
      </LinksContainerSC>
    </StyledNavigationSC>
  );
};

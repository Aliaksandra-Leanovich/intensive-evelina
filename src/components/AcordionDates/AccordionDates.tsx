import React, { useState } from "react";
import {
  ContainerSC,
  DateBlockWrapper,
  DateText,
  DatesContainerSC,
  TaskItem,
  TasksList,
  WrapperSC,
} from "./style";
import ArrowIcon from "../../assets/icons/down-arrow.svg";

interface ITaskDate {
  date: string;
  tasks: Array<string>;
}

const tasksData = [
  {
    date: "04 Февраля (ВС)",
    tasks: ["Замеры", "Вводная лекция"],
  },
  {
    date: "05 Февраля (ПН)",
    tasks: [
      "Втягивающий комплекс на все тело",
      "Видео-лекция “программирование себя на новую реальность, изменение мышление на изобильное и положительное“",
      "Практика “на каждый день”",
    ],
  },
  {
    date: "06 Февраля (ВТ)",
    tasks: [
      "Утренний комплекс на все тело",
      "Видео-лекция “БЖУ и приемы пищи”",
    ],
  },
  {
    date: "07 Февраля (СР)",
    tasks: ["Подкаст “как внедрить спорт и начать заниматься регулярно”"],
  },
  {
    date: "08 Февраля (ЧТ)",
    tasks: [
      " Утренний комплекса с акцентом на ягодицы",
      "Лекция “калорийность рациона: с подсчетом и без”",
    ],
  },
  {
    date: "09 Февраля (ПТ)",
    tasks: [
      "Утренний комплекс с акцентом на верх тела",
      "Подкаст “почему важно научиться быть благодарным”",
      "Практика",
    ],
  },
  {
    date: "10 Февраля (СБ)",
    tasks: ["Подкаст “мотивационный - как не сливаться с намеченного пути”"],
  },
  {
    date: "11 Февраля (ВС)",
    tasks: ["Развернутые ответы на вопросы в общем чате"],
  },
  {
    date: "12 Февраля (ПН)",
    tasks: [
      "Утренний комплекс на все тело",
      "Видео-лекция “фигура мечты”",
      " Практика “правильная визуализация результата в телостроении”",
    ],
  },
  {
    date: "13 Февраля (ВТ)",
    tasks: [
      "Утренний комплекс на все тело",
      "Подкаст “как правильно ставить цели”",
      "Практика",
    ],
  },
  {
    date: "14 Февраля (СР)",
    tasks: [
      "Мфр с роллом",
      "Подкаст “как выстраивать комфортный для СЕБЯ режим дня и вписывать ритуалы красоты”",
    ],
  },
  {
    date: "15 Февраля (ЧТ)",
    tasks: [
      "Комплекс на все тело",
      "Подкаст “положительные и негативные пищевые привычки”",
    ],
  },
  {
    date: "16 Февраля (ПТ)",
    tasks: [
      "Подкаст “нужна ли постоянная рефлексия или как избавить от кучу мыслей в голове и наконец начинать действовать”",
    ],
  },
  {
    date: "17 Февраля (СБ)",
    tasks: [
      "Комплекс на все тело",
      "Подкаст “правила результативных тренировок”",
    ],
  },
  {
    date: "17 Февраля (ВС)",
    tasks: ["Подведение итогов", "Ответы на вопросы"],
  },
];

export const AccordionDates = () => {
  return (
    <WrapperSC>
      <ContainerSC>
        <DatesContainerSC>
          {tasksData.map((data, index) => (
            <DateBlock key={index} date={data.date} tasks={data.tasks} />
          ))}
        </DatesContainerSC>
      </ContainerSC>
    </WrapperSC>
  );
};

const DateBlock = ({ date, tasks }: ITaskDate) => {
  const [isTasksVisible, setIsTasksVisible] = useState(false);

  const handleToggleTasks = () => {
    setIsTasksVisible(!isTasksVisible);
  };

  return (
    <DateBlockWrapper onClick={handleToggleTasks}>
      <DateText>
        {date}
        <div className="faq-arrow">
          <img src={ArrowIcon} alt="arrow" />
        </div>
      </DateText>
      {isTasksVisible && (
        <TasksList>
          {tasks.map((task, index) => (
            <TaskItem key={index}>{task}</TaskItem>
          ))}
        </TasksList>
      )}
    </DateBlockWrapper>
  );
};

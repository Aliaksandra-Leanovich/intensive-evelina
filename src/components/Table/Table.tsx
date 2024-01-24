import React from "react";
import {
  CeilSC,
  ContainerSC,
  ContainerTableSC,
  DateCeilSC,
  RowSC,
  TaskSC,
  WrapperSC,
} from "./style";
import { Colors, Typography } from "../../ui";
import { TypographyVariants } from "../../enums";
import { AccordionDates } from "../AcordionDates/AccordionDates";

export const Table = () => {
  return (
    <WrapperSC id="programm">
      <ContainerSC>
        <Typography variant={TypographyVariants.h2} color={Colors.SECONDARY}>
          Программа Интенсива
        </Typography>
        <AccordionDates />
        <ContainerTableSC>
          <Typography
            variant={TypographyVariants.paragraphLBold}
            color={Colors.TEXTDARK}
          >
            Февраль 2024
          </Typography>
          <RowSC>
            <DateCeilSC>ПН</DateCeilSC>
            <DateCeilSC>ВТ</DateCeilSC>
            <DateCeilSC>СР</DateCeilSC>
            <DateCeilSC>ЧТ</DateCeilSC>
            <DateCeilSC>ПТ</DateCeilSC>
            <DateCeilSC>СБ</DateCeilSC>
            <DateCeilSC>ВС</DateCeilSC>
          </RowSC>
          <RowSC>
            <CeilSC>
              <span>30</span>
            </CeilSC>
            <CeilSC></CeilSC>
            <CeilSC>
              <span>31</span>
            </CeilSC>
            <CeilSC>
              <span>01</span>
            </CeilSC>
            <CeilSC>
              <span>02</span>
            </CeilSC>
            <CeilSC>
              <span>03</span>
            </CeilSC>
            <CeilSC>
              <p>04</p>
              <TaskSC> Замеры</TaskSC>
              <TaskSC> Вводная лекция</TaskSC>
            </CeilSC>
          </RowSC>
          <RowSC>
            <CeilSC>
              <p>05</p>
              <TaskSC>
                Втягивающий комплекс на все тело <br />
              </TaskSC>
              <TaskSC>
                Видео-лекция “программирование себя на новую реальность,
                изменение мышление на изобильное и положительное”
              </TaskSC>
              <TaskSC> Практика “на каждый день”</TaskSC>
            </CeilSC>
            <CeilSC>
              <p>06</p>
              <TaskSC> Утренний комплекс на все тело</TaskSC>
              <TaskSC> Видео-лекция “БЖУ и приемы пищи”</TaskSC>
            </CeilSC>
            <CeilSC>
              <p>07</p>
              <TaskSC>
                Подкаст “как внедрить спорт и начать заниматься регулярно”
              </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>08</p>
              <TaskSC> Утренний комплекса с акцентом на ягодицы </TaskSC>
              <TaskSC> Лекция “калорийность рациона: с подсчетом и без”</TaskSC>
            </CeilSC>
            <CeilSC>
              <p> 09</p>
              <TaskSC> Утренний комплекс с акцентом на верх тела</TaskSC>
              <TaskSC>Подкаст “почему важно научиться быть благодарным”</TaskSC>
              <TaskSC> Практика</TaskSC>
            </CeilSC>
            <CeilSC>
              <p>10</p>
              <TaskSC>
                Подкаст “мотивационный - как не сливаться с намеченного пути”
              </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>11</p>
              <TaskSC> Развернутые ответы на вопросы в общем чате </TaskSC>
            </CeilSC>
          </RowSC>
          <RowSC>
            <CeilSC>
              <p>12</p>
              <TaskSC> Утренний комплекс на все тело </TaskSC>
              <TaskSC> Видео-лекция “фигура мечты” </TaskSC>
              <TaskSC>
                Практика “правильная визуализация результата в телостроении”
              </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>13</p>
              <TaskSC> Утренний комплекс на все тело </TaskSC>
              <TaskSC> Подкаст “как правильно ставить цели” </TaskSC>
              <TaskSC> Практика </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>14</p>
              <TaskSC> Мфр с роллом </TaskSC>
              <TaskSC>
                Подкаст “как выстраивать комфортный для СЕБЯ режим дня и
                вписывать ритуалы красоты”
              </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>15</p>
              <TaskSC> Комплекс на все тело </TaskSC>
              <TaskSC>
                Подкаст “положительные и негативные пищевые привычки”
              </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>16</p>
              <TaskSC>
                Подкаст “нужна ли постоянная рефлексия или как избавить от кучу
                мыслей в голове и наконец начинать действовать”
              </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>17</p>
              <TaskSC>Комплекс на все тело </TaskSC>
              <TaskSC> Подкаст “правила результативных тренировок” </TaskSC>
            </CeilSC>
            <CeilSC>
              <p>18</p>
              <TaskSC> Подведение итогов </TaskSC>
              <TaskSC> Ответы на вопросы </TaskSC>
            </CeilSC>
          </RowSC>
        </ContainerTableSC>
        <Typography
          variant={TypographyVariants.paragraphLBold}
          color={Colors.TEXTDARK}
        >
          БОНУС: подкаст “новое время, как развивается мир сейчас”
        </Typography>
      </ContainerSC>
    </WrapperSC>
  );
};

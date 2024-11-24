import "./Market.css";
import React from "react";

class Market extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), counter: 1, move: 1 };
    this.startDate = new Date();
    this.startDate.setMinutes(0, 0, 0);
    this.startDate.setHours(0, 0, 0);
    this.counter = 1;
    this.move = 1;
  }

  tick() {
    this.startDate.setTime(this.startDate.getTime() + 1000);
    if (this.state.counter > 15) {
      this.counter = 1;
      this.startDate.setMinutes(0, 0, 0);
      this.startDate.setHours(0, 0, 0);
      if (this.move < 4) {
        this.move++;
      } else {
        this.move = 1;
      }
    }

    this.setState({
      date: new Date(),
      counter: this.counter++,
      move: this.move,
    });
  }
 
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="wrapper">
        <header className="header">
          Тестовые торги на аппарат ЛОТОС №2033564 ({" "}
          {this.state.date.toLocaleDateString()}{" "}
          {this.state.date.toLocaleTimeString()}){" "}
        </header>
        <div className="message">
          Уважаемые участники, во время вашего хода вы можете изменить параметры
          торгов, указанных в таблице:{" "}
        </div>

        <table>
          <thead>
            <tr className="move-line">
              <th className="move-header">ХОД</th>
              <td className={this.state.move === 1 ? "your-move" : ""}>
                <div className="move-container">
                  {this.state.move === 1 && (
                    <div className="move-container">
                      <div>{this.startDate.toLocaleTimeString()}</div>
                      <img className="sand-clock" src="/sand_clock.png" alt="sand-watch"></img>
                    </div>
                  )}
                </div>
              </td>
              <td className={this.state.move === 2 ? "your-move" : ""}>
                <div className="move-container">
                  {this.state.move === 2 && (
                    <div className="move-container">
                      <div>{this.startDate.toLocaleTimeString()}</div>
                      <img className="sand-clock" src="/sand_clock.png" alt="sand-watch"></img>
                    </div>
                  )}
                </div>
              </td>
              <td className={this.state.move === 3 ? "your-move" : ""}>
                <div className="move-container">
                  {this.state.move === 3 && (
                    <div className="move-container">
                      <div>{this.startDate.toLocaleTimeString()}</div>
                      <img className="sand-clock" src="/sand_clock.png" alt="sand-watch"></img>
                    </div>
                  )}
                </div>
              </td>
              <td className={this.state.move === 4 ? "your-move" : ""}>
                <div className="move-container">
                  {this.state.move === 4 && (
                    <div className="move-container">
                      <div>{this.startDate.toLocaleTimeString()}</div>
                      <img className="sand-clock" src="/sand_clock.png" alt="sand-watch"></img>
                    </div>
                  )}
                </div>
              </td>
            </tr>
            <tr className="table-header">
              <th scope="col">ПАРАМЕТРЫ И ТРЕБОВАНИЯ</th>
              <th scope="col"><div>УЧАСТНИК №1</div><div className="avatar-block"><img className="sand-clock" src="/avatar.png" alt="avatar"></img><div>ООО "СПЕЦПОСТАВКА"</div></div></th>
              <th scope="col"><div>УЧАСТНИК №2</div><div className="avatar-block"><img className="sand-clock" src="/avatar.png" alt="avatar"></img><div>ЛОТОС ПРО</div></div></th>
              <th scope="col"><div>УЧАСТНИК №3</div><div className="avatar-block"><img className="sand-clock" src="/avatar.png" alt="avatar"></img><div>ООО "УЗТО"</div></div></th>
              <th scope="col"><div>УЧАСТНИК №4</div><div className="avatar-block"><img className="sand-clock" src="/avatar.png" alt="avatar"></img><div>ООО "ПКЗ УЗТО"</div></div></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="row-title" scope="row">
                Наличие комлексов мероприятий, повышающих стандарты
              </th>
              <td>нет</td>
              <td>нет</td>
              <td>нет</td>
              <td>да</td>
            </tr>
            <tr>
              <th className="row-title" scope="row">
                Срок изготовления лота, дней
              </th>
              <td>80</td>
              <td>24</td>
              <td>80</td>
              <td>24</td>
            </tr>
            <tr>
              <th className="row-title" scope="row">
                Гарантийные обязательства, мес
              </th>
              <td>24</td>
              <td>29</td>
              <td>24</td>
              <td>29</td>
            </tr>
            <tr>
              <th className="row-title" scope="row">
                Условия оплаты
              </th>
              <td>30%</td>
              <td>100%</td>
              <td>30%</td>
              <td>100%</td>
            </tr>
            <tr>
              <th className="row-title" scope="row">
                Стоимость изготовления лота, руб (без НДС)
              </th>
              <td className="price">
                <div className="izgot">2,640,000 руб.</div>
                <div className="delta">-25000 руб.</div>
                <div className="marja">1,980,000 руб.</div>
              </td>
              <td className="price">
                <div className="izgot">2,000,000 руб.</div>
                <div className="delta">-25000 руб.</div>
                <div className="marja">1,980,000 руб.</div>
              </td>
              <td className="price">
                <div className="izgot">2,560,000 руб.</div>
                <div className="delta">-25000 руб.</div>
                <div className="marja">1,980,000 руб.</div>
              </td>
              <td className="price">
                <div className="izgot">2,200,000 руб.</div>
                <div className="delta">-25000 руб.</div>
                <div className="marja">1,980,000 руб.</div>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th scope="row" className="row-title">
                Действия
              </th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tfoot>
        </table>

        <div className="button-block">
<div className="btn success"> <img className="sand-clock" src="/chat.png" alt="chat"></img><div>ЧАТ</div></div>
<div className="btn primary"> <img className="sand-clock" src="/refresh.png" alt="refresh"></img><div>Обновить</div></div>
<div className="btn danger"> <img className="sand-clock" src="/hammer.png" alt="hammer"></img><div>ЗАВЕРШИТЬ ТОРГИ</div></div>
<div className="btn empty"> <img className="sand-clock" src="/report.png" alt="report"></img><div>ОТЧЁТ</div></div>
<div className="btn grey"> <img className="sand-clock" src="/cancel.png" alt="cancel"></img><div>ЗАКРЫТЬ</div></div>
        </div>
      </div>
    );
  }
}

export default Market;

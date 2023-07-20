import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'Результат',
      userNumber: '',
      randomNumber: Math.floor(Math.random() * this.props.max - this.props.min) +
          this.props.min,
      count: 0,
      inputValue: '',
      restartButtonClass: 'restart',
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState(state => ({
      count: state.count + 1,
    }));

    this.setState(() => ({
      inputValue: '',
    }));

    this.setState(state => {
      if (!state.userNumber) {
        return {
          result: `Введите число`,
        };
      }

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загаданного`,
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загаданного`,
        };
      }
      this.setState((state) => ({
        restartButtonClass: 'active',
      }));

      return {
        result: `Вы угадали, загаданное число ${state.userNumber},
        попыток ${state.count}`,
      };
    });
  };

  handleChange = e => {
    this.setState((state, props) => ({
      userNumber: e.target.value,
      inputValue: e.target.value,
    }), () => {
      console.log(this.state);
    });
  };

  handleRestart = e => {
    this.setState(() => ({
      result: 'Результат',
      userNumber: '',
      randomNumber:
        Math.floor(Math.random() * this.props.max - this.props.min) +
        this.props.min,
      inputValue: '',
      count: 0,
      restartButtonClass: 'restart',
    }));
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>
        <form className={style.form} onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input
            className={style.input}
            type='number'
            id='user_number'
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
          <button className={style.btn} >Угадать</button>
          <button className={
            style[`${this.state.restartButtonClass}`] + ' ' + style.btn}
          onClick={this.handleRestart}>Сыграть еще
          </button>
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};

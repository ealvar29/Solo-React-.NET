import React, { Component } from "react";
import * as moment from 'moment'
export class Expense extends Component {
  static displayName = Expense.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {
    this.populateWeatherData();
  }

    static renderForecastsTable(forecasts) {
      console.log(forecasts)
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map((forecast) => (
            <tr key={forecast.date}>
              <td>{forecast.name}</td>
              <td>{forecast.cost}</td>
              <td>{forecast.expenseType}</td>
              <td>{moment(forecast.dueDate).format("MMM-Do-YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      Expense.renderForecastsTable(this.state.forecasts)
    );

    return (
      <div>
        <h1 id="tabelLabel" className="text-red-400">
          Weather forecast
        </h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateWeatherData() {
    const response = await fetch("expense");
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
  }
}

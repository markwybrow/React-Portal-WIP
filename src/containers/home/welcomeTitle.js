import React, { Component } from 'react'

export default class WelcomeTitle extends Component {
  render() {
      const data = {
          // TODO: this needs to come from a login service
          username: 'Cluey'
      };

    return (
      <div>
            <section className="text-left mb-4">
                <div className="row container">
                    <div className="col-lg-12">
                        <div className="page-header">
                            <h1>Hi {data.username}!</h1>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    )
  }
}

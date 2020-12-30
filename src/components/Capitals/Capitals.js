import React from 'react';

import './Capitals.css'
import Capital from './../Capital/Capital'

const Capitals = () => {
  return (
      <div className="capitals--container">
        <div className="capitals--inner">
            <div className="capitals">
                <h2>Capitais</h2>
                <table className="desktop--table">
                    <tr>
                        <th className="capital--min">Min</th>
                        <th className="capital--max">Max</th>
                        <th className="capital--name"></th>
                        
                        <th className="capital--min">Min</th>
                        <th className="capital--max">Max</th>
                        <th className="capital--name"></th>
                    </tr>
                    <tr>
                        <Capital name="Rio de Janeiro" />
                        <Capital name="Salvador" />
                    </tr>
                    <tr>
                        <Capital name="São Paulo" />
                        <Capital name="Curitiba" />
                    </tr>
                    <tr>
                        <Capital name="Belo Horizonte" />
                        <Capital name="Fortaleza" />
                    </tr>
                    <tr>
                        <Capital name="Brasília" />
                        <Capital name="Manaus" />
                    </tr>
                    <tr>
                        <Capital name="Belém" />
                        <Capital name="João Pessoa" />
                    </tr>
                </table>
            </div>
        </div>
      </div>
  )  
}

export default Capitals;
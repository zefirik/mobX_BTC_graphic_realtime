import React from 'react';
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import RenderLines from './components/GraphicBTC'

import Store from './storeBTC/storeBtc';
import SettingStore from './storeBTC/settings'



 const App = () => {
     
    return (
      <>
        <h1>Introduction to MobX State Management</h1>
        {Store.coins.map(coin =>(
          <div key={coin.ticker} style={{ display: 'flex', alignItems: 'center' }}>
          <h3>
              {coin.name} Price: ${coin.price.toFixed(3)} (
              {moment(coin.dateUpdated).format(SettingStore.timeFormat)})
          </h3>
          
              {coin.lastMove !== 'none' && (
                <div style={{
                      margin: 15,
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: coin.lastMove === 'up' ? '#43a202' : '#f44236',
                    }}
                  />
              )}
              <div style={{height:'500px', width:'700px'}}>
              <RenderLines coin = {coin} />
            </div>
          </div>
        ))}
         <button onClick={SettingStore.toggleFormat}>Toggle Time Format</button>
      
      </>
    );
  };

  export default observer(App) ;
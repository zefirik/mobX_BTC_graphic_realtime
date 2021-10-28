import { makeAutoObservable } from 'mobx'
import CoinStore from './Coin'; 

class Store {
  coins = [
    new CoinStore('Bitcoin', 'XBTUSDT'),
    new CoinStore('Ethereum', 'ETHUSDT'),
    new CoinStore('Cardano', 'ADAUSDT'),
  ]


  constructor() {
    makeAutoObservable(this)
    
  }


}

export default new Store()


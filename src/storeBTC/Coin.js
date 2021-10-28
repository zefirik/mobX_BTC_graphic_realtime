import { makeAutoObservable, configure} from "mobx"
import { fetchPrice } from '../utils'

configure({
    enforceActions: "never",
})

class CoinStore{
    name
    ticker 

    history = []
    graphic = []

    price = 0
    dateUpdated


    get lastMove() {
        if (!this.history.length) return 'none'
        const lastPrice = this.history[0].price
        if (!lastPrice || lastPrice === this.price) return 'none'
        if (lastPrice < this.price) return 'up'
        return 'down'
        
      }

    constructor(name, ticker){
        makeAutoObservable(this)
        this.name = name
        this.ticker = ticker
        this.startInterval()
    }
        
        
     startInterval = () => {
        setInterval(async () => {
            const price = await fetchPrice(this.ticker);
             if (this.price !== 0) this.history.unshift({ price: this.price, dateUpdated: this.dateUpdated })
            
            this.setPrice(price);
            this.graphic.push({ price: this.price, dateUpdated: this.dateUpdated });
           
          }, 10000)
    }

    setPrice(price){
        this.price = price
        this.dateUpdated = new Date()
      }


}

export default CoinStore
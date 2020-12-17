import React from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



class ProductTable extends React.Component {
    state = {
        goods: [
            {id: 1, name: 'Iphone 12 Pro Max', quantity: 30, cost: 1000},
            {id: 2, name: 'Iphone 12 mini', quantity: 12, cost: 600},
            {id: 3, name: 'Iphone 12 126Gb', quantity: 10, cost: 800},
            {id: 4, name: 'PlayStation 5', quantity: '0', cost: 800},
            {id: 5, name: 'RTX 3090', quantity: 20, cost: 900},
            {id: 6, name: 'XBOX Serias X', quantity: 30, cost: 500},
        ],
        newGoodsName: '',
        newGoodsCost: '',
        newGoodsQuantity: ''
    }

    render() {

        const { goods } = this.state;

        return (
            <section>

                <div className={"goods_list"}>
                        {goods.map(goods =>
                            <div className={"good"} key={goods.id}>
                                <p className={"good_name"}>{goods.name}</p>
                                <p className={"good_price"} style={{ textDecoration: goods.quantity == 0 && 'line-through'}}>ЦЕНА: {goods.cost}$</p>
                                <p className={"goods_quantity"} style={{ color: goods.quantity == 0 && 'red'}}>Осталось: {goods.quantity}</p>

                                <Button variant={"contained"} disabled={goods.quantity == 0 && true}>Edit</Button>
                            </div>)}
                </div>

                <div className="form-container">
                    <form className={"form"}>
                        <input name="name" type="text"/>
                    </form>
                </div>
            </section>
        );
    }
}

export default ProductTable;